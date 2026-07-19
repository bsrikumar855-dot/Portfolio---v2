import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23161511'/%3E%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='36' fill='%23EEECE6' text-anchor='middle'%3ES%3C/text%3E%3Ccircle cx='47' cy='43' r='4' fill='%232E4B34'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Shreekumar B — AI Systems Builder · Portfolio",
  description:
    "Editorial portfolio of Shreekumar B — AI systems builder and Python developer. Selected work: AHAL, AHAL V2, PRYSM, GradeMIND, Crowdera UI, Vidiyal UI.",
  openGraph: {
    title: "Shreekumar B — AI Systems Builder",
    description:
      "Production-grade AI systems: agents, LLM pipelines and backends. Selected work 01–06.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  icons: {
    icon: favicon,
  },
};

export const viewport: Viewport = {
  themeColor: "#EEECE6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
