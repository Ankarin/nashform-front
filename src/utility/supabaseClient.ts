import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://redbefqurtnagpbzczqw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZGJlZnF1cnRuYWdwYnpjenF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNTM1MTAsImV4cCI6MjAzMTYyOTUxMH0.HKdqqRsgIcqucuPrPPP1ErHk_J2g60EEItGrNMYBMu0";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
