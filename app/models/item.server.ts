import { prisma } from "~/db.server";
import { Prisma } from "@prisma/client";
import type { Tag } from "~/models/tag.server";
import type { Item } from "@prisma/client";
import { sanitize } from "~/utils/helpers";

type ItemWithTags = Item & {
  tags: Tag[];
};
type SortOrder = "asc" | "desc";

export type { ItemWithTags, Item, SortOrder };

interface QueryOptions {
  storyId: number;
  search?: string;
  filters?: string;
  remote?: boolean;
  sort?: SortOrder;
  cursorId?: string;
}

export async function getItems(options: QueryOptions) {
  const { storyId, search, filters, remote, sort = "desc", cursorId } = options;
  const firebaseCreatedAt =
    sort === "desc" ? Prisma.SortOrder.desc : Prisma.SortOrder.asc;

  const slugs = filters?.split(",");
  const where = {
    storyId,
    ...(remote && { remote }),
    ...(search && {
      text: { contains: sanitize(search), mode: "insensitive" },
    }),
    ...(filters?.length && {
      AND: slugs?.map((slug) => ({
        tags: {
          some: {
            slug: {
              equals: slug,
            },
          },
        },
      })),
    }),
  };

  return prisma.$transaction([
    // @ts-ignore
    prisma.item.count({ where }),
    prisma.item.findMany({
      take: 12,
      // @ts-ignore
      where,
      orderBy: [{ firebaseCreatedAt }],
      ...(cursorId && { cursor: { id: Number(cursorId) } }),
      include: {
        tags: true,
      },
    }),
  ]);
}
