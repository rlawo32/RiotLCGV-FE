import { TypedSupabaseClient } from "../supabase" 

export function getLcgPatchNoteVersionsQuery(client:TypedSupabaseClient) {
  return client.rpc("lcg_patch_note_versions");
}

export function getLcgPatchNoteQuery(client:TypedSupabaseClient, version:string) {
  return client
    .from("lcg_patch_note")
    .select("lcg_patch_version, lcg_patch_section, lcg_patch_html")
    .eq("lcg_patch_version", version)
    .order("lcg_patch_section", { ascending: true })
}