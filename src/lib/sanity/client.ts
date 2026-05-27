import { createClient, type SanityClient } from "next-sanity";

/**
 * Cliente de Sanity para el blog.
 * La configuración del CMS se completa en una fase posterior.
 */
const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion: string = "2024-01-01";

export const sanityClient: SanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
});
