

const SUPABASE_URL =  import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
import {Clerk} from "@clerk/clerk-js";
import { createClient } from "@supabase/supabase-js";

declare global {
  interface Window {
    // @ts-ignore
    Clerk: Clerk | undefined;
  }
}

function createClerkSupabaseClient() {
  return createClient(
      SUPABASE_URL!,
      SUPABASE_KEY!,
      {
        global: {
          fetch: async (url, options = {}) => {
            const clerkToken = await window.Clerk.session?.getToken({
              template: "supabase",
            });
            // @ts-ignore
            const headers = new Headers(options?.headers);
            headers.set("Authorization", `Bearer ${clerkToken}`);

            return fetch(url, {
              ...options,
              headers,
            });
          },
        },
      }
  );
}

export const supabaseClient = createClerkSupabaseClient();
