
export type PlayerListData = {
    lcg_summoner_puuid: string;
    lcg_winning_streak: number;
    lcg_player: string;
    lcg_summoner_name: string;
    lcg_summoner_nickname: string;
    lcg_player_hide: string;
    lcg_present_tier: string;
    lcg_present_division: string;
    lcg_rank_point: number;
    lcg_summoner_icon: number;
};

export type CategoryData = {
    title: string;
    value: string; // A : 종합, H : 최근 전적, C : 챔피언 전적, R : 상대 전적
};

export type PositionData = {
    lane: string;
    rate: number;
    death: number;
    win: number;
    fail: number;
};

export type ChampionData = {
    champion_name: string;
    kill: number;
    death: number;
    assist: number;
    win: number;
    fail: number;
};

export type RelativeData = {
    opponent: string;
    nickname: string;
    icon: number;
    play: number;
    win: number;
    fail: number;
};

export type HistoryListData = {
    lcg_game_id: string;
    lcg_game_date: string;
    lcg_game_duration: number;
    lcg_game_type: string;
    lcg_game_mode: string;
    lcg_team_win: string;
    lcg_summoner_puuid: string;
    lcg_summoner_nickname: string;
    lcg_champion_name: string;
    lcg_champion_level: number;
    lcg_spell_name_1: string;
    lcg_spell_name_2: string;
    lcg_perk_name_1: string;
    lcg_perk_name_2: string;
    lcg_mvp_rank: string;
    lcg_kill_count: number;
    lcg_death_count: number;
    lcg_assist_count: number;
    lcg_total_kill: number;
    lcg_damage_total: number;
    lcg_max_damage_total: number;
    lcg_damage_taken: number;
    lcg_max_damage_taken: number;
    lcg_destroy_ward: number;
    lcg_normal_ward: number;
    lcg_vision_ward: number;
    cs: number;
    lcg_item_id_1: number;
    lcg_item_id_2: number;
    lcg_item_id_3: number;
    lcg_item_id_4: number;
    lcg_item_id_5: number;
    lcg_item_id_6: number;
    lcg_item_id_7: number;
    lcg_double_kill: number;
    lcg_triple_kill: number;
    lcg_quadra_kill: number;
    lcg_penta_kill: number;
    player_list: any[];
    total_count: number;
};

export type ChampionListData = {
    lcg_champion_name: string;
    lcg_kill_count: number;
    lcg_death_count: number;
    lcg_assist_count: number;
    lcg_play_count: number;
    lcg_win_count: number;
    lcg_fail_count: number;
};

export type RelativeListData = {
    lcg_person_puuid: string;
    lcg_opponent_puuid: string;
    lcg_opponent_nickname: string;
    lcg_opponent_icon: number;
    lcg_match_line: string;
    play: number;
    win: number;
    fail: number;
    total_page: number;
};