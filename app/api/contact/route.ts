import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, role, type, message, organization, eventDate, eventLocation, participants, budget, consent, source } = body;

    if (!name || !email || !type || !message || !consent) {
      return NextResponse.json({ error: "Campi obbligatori mancanti." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email non valida." }, { status: 400 });
    }

    // Save to Payload CMS via internal API
    const payloadRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        role,
        type,
        message,
        organization,
        eventDate,
        eventLocation,
        participants,
        budget,
        consent,
        source: source || req.headers.get("referer") || "direct",
        status: "new",
      }),
    });

    // Send notification email via Brevo
    if (process.env.BREVO_API_KEY) {
      const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "DarioTana.it", email: "noreply@dariotana.it" },
          to: [{ email: process.env.BREVO_NOTIFICATION_EMAIL || "info@dariotana.it" }],
          subject: `[DarioTana.it] Nuova richiesta: ${type} da ${name}`,
          htmlContent: `
            <h2>Nuova richiesta di contatto</h2>
            <table>
              <tr><td><strong>Nome:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Telefono:</strong></td><td>${phone || "—"}</td></tr>
              <tr><td><strong>Azienda:</strong></td><td>${company || "—"}</td></tr>
              <tr><td><strong>Ruolo:</strong></td><td>${role || "—"}</td></tr>
              <tr><td><strong>Tipo richiesta:</strong></td><td>${type}</td></tr>
              ${organization ? `<tr><td><strong>Organizzazione:</strong></td><td>${organization}</td></tr>` : ""}
              ${eventDate ? `<tr><td><strong>Data evento:</strong></td><td>${eventDate}</td></tr>` : ""}
              ${eventLocation ? `<tr><td><strong>Luogo:</strong></td><td>${eventLocation}</td></tr>` : ""}
              ${participants ? `<tr><td><strong>Partecipanti:</strong></td><td>${participants}</td></tr>` : ""}
              ${budget ? `<tr><td><strong>Budget:</strong></td><td>${budget}</td></tr>` : ""}
              <tr><td><strong>Messaggio:</strong></td><td>${message}</td></tr>
              <tr><td><strong>Provenienza:</strong></td><td>${source || "—"}</td></tr>
            </table>
          `,
        }),
      });

      if (!brevoRes.ok) {
        console.error("Brevo email error:", await brevoRes.text());
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Errore del server. Riprova più tardi." }, { status: 500 });
  }
}
