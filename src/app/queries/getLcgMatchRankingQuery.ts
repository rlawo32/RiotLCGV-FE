import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerStatisticsQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("*")
}

export function getLcgAllWinningRateQuery(client:TypedSupabaseClient) {
  return client.rpc('all_winningrate_rank')
}

export function getLcgAllDeathQuery(client:TypedSupabaseClient) {
  return client.rpc('all_death_rank')
}

export function getLcgOneGameBest3GoldQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_gold_rank')
}

export function getLcgAllGoldQuery(client:TypedSupabaseClient) {
  return client.rpc('all_gold_rank')
}
