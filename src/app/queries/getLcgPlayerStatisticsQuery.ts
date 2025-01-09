import { TypedSupabaseClient } from "../supabase" 

export function getLcgPlayerStatisticsQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("*")
}

export function getLcgOneGameBest3KillQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_match_main")
    .select("lcg_summoner_name, lcg_summoner_tag, lcg_kill_count")
    .order("lcg_kill_count", { ascending: false })
    .limit(3)
}

export function getLcgOneGameBest3DeathQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_match_main")
    .select("lcg_summoner_name, lcg_summoner_tag, lcg_death_count")
    .order("lcg_death_count", { ascending: false })
    .limit(3)
}

export function getLcgOneGameBest3AssistQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_match_main")
    .select("lcg_summoner_name, lcg_summoner_tag, lcg_assist_count")
    .order("lcg_assist_count", { ascending: false })
    .limit(3)
}

export function getLcgBest3KillQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_kill")
    .order("lcg_count_kill", { ascending: false })
    .limit(3)
}

export function getLcgBest3DeathQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_death")
    .order("lcg_count_death", { ascending: false })
    .limit(3)
}

export function getLcgBest3AssistQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_assist")
    .order("lcg_count_assist", { ascending: false })
    .limit(3)
}

export function getLcgBest3MinionQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_minion")
    .order("lcg_count_minion", { ascending: false })
    .limit(3)
}

export function getLcgBest3JungleQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_jungle")
    .order("lcg_count_jungle", { ascending: false })
    .limit(3)
}

export function getLcgBest3CrowdQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_crowd_time")
    .order("lcg_count_crowd_time", { ascending: false })
    .limit(3)
}

export function getLcgBest3VisionScoreQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_vision_score")
    .order("lcg_count_vision_score", { ascending: false })
    .limit(3)
}

export function getLcgBest3WardKillQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_ward_kill")
    .order("lcg_count_ward_kill", { ascending: false })
    .limit(3)
}

export function getLcgBest3VisionWardQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_player_statistics")
    .select("lcg_player, lcg_nickname, lcg_count_vision_ward")
    .order("lcg_count_vision_ward", { ascending: false })
    .limit(3)
}

// 승률, 정글 오브젝트, 멀티킬 횟수