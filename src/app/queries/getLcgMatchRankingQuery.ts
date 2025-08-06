import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerStatisticsQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("*")
}

export function getLcgAllOverallQuery(client:TypedSupabaseClient) {
  return client
  .from("lcg_player_ranking")
  .select("lcg_summoner_nickname, lcg_ranking_score, lcg_ranking_current")
  .order("lcg_ranking_current", { ascending: true })
}

export function getLcgAllWinningRateQuery(client:TypedSupabaseClient) {
  return client.rpc('all_winningrate_rank')
}

export function getLcgAllKillQuery(client:TypedSupabaseClient) {
  return client.rpc('all_kill_rank')
}

export function getLcgAllDeathQuery(client:TypedSupabaseClient) {
  return client.rpc('all_death_rank')
}

export function getLcgAllAssistQuery(client:TypedSupabaseClient) {
  return client.rpc('all_assist_rank')
}

export function getLcgAllCsQuery(client:TypedSupabaseClient) {
  return client.rpc('all_cs_rank')
}

export function getLcgAllVisionQuery(client:TypedSupabaseClient) {
  return client.rpc('all_vision_rank')
}

export function getLcgAllGoldQuery(client:TypedSupabaseClient) {
  return client.rpc('all_gold_rank')
}

export function getLcgAllDemolisherQuery(client:TypedSupabaseClient) {
  return client.rpc('all_demolisher_rank')
}

export function getLcgAllDamageQuery(client:TypedSupabaseClient) {
  return client.rpc('all_damage_rank')
}

export function getLcgAllTakenQuery(client:TypedSupabaseClient) {
  return client.rpc('all_taken_rank')
}

export function getLcgAllMultiKillQuery(client:TypedSupabaseClient) {
  return client.rpc('all_multikill_rank')
}

export function getLcgAllJungleObjectQuery(client:TypedSupabaseClient) {
  return client.rpc('all_jungle_object_rank')
}

export function getLcgAllAvgDpmQuery(client:TypedSupabaseClient) {
  return client.rpc('all_avg_dpm_rank')
}

export function getLcgAllAvgGpmQuery(client:TypedSupabaseClient) {
  return client.rpc('all_avg_gpm_rank')
}

export function getLcgAllAvgDpgQuery(client:TypedSupabaseClient) {
  return client.rpc('all_avg_dpg_rank')
}

export function getLcgAllMvpQuery(client:TypedSupabaseClient) {
  return client.rpc('all_mvp_rank')
}

export function getLcgAllAceQuery(client:TypedSupabaseClient) {
  return client.rpc('all_ace_rank')
}

export function getLcgAllTierQuery(client:TypedSupabaseClient) {
  return client.rpc('all_tier_rank')
}

export function getLcgOneGameBest3KillQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_kill_rank')
}

export function getLcgOneGameBest3AssistQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_assist_rank')
}

export function getLcgOneGameBest3DeathQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_death_rank')
}

export function getLcgOneGameBest3CsQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_cs_rank')
}

export function getLcgOneGameBest3GoldQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_gold_rank')
}

export function getLcgOneGameBest3TowerQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_tower_rank')
}

export function getLcgOneGameBest3DamageQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_damage_rank')
}

export function getLcgOneGameBest3HighTakenQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_hightaken_rank')
}

export function getLcgOneGameBest3LowTakenQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_lowtaken_rank')
}

export function getLcgOneGameBest3DpmQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_dpm_rank')
}

export function getLcgOneGameBest3GpmQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_gpm_rank')
}

export function getLcgOneGameBest3DpgQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_dpg_rank')
}