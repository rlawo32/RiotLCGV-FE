'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import useSupabaseBrowser from "../supabase-browser";
import DamageGraph  from "./damage_graph";

import * as Style from "./match_history.style";
import { getLcgMatchInfo } from "../queries/getLcgMatchInfo";
import { getLcgMatchMain } from "../queries/getLcgMatchMain";
import { getLcgMatchSub } from "../queries/getLcgMatchSub";
import { getLcgMatchTeam } from "../queries/getLcgMatchTeam";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { useQueries } from "@tanstack/react-query";

const MatchHistory = (props : {gameId:number}) => {
    const supabase = useSupabaseBrowser();
    const gameId:number = props.gameId;

    // const [imageUrl1, setImageUrl1] = useState<string>("");
    // const [imageUrl2, setImageUrl2] = useState<string>("");
    const [lcgMatchInfoYn, setLcgMatchInfoYn] = useState<boolean>(false);
    // const [lcgGameDuration, setLcgGameDuration] = useState<number>(0);
    // const [lcgMaxDamageTotal, setLcgMaxDamageTotal] = useState<number>(0);
    // const [lcgMaxDamageTaken, setLcgMaxDamageTaken] = useState<number>(0);

    const { data: lcgMatchInfo, isLoading:lcgMatchInfoLoading, isError:lcgMatchInfoError, 
        error:errorMessage1 } = useQuery(getLcgMatchInfo(supabase, gameId), {enabled:gameId.toString.length > 0});
    const { data: lcgMatchMain, isLoading:lcgMatchMainLoading, isError:lcgMatchMainError, 
        error:errorMessage2 } = useQuery(getLcgMatchMain(supabase, gameId), {enabled:!!lcgMatchInfo});
    const { data: lcgMatchSub, isLoading:lcgMatchSubLoading, isError:lcgMatchSubError, 
        error:errorMessage3 } = useQuery(getLcgMatchSub(supabase, gameId), {enabled:!!lcgMatchMain});
    const { data: lcgMatchTeam, isLoading:lcgMatchTeamLoading, isError:lcgMatchTeamError, 
        error:errorMessage4 } = useQuery(getLcgMatchTeam(supabase, gameId), {enabled:!!lcgMatchSub});

    let imageUrl1:string;
    let imageUrl2:string;
    let lcgMaxDamageTotal:number;
    let lcgMaxDamageTaken:number;
    let lcgGameDuration:number;

    if(!!lcgMatchInfo) {
        lcgMaxDamageTotal = lcgMatchInfo[0].lcg_max_damage_total;
        lcgMaxDamageTaken = lcgMatchInfo[0].lcg_max_damage_taken;

        const lcgVerCdn = lcgMatchInfo[0].lcg_ver_cdn;
        const lcgVerMain = lcgMatchInfo[0].lcg_ver_main;

        imageUrl1 = lcgVerCdn + "/" + lcgVerMain + "/img/";
        imageUrl2 = lcgVerCdn + "/img/";

        let minute:number = Math.floor(lcgMatchInfo[0].lcg_game_duration / 60);
        const second:number = lcgMatchInfo[0].lcg_game_duration % 60;
        if(second > 30) {
            minute += 1;
        }
        lcgGameDuration = minute;
    }
    
    return (
        <Style.MatchHistory>
            {
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
                                                <td className="lcg_champion" style={{width:'15px'}}>
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
                                                <td className="lcg_common lcg_kda" style={{width:'90px'}}>
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
                                                    {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_destroy_ward}
                                                    <div className="lcg_ward_count">
                                                        {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_normal_ward}
                                                        &nbsp;/&nbsp;
                                                        {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_vision_ward}
                                                    </div>
                                                </td>
                                                <td className="lcg_common lcg_minion" style={{width:'70px'}}>
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
                })
            }
        </Style.MatchHistory>
    )
}

export default MatchHistory;
