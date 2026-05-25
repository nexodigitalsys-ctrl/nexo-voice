import type { ReactNode } from "react";

/** Caso de uso por sector. */
interface UseCase {
  title: string;
  description: string;
  tag: string;
  icon: ReactNode;
}

const USE_CASES: readonly UseCase[] = [
  {
    title: "Clínicas y médicos",
    description:
      "Agenda citas, confirma reservas y filtra urgencias automáticamente sin saturar la recepción.",
    tag: "Más popular",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Inmobiliarias",
    description:
      "Cualifica leads entrantes, agenda visitas y responde preguntas sobre propiedades 24/7.",
    tag: "Alto ROI",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Servicios y reformas",
    description:
      "Recoge solicitudes de presupuesto, agenda visitas técnicas y gestiona urgencias fuera de horario.",
    tag: "Activo 24/7",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Despachos y gestorías",
    description:
      "Primera consulta automatizada, recoge datos del cliente y agenda cita con el profesional.",
    tag: "Premium",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Restaurantes",
    description:
      "Reservas, confirmaciones y cancelaciones automáticas. Sin perder una mesa por no coger el teléfono.",
    tag: "Fácil setup",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Talleres y automoción",
    description:
      "Citas de revisión, recepción de vehículos y seguimiento de reparaciones por voz.",
    tag: "Nuevo",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

/**
 * Sección "Casos de uso": 6 sectores con icono, descripción y etiqueta.
 */
export default function UseCases() {
  return (
    <div className="relative z-10 border-t border-border bg-bg2">
      <section className="mx-auto max-w-[1100px] px-6 py-[88px] md:px-12">
        <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Sectores
        </div>
        <h2 className="font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
          Para cualquier negocio
          <br />
          que reciba llamadas
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="cursor-pointer rounded-2xl border border-border bg-bg px-6 py-7 transition-all hover:-translate-y-[3px] hover:border-cyan hover:shadow-[0_12px_32px_rgba(0,212,255,0.08)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg3 [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:fill-none [&_svg]:stroke-cyan [&_svg]:stroke-[1.5]">
                {useCase.icon}
              </div>
              <h3 className="mb-2 font-display text-base font-bold text-white">
                {useCase.title}
              </h3>
              <p className="mb-3.5 text-[13px] font-light leading-[1.6] text-muted">
                {useCase.description}
              </p>
              <span className="inline-block rounded-full border border-border bg-glow2 px-3 py-1 text-[11px] font-semibold text-cyan">
                {useCase.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
