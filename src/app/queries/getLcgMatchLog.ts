import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchLog(client: TypedSupabaseClient) {
  return client
    .from("lcg_match_log")
    .select("*")
    .order("lcg_game_id", { ascending: false })
}