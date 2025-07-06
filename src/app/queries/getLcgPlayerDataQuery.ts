import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerDataQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_data")
    .select("lcg_summoner_puuid, lcg_player, lcg_summoner_name, lcg_summoner_nickname, lcg_player_hide")
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
    .select("lcg_summoner_puuid, lcg_summoner_nickname, lcg_summoner_icon, lcg_present_tier, lcg_rank_win, lcg_present_division, lcg_present_high_tier, lcg_present_high_division, lcg_previous_tier, lcg_previous_division, lcg_previous_high_tier, lcg_previous_high_division, lcg_rank_point, lcg_ai_summary_content, lcg_ai_summary_verify")
    .eq("lcg_summoner_puuid", puuid)
}

export function getSelectLcgPlayerChampionTotalQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from("lcg_player_champion")
    .select("lcg_champion_name")
    .eq("lcg_puuid", puuid)
}

export function getSelectLcgPlayerChampionQuery(client:TypedSupabaseClient, puuid:string, page:number) {
  return client
    .from("lcg_player_champion")
    .select("lcg_champion_name, lcg_kill_count, lcg_death_count, lcg_assist_count, lcg_play_count, lcg_win_count, lcg_fail_count")
    .eq("lcg_puuid", puuid)
    .order("lcg_play_count", { ascending: false })
    .range(0, (page * 10) - 1)
}

export function getSelectLcgPlayerRelativeTotalQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from("lcg_player_relative")
    .select("row_num")
    .eq("lcg_person_puuid", puuid)
}

export function getSelectLcgPlayerRelativeQuery(client:TypedSupabaseClient, puuid:string, page:number) {
  return client.rpc("player_relative").eq("lcg_person_puuid", puuid).range(0, (page * 10) - 1)
}

export function getSelectLcgPlayerPositionQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from("lcg_player_position")
    .select(`
      lcg_position_top_count, lcg_position_top_win, 
      lcg_position_jug_count, lcg_position_jug_win, 
      lcg_position_mid_count, lcg_position_mid_win, 
      lcg_position_adc_count, lcg_position_adc_win, 
      lcg_position_sup_count, lcg_position_sup_win
    `)
    .eq("lcg_summoner_puuid", puuid)
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

export function getSelectLcgPlayerAiSummaryDataQuery(client:TypedSupabaseClient, puuid:string) {
  return client.rpc("ai_summary_data").eq("lcg_summoner_puuid", puuid)
}

export function getUpdateLcgPlayerAiSummaryContentQuery(client:TypedSupabaseClient, puuid:string, content:string) {
  return client
    .from('lcg_player_data')
    .update({ lcg_ai_summary_content: content })
    .eq('lcg_summoner_puuid', puuid)
    .select()
}

export function getUpdateLcgPlayerAiSummaryVerifyQuery(client:TypedSupabaseClient, puuid:string) {
  return client
    .from('lcg_player_data')
    .update({ lcg_ai_summary_verify: 'Y' })
    .eq('lcg_summoner_puuid', puuid)
    .select()
}