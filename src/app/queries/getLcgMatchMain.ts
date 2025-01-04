import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchMain(client:TypedSupabaseClient, gameId:number) {
  return client
    .from("lcg_match_main")
    .select("*")
    .eq("lcg_game_id", gameId)
}