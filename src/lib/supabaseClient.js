import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig, hasSupabaseConfig } from "./env.js";

const { url, anonKey } = getSupabaseConfig();

if (!hasSupabaseConfig && import.meta.env.DEV) {
  console.warn(
    "Supabase environment variables are missing. Check .env.local and Vercel Environment Variables."
  );
}

export const supabase = hasSupabaseConfig ? createClient(url, anonKey) : null;
