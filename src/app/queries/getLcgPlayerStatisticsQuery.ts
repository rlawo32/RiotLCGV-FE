import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerStatisticsQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("*")
}

export function getLcgOneGameBest3GoldQuery(client:TypedSupabaseClient) {
  return client.rpc('onegame_best3_gold_rank')
}

export function getLcgBest3GoldQuery(client:TypedSupabaseClient) {
  return client.rpc('best3_gold_rank')
}

