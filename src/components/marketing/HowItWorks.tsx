import type { ReactNode } from "react";

interface Step {
  badge: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface HowItWorksProps {
  showHeader?: boolean;
}

const STEPS: readonly Step[] = [
  {
    badge: "Paso 01",
    title: "Reunión inicial",
    description:
      "Entendemos tu negocio, horarios, servicios y cómo quieres que suene tu agente.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    badge: "Paso 02",
    title: "Configuramos todo",
    description:
      "Diseñamos la voz, los flujos de conversación y las integraciones con tu agenda.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    badge: "Paso 03",
    title: "Test en vivo",
    description:
      "Probamos el agente contigo antes de activarlo. Ajustamos hasta que esté perfecto.",
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    badge: "Paso 04",
    title: "Activamos",
    description:
      "Tu agente empieza a atender llamadas. Recibes resumen diario por WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

/**
 * Sección "Cómo funciona": proceso en 4 pasos con iconos.
 */
export default function HowItWorks({ showHeader = true }: HowItWorksProps) {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 py-[88px] md:px-12">
      {showHeader && (
        <>
          <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
            Proceso
          </div>
          <h2 className="mb-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
            Listo en 48 horas
          </h2>
          <p className="mb-14 max-w-[460px] text-base font-light leading-[1.7] text-muted">
            Sin complicaciones técnicas. Nosotros configuramos todo y tú recibes
            las citas.
          </p>
        </>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.badge}
            className="rounded-2xl border border-border bg-bg2 px-[22px] py-7 text-center transition-all hover:-translate-y-[3px] hover:border-cyan hover:shadow-[0_12px_32px_rgba(0,212,255,0.1)]"
          >
            <div className="mx-auto mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border-2 border-[rgba(0,212,255,0.3)] bg-bg3 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:fill-none [&_svg]:stroke-cyan [&_svg]:stroke-[1.5]">
              {step.icon}
            </div>
            <div className="mb-2 font-display text-[11px] font-extrabold uppercase tracking-wide text-cyan">
              {step.badge}
            </div>
            <h3 className="mb-2 font-display text-[15px] font-bold text-white">
              {step.title}
            </h3>
            <p className="text-[13px] font-light leading-[1.55] text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
