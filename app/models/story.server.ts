import { prisma } from "~/db.server";
export type { Story } from "@prisma/client";

export async function getLatestStories() {
  return prisma.story.findMany({
    take: 12,
    orderBy: [{ firebaseCreatedAt: "desc" }],
    // include: { items: true },
  });
}
