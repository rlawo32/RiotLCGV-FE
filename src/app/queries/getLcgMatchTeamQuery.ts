import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchTeamQuery(client:TypedSupabaseClient, gameId:number) {
  return client
    .from("lcg_match_team")
    .select("*")
    .eq("lcg_game_id", gameId)
}