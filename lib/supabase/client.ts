import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

export class SupabaseClientConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SupabaseClientConfigError';
  }
}

/**
 * Creates the browser Supabase client when the required public env vars exist.
 *
 * @throws {SupabaseClientConfigError} When the required public Supabase
 * environment variables are missing.
 * @returns `createClient` returns a configured Supabase browser client.
 */
export function createClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new SupabaseClientConfigError(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.',
    );
  }

  return createBrowserClient(url, publishableKey);
}
