'use client';

import * as Style from "./match_history.style";

import { useEffect, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Image from "next/image";
import Link from "next/link";
import useSupabaseBrowser from "../supabase-browser";

import { getLcgMatchInfoQuery } from "../queries/getLcgMatchInfoQuery";
import { getLcgMatchMainQuery } from "../queries/getLcgMatchMainQuery";
import { getLcgMatchSubQuery } from "../queries/getLcgMatchSubQuery";
import { getLcgMatchTeamQuery } from "../queries/getLcgMatchTeamQuery";

import DamageGraph  from "./damage_graph";
import BaronIcon from "../icons/baronIcon";
import DragonIcon from "../icons/dragonIcon";
import HeraldIcon from "../icons/HeraldIcon";
import HordeIcon from "../icons/HordeIcon";
import TurretIcon from "../icons/TurretIcon";
import GoldIcon from "../icons/goldIcon";
import InhibitorIcon from "../icons/inhibitorIcon";

const MatchHistory = (props : {gameId:number}) => {
    const supabase = useSupabaseBrowser();
    const gameId:number = props.gameId;

    const [load, setLoad] = useState<boolean>(false);

    const { data: lcgMatchInfo, isLoading: dataLoading, isError: dataError, error: errorMsg } = useQuery(getLcgMatchInfoQuery(supabase, gameId), {});
    const { data: lcgMatchMain } = useQuery(getLcgMatchMainQuery(supabase, gameId), {enabled:!!lcgMatchInfo});
    const { data: lcgMatchSub } = useQuery(getLcgMatchSubQuery(supabase, gameId), {enabled:!!lcgMatchMain});
    const { data: lcgMatchTeam } = useQuery(getLcgMatchTeamQuery(supabase, gameId), {enabled:!!lcgMatchSub});

    useEffect(() => {
        let loadTime:number = 1000;
        if(!dataLoading) {
            loadTime += 5000;
        } else if (dataError) {
            loadTime = 0;
            console.log(errorMsg);
        }
        setTimeout(() => {setLoad(true)}, loadTime);
    }, [dataLoading, dataError])

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
                        <table key={"lcgTeam" + lcgTeam.lcg_team_id} width={load ? 0 : 560}>
                            <thead>
                                <tr className="skeleton_ui">
                                    <th colSpan={11} className={lcgTeam.lcg_team_id === 100 ? "aggregate_left" : "aggregate_right"}>
                                        <div className="aggregate">
                                        {
                                            load ?
                                                <>
                                                    <div className="lcg_object_count">
                                                        <div className="lcg_object_item">
                                                            <div className="lcg_object_icon"><BaronIcon /></div> 
                                                            <div className="lcg_object_data">{lcgTeam.lcg_total_baron}</div>
                                                        </div>
                                                        <div className="lcg_object_item">
                                                            <div className="lcg_object_icon"><DragonIcon /></div> 
                                                            <div className="lcg_object_data">{lcgTeam.lcg_total_dragon}</div>
                                                        </div>
                                                        <div className="lcg_object_item">
                                                            <div className="lcg_object_icon"><HeraldIcon /></div> 
                                                            <div className="lcg_object_data">{lcgTeam.lcg_total_herald}</div>
                                                        </div>
                                                        <div className="lcg_object_item">
                                                            <div className="lcg_object_icon"><HordeIcon /></div>
                                                            <div className="lcg_object_data">{lcgTeam.lcg_total_horde}</div>
                                                        </div>
                                                        <div className="lcg_object_item">
                                                            <div className="lcg_object_icon"><TurretIcon /></div> 
                                                            <div className="lcg_object_data">{lcgTeam.lcg_total_tower}</div>
                                                        </div>
                                                        <div className="lcg_object_item">
                                                            <div className="lcg_object_icon"><InhibitorIcon /></div> 
                                                            <div className="lcg_object_data">{lcgTeam.lcg_total_inhibitor}</div>
                                                        </div>
                                                    </div>
                                                    <div className="lcg_team_gold">
                                                        <div className="lcg_object_icon"><GoldIcon /></div> 
                                                        <div className="lcg_object_data">{(lcgTeam.lcg_total_gold).toLocaleString()}</div>
                                                    </div>
                                                    <div className="lcg_team_kda">
                                                        {lcgTeam.lcg_total_kill + " / " + lcgTeam.lcg_total_death + " / " +  lcgTeam.lcg_total_assist}
                                                    </div>
                                                    <div className="lcg_win" style={lcgTeam.lcg_team_win === 'Y' ? {color:"#5383E8"} : {color:"#E84057"}}>
                                                        {lcgTeam.lcg_team_win === 'Y' ? "승리" : "패배"}
                                                    </div>
                                                </>
                                                :
                                                <div className="skeleton_header" />
                                        } 
                                        </div>
                                    </th>
                                </tr>
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
                                            <tr key={"lcgMain" + idx} className="skeleton_ui">
                                                {
                                                    load ?
                                                        <>
                                                            <td className="lcg_champion">
                                                                <Image src={imageUrl1 + "champion/" + lcgMain.lcg_champion_name + ".png"} 
                                                                alt={"champion"} height={40} width={40} className="lcg_image champion_image" />
                                                                <div className="lcg_level">
                                                                    {lcgMain.lcg_champion_level}
                                                                </div>
                                                            </td>
                                                            <td className="lcg_spell">
                                                                <Image src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_1 + ".png"} 
                                                                alt={"spell1"} height={20} width={20} className="lcg_image spell_image" />
                                                                <Image src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_2 + ".png"} 
                                                                alt={"spell2"} height={20} width={20} className="lcg_image spell_image" />
                                                            </td>
                                                            <td className="lcg_perk">
                                                                <Image src={imageUrl2 + lcgMain.lcg_perk_name_1} 
                                                                alt={"perk1"} height={22} width={22} className="lcg_image perk_image1" />
                                                                <Image src={imageUrl2 + lcgMain.lcg_perk_name_2} 
                                                                alt={"perk2"} height={16} width={16} className="lcg_image perk_image2" />
                                                            </td>
                                                            <td className="lcg_summoner_name">
                                                                <Link href={"https://www.op.gg/summoners/kr/" + lcgMain.lcg_summoner_name + "-" + lcgMain.lcg_summoner_tag} target="_blank">
                                                                    <div className="lcg_summoner_name">
                                                                        {lcgMain.lcg_summoner_name}
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="lcg_kda">
                                                                <div className="lcg_kda_head">
                                                                    <div>
                                                                        {lcgMain.lcg_kill_count} / {lcgMain.lcg_death_count} / {lcgMain.lcg_assist_count}
                                                                    </div>
                                                                    <div className="lcg_kda_rate">
                                                                        ({Math.round((lcgMain.lcg_kill_count + lcgMain.lcg_assist_count) / lcgTeam.lcg_total_kill * 100)}%)
                                                                    </div>
                                                                </div>
                                                                <Style.LcgKdaCalc $k={lcgMain.lcg_kill_count} $d={lcgMain.lcg_death_count} $a={lcgMain.lcg_assist_count}>
                                                                    {lcgMain.lcg_death_count !== 0 ? ((lcgMain.lcg_kill_count + lcgMain.lcg_assist_count) / lcgMain.lcg_death_count).toFixed(2) + ":1" : "Perfect"}
                                                                </Style.LcgKdaCalc>
                                                            </td>
                                                            <td className="lcg_damage">
                                                                {lcgMain.lcg_damage_total.toLocaleString()}
                                                                <DamageGraph standard={lcgMaxDamageTotal} target={lcgMain.lcg_damage_total} flag={"D"}/>
                                                            </td>
                                                            <td className="lcg_taken">
                                                                {lcgMain.lcg_damage_taken.toLocaleString()}
                                                                <DamageGraph standard={lcgMaxDamageTaken} target={lcgMain.lcg_damage_taken} flag={"T"}/>
                                                            </td>
                                                            <td className="lcg_ward">
                                                                {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_destroy_ward}
                                                                <div className="lcg_ward_count">
                                                                    {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_normal_ward}
                                                                    &nbsp;/&nbsp;
                                                                    {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_vision_ward}
                                                                </div>
                                                            </td>
                                                            <td className="lcg_minion">
                                                                {lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count}
                                                                <div className="lcg_minute_cs">
                                                                    분당 {((lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count) / lcgGameDuration).toFixed(1)}
                                                                </div>
                                                            </td>
                                                            <td className="lcg_item">
                                                                {
                                                                    lcgMain.lcg_item_id_1 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_1 + ".png"} 
                                                                        alt={"item1"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_2 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_2 + ".png"} 
                                                                        alt={"item2"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_3 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_3 + ".png"} 
                                                                        alt={"item3"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_4 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_4 + ".png"} 
                                                                        alt={"item4"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_5 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_5 + ".png"} 
                                                                        alt={"item5"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_6 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_6 + ".png"} 
                                                                        alt={"item6"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                            </td>
                                                            <td className="lcg_acc">
                                                                {
                                                                    lcgMain.lcg_item_id_7 !== 0 ?
                                                                        <Image src={imageUrl1 + "item/" + lcgMain.lcg_item_id_7 + ".png"} 
                                                                        alt={"item7"} height={22} width={22} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                            </td>
                                                        </>
                                                        :
                                                        <>
                                                            <td className="lcg_portrait">
                                                                <div className="skeleton_portrait" />
                                                            </td>
                                                            <td className="lcg_portrait">
                                                                <div className="skeleton_portrait" />
                                                            </td>
                                                            <td className="lcg_empty" colSpan={9}>
                                                                <div className="skeleton_content" />
                                                            </td>
                                                        </>
                                                }
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
