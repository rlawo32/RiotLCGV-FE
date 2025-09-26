import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchMainQuery(client:TypedSupabaseClient, gameId:number) {
  return client
    .from("lcg_match_main")
    .select("*")
    .eq("lcg_game_id", gameId)
}

export function getLcgMatchMainFearlessQuery(client:TypedSupabaseClient, gameSet:string) {
  return client
    .from("lcg_match_main")
    .select("lcg_game_set, lcg_champion_name, lcg_line_order")
    .like("lcg_game_set", `%${gameSet}%`);
}
