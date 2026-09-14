import { NextRequest, NextResponse } from "next/server";
import { sanitizeText, getClientIp, createRateLimiter } from "@/lib/http-utils";
import { sendGuideEmail } from "@/lib/guide-email";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isRateLimited = createRateLimiter(10 * 60 * 1000, 5);

type GuideDownloadPayload = {
  email?: string;
  website?: string; // honeypot
};

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Troppe richieste. Riprova tra qualche minuto." },
      { status: 429 }
    );
  }

  let body: GuideDownloadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  // Honeypot: risposta "silenziosa" positiva, nessun invio reale.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = sanitizeText(body.email, 254);
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Inserisci un indirizzo email valido.", fieldErrors: { email: "Inserisci un indirizzo email valido." } },
      { status: 400 }
    );
  }

  const sent = await sendGuideEmail({ email, createContact: true });
  if (!sent) {
    return NextResponse.json(
      { error: "Non è stato possibile inviare la guida. Riprova tra qualche minuto." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
