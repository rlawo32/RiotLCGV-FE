'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import Image from "next/image";

import * as Style from "./match_history.style";

const MatchHistory = () => {
    const client:any = supabase();

    const [imageUrl1, setImageUrl1] = useState<string>("");
    const [imageUrl2, setImageUrl2] = useState<string>("");
    const [lcgMatchInfo, setLcgMatchInfo] = useState<{
        lcg_game_id:number, lcg_ver_main:string, lcg_ver_cdn:string, lcg_ver_lang:string
    }[]>([]);

    const [lcgMatchMain, setLcgMatchMain] = useState<{
        lcg_game_id:number, lcg_participant_id:number, lcg_team_id:number, lcg_summoner_id:number,
        lcg_summoner_name:string, lcg_summoner_tag:string, lcg_champion_id:number, lcg_champion_name:string,
        lcg_championLevel:number, lcg_spell_name_1:string, lcg_spell_name_2:string, lcg_perk_name_1:string,
        lcg_perk_name_2:string, lcg_item_id_1:number, lcg_item_id_2:number, lcg_item_id_3:number, 
        lcg_item_id_4:number,lcg_item_id_5:number, lcg_item_id_6:number, lcg_item_id_7:number, 
        lcg_kill_count:number, lcg_death_count:number,lcg_assist_count:number, lcg_damage_total:number, 
        lcg_damage_taken:number, lcg_minion_count:number,lcg_jungle_count:number, lcg_vision_score:number
    }[]>([]);

    const [lcgMatchSub, setLcgMatchSub] = useState<{
        lcg_game_id:number, lcg_participant_id:number, lcg_first_kil:string, lcg_first_tower:string,
        lcg_double_kill:number, lcg_triple_kill:number, lcg_quadra_kill:number, lcg_penta_kill:number,
        lcg_normal_ward:number, lcg_vision_ward:number, lcg_gold_total:number, lcg_heal_total:number,
        lcg_crowd_time:number, lcg_destroy_tower:number, lcg_damage_tower:number
    }[]>([]);

    const [lcgMatchTeam, setLcgMatchTeam] = useState<{
        lcg_game_id:number, lcg_team_id:number, lcg_team_win:string, lcg_first_dragon:string,
        lcg_first_baron:string, lcg_first_kill:string, lcg_first_tower:string, lcg_first_inhibitor:string,
        lcg_dragon_total:number, lcg_baron_total:number, lcg_tower_total:number, lcg_horde_total:number,
        lcg_herald_total:number, lcg_bans_name_1:string, lcg_bans_name_2:string, lcg_bans_name_3:string,
        lcg_bans_name_4:string, lcg_bans_name_5:string
    }[]>([]);

    useEffect(() => {
        const lcgMatchInfoQuery = async():Promise<any> => {
            let {data:lcg_match_info, error} = await client
                .from("lcg_match_info")
                .select("lcg_game_id, lcg_ver_main, lcg_ver_cdn, lcg_ver_lang")
                .eq("lcg_game_id", 7389173588)

            return lcg_match_info;
        }

        const lcgMatchMainQuery = async():Promise<any> => {
            let {data:lcg__match_main, error} = await client
                .from("lcg_match_main")
                .select("*")
                .eq("lcg_game_id", 7389173588)

            return lcg__match_main;
        }

        const lcgMatchSubQuery = async():Promise<any> => {
            let {data:lcg_match_sub, error} = await client
                .from("lcg_match_sub")
                .select("*")
                .eq("lcg_game_id", 7389173588)

            return lcg_match_sub;
        }

        const lcgMatchTeamQuery = async():Promise<any> => {
            let {data:lcg_match_team, error} = await client
                .from("lcg_match_team")
                .select("*")
                .eq("lcg_game_id", 7389173588)

            return lcg_match_team;
        }

        lcgMatchInfoQuery().then((data) => {
            setImageUrl1(data[0].lcg_ver_cdn + "/" + data[0].lcg_ver_main + "/img/");
            setImageUrl2(data[0].lcg_ver_cdn + "/img/");
            setLcgMatchInfo(data);
        });

        lcgMatchMainQuery().then((data) => {
            setLcgMatchMain(data);
        });

        lcgMatchSubQuery().then((data) => {
            setLcgMatchSub(data);
        });

        lcgMatchTeamQuery().then((data) => {
            setLcgMatchTeam(data);
        });
    }, [])
    
    return (
        <Style.MatchHistory>
            <h1>HELLO</h1>
            {
                lcgMatchTeam?.map((lcgTeam) => {
                    return (
                        <table key={"lcgTeam" + lcgTeam.lcg_team_id} >
                            <thead>
                                <tr>
                                    <th style={{width: '120px'}} colSpan={3}>캐릭터</th>
                                    <th style={{width: '70px'}} >KDA</th>
                                    <th style={{width: '500px'}} colSpan={2}>피해량</th>
                                    <th style={{width: '60px'}} >와드</th>
                                    <th style={{width: '60px'}} >CS</th>
                                    <th style={{width: '80px'}} colSpan={2}>아이템</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lcgMatchMain?.filter((lcgFilter) => lcgFilter.lcg_team_id === lcgTeam.lcg_team_id).map((lcgMain, idx) => {
                                        return (
                                            <tr key={"lcgMain" + idx} className="lcg_main">
                                                <td className="lcg_champion">
                                                    <Image src={imageUrl1 + "champion/" + lcgMain.lcg_champion_name + ".png"} 
                                                    alt={"champion"} height={60} width={60} className="lcg_image champion_image" />
                                                </td>
                                                <td className="lcg_spell" style={{width: '20px'}}>
                                                    <Image src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_1 + ".png"} 
                                                    alt={"spell1"} height={30} width={30} className="lcg_image spell_image" />
                                                    <Image src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_2 + ".png"} 
                                                    alt={"spell2"} height={30} width={30} className="lcg_image spell_image" />
                                                </td>
                                                <td className="lcg_perk" style={{width: '20px'}}>
                                                    <Image src={imageUrl2 + lcgMain.lcg_perk_name_1} 
                                                    alt={"perk1"} height={30} width={30} className="lcg_image perk_image" />
                                                    <Image src={imageUrl2 + lcgMain.lcg_perk_name_2} 
                                                    alt={"perk2"} height={20} width={20} className="lcg_image perk_image" />
                                                </td>
                                                <td className="lcg_kda">
                                                    {lcgMain.lcg_kill_count} / {lcgMain.lcg_death_count} / {lcgMain.lcg_assist_count}
                                                </td>
                                                <td className="lcg_damage">
                                                </td>
                                                <td className="lcg_taken">
                                                </td>
                                                <td className="lcg_ward">
                                                </td>
                                                <td className="lcg_minion">
                                                </td>
                                                <td className="lcg_item">
                                                    {
                                                        lcgMain.lcg_item_id_1 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_1 + ".png"} 
                                                            alt={"item1"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_2 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_2 + ".png"} 
                                                            alt={"item2"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_3 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_3 + ".png"} 
                                                            alt={"item3"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_4 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_4 + ".png"} 
                                                            alt={"item4"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_5 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_5 + ".png"} 
                                                            alt={"item5"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_6 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_6 + ".png"} 
                                                            alt={"item6"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        lcgMain.lcg_item_id_7 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_7 + ".png"} 
                                                            alt={"item7"} height={30} width={30} className="lcg_image" />
                                                            :<div className="lcg_image empty_image"/>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>  
                        </table>
                    )
                })
            }
        </Style.MatchHistory>
    )
}

export default MatchHistory;
