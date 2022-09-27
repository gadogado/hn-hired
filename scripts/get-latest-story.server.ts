import pkg from "@prisma/client";
import { installGlobals } from "@remix-run/node";
import pLimit from "p-limit";
const { PrismaClient, Prisma } = pkg;

const prisma = new PrismaClient();

interface ItemJson {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: string;
  deleted?: boolean;
  dead?: boolean;
}

interface StoryItemJson {
  by: string;
  id: number;
  kids: number[];
  title: string;
  time: number;
  company?: string;
}

interface ItemTextMatches {
  remote: boolean;
  contract: boolean;
  parttime: boolean;
  company?: string;
  slugs: string[];
}

async function getLatestStoryAndItems() {
  installGlobals();

  const flyRegion = process.env.FLY_REGION;
  if (flyRegion && flyRegion !== "lax") return;

  const tags = await prisma.tag.findMany({ select: { slug: true } });
  if (!tags.length) throw new Error("Missing Tags.");

  const firebaseUrl = "https://hacker-news.firebaseio.com/v0";
  const firebaseItem = (itemId: number) => `${firebaseUrl}/item/${itemId}.json`;
  const firebaseStories = await fetch(
    `${firebaseUrl}/user/whoishiring/submitted.json`
  );
  const stories = (await firebaseStories.json()) as Array<number>;

  const fetchItemJson = async <T>(itemId: number): Promise<T> => {
    const url = firebaseItem(itemId);
    const resp = await fetch(url);
    const json = (await resp.json()) as T;
    return json;
  };

  const storyId = stories[0];
  const latest = await fetchItemJson<StoryItemJson>(storyId);

  if (!latest?.title?.match(/Ask HN: Who is hiring/)) {
    throw new Error("Story is not 'who is hiring'");
  }

  /* findOrCreate Story */
  const itemIds = latest.kids;
  const { id: firebaseId, title } = latest;
  const upsert = {
    firebaseCreatedAt: new Date(latest.time * 1000),
    firebaseId,
    title,
  };
  const story = await prisma.story.upsert({
    where: { firebaseId },
    create: { ...upsert },
    update: {},
  });

  /*
    - Promise.all concurrency can cause race conditions with db constraints
    https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#remarks-17
  */
  const fetchItems = async () => {
    const concurrencyLimit: number = Number(process.env.CONCURRENCY_LIMIT) || 3;
    const limit = pLimit(concurrencyLimit);

    Promise.all(
      itemIds.map(async (itemId: number) => {
        limit(async () => {
          const item = await fetchItemJson<ItemJson>(itemId);

          if (
            !item ||
            Boolean(item.deleted) ||
            Boolean(item.dead) ||
            item.parent !== latest.id
          ) {
            console.log("-- skipping --", item);
            return;
          }

          const { by, time, text, id: firebaseId } = item;
          const { remote, contract, parttime, slugs, company } =
            scanItemText(text);
          const data = {
            by,
            text,
            remote,
            contract,
            parttime,
            firebaseId,
            company,
            json: item as object,
            storyId: story.id,
            firebaseCreatedAt: new Date(time * 1000),
            tags: {
              connect: slugs.map((slug) => ({ slug })),
            },
          };
          const record = await prisma.item.findUnique({
            where: { firebaseId },
            include: { tags: true },
          });

          const create = async () => prisma.item.create({ data });
          if (!record) {
            try {
              await create();
            } catch (error) {
              if (error instanceof Prisma.PrismaClientKnownRequestError)
                await create(); // retry
            }
          }
        });
      })
    );
  };

  /* Normalization  */

  const matchSlugs = (text: string) => {
    const slugs = tags.map((tag) => tag.slug);
    return slugs.reduce((accum: string[], slug) => {
      const escaped = slug.replace(/(\.|\+)/g, `\\$&`);
      const re = new RegExp(escaped, "gi");

      if (text.match(re)) accum.push(slug);
      return accum;
    }, []);
  };

  const scanItemText = (text: string): ItemTextMatches => {
    const matcher = (m: string): boolean =>
      Boolean(text.match(new RegExp(m, "gi")));

    const remote = matcher("remote");
    const contract = matcher("contract");
    const parttime = matcher("part-?time");
    const slugs = matchSlugs(text);

    const title = text.split("<p>")?.[0]?.split("|");
    const removeMarkup = (elem: string) => {
      return elem.replace(/<a.*?<\/a>|\(|\)/g, "");
    };

    const company = title.length > 1 ? removeMarkup(title[0]) : undefined;

    return { remote, contract, parttime, slugs, company };
  };
  fetchItems();
}

const runner = () => {
  console.log("Fetching latest story and items");

  getLatestStoryAndItems()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      console.log("disconnecting");
      await prisma.$disconnect();
    });
};
if (process.argv.includes("manual")) runner();

export default runner;
