import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchSubQuery(client:TypedSupabaseClient, gameId:number) {
  return client
    .from("lcg_match_sub")
    .select("*")
    .eq("lcg_game_id", gameId)
}