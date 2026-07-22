import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function urlHost(raw: string | undefined): string {
  if (!raw) return "not set";
  try {
    const u = new URL(raw.replace(/^postgres(ql)?:\/\//, "https://"));
    return `host: ${u.hostname}`;
  } catch {
    return `${raw.length} chars (parse failed)`;
  }
}

export async function GET() {
  // Show which connection string Payload will actually use
  const payloadConn =
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.STORAGE_POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL;

  const info: Record<string, string> = {
    NODE_ENV: process.env.NODE_ENV ?? "unknown",
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET
      ? `set — ${process.env.PAYLOAD_SECRET.length} chars`
      : "MISSING",
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL ?? "not set",

    // Which env var Payload will pick
    payload_conn_used: payloadConn
      ? urlHost(payloadConn)
      : "NONE FOUND",

    // All candidates — shows which exist
    DATABASE_URL: urlHost(process.env.DATABASE_URL),
    DATABASE_URL_UNPOOLED: process.env.DATABASE_URL_UNPOOLED ? urlHost(process.env.DATABASE_URL_UNPOOLED) : "not set",
    STORAGE_POSTGRES_URL: process.env.STORAGE_POSTGRES_URL ? urlHost(process.env.STORAGE_POSTGRES_URL) : "not set",
    STORAGE_POSTGRES_URL_NON_POOLING: process.env.STORAGE_POSTGRES_URL_NON_POOLING ? urlHost(process.env.STORAGE_POSTGRES_URL_NON_POOLING) : "not set",
    STORAGE_DATABASE_URL: process.env.STORAGE_DATABASE_URL ? urlHost(process.env.STORAGE_DATABASE_URL) : "not set",
    STORAGE_DATABASE_URL_UNPOOLED: process.env.STORAGE_DATABASE_URL_UNPOOLED ? urlHost(process.env.STORAGE_DATABASE_URL_UNPOOLED) : "not set",
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING ? urlHost(process.env.POSTGRES_URL_NON_POOLING) : "not set",
    STORAGE_PGHOST: process.env.STORAGE_PGHOST ?? "not set",
    STORAGE_PGHOST_UNPOOLED: process.env.STORAGE_PGHOST_UNPOOLED ?? "not set",

    db: "not tested",
  };

  if (payloadConn) {
    try {
      const { createConnection } = await import("net");
      const u = new URL(payloadConn.replace(/^postgres(ql)?:\/\//, "https://"));
      const host = u.hostname;
      const port = parseInt(u.port || "5432");
      await new Promise<void>((resolve, reject) => {
        const socket = createConnection({ host, port, timeout: 5000 });
        socket.once("connect", () => { socket.destroy(); resolve(); });
        socket.once("error", reject);
        socket.once("timeout", () => { socket.destroy(); reject(new Error("TCP connect timeout")); });
      });
      info.db = `TCP OK — ${host}:${port}`;
    } catch (err) {
      info.db = `TCP FAIL — ${err instanceof Error ? err.message : String(err)}`;
    }
  }

  return NextResponse.json(info, { status: 200 });
}
