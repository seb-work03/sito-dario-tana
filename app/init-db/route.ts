import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * One-shot endpoint that forces Payload to push the schema to Neon.
 * Call this ONCE after deploy to create the tables, then Payload admin works.
 *
 * Protected by INIT_DB_TOKEN env var — pass ?token=... to invoke.
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
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cfg = config as any;
    if (cfg.db) cfg.db.push = true;

    const payload = await getPayload({ config });

    // Verify by running a raw count on users table
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const drizzle = (payload.db as any).drizzle;
    let userCount = "unknown";
    try {
      const result = await drizzle.execute("SELECT COUNT(*) as count FROM users");
      userCount = JSON.stringify(result.rows ?? result);
    } catch (err) {
      userCount = `count failed: ${err instanceof Error ? err.message : String(err)}`;
    }

    return NextResponse.json({
      ok: true,
      elapsedMs: Date.now() - started,
      userCount,
      message: "Payload initialized. Try /admin/create-first-user now.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        elapsedMs: Date.now() - started,
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack?.slice(0, 2000) : undefined,
      },
      { status: 500 },
    );
  }
}
