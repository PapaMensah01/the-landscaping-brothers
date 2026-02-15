import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Server-only Supabase client with service role.
 * Use in Server Actions / API routes. Never expose service role key to the client.
 */
export function getSupabaseServer() {
  if (!url || !serviceRoleKey) return null;
  return createClient(url, serviceRoleKey);
}

export const RESUMES_BUCKET = "resumes";
