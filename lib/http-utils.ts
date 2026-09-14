import { NextRequest } from "next/server";

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  let cleaned = "";
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code < 32 || code === 127) continue;
    cleaned += value[i];
  }
  return cleaned.trim().slice(0, maxLength);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

// Rate limiting in-memory, per istanza del processo: sufficiente come primo
// filtro contro invii ripetuti automatizzati, non garantisce un limite
// globale su deployment serverless con più istanze attive in parallelo.
export function createRateLimiter(windowMs: number, maxRequests: number) {
  const requestLog = new Map<string, number[]>();
  return function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < windowMs);
    timestamps.push(now);
    requestLog.set(ip, timestamps);
    return timestamps.length > maxRequests;
  };
}
