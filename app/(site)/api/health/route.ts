import { NextResponse } from "next/server";
import { Pool } from "pg";

export const dynamic = "force-dynamic";

export async function GET() {
  const info: Record<string, string> = {
    NODE_ENV: process.env.NODE_ENV ?? "unknown",
    DATABASE_URL: process.env.DATABASE_URL
      ? `set (${process.env.DATABASE_URL.length} chars, host: ${new URL(process.env.DATABASE_URL.replace(/^postgresql/, "https")).hostname})`
      : "MISSING",
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET
      ? `set (${process.env.PAYLOAD_SECRET.length} chars)`
      : "MISSING",
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL ?? "not set",
    db: "pending",
  };

  if (process.env.DATABASE_URL) {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 8000,
    });
    try {
      const client = await pool.connect();
      const result = await client.query<{ version: string }>("SELECT version()");
      client.release();
      await pool.end();
      info.db = `OK — ${result.rows[0].version.slice(0, 60)}`;
    } catch (err) {
      info.db = `ERROR: ${err instanceof Error ? err.message : String(err)}`;
    }
  } else {
    info.db = "SKIPPED — DATABASE_URL not set";
  }

  const ok = info.db.startsWith("OK");
  return NextResponse.json(info, { status: ok ? 200 : 500 });
}
