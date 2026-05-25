import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Hablemos de tu agente de voz.",
  alternates: { canonical: "/contacto" },
};

/**
 * Página "Contacto".
 * Contenido detallado pendiente de desarrollo en una fase posterior.
 */
export default function ContactoPage() {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 py-[160px] md:px-12">
      <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
        Nexo Voice
      </div>
      <h1 className="mb-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
        Contacto
      </h1>
      <p className="max-w-[460px] text-base font-light leading-[1.7] text-muted">
        Hablemos de tu agente de voz. Esta página está en construcción.
      </p>
    </section>
  );
}
