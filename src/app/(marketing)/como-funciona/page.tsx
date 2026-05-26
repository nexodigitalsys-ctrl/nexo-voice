import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import HowItWorks from "@/components/marketing/HowItWorks";

export const metadata: Metadata = {
  title: "Cómo funciona | Nexo Voice",
  description:
    "Proceso completo para activar tu agente de voz: reunión inicial, configuración, pruebas en vivo y activación en menos de 48 horas. Sin conocimientos técnicos.",
  alternates: { canonical: "/como-funciona" },
};

/* ── Detalle de cada paso ──────────────────────────────── */

interface StepDetail {
  badge: string;
  title: string;
  detail: string;
}

const STEP_DETAILS: readonly StepDetail[] = [
  {
    badge: "Paso 01",
    title: "Reunión inicial",
    detail:
      "En una videollamada de 45 minutos mapeamos tu negocio completo: sector, horarios, tipos de llamadas habituales y cómo debe sonar tu marca. También definimos qué hacer con cada tipo de llamada —agendar, informar, derivar o tomar datos— y a qué número escalar las urgencias reales.",
  },
  {
    badge: "Paso 02",
    title: "Configuramos todo",
    detail:
      "Diseñamos el flujo conversacional completo: qué preguntas hace el agente, qué respuestas da y qué condiciones aplican fuera de horario. Creamos la voz con el tono adecuado a tu negocio y conectamos las integraciones —calendario, CRM o formulario interno— según tu plan. Tú solo revisas y apruebas.",
  },
  {
    badge: "Paso 03",
    title: "Test en vivo",
    detail:
      "Hacemos llamadas de prueba contigo actuando como cliente real. Probamos casos estándar, bordes y escenarios complicados. Cada matiz que quieras ajustar —tono, respuestas concretas, escalado— lo refinamos hasta que el agente suene exactamente como lo imaginabas.",
  },
  {
    badge: "Paso 04",
    title: "Activamos",
    detail:
      "En cuanto das el visto bueno, el agente empieza a atender llamadas en tu número. Recibes un resumen diario por WhatsApp con todas las interacciones, datos recogidos y citas agendadas. Si necesitas un ajuste posterior, estamos a un mensaje de distancia.",
  },
];

/* ── Qué incluye ───────────────────────────────────────── */

interface IncludesItem {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const INCLUDES_ITEMS: readonly IncludesItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Integración con agenda",
    description:
      "Google Calendar o CRM conectado desde el primer día. El agente agenda, cancela y confirma citas en tiempo real sin intervención humana.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Resumen diario por WhatsApp",
    description:
      "Cada mañana recibes un resumen completo: quién llamó, qué pidió y qué quedó pendiente. Sin pérdidas, sin post-its.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Dashboard de métricas",
    description:
      "Accede a tus estadísticas: llamadas atendidas, tasa de resolución, citas generadas y duración media. Disponible en planes Pro y Enterprise.",
    badge: "Pro · Enterprise",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: "Voz y flujos personalizados",
    description:
      "El agente habla con el tono de tu marca. Puedes pedir ajustes en cualquier momento; los aplicamos en menos de 24 horas sin interrumpir el servicio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: "Soporte incluido",
    description:
      "Acompañamiento por email en Starter, y por WhatsApp directo en Pro y Enterprise. Tiempo de respuesta inferior a 4 horas en horario laboral.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    title: "Derivación inteligente",
    description:
      "Cuando el agente detecta una situación que requiere atención humana, transfiere la llamada al número que configures o deja un mensaje estructurado.",
  },
];

/* ── FAQ ───────────────────────────────────────────────── */

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "¿Cuánto tarda en estar operativo el agente?",
    answer:
      "En casos estándar, el agente está activo en 48 horas desde la reunión inicial. Configuraciones con integraciones a medida o múltiples sedes pueden requerir entre 3 y 7 días laborables. En cualquier caso, te damos una estimación exacta al inicio del proceso.",
  },
  {
    question: "¿Necesito conocimientos técnicos para empezar?",
    answer:
      "No. Nosotros gestionamos toda la parte técnica: configuración, integraciones y pruebas. Tú solo tienes que contarnos cómo funciona tu negocio en la reunión inicial y aprobar el resultado final antes de activar.",
  },
  {
    question: "¿Puedo cambiar la voz o los flujos después de la activación?",
    answer:
      "Sí, en cualquier momento. Basta con avisarnos por WhatsApp o email con los cambios que necesitas. Los aplicamos en menos de 24 horas sin coste adicional ni interrupciones del servicio.",
  },
  {
    question: "¿Qué ocurre si el agente no puede resolver una llamada?",
    answer:
      "El agente deriva automáticamente la llamada al número humano que hayas configurado. También puede dejar un mensaje estructurado con los datos del cliente para que tú le devuelvas la llamada cuando puedas. Ninguna oportunidad se pierde.",
  },
];

/* ── Page ──────────────────────────────────────────────── */

export default function ComoFuncionaPage() {
  return (
    <>
      {/* ── Cabecera ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-0 pt-[120px] md:px-12">
        <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Proceso completo
        </div>
        <h1 className="mb-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
          De cero a llamadas
          <br />
          atendidas en 48 horas
        </h1>
        <p className="max-w-[520px] text-base font-light leading-[1.7] text-muted">
          Nexo Voice se integra en tu negocio sin fricciones técnicas. Aquí
          tienes el proceso completo, paso a paso, desde la primera conversación
          hasta el agente en producción.
        </p>
      </section>

      {/* ── Los 4 pasos ── */}
      <HowItWorks showHeader={false} />

      {/* ── Detalle por paso ── */}
      <div className="relative z-10 border-t border-border bg-bg2">
        <section className="mx-auto max-w-[1100px] px-6 py-[88px] md:px-12">
          <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
            En detalle
          </div>
          <h2 className="mb-12 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
            Qué ocurre en cada paso
          </h2>

          <div className="flex flex-col gap-6">
            {STEP_DETAILS.map((step, i) => (
              <div
                key={step.badge}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-bg3 px-7 py-7 transition-all hover:border-cyan/30 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg2 font-display text-[11px] font-extrabold uppercase tracking-wide text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[17px] font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-light leading-[1.7] text-muted">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Qué incluye ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 py-[88px] md:px-12">
        <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Lo que recibes
        </div>
        <h2 className="mb-4 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
          Qué incluye tu agente
        </h2>
        <p className="mb-12 max-w-[480px] text-base font-light leading-[1.7] text-muted">
          Todo lo que necesitas para que ninguna llamada quede sin respuesta,
          desde el primer día.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDES_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-border bg-bg2 px-6 py-7 transition-all hover:-translate-y-[3px] hover:border-cyan hover:shadow-[0_12px_32px_rgba(0,212,255,0.08)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg3 [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:fill-none [&_svg]:stroke-cyan [&_svg]:stroke-[1.5]">
                {item.icon}
              </div>
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-display text-[15px] font-bold text-white">
                  {item.title}
                </h3>
                {item.badge && (
                  <span className="mt-0.5 flex-shrink-0 rounded-full border border-border bg-glow2 px-2.5 py-0.5 text-[10px] font-semibold text-cyan">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-[13px] font-light leading-[1.6] text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <div className="relative z-10 border-t border-border bg-bg2">
        <section className="mx-auto max-w-[1100px] px-6 py-[88px] md:px-12">
          <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
            Preguntas frecuentes
          </div>
          <h2 className="mb-10 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
            Dudas sobre el proceso
          </h2>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-bg3 open:border-cyan/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-medium text-white">
                  <span>{item.question}</span>
                  <span className="flex-shrink-0 text-xl font-light text-cyan transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 text-[14px] font-light leading-relaxed text-muted">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* ── CTA final ── */}
      <div className="relative z-10 border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 py-[80px] text-center md:px-12">
          <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
            ¿Empezamos?
          </div>
          <h2 className="mb-4 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
            48 horas y tu agente
            <br />
            ya está atendiendo
          </h2>
          <p className="mb-8 text-base font-light leading-[1.7] text-muted">
            Cuéntanos cómo funciona tu negocio y te mostramos en vivo cómo
            respondería tu agente. Sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient px-[30px] py-3.5 text-[15px] font-bold text-bg shadow-[0_0_24px_rgba(0,212,255,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(0,212,255,0.4)]"
          >
            Solicitar demostración gratuita
          </Link>
        </div>
      </div>
    </>
  );
}
