"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

/** Enlace de navegación. */
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

/** Isotipo de Nexo Voice. */
function LogoMark() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient">
      <svg viewBox="0 0 16 16" className="h-4 w-4 fill-bg">
        <path d="M8 2C5 2 3 5 3 8s2 6 5 6 5-3 5-6-2-6-5-6zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
      </svg>
    </div>
  );
}

/** Logotipo completo con texto. */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-white"
    >
      <LogoMark />
      <span>
        Nexo<span className="text-cyan">Voice</span>
      </span>
    </Link>
  );
}

/**
 * Barra de navegación fija con efecto blur.
 * Incluye menú hamburguesa para móvil.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-[200] border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 md:px-12">
        <Logo />

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="rounded-[10px] bg-gradient px-[22px] py-[9px] text-sm font-semibold text-bg"
            >
              Empezar gratis
            </Link>
          </li>
        </ul>

        {/* Botón hamburguesa (móvil) */}
        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-white transition-colors hover:border-cyan md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú desplegable (móvil) */}
      {isOpen && (
        <div className="border-t border-border bg-bg/95 px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-bg2 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="block rounded-[10px] bg-gradient px-5 py-3 text-center text-sm font-semibold text-bg"
              >
                Empezar gratis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
