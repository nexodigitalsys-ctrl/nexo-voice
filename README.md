# Nexo Voice

Agencia de agentes de voz con IA para empresas españolas.
Landing page + sitio web — Next.js 15, TypeScript, Tailwind CSS v4.

## Stack

- **Next.js 15** (App Router)
- **TypeScript** (modo estricto, cero `any`)
- **Tailwind CSS v4** (configuración inline con `@theme`)
- **Framer Motion**, **Supabase**, **Sanity**, **lucide-react**

## Puesta en marcha

```bash
pnpm install
cp .env.local.example .env.local   # rellena las variables
pnpm dev                            # http://localhost:3000
```

## Comandos

```bash
pnpm dev          # desarrollo
pnpm build        # build de producción
pnpm typecheck    # verificación de tipos (tsc --noEmit)
pnpm lint         # ESLint
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx              ← root layout, fuentes Syne + DM Sans, metadata
│   └── (marketing)/
│       ├── layout.tsx          ← Navbar + Footer
│       ├── page.tsx            ← landing principal
│       ├── como-funciona/      ← placeholder
│       ├── casos-de-uso/       ← placeholder
│       ├── precios/            ← placeholder
│       ├── contacto/           ← placeholder
│       └── blog/               ← placeholder
├── components/marketing/       ← Navbar, Hero, Stats, HowItWorks,
│                                 UseCases, Pricing, Footer, AudioVisualizer
├── lib/                        ← utils, clientes Supabase y Sanity
└── styles/globals.css          ← tokens del design system
```

## Inicializar el repositorio Git

Este proyecto debe subirse a la cuenta de GitHub `nexodigitalsys-ctrl`.
Verifica el perfil de VS Code antes de hacer push.

```bash
git init
git add .
git commit -m "chore: scaffold inicial Next.js 15"
git branch -M main
git remote add origin https://github.com/nexodigitalsys-ctrl/nexo-voice.git
git push -u origin main
```

## Estado

- [x] Scaffold Next.js 15 + Tailwind v4
- [x] Design system (tokens CSS)
- [x] AudioVisualizer (canvas partículas + waveform)
- [x] Landing page completa (fiel al spoiler)
- [ ] Páginas internas detalladas (fase siguiente)
- [ ] Blog con Sanity CMS (fase siguiente)
- [ ] Integraciones Vapi.ai / ElevenLabs / Twilio (fase 2)
