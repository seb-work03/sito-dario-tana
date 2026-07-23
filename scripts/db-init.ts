/**
 * Runs during `next build` to push the Payload schema to Neon before
 * the serverless functions are deployed. This avoids the runtime timeout
 * on first cold start (schema creation takes 15-30s).
 *
 * Runtime push is disabled in production (see payload.config.ts) so the
 * schema is fully synced HERE, once per build.
 */
process.env.PAYLOAD_DB_PUSH = "true";

import("../payload.config").then(async ({ default: config }) => {
  const { getPayload } = await import("payload");
  console.log("[db-init] Connecting to Neon and pushing schema…");
  try {
    // Force push=true for this build-time run
    if (typeof config === "object" && config !== null && "db" in config) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cfg = config as any;
      if (cfg.db?.push !== undefined) cfg.db.push = true;
    }
    const payload = await getPayload({ config });
    console.log("[db-init] Schema push complete.");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload.db as any).destroy?.();
  } catch (err) {
    console.error("[db-init] Schema push failed:", err);
    // Non-fatal: let the build continue. The runtime will show a real error.
  }
  process.exit(0);
});
