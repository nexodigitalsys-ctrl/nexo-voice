import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para el navegador.
 * Se usa para leads y formularios de contacto.
 */
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let browserClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Faltan las variables de entorno de Supabase (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)."
    );
  }
  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return browserClient;
}
