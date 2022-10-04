import { PrismaClient } from "@prisma/client";
const { DATABASE_URL = "", FLY_REGION, PRIMARY_REGION } = process.env;

let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient;
}

const leaderOrReplicaUrl = () => {
  let url = new URL(DATABASE_URL);
  if (FLY_REGION !== PRIMARY_REGION) url.port = "5433";
  return url.toString();
};

const datasources = { db: { url: leaderOrReplicaUrl() } };

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ datasources });
} else {
  // this is needed because in development we don't want to restart
  // the server with every change, but we want to make sure we don't
  // create a new connection to the DB with every change either.
  // in production we'll have a single connection to the DB.
  if (!global.__db__) {
    global.__db__ = new PrismaClient({
      log: ["warn", "error"],
    });
  }
  prisma = global.__db__;
  prisma.$connect();
}

export { prisma };
