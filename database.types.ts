export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      lcg_match_info: {
        Row: {
          lcg_game_date: string
          lcg_game_duration: number
          lcg_game_id: number
          lcg_game_map: number
          lcg_game_mode: string
          lcg_game_type: string
          lcg_max_damage_taken: number
          lcg_max_damage_total: number
          lcg_ver_cdn: string
          lcg_ver_champion: string
          lcg_ver_item: string
          lcg_ver_lang: string
          lcg_ver_main: string
          lcg_ver_mastery: string
          lcg_ver_rune: string
          lcg_ver_summoner: string
        }
        Insert: {
          lcg_game_date: string
          lcg_game_duration: number
          lcg_game_id: number
          lcg_game_map: number
          lcg_game_mode: string
          lcg_game_type: string
          lcg_max_damage_taken: number
          lcg_max_damage_total: number
          lcg_ver_cdn: string
          lcg_ver_champion: string
          lcg_ver_item: string
          lcg_ver_lang: string
          lcg_ver_main: string
          lcg_ver_mastery: string
          lcg_ver_rune: string
          lcg_ver_summoner: string
        }
        Update: {
          lcg_game_date?: string
          lcg_game_duration?: number
          lcg_game_id?: number
          lcg_game_map?: number
          lcg_game_mode?: string
          lcg_game_type?: string
          lcg_max_damage_taken?: number
          lcg_max_damage_total?: number
          lcg_ver_cdn?: string
          lcg_ver_champion?: string
          lcg_ver_item?: string
          lcg_ver_lang?: string
          lcg_ver_main?: string
          lcg_ver_mastery?: string
          lcg_ver_rune?: string
          lcg_ver_summoner?: string
        }
        Relationships: []
      }
      lcg_match_log: {
        Row: {
          lcg_game_date: string
          lcg_game_duration: number
          lcg_game_id: number
          lcg_game_ver: string
          lcg_game_win: number
          team_a_name_1: string
          team_a_name_2: string
          team_a_name_3: string
          team_a_name_4: string
          team_a_name_5: string
          team_b_name_1: string
          team_b_name_2: string
          team_b_name_3: string
          team_b_name_4: string
          team_b_name_5: string
        }
        Insert: {
          lcg_game_date: string
          lcg_game_duration: number
          lcg_game_id: number
          lcg_game_ver: string
          lcg_game_win: number
          team_a_name_1: string
          team_a_name_2: string
          team_a_name_3: string
          team_a_name_4: string
          team_a_name_5: string
          team_b_name_1: string
          team_b_name_2: string
          team_b_name_3: string
          team_b_name_4: string
          team_b_name_5: string
        }
        Update: {
          lcg_game_date?: string
          lcg_game_duration?: number
          lcg_game_id?: number
          lcg_game_ver?: string
          lcg_game_win?: number
          team_a_name_1?: string
          team_a_name_2?: string
          team_a_name_3?: string
          team_a_name_4?: string
          team_a_name_5?: string
          team_b_name_1?: string
          team_b_name_2?: string
          team_b_name_3?: string
          team_b_name_4?: string
          team_b_name_5?: string
        }
        Relationships: []
      }
      lcg_match_main: {
        Row: {
          lcg_assist_count: number
          lcg_champion_id: number
          lcg_champion_level: number
          lcg_champion_name: string
          lcg_damage_taken: number
          lcg_damage_total: number
          lcg_death_count: number
          lcg_game_id: number
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_item_id_7: number
          lcg_jungle_count: number
          lcg_kill_count: number
          lcg_minion_count: number
          lcg_participant_id: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_spell_name_1: string
          lcg_spell_name_2: string
          lcg_summoner_name: string
          lcg_summoner_puuid: string
          lcg_summoner_tag: string
          lcg_team_id: number
          lcg_vision_score: number
          row_num: number
        }
        Insert: {
          lcg_assist_count: number
          lcg_champion_id: number
          lcg_champion_level: number
          lcg_champion_name: string
          lcg_damage_taken: number
          lcg_damage_total: number
          lcg_death_count: number
          lcg_game_id: number
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_item_id_7: number
          lcg_jungle_count: number
          lcg_kill_count: number
          lcg_minion_count: number
          lcg_participant_id: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_spell_name_1: string
          lcg_spell_name_2: string
          lcg_summoner_name: string
          lcg_summoner_puuid: string
          lcg_summoner_tag: string
          lcg_team_id: number
          lcg_vision_score: number
          row_num?: number
        }
        Update: {
          lcg_assist_count?: number
          lcg_champion_id?: number
          lcg_champion_level?: number
          lcg_champion_name?: string
          lcg_damage_taken?: number
          lcg_damage_total?: number
          lcg_death_count?: number
          lcg_game_id?: number
          lcg_item_id_1?: number
          lcg_item_id_2?: number
          lcg_item_id_3?: number
          lcg_item_id_4?: number
          lcg_item_id_5?: number
          lcg_item_id_6?: number
          lcg_item_id_7?: number
          lcg_jungle_count?: number
          lcg_kill_count?: number
          lcg_minion_count?: number
          lcg_participant_id?: number
          lcg_perk_name_1?: string
          lcg_perk_name_2?: string
          lcg_spell_name_1?: string
          lcg_spell_name_2?: string
          lcg_summoner_name?: string
          lcg_summoner_puuid?: string
          lcg_summoner_tag?: string
          lcg_team_id?: number
          lcg_vision_score?: number
          row_num?: number
        }
        Relationships: []
      }
      lcg_match_sub: {
        Row: {
          lcg_crowd_time: number
          lcg_damage_tower: number
          lcg_destroy_inhibitor: number
          lcg_destroy_tower: number
          lcg_destroy_ward: number
          lcg_double_kill: number
          lcg_first_kill: string
          lcg_first_tower: string
          lcg_game_id: number
          lcg_gold_total: number
          lcg_heal_total: number
          lcg_normal_ward: number
          lcg_participant_id: number
          lcg_penta_kill: number
          lcg_quadra_kill: number
          lcg_summoner_puuid: string
          lcg_triple_kill: number
          lcg_vision_ward: number
          row_num: number
        }
        Insert: {
          lcg_crowd_time: number
          lcg_damage_tower: number
          lcg_destroy_inhibitor: number
          lcg_destroy_tower: number
          lcg_destroy_ward: number
          lcg_double_kill: number
          lcg_first_kill: string
          lcg_first_tower: string
          lcg_game_id: number
          lcg_gold_total: number
          lcg_heal_total: number
          lcg_normal_ward: number
          lcg_participant_id: number
          lcg_penta_kill: number
          lcg_quadra_kill: number
          lcg_summoner_puuid: string
          lcg_triple_kill: number
          lcg_vision_ward: number
          row_num?: number
        }
        Update: {
          lcg_crowd_time?: number
          lcg_damage_tower?: number
          lcg_destroy_inhibitor?: number
          lcg_destroy_tower?: number
          lcg_destroy_ward?: number
          lcg_double_kill?: number
          lcg_first_kill?: string
          lcg_first_tower?: string
          lcg_game_id?: number
          lcg_gold_total?: number
          lcg_heal_total?: number
          lcg_normal_ward?: number
          lcg_participant_id?: number
          lcg_penta_kill?: number
          lcg_quadra_kill?: number
          lcg_summoner_puuid?: string
          lcg_triple_kill?: number
          lcg_vision_ward?: number
          row_num?: number
        }
        Relationships: []
      }
      lcg_match_team: {
        Row: {
          lcg_bans_name_1: string
          lcg_bans_name_2: string
          lcg_bans_name_3: string
          lcg_bans_name_4: string
          lcg_bans_name_5: string
          lcg_first_baron: string
          lcg_first_dragon: string
          lcg_first_inhibitor: string
          lcg_first_kill: string
          lcg_first_tower: string
          lcg_game_id: number
          lcg_team_id: number
          lcg_team_win: string
          lcg_total_assist: number
          lcg_total_baron: number
          lcg_total_death: number
          lcg_total_dragon: number
          lcg_total_gold: number
          lcg_total_herald: number
          lcg_total_horde: number
          lcg_total_inhibitor: number
          lcg_total_kill: number
          lcg_total_tower: number
          row_num: number
        }
        Insert: {
          lcg_bans_name_1: string
          lcg_bans_name_2: string
          lcg_bans_name_3: string
          lcg_bans_name_4: string
          lcg_bans_name_5: string
          lcg_first_baron: string
          lcg_first_dragon: string
          lcg_first_inhibitor: string
          lcg_first_kill: string
          lcg_first_tower: string
          lcg_game_id: number
          lcg_team_id: number
          lcg_team_win: string
          lcg_total_assist: number
          lcg_total_baron: number
          lcg_total_death: number
          lcg_total_dragon: number
          lcg_total_gold: number
          lcg_total_herald: number
          lcg_total_horde: number
          lcg_total_inhibitor: number
          lcg_total_kill: number
          lcg_total_tower: number
          row_num?: number
        }
        Update: {
          lcg_bans_name_1?: string
          lcg_bans_name_2?: string
          lcg_bans_name_3?: string
          lcg_bans_name_4?: string
          lcg_bans_name_5?: string
          lcg_first_baron?: string
          lcg_first_dragon?: string
          lcg_first_inhibitor?: string
          lcg_first_kill?: string
          lcg_first_tower?: string
          lcg_game_id?: number
          lcg_team_id?: number
          lcg_team_win?: string
          lcg_total_assist?: number
          lcg_total_baron?: number
          lcg_total_death?: number
          lcg_total_dragon?: number
          lcg_total_gold?: number
          lcg_total_herald?: number
          lcg_total_horde?: number
          lcg_total_inhibitor?: number
          lcg_total_kill?: number
          lcg_total_tower?: number
          row_num?: number
        }
        Relationships: []
      }
      lcg_player_data: {
        Row: {
          lcg_player: string
          lcg_summoner_id: number
          lcg_summoner_name: string
          lcg_summoner_nickname: string
          lcg_summoner_puuid: string
          lcg_summoner_tag: string
        }
        Insert: {
          lcg_player: string
          lcg_summoner_id: number
          lcg_summoner_name: string
          lcg_summoner_nickname: string
          lcg_summoner_puuid: string
          lcg_summoner_tag: string
        }
        Update: {
          lcg_player?: string
          lcg_summoner_id?: number
          lcg_summoner_name?: string
          lcg_summoner_nickname?: string
          lcg_summoner_puuid?: string
          lcg_summoner_tag?: string
        }
        Relationships: []
      }
      lcg_player_statistics: {
        Row: {
          lcg_count_assist: number
          lcg_count_baron: number
          lcg_count_crowd_time: number
          lcg_count_damage: number
          lcg_count_death: number
          lcg_count_defeat: number
          lcg_count_double_kill: number
          lcg_count_dragon: number
          lcg_count_gold: number
          lcg_count_herald: number
          lcg_count_horde: number
          lcg_count_inhibitor: number
          lcg_count_jungle: number
          lcg_count_kill: number
          lcg_count_minion: number
          lcg_count_penta_kill: number
          lcg_count_play: number
          lcg_count_quadra_kill: number
          lcg_count_taken: number
          lcg_count_tower: number
          lcg_count_tower_damage: number
          lcg_count_triple_kill: number
          lcg_count_victory: number
          lcg_count_vision_score: number
          lcg_count_vision_ward: number
          lcg_count_ward_kill: number
          lcg_count_ward_placed: number
          lcg_jungle_object_score: number
          lcg_multi_kill_score: number
          lcg_nickname: string
          lcg_player: string
          lcg_summoner_puuid: string
        }
        Insert: {
          lcg_count_assist: number
          lcg_count_baron: number
          lcg_count_crowd_time: number
          lcg_count_damage: number
          lcg_count_death: number
          lcg_count_defeat: number
          lcg_count_double_kill: number
          lcg_count_dragon: number
          lcg_count_gold: number
          lcg_count_herald: number
          lcg_count_horde: number
          lcg_count_inhibitor: number
          lcg_count_jungle: number
          lcg_count_kill: number
          lcg_count_minion: number
          lcg_count_penta_kill: number
          lcg_count_play: number
          lcg_count_quadra_kill: number
          lcg_count_taken: number
          lcg_count_tower: number
          lcg_count_tower_damage: number
          lcg_count_triple_kill: number
          lcg_count_victory: number
          lcg_count_vision_score: number
          lcg_count_vision_ward: number
          lcg_count_ward_kill: number
          lcg_count_ward_placed: number
          lcg_jungle_object_score: number
          lcg_multi_kill_score: number
          lcg_nickname: string
          lcg_player: string
          lcg_summoner_puuid: string
        }
        Update: {
          lcg_count_assist?: number
          lcg_count_baron?: number
          lcg_count_crowd_time?: number
          lcg_count_damage?: number
          lcg_count_death?: number
          lcg_count_defeat?: number
          lcg_count_double_kill?: number
          lcg_count_dragon?: number
          lcg_count_gold?: number
          lcg_count_herald?: number
          lcg_count_horde?: number
          lcg_count_inhibitor?: number
          lcg_count_jungle?: number
          lcg_count_kill?: number
          lcg_count_minion?: number
          lcg_count_penta_kill?: number
          lcg_count_play?: number
          lcg_count_quadra_kill?: number
          lcg_count_taken?: number
          lcg_count_tower?: number
          lcg_count_tower_damage?: number
          lcg_count_triple_kill?: number
          lcg_count_victory?: number
          lcg_count_vision_score?: number
          lcg_count_vision_ward?: number
          lcg_count_ward_kill?: number
          lcg_count_ward_placed?: number
          lcg_jungle_object_score?: number
          lcg_multi_kill_score?: number
          lcg_nickname?: string
          lcg_player?: string
          lcg_summoner_puuid?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      all_assist_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_assist: number
          rank: number
        }[]
      }
      all_attendancerate_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          rate: string
        }[]
      }
      all_avg_death_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          avgdeath: number
          rank: number
        }[]
      }
      all_avg_pinkward_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_vision_ward: number
          avg_pinkward: string
          rank: number
        }[]
      }
      all_crowdtime_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_crowd_time: number
          rank: number
        }[]
      }
      all_cs_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          cs: number
          rank: number
        }[]
      }
      all_damage_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_damage: number
          rank: number
        }[]
      }
      all_death_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_death: number
          rank: number
        }[]
      }
      all_demolisher_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_inhibitor: number
          lcg_count_tower: number
          destroy_structure: number
          lcg_count_tower_damage: number
          rank: number
        }[]
      }
      all_gold_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_gold: number
          rank: number
        }[]
      }
      all_jungle_object_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_dragon: number
          lcg_count_baron: number
          lcg_count_horde: number
          lcg_count_herald: number
          lcg_jungle_object_score: number
          rank: number
        }[]
      }
      all_kill_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_kill: number
          rank: number
        }[]
      }
      all_multikill_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_double_kill: number
          lcg_count_triple_kill: number
          lcg_count_quadra_kill: number
          lcg_count_penta_kill: number
          lcg_multi_kill_total: number
          lcg_multi_kill_score: number
          rank: number
        }[]
      }
      all_taken_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_taken: number
          rank: number
        }[]
      }
      all_vision_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_vision_score: number
          lcg_count_vision_ward: number
          lcg_count_ward_placed: number
          lcg_count_ward_kill: number
          rank: number
        }[]
      }
      all_winningrate_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_victory: number
          lcg_count_defeat: number
          rate: string
          rank: number
        }[]
      }
      onegame_best3_assist_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          assist: number
        }[]
      }
      onegame_best3_crowdtime_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          crowdtime: number
        }[]
      }
      onegame_best3_cs_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          cs: number
        }[]
      }
      onegame_best3_damage_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          damagetotal: number
        }[]
      }
      onegame_best3_death_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          death: number
        }[]
      }
      onegame_best3_gold_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          gold: number
        }[]
      }
      onegame_best3_hightaken_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          damagetaken: number
        }[]
      }
      onegame_best3_kill_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          kill: number
        }[]
      }
      onegame_best3_lowtaken_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          damagetaken: number
        }[]
      }
      onegame_best3_tower_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_destroy_tower: number
          lcg_damage_tower: number
        }[]
      }
      onegame_best3_vision_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_vision_score: number
          lcg_normal_ward: number
          lcg_vision_ward: number
          lcg_destroy_ward: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
