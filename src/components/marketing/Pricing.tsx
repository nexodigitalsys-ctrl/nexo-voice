import Link from "next/link";

/** Plan de precios. */
interface PricingPlan {
  name: string;
  amount: string;
  amountUnit?: string;
  amountSmall?: boolean;
  subtitle: string;
  features: readonly string[];
  ctaLabel: string;
  featured: boolean;
}

const PLANS: readonly PricingPlan[] = [
  {
    name: "Starter",
    amount: "250",
    amountUnit: "€/mes",
    subtitle: "+ 800€ setup único",
    features: [
      "1 agente de voz configurado",
      "Hasta 200 llamadas/mes",
      "Google Calendar integrado",
      "Resumen diario por WhatsApp",
      "Soporte por email",
    ],
    ctaLabel: "Empezar",
    featured: false,
  },
  {
    name: "Pro",
    amount: "400",
    amountUnit: "€/mes",
    subtitle: "+ 1.200€ setup único",
    features: [
      "1 agente totalmente personalizado",
      "Llamadas ilimitadas",
      "CRM + Google Calendar",
      "WhatsApp automático al cliente",
      "Dashboard de llamadas y métricas",
      "Soporte WhatsApp directo",
    ],
    ctaLabel: "Empezar",
    featured: true,
  },
  {
    name: "Enterprise",
    amount: "Custom",
    amountSmall: true,
    subtitle: "Para cadenas y franquicias",
    features: [
      "Múltiples agentes y sedes",
      "Integraciones a medida",
      "Voz corporativa exclusiva",
      "SLA garantizado",
      "Account manager dedicado",
    ],
    ctaLabel: "Contactar",
    featured: false,
  },
];

/** Lista de características de un plan. */
function FeatureList({ features }: { features: readonly string[] }) {
  return (
    <ul className="mb-[30px] flex flex-col gap-[11px]">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2.5 text-[13px] font-light text-muted"
        >
          <span className="flex-shrink-0 text-[15px] font-bold text-cyan">
            ✓
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}

/** Tarjeta individual de plan. */
function PriceCard({ plan }: { plan: PricingPlan }) {
  const ctaClass = plan.featured
    ? "block w-full rounded-xl bg-gradient px-6 py-3.5 text-center text-[15px] font-bold text-bg shadow-[0_0_24px_rgba(0,212,255,0.25)] transition-all hover:-translate-y-0.5"
    : "block w-full rounded-xl border border-border bg-white/[0.03] px-6 py-3.5 text-center text-[15px] text-white transition-all hover:border-cyan hover:text-cyan";

  return (
    <div
      className={
        plan.featured
          ? "relative rounded-[18px] border border-[rgba(0,212,255,0.4)] bg-bg3 px-[30px] py-9 shadow-[0_0_48px_rgba(0,212,255,0.1)]"
          : "rounded-[18px] border border-border bg-bg2 px-[30px] py-9"
      }
    >
      {plan.featured && (
        <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient px-4 py-1 font-display text-[11px] font-extrabold tracking-wide text-bg">
          Más popular
        </div>
      )}

      <div className="mb-3.5 font-display text-xs font-bold uppercase tracking-[2.5px] text-muted">
        {plan.name}
      </div>

      <div
        className={
          plan.amountSmall
            ? "font-display text-4xl font-extrabold leading-none tracking-[-2.5px] text-white"
            : "mb-1 font-display text-[52px] font-extrabold leading-none tracking-[-2.5px] text-white"
        }
      >
        {plan.amount}
        {plan.amountUnit && (
          <span className="text-[18px] font-normal tracking-normal text-muted">
            {plan.amountUnit}
          </span>
        )}
      </div>

      <div className="mb-6 mt-1 text-xs font-light text-muted">
        {plan.subtitle}
      </div>

      <div className="my-[22px] h-px bg-border" />

      <FeatureList features={plan.features} />

      <Link href="/contacto" className={ctaClass}>
        {plan.ctaLabel}
      </Link>
    </div>
  );
}

/**
 * Sección de precios: 3 planos con tarjeta destacada.
 */
export default function Pricing() {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 py-[88px] md:px-12">
      <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[3px] text-cyan">
        Precios
      </div>
      <h2 className="mb-4 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white">
        Sin sorpresas
      </h2>
      <p className="mb-14 max-w-[460px] text-base font-light leading-[1.7] text-muted">
        Un precio fijo mensual. Sin permanencia. Cancela cuando quieras.
      </p>

      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">
        {PLANS.map((plan) => (
          <PriceCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
