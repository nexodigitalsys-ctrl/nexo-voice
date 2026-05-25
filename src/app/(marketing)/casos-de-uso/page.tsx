import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de uso",
  description: "Todos los sectores con casos reales.",
  alternates: { canonical: "/casos-de-uso" },
};

/**
 * Página "Casos de uso".
 * Contenido detallado pendiente de desarrollo en una fase posterior.
 */
export default function CasosDeUsoPage() {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 py-[160px] md:px-12">
      <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
        Nexo Voice
      </div>
      <h1 className="mb-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
        Casos de uso
      </h1>
      <p className="max-w-[460px] text-base font-light leading-[1.7] text-muted">
        Todos los sectores con casos reales. Esta página está en construcción.
      </p>
    </section>
  );
}
