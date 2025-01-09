import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchMainQuery(client:TypedSupabaseClient, gameId:number) {
  return client
    .from("lcg_match_main")
    .select("*")
    .eq("lcg_game_id", gameId)
}