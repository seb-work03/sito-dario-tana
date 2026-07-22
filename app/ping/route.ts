import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const info: Record<string, string> = {
    NODE_ENV: process.env.NODE_ENV ?? "unknown",
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET
      ? `set — ${process.env.PAYLOAD_SECRET.length} chars`
      : "MISSING",
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL ?? "not set",
    DATABASE_URL: "not set",
    db: "not tested",
  };

  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    return NextResponse.json({ ...info, DATABASE_URL: "MISSING" }, { status: 500 });
  }

  // Show partial URL for debugging (hide password)
  try {
    const u = new URL(dbUrl.replace(/^postgres(ql)?:\/\//, "https://"));
    info.DATABASE_URL = `set — host: ${u.hostname}, db: ${u.pathname}`;
  } catch {
    info.DATABASE_URL = `set — ${dbUrl.length} chars (URL parse failed)`;
  }

  // Test DB connection using built-in tcp connect (no pg import needed)
  // Just try a raw TCP connection to confirm host:port reachability
  try {
    const { createConnection } = await import("net");
    const u = new URL(dbUrl.replace(/^postgres(ql)?:\/\//, "https://"));
    const host = u.hostname;
    const port = parseInt(u.port || "5432");

    await new Promise<void>((resolve, reject) => {
      const socket = createConnection({ host, port, timeout: 5000 });
      socket.once("connect", () => { socket.destroy(); resolve(); });
      socket.once("error", reject);
      socket.once("timeout", () => { socket.destroy(); reject(new Error("TCP connect timeout")); });
    });
    info.db = `TCP OK — ${host}:${port} reachable`;
  } catch (err) {
    info.db = `TCP FAIL — ${err instanceof Error ? err.message : String(err)}`;
  }

  const ok = info.db.startsWith("TCP OK");
  return NextResponse.json(info, { status: ok ? 200 : 500 });
}
