import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchInfoQuery(client:TypedSupabaseClient, gameId:number) {
  return client
    .from("lcg_match_info")
    .select("lcg_game_id, lcg_ver_main, lcg_game_duration, lcg_max_gold, lcg_max_crowd, lcg_max_dpm, lcg_max_gpm, lcg_max_dpg, lcg_max_damage_total, lcg_max_damage_taken")
    .eq("lcg_game_id", gameId)
}