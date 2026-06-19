import { supabase } from "../lib/supabaseClient.js";

export async function checkSupabaseConnection() {
  if (!supabase) {
    return {
      ok: false,
      message: "Supabase client is not configured.",
    };
  }

  const { error } = await supabase.auth.getSession();

  if (error) {
    return {
      ok: false,
      message: "Supabase session check failed.",
    };
  }

  return {
    ok: true,
    message: "Supabase client initialized successfully.",
  };
}
