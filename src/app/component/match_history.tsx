'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import Image from "next/image";

import DamageGraph  from "./damage_graph";
import * as Style from "./match_history.style";

const MatchHistory = (props : {gameId:number}) => {
    const client:any = supabase();

    const [imageUrl1, setImageUrl1] = useState<string>("");
    const [imageUrl2, setImageUrl2] = useState<string>("");

    const [lcgMatchInfoYn, setLcgMatchInfoYn] = useState<boolean>(false);
    const [lcgGameDuration, setLcgGameDuration] = useState<number>(0);
    const [lcgMaxDamageTotal, setLcgMaxDamageTotal] = useState<number>(0);
    const [lcgMaxDamageTaken, setLcgMaxDamageTaken] = useState<number>(0);

    const [lcgMatchMain, setLcgMatchMain] = useState<{
        lcg_game_id:number, lcg_participant_id:number, lcg_team_id:number, lcg_summoner_id:number,
        lcg_summoner_name:string, lcg_summoner_tag:string, lcg_champion_id:number, lcg_champion_name:string,
        lcg_champion_level:number, lcg_spell_name_1:string, lcg_spell_name_2:string, lcg_perk_name_1:string,
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
                .select("lcg_game_id, lcg_ver_main, lcg_ver_cdn, lcg_game_duration," + 
                    " lcg_ver_lang, lcg_max_damage_total, lcg_max_damage_taken")
                .eq("lcg_game_id", props.gameId)

            return lcg_match_info;
        }

        const lcgMatchMainQuery = async():Promise<any> => {
            let {data:lcg__match_main, error} = await client
                .from("lcg_match_main")
                .select("*")
                .eq("lcg_game_id", props.gameId)

            return lcg__match_main;
        }

        const lcgMatchSubQuery = async():Promise<any> => {
            let {data:lcg_match_sub, error} = await client
                .from("lcg_match_sub")
                .select("*")
                .eq("lcg_game_id", props.gameId)

            return lcg_match_sub;
        }

        const lcgMatchTeamQuery = async():Promise<any> => {
            let {data:lcg_match_team, error} = await client
                .from("lcg_match_team")
                .select("*")
                .eq("lcg_game_id", props.gameId)

            return lcg_match_team;
        }

        lcgMatchInfoQuery().then((data) => {
            console.log(data)
            if(data[0] !== undefined) {
                setImageUrl1(data[0].lcg_ver_cdn + "/" + data[0].lcg_ver_main + "/img/");
                setImageUrl2(data[0].lcg_ver_cdn + "/img/");
                setLcgMaxDamageTotal(data[0].lcg_max_damage_total);
                setLcgMaxDamageTaken(data[0].lcg_max_damage_taken);

                let minute:number = Math.floor(data[0].lcg_game_duration / 60);
                let second:number = data[0].lcg_game_duration % 60;
                if(second > 30) {
                    minute += 1;
                }
                setLcgGameDuration(minute);

                setLcgMatchInfoYn(true);

                lcgMatchMainQuery().then((data) => {
                    setLcgMatchMain(data);
                });
        
                lcgMatchSubQuery().then((data) => {
                    setLcgMatchSub(data);
                });
        
                lcgMatchTeamQuery().then((data) => {
                    setLcgMatchTeam(data);
                });
            }
            
        });
    }, [props.gameId])
    
    return (
        <Style.MatchHistory $gameId={props.gameId}>
            {
                lcgMatchInfoYn ?
                lcgMatchTeam?.map((lcgTeam) => {
                    return (
                        <table key={"lcgTeam" + lcgTeam.lcg_team_id}>
                            <thead>
                                <tr>
                                    <th colSpan={4}>소환사</th>
                                    <th>KDA</th>
                                    <th colSpan={2}>피해량</th>
                                    <th>와드</th>
                                    <th>CS</th>
                                    <th colSpan={2}>아이템</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lcgMatchMain?.filter((lcgFilter) => lcgFilter.lcg_team_id === lcgTeam.lcg_team_id).map((lcgMain, idx) => {
                                        return (
                                            <tr key={"lcgMain" + idx} className="lcg_main">
                                                <td className="lcg_common lcg_champion" style={{width:'15px'}}>
                                                    <Image src={imageUrl1 + "champion/" + lcgMain.lcg_champion_name + ".png"} 
                                                    alt={"champion"} height={45} width={45} className="lcg_image champion_image" />
                                                    <div className="lcg_level">
                                                        {lcgMain.lcg_champion_level}
                                                    </div>
                                                </td>
                                                <td className="lcg_spell" style={{width:'15px'}}>
                                                    <Image src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_1 + ".png"} 
                                                    alt={"spell1"} height={24} width={24} className="lcg_image spell_image" />
                                                    <Image src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_2 + ".png"} 
                                                    alt={"spell2"} height={24} width={24} className="lcg_image spell_image" />
                                                </td>
                                                <td className="lcg_perk" style={{width:'15px'}}>
                                                    <Image src={imageUrl2 + lcgMain.lcg_perk_name_1} 
                                                    alt={"perk1"} height={24} width={24} className="lcg_image perk_image1" />
                                                    <Image src={imageUrl2 + lcgMain.lcg_perk_name_2} 
                                                    alt={"perk2"} height={16} width={16} className="lcg_image perk_image2" />
                                                </td>
                                                <td className="lcg_summoner_name" style={{width:'60px'}}>
                                                    <div className="lcg_summoner_name">
                                                        {lcgMain.lcg_summoner_name}
                                                    </div>
                                                </td>
                                                <td className="lcg_common lcg_kda" style={{width:'60px'}}>
                                                    {lcgMain.lcg_kill_count} / {lcgMain.lcg_death_count} / {lcgMain.lcg_assist_count}
                                                </td>
                                                <td className="lcg_common lcg_damage" style={{width:'60px'}}>
                                                    {lcgMain.lcg_damage_total.toLocaleString()}
                                                    <DamageGraph standard={lcgMaxDamageTotal} target={lcgMain.lcg_damage_total} flag={"D"}/>
                                                </td>
                                                <td className="lcg_common lcg_taken" style={{width:'60px'}}>
                                                    {lcgMain.lcg_damage_taken.toLocaleString()}
                                                    <DamageGraph standard={lcgMaxDamageTaken} target={lcgMain.lcg_damage_taken} flag={"T"}/>
                                                </td>
                                                <td className="lcg_common lcg_ward" style={{width:'40px'}}>
                                                    {lcgMatchSub.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_normal_ward}
                                                    &nbsp;/&nbsp;
                                                    {lcgMatchSub.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_vision_ward}
                                                </td>
                                                <td className="lcg_common lcg_minion" style={{width:'50px'}}>
                                                    {lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count}
                                                    <div className="lcg_minute_cs">
                                                        분당 {((lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count) / lcgGameDuration).toFixed(1)}
                                                    </div>
                                                </td>
                                                <td className="lcg_item" style={{width:'88px'}}>
                                                    {
                                                        lcgMain.lcg_item_id_1 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_1 + ".png"} 
                                                            alt={"item1"} height={24} width={24} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_2 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_2 + ".png"} 
                                                            alt={"item2"} height={24} width={24} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_3 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_3 + ".png"} 
                                                            alt={"item3"} height={24} width={24} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_4 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_4 + ".png"} 
                                                            alt={"item4"} height={24} width={24} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_5 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_5 + ".png"} 
                                                            alt={"item5"} height={24} width={24} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                    {
                                                        lcgMain.lcg_item_id_6 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_6 + ".png"} 
                                                            alt={"item6"} height={24} width={24} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                </td>
                                                <td style={{width:'20px'}}>
                                                    {
                                                        lcgMain.lcg_item_id_7 !== 0 ?
                                                            <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_7 + ".png"} 
                                                            alt={"item7"} height={22} width={22} className="item_image" />
                                                            :<div className="item_image empty_image"/>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>  
                        </table>
                    )
                }) : <></>
            }
        </Style.MatchHistory>
    )
}

export default MatchHistory;
