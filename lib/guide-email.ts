import { readFile } from "fs/promises";
import path from "path";
import { escapeHtml } from "./http-utils";

const GUIDE_PDF_PATH = path.join(process.cwd(), "assets", "guida-gratuita-affitti-brevi.pdf");
let cachedGuideBase64: string | null = null;

async function getGuideBase64(): Promise<string> {
  if (cachedGuideBase64) return cachedGuideBase64;
  const buffer = await readFile(GUIDE_PDF_PATH);
  cachedGuideBase64 = buffer.toString("base64");
  return cachedGuideBase64;
}

// Aggiunge (o aggiorna) il contatto in Brevo, cosi' chi scarica la guida
// dall'homepage finisce comunque in rubrica per eventuali invii futuri, come
// faceva il vecchio form Brevo incorporato via iframe. Best-effort: un
// fallimento qui non deve impedire l'invio della guida.
async function upsertContact(apiKey: string, email: string, name?: string) {
  const listId = process.env.BREVO_GUIDE_LIST_ID;
  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        attributes: name ? { FIRSTNAME: name } : undefined,
        listIds: listId ? [Number(listId)] : undefined,
      }),
    });
    if (!res.ok && res.status !== 204) {
      const text = await res.text().catch(() => "");
      console.error("Upsert contatto Brevo fallito:", res.status, text);
    }
  } catch (err) {
    console.error("Errore upsert contatto Brevo:", err);
  }
}

export async function sendGuideEmail({
  email,
  name,
  createContact = false,
}: {
  email: string;
  name?: string;
  createContact?: boolean;
}): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error(
      "BREVO_API_KEY non configurata: impossibile inviare la guida gratuita."
    );
    return false;
  }

  if (createContact) {
    await upsertContact(apiKey, email, name);
  }

  const fromEmail = process.env.LEAD_FROM_EMAIL || "andrea.costabile83@gmail.com";
  const fromName = process.env.LEAD_FROM_NAME || "AC Domus Affitti";
  const firstName = (name || "").split(/\s+/)[0] || null;
  const greeting = firstName ? `Ciao ${escapeHtml(firstName)},` : "Ciao,";

  let guideBase64: string;
  try {
    guideBase64 = await getGuideBase64();
  } catch (err) {
    console.error("Impossibile leggere il PDF della guida gratuita:", err);
    return false;
  }

  const htmlContent = `
    <p>${greeting}</p>
    <p>grazie per l'interesse verso AC Domus Affitti. In allegato trovi la guida
    gratuita "Come guadagnare di più con gli affitti brevi".</p>
    <p>Se vuoi anche una prima valutazione gratuita del tuo immobile, la trovi qui:
    <a href="https://acdomusaffitti.it/valutazione-gratuita">acdomusaffitti.it/valutazione-gratuita</a>.</p>
    <p>A presto,<br/>Andrea Costabile<br/>AC Domus Affitti</p>
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
      to: [{ email, name: name || undefined }],
      subject: "La tua guida gratuita agli affitti brevi – AC Domus Affitti",
      htmlContent,
      attachment: [
        {
          content: guideBase64,
          name: "Guida Gratuita Affitti Brevi.pdf",
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("Invio guida gratuita fallito:", res.status, text);
    return false;
  }

  return true;
}
