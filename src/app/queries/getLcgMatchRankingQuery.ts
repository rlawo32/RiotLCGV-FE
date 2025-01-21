import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerStatisticsQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("*")
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

export function getLcgOneGameBest3KillQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_kill_rank')
}

export function getLcgOneGameBest3AssistQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_assist_rank')
}

export function getLcgOneGameBest3DeathQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_death_rank')
}
