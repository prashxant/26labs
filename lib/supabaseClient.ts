import { createClient } from "@supabase/supabase-js";

export const supabase = (() => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Prevent build crash
    console.warn("Supabase env vars are missing");
    return null as unknown;
  }

  return createClient(supabaseUrl, supabaseKey);
})();
