import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AC Domus Affitti - Gestione affitti brevi Roma",
  description:
    "Gestione professionale affitti brevi a Roma. Aumenta il rendimento del tuo immobile con strategie concrete e senza improvvisazione.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <meta
          name="google-site-verification"
          content="JkOV-tYW9AwJe71ayd3rqVmyrpcY3SAb2YCv1uAJKwM"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}