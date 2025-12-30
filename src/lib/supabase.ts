import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

export function getSupabaseClient() {
  // ⛔ Prevent Supabase from running during build / server
  if (typeof window === "undefined") {
    return null;
  }

  if (!supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    supabase = createClient(url, anon);
  }

  return supabase;
}
