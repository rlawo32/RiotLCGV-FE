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
      lcg_match_etc: {
        Row: {
          lcg_cdn: string
          lcg_champion_ver: string
          lcg_item_ver: string
          lcg_lang: string
          lcg_main_image: string
          lcg_main_ver: string
          lcg_mastery_ver: string
          lcg_ranking_count: number
          lcg_rune_ver: string
          lcg_sub_image: string
          lcg_summoner_ver: string
          lcg_update_data: string
          lcg_update_date: string
          lcg_update_player: string
          lcg_version: string
        }
        Insert: {
          lcg_cdn: string
          lcg_champion_ver: string
          lcg_item_ver: string
          lcg_lang: string
          lcg_main_image: string
          lcg_main_ver: string
          lcg_mastery_ver: string
          lcg_ranking_count: number
          lcg_rune_ver: string
          lcg_sub_image: string
          lcg_summoner_ver: string
          lcg_update_data: string
          lcg_update_date: string
          lcg_update_player: string
          lcg_version: string
        }
        Update: {
          lcg_cdn?: string
          lcg_champion_ver?: string
          lcg_item_ver?: string
          lcg_lang?: string
          lcg_main_image?: string
          lcg_main_ver?: string
          lcg_mastery_ver?: string
          lcg_ranking_count?: number
          lcg_rune_ver?: string
          lcg_sub_image?: string
          lcg_summoner_ver?: string
          lcg_update_data?: string
          lcg_update_date?: string
          lcg_update_player?: string
          lcg_version?: string
        }
        Relationships: []
      }
      lcg_match_info: {
        Row: {
          lcg_game_date: string
          lcg_game_duration: number
          lcg_game_id: number
          lcg_game_map: number
          lcg_game_mode: string
          lcg_game_type: string
          lcg_max_crowd: number
          lcg_max_damage_taken: number
          lcg_max_damage_total: number
          lcg_max_dpd: number
          lcg_max_dpg: number
          lcg_max_dpm: number
          lcg_max_gold: number
          lcg_max_gpm: number
          lcg_max_tpd: number
          lcg_ver_main: string
        }
        Insert: {
          lcg_game_date: string
          lcg_game_duration: number
          lcg_game_id: number
          lcg_game_map: number
          lcg_game_mode: string
          lcg_game_type: string
          lcg_max_crowd: number
          lcg_max_damage_taken: number
          lcg_max_damage_total: number
          lcg_max_dpd: number
          lcg_max_dpg: number
          lcg_max_dpm: number
          lcg_max_gold: number
          lcg_max_gpm: number
          lcg_max_tpd: number
          lcg_ver_main: string
        }
        Update: {
          lcg_game_date?: string
          lcg_game_duration?: number
          lcg_game_id?: number
          lcg_game_map?: number
          lcg_game_mode?: string
          lcg_game_type?: string
          lcg_max_crowd?: number
          lcg_max_damage_taken?: number
          lcg_max_damage_total?: number
          lcg_max_dpd?: number
          lcg_max_dpg?: number
          lcg_max_dpm?: number
          lcg_max_gold?: number
          lcg_max_gpm?: number
          lcg_max_tpd?: number
          lcg_ver_main?: string
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
          lcg_mvp_rank: string
          lcg_participant_id: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_spell_name_1: string
          lcg_spell_name_2: string
          lcg_summoner_puuid: string
          lcg_team_id: number
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
          lcg_mvp_rank: string
          lcg_participant_id: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_spell_name_1: string
          lcg_spell_name_2: string
          lcg_summoner_puuid: string
          lcg_team_id: number
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
          lcg_mvp_rank?: string
          lcg_participant_id?: number
          lcg_perk_name_1?: string
          lcg_perk_name_2?: string
          lcg_spell_name_1?: string
          lcg_spell_name_2?: string
          lcg_summoner_puuid?: string
          lcg_team_id?: number
          row_num?: number
        }
        Relationships: []
      }
      lcg_match_sub: {
        Row: {
          lcg_crowd_time: number
          lcg_damage_per_gold: number
          lcg_damage_per_minute: number
          lcg_damage_tower: number
          lcg_destroy_inhibitor: number
          lcg_destroy_tower: number
          lcg_destroy_ward: number
          lcg_double_kill: number
          lcg_first_kill: string
          lcg_first_tower: string
          lcg_game_id: number
          lcg_gold_per_minute: number
          lcg_gold_total: number
          lcg_heal_total: number
          lcg_normal_ward: number
          lcg_participant_id: number
          lcg_penta_kill: number
          lcg_quadra_kill: number
          lcg_summoner_puuid: string
          lcg_triple_kill: number
          lcg_vision_score: number
          lcg_vision_ward: number
          row_num: number
        }
        Insert: {
          lcg_crowd_time: number
          lcg_damage_per_gold: number
          lcg_damage_per_minute: number
          lcg_damage_tower: number
          lcg_destroy_inhibitor: number
          lcg_destroy_tower: number
          lcg_destroy_ward: number
          lcg_double_kill: number
          lcg_first_kill: string
          lcg_first_tower: string
          lcg_game_id: number
          lcg_gold_per_minute: number
          lcg_gold_total: number
          lcg_heal_total: number
          lcg_normal_ward: number
          lcg_participant_id: number
          lcg_penta_kill: number
          lcg_quadra_kill: number
          lcg_summoner_puuid: string
          lcg_triple_kill: number
          lcg_vision_score: number
          lcg_vision_ward: number
          row_num?: number
        }
        Update: {
          lcg_crowd_time?: number
          lcg_damage_per_gold?: number
          lcg_damage_per_minute?: number
          lcg_damage_tower?: number
          lcg_destroy_inhibitor?: number
          lcg_destroy_tower?: number
          lcg_destroy_ward?: number
          lcg_double_kill?: number
          lcg_first_kill?: string
          lcg_first_tower?: string
          lcg_game_id?: number
          lcg_gold_per_minute?: number
          lcg_gold_total?: number
          lcg_heal_total?: number
          lcg_normal_ward?: number
          lcg_participant_id?: number
          lcg_penta_kill?: number
          lcg_quadra_kill?: number
          lcg_summoner_puuid?: string
          lcg_triple_kill?: number
          lcg_vision_score?: number
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
          lcg_total_atakhan: number
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
          lcg_total_atakhan: number
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
          lcg_total_atakhan?: number
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
      lcg_player_champion: {
        Row: {
          lcg_assist_count: number
          lcg_champion_id: number
          lcg_champion_name: string
          lcg_death_count: number
          lcg_fail_count: number
          lcg_kill_count: number
          lcg_play_count: number
          lcg_puuid: string
          lcg_win_count: number
          row_num: number
        }
        Insert: {
          lcg_assist_count: number
          lcg_champion_id: number
          lcg_champion_name: string
          lcg_death_count: number
          lcg_fail_count: number
          lcg_kill_count: number
          lcg_play_count: number
          lcg_puuid: string
          lcg_win_count: number
          row_num?: number
        }
        Update: {
          lcg_assist_count?: number
          lcg_champion_id?: number
          lcg_champion_name?: string
          lcg_death_count?: number
          lcg_fail_count?: number
          lcg_kill_count?: number
          lcg_play_count?: number
          lcg_puuid?: string
          lcg_win_count?: number
          row_num?: number
        }
        Relationships: []
      }
      lcg_player_data: {
        Row: {
          lcg_player: string
          lcg_present_division: string
          lcg_present_high_division: string
          lcg_present_high_tier: string
          lcg_present_tier: string
          lcg_previous_division: string
          lcg_previous_high_division: string
          lcg_previous_high_tier: string
          lcg_previous_tier: string
          lcg_rank_point: number
          lcg_rank_win: number
          lcg_summoner_icon: number
          lcg_summoner_id: number
          lcg_summoner_name: string
          lcg_summoner_nickname: string
          lcg_summoner_puuid: string
          lcg_summoner_tag: string
        }
        Insert: {
          lcg_player: string
          lcg_present_division: string
          lcg_present_high_division: string
          lcg_present_high_tier: string
          lcg_present_tier: string
          lcg_previous_division: string
          lcg_previous_high_division: string
          lcg_previous_high_tier: string
          lcg_previous_tier: string
          lcg_rank_point: number
          lcg_rank_win: number
          lcg_summoner_icon: number
          lcg_summoner_id: number
          lcg_summoner_name: string
          lcg_summoner_nickname: string
          lcg_summoner_puuid: string
          lcg_summoner_tag: string
        }
        Update: {
          lcg_player?: string
          lcg_present_division?: string
          lcg_present_high_division?: string
          lcg_present_high_tier?: string
          lcg_present_tier?: string
          lcg_previous_division?: string
          lcg_previous_high_division?: string
          lcg_previous_high_tier?: string
          lcg_previous_tier?: string
          lcg_rank_point?: number
          lcg_rank_win?: number
          lcg_summoner_icon?: number
          lcg_summoner_id?: number
          lcg_summoner_name?: string
          lcg_summoner_nickname?: string
          lcg_summoner_puuid?: string
          lcg_summoner_tag?: string
        }
        Relationships: []
      }
      lcg_player_ranking: {
        Row: {
          lcg_player_name: string
          lcg_ranking_count: number
          lcg_ranking_rank: number
          lcg_ranking_score: number
          lcg_summoner_nickname: string
          lcg_summoner_puuid: string
          row_num: number
        }
        Insert: {
          lcg_player_name: string
          lcg_ranking_count: number
          lcg_ranking_rank: number
          lcg_ranking_score: number
          lcg_summoner_nickname: string
          lcg_summoner_puuid: string
          row_num?: number
        }
        Update: {
          lcg_player_name?: string
          lcg_ranking_count?: number
          lcg_ranking_rank?: number
          lcg_ranking_score?: number
          lcg_summoner_nickname?: string
          lcg_summoner_puuid?: string
          row_num?: number
        }
        Relationships: []
      }
      lcg_player_relative: {
        Row: {
          lcg_fail_count: number
          lcg_match_line: string
          lcg_opponent_puuid: string
          lcg_person_puuid: string
          lcg_play_count: number
          lcg_win_count: number
          row_num: number
        }
        Insert: {
          lcg_fail_count: number
          lcg_match_line: string
          lcg_opponent_puuid: string
          lcg_person_puuid: string
          lcg_play_count: number
          lcg_win_count: number
          row_num?: number
        }
        Update: {
          lcg_fail_count?: number
          lcg_match_line?: string
          lcg_opponent_puuid?: string
          lcg_person_puuid?: string
          lcg_play_count?: number
          lcg_win_count?: number
          row_num?: number
        }
        Relationships: []
      }
      lcg_player_statistics: {
        Row: {
          lcg_count_ace: number
          lcg_count_assist: number
          lcg_count_atakhan: number
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
          lcg_count_mvp: number
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
          lcg_count_ace: number
          lcg_count_assist: number
          lcg_count_atakhan: number
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
          lcg_count_mvp: number
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
          lcg_count_ace?: number
          lcg_count_assist?: number
          lcg_count_atakhan?: number
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
          lcg_count_mvp?: number
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
      all_ace_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_count_play: number
          lcg_count_ace: number
          rank: number
        }[]
      }
      all_assist_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
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
          lcg_count_play: number
          avgdeath: number
          rank: number
        }[]
      }
      all_avg_dpg_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          count: number
          avg: number
          rank: number
        }[]
      }
      all_avg_dpm_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          count: number
          avg: number
          rank: number
        }[]
      }
      all_avg_gpm_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          count: number
          avg: number
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
          lcg_count_play: number
          lcg_count_crowd_time: number
          rank: number
        }[]
      }
      all_cs_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          cs: number
          rank: number
        }[]
      }
      all_damage_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_damage: number
          rank: number
        }[]
      }
      all_death_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_death: number
          rank: number
        }[]
      }
      all_demolisher_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
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
          lcg_count_play: number
          lcg_count_gold: number
          rank: number
        }[]
      }
      all_jungle_object_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
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
          lcg_count_play: number
          lcg_count_kill: number
          rank: number
        }[]
      }
      all_multikill_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_double_kill: number
          lcg_count_triple_kill: number
          lcg_count_quadra_kill: number
          lcg_count_penta_kill: number
          lcg_multi_kill_total: number
          lcg_multi_kill_score: number
          rank: number
        }[]
      }
      all_mvp_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_count_play: number
          lcg_count_mvp: number
          rank: number
        }[]
      }
      all_taken_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_taken: number
          rank: number
        }[]
      }
      all_tier_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_present_tier: string
          lcg_present_division: string
          score: number
          rank: number
        }[]
      }
      all_vision_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
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
          lcg_champion_name: string
          assist: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_crowdtime_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          crowdtime: number
          rank: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_cs_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          cs: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_damage_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          damagetotal: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_death_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          death: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_dpg_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          lcg_damage_per_gold: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_dpm_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          lcg_damage_per_minute: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_gold_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          gold: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_gpm_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          lcg_gold_per_minute: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_hightaken_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          damagetaken: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_kill_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          kill: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_lowtaken_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          damagetaken: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_tower_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          lcg_destroy_tower: number
          lcg_damage_tower: number
          rank: number
          lcg_perk_name_1: string
          lcg_perk_name_2: string
          lcg_item_id_1: number
          lcg_item_id_2: number
          lcg_item_id_3: number
          lcg_item_id_4: number
          lcg_item_id_5: number
          lcg_item_id_6: number
          lcg_game_date: string
        }[]
      }
      onegame_best3_vision_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_summoner_puuid: string
          lcg_summoner_nickname: string
          lcg_champion_name: string
          lcg_vision_score: number
          lcg_normal_ward: number
          lcg_vision_ward: number
          lcg_destroy_ward: number
          rank: number
        }[]
      }
      player_relative: {
        Args: Record<PropertyKey, never>
        Returns: {
          lcg_person_puuid: string
          lcg_match_line: string
          lcg_opponent_puuid: string
          lcg_summoner_nickname: string
          lcg_play_count: number
          lcg_win_count: number
          lcg_fail_count: number
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
