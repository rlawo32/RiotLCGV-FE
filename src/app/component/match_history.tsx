'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import Image from "next/image";

import * as Style from "./match_history.style";

const MatchHistory = () => {
    const client:any = supabase();

    const [matchMain, setMatchMain] = useState<{
        lcg_game_id:number, lcg_participant_id:number, lcg_team_id:number, lcg_summoner_id:number,
        lcg_summoner_name:string, lcg_summoner_tag:string, lcg_champion_id:number, lcg_champion_name:string,
        lcg_championLevel:number, lcg_spell_name_1:string, lcg_spell_name_2:string, lcg_perkName1:string,
        lcg_perk_name_2:string, lcg_item_id_1:number, lcg_item_id_2:number, lcg_item_id_3:number, 
        lcg_item_id_4:number,lcg_item_id_5:number, lcg_item_id_6:number, lcg_item_id_7:number, 
        lcg_kill_count:number, lcg_death_count:number,lcg_assist_count:number, lcg_damage_total:number, 
        lcg_damage_taken:number, lcg_minion_count:number,lcg_jungle_count:number, lcg_vision_score:number
    }[]>();

    useEffect(() => {
        const popWTotal = async():Promise<any> => {
            let {data:lcg__match_main, error} = await client
                .from("lcg_match_main")
                .select("*")
                .eq("lcg_game_id", 7389173588)

            return lcg__match_main;
        }

        popWTotal().then((data) => {
            setMatchMain(data);
        });
    }, [])
    
    return (
        <Style.MatchHistory>
            <h1>HELLO</h1>
            {matchMain !== undefined ? matchMain[0].lcg_damage_taken : <></>}
        </Style.MatchHistory>
    )
}

export default MatchHistory;
