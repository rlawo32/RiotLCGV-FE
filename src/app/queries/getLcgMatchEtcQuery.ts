import { TypedSupabaseClient } from "../supabase" 

export function getLcgMatchEtcQuery(client:TypedSupabaseClient) {
  return client
    .from("lcg_match_etc")
    .select("lcg_cdn, lcg_lang, lcg_main_ver, lcg_main_image, lcg_sub_image, lcg_update_player, lcg_update_data")
    .order("lcg_update_date", { ascending: false })
    .limit(1)
}