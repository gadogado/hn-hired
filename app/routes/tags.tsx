import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getTags } from "~/models/tag.server";
import type { Tag } from "~/models/tag.server";

type LoaderData = {
  tags: Partial<Tag>[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const tags = await getTags();
  return json<LoaderData>({ tags });
};
