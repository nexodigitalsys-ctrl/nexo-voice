import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voice.nexo-digital.app"),
  title: {
    default: "Nexo Voice — Agentes de voz con IA para empresas españolas",
    template: "%s · Nexo Voice",
  },
  description:
    "Agentes de voz con inteligencia artificial que atienden, cualifican y agendan por ti — 24 horas, 7 días, sin contratar a nadie.",
  keywords: [
    "agente de voz IA",
    "atención telefónica automática",
    "IA para empresas",
    "Barcelona",
    "recepcionista virtual",
  ],
  authors: [{ name: "Nexo Digital" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Nexo Voice",
    title: "Nexo Voice — Agentes de voz con IA para empresas españolas",
    description:
      "Tu empresa nunca pierde una llamada. Agentes de voz con IA que atienden, cualifican y agendan por ti.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Voice — Agentes de voz con IA",
    description:
      "Tu empresa nunca pierde una llamada. Agentes de voz con IA, 24/7.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080D1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
