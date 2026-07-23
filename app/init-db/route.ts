import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * One-shot admin endpoint: wipes the public schema, then pushes Payload's
 * schema from scratch. Guarantees a consistent DB state.
 *
 * GET /init-db?token=let-me-in         → push only (fails if partial state)
 * GET /init-db?token=let-me-in&wipe=1  → DROP SCHEMA public CASCADE, recreate, push
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeError(err: any): Record<string, unknown> {
  const out: Record<string, unknown> = {
    message: err?.message ?? String(err),
    name: err?.name,
    code: err?.code,
    detail: err?.detail,
    hint: err?.hint,
    stack: typeof err?.stack === "string" ? err.stack.slice(0, 3000) : undefined,
  };
  if (err?.cause) out.cause = serializeError(err.cause);
  return out;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const expected = process.env.INIT_DB_TOKEN || "let-me-in";
  const wipe = url.searchParams.get("wipe") === "1";

  if (token !== expected) {
    return NextResponse.json(
      { error: "unauthorized — pass ?token=<INIT_DB_TOKEN>" },
      { status: 401 },
    );
  }

  const started = Date.now();
  const log: string[] = [];
  try {
    process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = "true";

    log.push("Initializing Payload…");
    const payload = await getPayload({ config });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const adapter = payload.db as any;
    log.push(`Adapter loaded. Schema tables: ${Object.keys(adapter.schema || {}).length}`);

    if (wipe) {
      log.push("WIPE: dropping public schema…");
      await adapter.drizzle.execute("DROP SCHEMA IF EXISTS public CASCADE");
      await adapter.drizzle.execute("CREATE SCHEMA public");
      await adapter.drizzle.execute("GRANT ALL ON SCHEMA public TO public");
      log.push("WIPE complete.");
    }

    log.push("Requiring drizzle-kit…");
    const { pushSchema } = adapter.requireDrizzleKit();

    log.push("Computing schema diff…");
    const { apply, hasDataLoss, warnings } = await pushSchema(
      adapter.schema,
      adapter.drizzle,
      adapter.schemaName ? [adapter.schemaName] : undefined,
      adapter.tablesFilter,
      adapter.extensions?.postgis ? ["postgis"] : undefined,
    );
    log.push(`hasDataLoss=${hasDataLoss}, warnings=${warnings.length}`);
    if (warnings.length) log.push(`WARNINGS: ${warnings.join(" | ")}`);

    log.push("Applying…");
    await apply();
    log.push("Apply complete.");

    let userCount = "unknown";
    try {
      const r = await adapter.drizzle.execute("SELECT COUNT(*) as count FROM users");
      userCount = JSON.stringify(r.rows ?? r);
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
        error: serializeError(err),
      },
      { status: 500 },
    );
  }
}
