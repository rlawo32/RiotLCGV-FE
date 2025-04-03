import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchLogQuery(client: TypedSupabaseClient) {
  return client
    .from("lcg_match_log")
    .select("*")
    .order("lcg_game_id", { ascending: false })
}

export function getLcgMatchLogLatestQuery(client: TypedSupabaseClient) {
  return client
    .from("lcg_match_log")
    .select("*")
    .order("lcg_game_id", { ascending: false })
    .limit(1)
}

export function getLcgMatchLogTotalQuery(client: TypedSupabaseClient) {
  return client
    .from("lcg_match_log")
    .select("lcg_game_id")
}

export function getLcgMatchLogPagingQuery(client: TypedSupabaseClient, page: number) {
  return client
    .from("lcg_match_log")
    .select("*")
    .order("lcg_game_id", { ascending: false })
    .range((page - 1) * 10, ((page - 1) * 10) + 10 - 1)
}