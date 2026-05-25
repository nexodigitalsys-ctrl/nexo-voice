import Link from "next/link";
import { Logo } from "./Navbar";

/** Columna de enlaces del footer. */
interface FooterColumn {
  title: string;
  links: readonly { label: string; href: string }[];
}

const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Producto",
    links: [
      { label: "Cómo funciona", href: "/como-funciona" },
      { label: "Casos de uso", href: "/casos-de-uso" },
      { label: "Precios", href: "/precios" },
      { label: "Integraciones", href: "/contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "/contacto" },
      { label: "Blog", href: "/blog" },
      { label: "Carreras", href: "/contacto" },
      { label: "Prensa", href: "/contacto" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Centro de ayuda", href: "/contacto" },
      { label: "Documentación", href: "/contacto" },
      { label: "Estado del sistema", href: "/contacto" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/contacto" },
      { label: "Términos", href: "/contacto" },
      { label: "Cookies", href: "/contacto" },
      { label: "GDPR", href: "/contacto" },
    ],
  },
];

/**
 * Pie de página completo con 4 columnas de enlaces,
 * datos de contacto y redes sociales.
 */
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg px-6 pb-8 pt-14 md:px-12">
      <div className="mx-auto mb-12 grid max-w-[1100px] grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        {/* Marca */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo />
          <p className="mt-3 max-w-[260px] text-[13px] font-light leading-[1.7] text-muted">
            Agentes de voz con IA para empresas españolas. Atiende, cualifica y
            agenda — 24 horas, 7 días.
          </p>
          <div className="mt-5 flex flex-col gap-1.5">
            <a
              href="mailto:hola@nexo-digital.app"
              className="flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-cyan"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hola@nexo-digital.app
            </a>
            <span className="flex items-center gap-2 text-[13px] text-muted">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Barcelona, España
            </span>
          </div>
        </div>

        {/* Columnas de enlaces */}
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 font-display text-[13px] font-bold tracking-wide text-white">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Línea inferior */}
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <p className="text-xs font-light text-muted">
          © 2026 Nexo Digital Unipersonal · Barcelona, España
        </p>
        <div className="flex gap-3">
          {[
            {
              label: "LinkedIn",
              path: (
                <>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </>
              ),
            },
            {
              label: "X",
              path: (
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              ),
            },
            {
              label: "Mensajes",
              path: <path d="M21 2H3v16l4-4h14V2z" />,
            },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="group flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border bg-bg2 transition-all hover:border-cyan"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[15px] w-[15px] fill-none stroke-muted stroke-[1.5] transition-colors group-hover:stroke-cyan"
              >
                {social.path}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
