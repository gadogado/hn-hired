import cron from "node-cron";
import * as Sentry from "@sentry/node";
// @ts-ignore
import runner from "./get-latest-story.server.mjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN!,
  tracesSampleRate: 1.0,
});

/* Runs every 5 minutes */

cron.schedule("*/5 * * * *", runner);
