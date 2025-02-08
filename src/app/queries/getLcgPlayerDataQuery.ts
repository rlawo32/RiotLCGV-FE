import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerDataQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_data")
    .select("lcg_summoner_puuid, lcg_player, lcg_summoner_name, lcg_summoner_nickname")
}