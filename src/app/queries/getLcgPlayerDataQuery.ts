import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerDataQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_data")
    .select("lcg_summoner_puuid, lcg_player, lcg_summoner_name, lcg_summoner_nickname")
}

export function getSelectLcgWinningRateQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("all_winningrate_rank").eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgAllKdaQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_count_play, lcg_count_kill, lcg_count_death, lcg_count_assist")
    .eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerDataQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from("lcg_player_data")
    .select("lcg_summoner_puuid, lcg_summoner_nickname, lcg_summoner_icon, lcg_present_tier, lcg_rank_win, lcg_present_division, lcg_present_high_tier, lcg_present_high_division, lcg_previous_tier, lcg_previous_division, lcg_previous_high_tier, lcg_previous_high_division, lcg_rank_point")
    .eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerChampionQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from("lcg_player_champion")
    .select("lcg_champion_name, lcg_kill_count, lcg_death_count, lcg_assist_count, lcg_play_count, lcg_win_count, lcg_fail_count")
    .eq("lcg_puuid", puuid)
    .order("lcg_play_count", { ascending: false })
}

export function getSelectLcgPlayerRelativeQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("player_relative").eq("lcg_person_puuid", puuid)
}

export function getSelectLcgPlayerAvgDpmQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("all_avg_dpm_rank").eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerAvgGpmQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("all_avg_gpm_rank").eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerAvgDpgQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("all_avg_dpg_rank").eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerMvpQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("all_mvp_rank").eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerAceQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("all_ace_rank").eq("lcg_summoner_puuid", puuid)
}