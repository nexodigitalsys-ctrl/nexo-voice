"use client";
import dynamic from "next/dynamic";

// Carga Sanity Studio solo en el cliente (ssr:false requiere un Client Component).
// Esto evita que sanity/lib/index.js sea procesado por el compilador del servidor,
// donde react-server.js no exporta useEffectEvent.
const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioLoader() {
  return <Studio />;
}
