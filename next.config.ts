import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Il PDF della guida gratuita viene letto da disco a runtime in
  // app/api/leads/route.ts (fs.readFile), non tramite import statico:
  // il file tracer di Next.js non lo rileva da solo e, senza questa
  // dichiarazione esplicita, non viene incluso nel bundle della funzione
  // serverless su Vercel (funziona in locale, ma manca in produzione).
  outputFileTracingIncludes: {
    "/api/leads": ["./assets/**/*"],
    "/api/guide-download": ["./assets/**/*"],
  },
};

export default nextConfig;
