import { NextRequest, NextResponse } from "next/server";
import { sanitizeText, escapeHtml, getClientIp, createRateLimiter } from "@/lib/http-utils";
import { sendGuideEmail } from "@/lib/guide-email";

export const runtime = "nodejs";

const PROPERTY_TYPES = ["Monolocale", "Bilocale", "Trilocale", "Quadrilocale", "Altro"];

const PROPERTY_STATUSES = [
  "Immobile libero",
  "Attualmente affittato",
  "Già presente su Airbnb o altri portali",
  "Utilizzato personalmente",
  "In fase di acquisto",
  "Altro",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\s()-]{6,20}$/;

const MAX_LENGTHS = {
  fullName: 120,
  phone: 30,
  email: 254,
  propertyArea: 200,
  additionalInformation: 1000,
  mainGoal: 120,
  pageUrl: 500,
} as const;

const isRateLimited = createRateLimiter(10 * 60 * 1000, 5);

type LeadPayload = {
  fullName: string;
  phone: string;
  email: string;
  propertyArea: string;
  propertyType: string;
  propertySize: string;
  propertyStatus: string;
  mainGoal: string;
  additionalInformation: string;
  privacyAccepted: boolean;
  website?: string;
  source?: string;
  pageUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  submittedAt?: string;
};

function validate(body: LeadPayload) {
  const errors: Record<string, string> = {};

  const fullName = sanitizeText(body.fullName, MAX_LENGTHS.fullName);
  const phone = sanitizeText(body.phone, MAX_LENGTHS.phone);
  const email = sanitizeText(body.email, MAX_LENGTHS.email);
  const propertyArea = sanitizeText(body.propertyArea, MAX_LENGTHS.propertyArea);
  const propertyType = sanitizeText(body.propertyType, 40);
  const propertyStatus = sanitizeText(body.propertyStatus, 60);
  const mainGoal = sanitizeText(body.mainGoal, MAX_LENGTHS.mainGoal);
  const additionalInformation = sanitizeText(
    body.additionalInformation,
    MAX_LENGTHS.additionalInformation
  );

  if (!fullName) {
    errors.fullName = "Inserisci il tuo nome e cognome.";
  }
  if (!PHONE_RE.test(phone) || phone.replace(/\D/g, "").length < 6) {
    errors.phone = "Inserisci un numero di telefono valido.";
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = "Inserisci un indirizzo email valido.";
  }
  if (!propertyArea) {
    errors.propertyArea = "Indica la zona o l'indirizzo dell'immobile.";
  }
  if (!PROPERTY_TYPES.includes(propertyType)) {
    errors.propertyType = "Seleziona la tipologia dell'immobile.";
  }
  const propertySize = Number(body.propertySize);
  if (!Number.isFinite(propertySize) || propertySize < 8 || propertySize > 2000) {
    errors.propertySize = "Inserisci una metratura plausibile (tra 8 e 2000 mq).";
  }
  if (!PROPERTY_STATUSES.includes(propertyStatus)) {
    errors.propertyStatus = "Seleziona la situazione attuale dell'immobile.";
  }
  if (body.privacyAccepted !== true) {
    errors.privacyAccepted =
      "Per inviare la richiesta devi leggere e accettare l'informativa privacy.";
  }

  return {
    errors,
    clean: {
      fullName,
      phone,
      email,
      propertyArea,
      propertyType,
      propertySize,
      propertyStatus,
      mainGoal,
      additionalInformation,
    },
  };
}

async function sendLeadEmail(clean: ReturnType<typeof validate>["clean"], utm: {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}, pageUrl: string) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error(
      "BREVO_API_KEY non configurata: impossibile inviare la notifica email del lead."
    );
    return false;
  }

  const notifyTo = process.env.LEAD_NOTIFICATION_EMAIL || "info@acdomusaffitti.it";
  const fromEmail = process.env.LEAD_FROM_EMAIL || "andrea.costabile83@gmail.com";
  const fromName = process.env.LEAD_FROM_NAME || "AC Domus Affitti";

  const utmSummary =
    [
      utm.utmSource && `source=${utm.utmSource}`,
      utm.utmMedium && `medium=${utm.utmMedium}`,
      utm.utmCampaign && `campaign=${utm.utmCampaign}`,
      utm.utmContent && `content=${utm.utmContent}`,
      utm.utmTerm && `term=${utm.utmTerm}`,
    ]
      .filter(Boolean)
      .join(", ") || "—";

  const rows: [string, string][] = [
    ["Nome", clean.fullName],
    ["Telefono", clean.phone],
    ["Email", clean.email],
    ["Zona o indirizzo", clean.propertyArea],
    ["Tipologia", clean.propertyType],
    ["Metratura", `${clean.propertySize} mq`],
    ["Situazione attuale", clean.propertyStatus],
    ["Obiettivo", clean.mainGoal || "—"],
    ["Informazioni aggiuntive", clean.additionalInformation || "—"],
    ["Fonte", "landing-valutazione-gratuita"],
    ["UTM", utmSummary],
    ["Pagina", pageUrl || "—"],
    ["Data e ora", new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })],
  ];

  const htmlContent = `
    <h2>Nuovo lead dalla landing AC Domus Affitti</h2>
    <table cellpadding="4" cellspacing="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}:</strong></td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
  `;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email: notifyTo }],
      replyTo: { email: clean.email, name: clean.fullName },
      subject: `Nuova richiesta analisi immobile – ${clean.fullName} – ${clean.propertyArea}`,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("Invio email lead fallito:", res.status, text);
    return false;
  }

  return true;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Troppe richieste. Riprova tra qualche minuto." },
      { status: 429 }
    );
  }

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  // Honeypot: risposta "silenziosa" positiva, nessun invio reale.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { errors, clean } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Dati non validi.", fieldErrors: errors }, { status: 400 });
  }

  const utm = {
    utmSource: sanitizeText(body.utmSource, 100) || undefined,
    utmMedium: sanitizeText(body.utmMedium, 100) || undefined,
    utmCampaign: sanitizeText(body.utmCampaign, 100) || undefined,
    utmContent: sanitizeText(body.utmContent, 100) || undefined,
    utmTerm: sanitizeText(body.utmTerm, 100) || undefined,
  };
  const pageUrl = sanitizeText(body.pageUrl, MAX_LENGTHS.pageUrl);

  const sent = await sendLeadEmail(clean, utm, pageUrl);
  if (!sent) {
    return NextResponse.json(
      { error: "Non è stato possibile inviare la richiesta." },
      { status: 500 }
    );
  }

  // Invio della guida gratuita al lead: best-effort, non fa fallire la
  // risposta (il lead è già stato acquisito tramite la notifica sopra), ma
  // va comunque atteso prima di rispondere: su un runtime serverless la
  // funzione può essere sospesa subito dopo l'invio della risposta, quindi
  // una promise "fire and forget" rischierebbe di non completarsi mai.
  await sendGuideEmail({ email: clean.email, name: clean.fullName }).catch((err) =>
    console.error("Errore invio guida gratuita al lead:", err)
  );

  return NextResponse.json({ ok: true });
}
