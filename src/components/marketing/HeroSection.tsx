import Link from "next/link";
import { Play } from "lucide-react";

/** Número de barras de la waveform del call card. */
const WAVEFORM_BARS = 16;

/** Mensaje de la transcripción del chat. */
interface ChatMessage {
  role: "agent" | "user";
  label: string;
  text: string;
}

const CHAT_MESSAGES: readonly ChatMessage[] = [
  {
    role: "agent",
    label: "Sara · Agente",
    text: "Hola, gracias por llamar a Clínica Dental Martínez. Soy Sara, ¿en qué puedo ayudarle?",
  },
  {
    role: "user",
    label: "Cliente",
    text: "Quería pedir cita para una revisión, si es posible esta semana.",
  },
  {
    role: "agent",
    label: "Sara · Agente",
    text: "¡Por supuesto! Tengo disponibilidad el jueves a las 17:00 o el viernes a las 10:30. ¿Cuál le viene mejor?",
  },
];

/** Alturas y retardos de las barras de la waveform (del spoiler). */
const WAVEFORM_BARS_DATA: readonly { height: number; delay: number }[] = [
  { height: 8, delay: 0 },
  { height: 18, delay: 0.08 },
  { height: 32, delay: 0.16 },
  { height: 22, delay: 0.24 },
  { height: 40, delay: 0.32 },
  { height: 28, delay: 0.4 },
  { height: 36, delay: 0.48 },
  { height: 20, delay: 0.56 },
  { height: 44, delay: 0.64 },
  { height: 30, delay: 0.72 },
  { height: 16, delay: 0.8 },
  { height: 38, delay: 0.88 },
  { height: 24, delay: 0.96 },
  { height: 12, delay: 1.04 },
  { height: 34, delay: 1.12 },
  { height: 20, delay: 1.2 },
];

/** Onda sonora animada del call card. */
function Waveform() {
  return (
    <div className="my-[18px] flex h-12 items-center justify-center gap-[3px]">
      {Array.from({ length: WAVEFORM_BARS }, (_, i) => {
        const bar = WAVEFORM_BARS_DATA[i];
        return (
          <span
            key={i}
            className="w-[3px] rounded-[3px] bg-gradient"
            style={{
              height: `${bar.height}px`,
              animation: "waveform 1.1s ease-in-out infinite",
              animationDelay: `${bar.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/** Tarjeta de llamada en vivo con transcripción. */
function CallCard() {
  return (
    <div className="rounded-[20px] border border-border bg-bg2/90 p-7 shadow-[0_0_60px_rgba(0,212,255,0.08)] backdrop-blur-xl">
      {/* Cabecera */}
      <div className="mb-5 flex items-center gap-3 border-b border-border pb-[18px]">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient font-display text-[15px] font-extrabold text-bg">
          NV
        </div>
        <div>
          <div className="font-display text-sm font-bold text-white">
            Sara · Nexo Voice
          </div>
          <div className="mt-0.5 text-xs text-muted">
            Clínica Dental Martínez · Barcelona
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded-full border border-[rgba(0,255,128,0.3)] bg-[rgba(0,255,128,0.1)] px-3 py-[5px] text-[11px] font-semibold text-live">
          <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse-dot-fast" />
          En vivo
        </div>
      </div>

      <Waveform />

      {/* Transcripción */}
      <div className="mt-4 flex flex-col gap-3">
        {CHAT_MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={
              msg.role === "agent"
                ? "max-w-[87%] rounded-[14px_14px_14px_2px] border border-border bg-bg3 px-4 py-3 text-[13px] leading-relaxed text-white"
                : "max-w-[87%] self-end rounded-[14px_14px_2px_14px] border border-border bg-glow2 px-4 py-3 text-[13px] leading-relaxed text-white"
            }
          >
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
              {msg.label}
            </div>
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Sección hero: titular, propuesta de valor, CTAs,
 * prueba social y tarjeta de llamada en vivo.
 */
export default function HeroSection() {
  return (
    <div className="relative z-10 pt-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-20 pt-[100px] md:px-12 lg:grid-cols-2 lg:gap-[72px]">
        {/* Columna de texto */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-glow2 px-4 py-[7px] text-xs font-medium tracking-wide text-cyan">
            <span className="h-[7px] w-[7px] rounded-full bg-cyan animate-pulse-dot" />
            Agente de voz con IA · Barcelona
          </div>

          <h1 className="mb-[22px] font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white md:text-[62px] md:tracking-[-3px]">
            Tu empresa
            <br />
            nunca pierde
            <br />
            una <span className="block text-gradient">llamada</span>
          </h1>

          <p className="mb-9 max-w-[440px] text-[17px] font-light leading-[1.7] text-muted">
            Agentes de voz con inteligencia artificial que atienden, cualifican
            y agendan por ti — 24 horas, 7 días, sin contratar a nadie.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient px-[30px] py-3.5 text-[15px] font-bold text-bg shadow-[0_0_24px_rgba(0,212,255,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(0,212,255,0.4)]"
            >
              <Play size={16} fill="currentColor" />
              Ver demostración
            </Link>
            <Link
              href="/casos-de-uso"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-6 py-3.5 text-[15px] text-white transition-all hover:border-cyan hover:text-cyan"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              Escuchar agente
            </Link>
          </div>

          {/* Prueba social */}
          <div className="mt-7 flex items-center gap-3.5">
            <div className="flex">
              {["A", "B", "C", "D"].map((letter, i) => (
                <span
                  key={letter}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg bg-bg3 font-display text-[11px] font-bold text-cyan"
                  style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-[13px] text-muted">
              <strong className="text-white">+500 empresas</strong> confían en
              Nexo Voice
            </p>
          </div>
        </div>

        {/* Columna del call card */}
        <CallCard />
      </div>
    </div>
  );
}
