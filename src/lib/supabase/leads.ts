import { getSupabaseClient } from "./client";

export interface LeadInput {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  sector: string;
  mensaje: string;
}

export async function insertLead(
  lead: LeadInput
): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("leads").insert([lead]);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Error desconocido",
    };
  }
}
