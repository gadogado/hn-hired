import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getItems } from "~/models/item.server";
import type { ItemWithTags, SortOrder } from "~/models/item.server";

type LoaderData = {
  storyItems: Partial<ItemWithTags>[];
  storyItemsCount: number;
};

/* 
  TODO: consolidate with ?index loader
*/
export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const filters = url.searchParams.get("filters");
  const remoteOnly = url.searchParams.get("remoteOnly");
  const sort = url.searchParams.get("sort") as SortOrder;
  const cursorId = url.searchParams.get("cursorId");

  const [storyItemsCount, storyItems] = await getItems({
    storyId: Number(params.storyId),
    ...(search && { search }),
    ...(filters && { filters }),
    ...(sort && { sort }),
    ...(remoteOnly && { remote: remoteOnly === "true" }),
    ...(cursorId && { cursorId }),
  });

  return json<LoaderData>({ storyItems, storyItemsCount });
};
