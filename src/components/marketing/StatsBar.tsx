/** Estadística destacada. */
interface Stat {
  value: string;
  label: string;
}

const STATS: readonly Stat[] = [
  { value: "92%", label: "Retención de clientes" },
  { value: "24/7", label: "Disponibilidad del agente" },
  { value: "<2s", label: "Tiempo de respuesta" },
  { value: "0€", label: "Coste por llamada perdida" },
];

/**
 * Barra de estadísticas con números en gradiente cyan→teal.
 */
export default function StatsBar() {
  return (
    <div className="relative z-10 border-y border-border bg-bg2 px-6 py-11 md:px-12">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="mb-2 font-display text-[44px] font-extrabold leading-none tracking-[-2px] text-gradient">
              {stat.value}
            </div>
            <div className="text-[13px] font-light text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
