import { TypedSupabaseClient } from "../supabase" 

export function getLcgTeamLog(client: TypedSupabaseClient) {
  return client
  .from("lcg_team_log")
  .select("*")
  .order("lcg_game_id", { ascending: false })
}