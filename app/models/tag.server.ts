import { FILTERS_TAKE } from "~/utils/constants";
import { prisma } from "~/db.server";
export type { Tag } from "@prisma/client";

export async function getTags() {
  return prisma.tag.findMany({
    take: FILTERS_TAKE,
    orderBy: {
      items: {
        _count: "desc",
      },
    },
  });
}
