import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://inoxtkubxynhbuslvgyv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlub3h0a3VieHluaGJ1c2x2Z3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMTc4NjYsImV4cCI6MjAxNzg5Mzg2Nn0.RTqoIe5bT4NJJStlmB0eNC50bZo0C9-w6LdCuRJEDeM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
