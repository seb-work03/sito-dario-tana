import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * One-shot endpoint that forces Payload to push the schema to Neon.
 * Payload's default pushDevSchema uses prompts() which blocks in serverless.
 * We bypass by calling drizzle-kit's pushSchema directly.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const expected = process.env.INIT_DB_TOKEN || "let-me-in";

  if (token !== expected) {
    return NextResponse.json(
      { error: "unauthorized — pass ?token=<INIT_DB_TOKEN>" },
      { status: 401 },
    );
  }

  const started = Date.now();
  const log: string[] = [];
  try {
    // Force Payload to skip its equality check and always try to push
    process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = "true";

    log.push("Initializing Payload…");
    const payload = await getPayload({ config });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const adapter = payload.db as any;
    log.push(`Adapter loaded. Schema tables: ${Object.keys(adapter.schema || {}).length}`);

    // Call drizzle-kit pushSchema directly, skipping the interactive prompts wrapper
    log.push("Requiring drizzle-kit…");
    const { pushSchema } = adapter.requireDrizzleKit();

    log.push("Pushing schema to Neon…");
    const { apply, hasDataLoss, warnings } = await pushSchema(
      adapter.schema,
      adapter.drizzle,
      adapter.schemaName ? [adapter.schemaName] : undefined,
      adapter.tablesFilter,
      adapter.extensions?.postgis ? ["postgis"] : undefined,
    );
    log.push(`hasDataLoss=${hasDataLoss}, warnings=${warnings.length}`);

    log.push("Applying schema changes…");
    await apply();
    log.push("Apply complete.");

    // Verify by counting users
    let userCount = "unknown";
    try {
      const result = await adapter.drizzle.execute("SELECT COUNT(*) as count FROM users");
      userCount = JSON.stringify(result.rows ?? result);
    } catch (err) {
      userCount = `count failed: ${err instanceof Error ? err.message : String(err)}`;
    }

    return NextResponse.json({
      ok: true,
      elapsedMs: Date.now() - started,
      log,
      userCount,
      message: "Schema pushed. Try /admin/create-first-user now.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        elapsedMs: Date.now() - started,
        log,
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack?.slice(0, 3000) : undefined,
      },
      { status: 500 },
    );
  }
}
