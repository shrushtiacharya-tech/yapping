import { createClient } from "@supabase/supabase-js";

let supabase: ReturnType<typeof createClient> | null = null;

export default function ChatInterface() {
  const supabase = getSupabase();
  if (!supabase) return null;
}
  if (typeof window === "undefined") {
    // ⛔ Prevent Supabase from running during build / server
    return null;
  }

  if (!supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    supabase = createClient(url, anon);
  }

  return supabase;
}
