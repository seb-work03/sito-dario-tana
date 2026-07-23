/**
 * Runs during `next build` to push the Payload schema to Neon before
 * the serverless functions are deployed. This avoids the 10-second
 * Vercel Hobby runtime timeout on first cold start (schema creation).
 */
import { getPayload } from "payload";
import config from "../payload.config";

async function main() {
  console.log("[db-init] Connecting to database and pushing schema…");
  try {
    const payload = await getPayload({ config });
    console.log("[db-init] Schema push complete.");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload.db as any).destroy?.();
  } catch (err) {
    console.error("[db-init] Schema push failed (non-fatal):", err);
    // Do not exit(1) — let the Next.js build proceed even if DB is unreachable.
    // The runtime will attempt schema push on first request.
  }
  process.exit(0);
}

main();
