"use client";

import { useEffect } from "react";

export default function AdminError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[admin error]", error);
  }, [error]);

  return (
    <div style={{ padding: 32, fontFamily: "monospace", color: "#e5e7eb", background: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Payload admin — errore runtime</h1>
      <div style={{ marginBottom: 16 }}>
        <strong>Message:</strong>
        <pre style={{ whiteSpace: "pre-wrap", background: "#1e293b", padding: 12, borderRadius: 8, marginTop: 4 }}>{error.message}</pre>
      </div>
      {error.stack && (
        <div style={{ marginBottom: 16 }}>
          <strong>Stack:</strong>
          <pre style={{ whiteSpace: "pre-wrap", background: "#1e293b", padding: 12, borderRadius: 8, marginTop: 4, fontSize: 12 }}>{error.stack}</pre>
        </div>
      )}
      {error.digest && (
        <div style={{ marginBottom: 16 }}>
          <strong>Digest:</strong> {error.digest}
        </div>
      )}
      <button
        onClick={() => reset()}
        style={{ padding: "8px 16px", background: "#77C0CF", color: "#0f172a", border: 0, borderRadius: 6, cursor: "pointer" }}
      >
        Riprova
      </button>
    </div>
  );
}
