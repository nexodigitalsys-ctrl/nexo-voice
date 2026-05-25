import type { Metadata } from "next";
import AudioVisualizer from "@/components/marketing/AudioVisualizer";
import HeroSection from "@/components/marketing/HeroSection";
import StatsBar from "@/components/marketing/StatsBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import UseCases from "@/components/marketing/UseCases";
import Pricing from "@/components/marketing/Pricing";

export const metadata: Metadata = {
  title: "Nexo Voice — Agentes de voz con IA para empresas españolas",
  description:
    "Tu empresa nunca pierde una llamada. Agentes de voz con IA que atienden, cualifican y agendan por ti — 24 horas, 7 días.",
  alternates: {
    canonical: "/",
  },
};

/**
 * Landing principal de Nexo Voice.
 */
export default function HomePage() {
  return (
    <>
      <AudioVisualizer />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <UseCases />
      <Pricing />
    </>
  );
}
