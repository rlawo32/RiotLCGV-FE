'use client';

import * as Style from "./match_history.style";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgMatchInfoQuery } from "../queries/getLcgMatchInfoQuery";
import { getLcgMatchLogLatestQuery } from "../queries/getLcgMatchLogQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getLcgMatchMainQuery } from "../queries/getLcgMatchMainQuery";
import { getLcgMatchSubQuery } from "../queries/getLcgMatchSubQuery";
import { getLcgMatchTeamQuery } from "../queries/getLcgMatchTeamQuery";
import { getLcgPlayerDataQuery } from "../queries/getLcgPlayerDataQuery";

import { getGameDuration, getPlayerData } from "../component/match_tool";

import DamageGraph  from "../component/damage_graph";
import BaronIcon from "../icons/BaronIcon";
import DragonIcon from "../icons/DragonIcon";
import HeraldIcon from "../icons/HeraldIcon";
import HordeIcon from "../icons/HordeIcon";
import TurretIcon from "../icons/TurretIcon";
import GoldIcon from "../icons/GoldIcon";
import InhibitorIcon from "../icons/InhibitorIcon";
import MvpIcon from "../icons/MvpIcon";
import TeamBlueIcon from "../icons/TeamBlueIcon";
import TeamRedIcon from "../icons/TeamRedIcon";
import GameTimeIcon from "../icons/GameTimeIcon";
import LoadingSpinner from "../component/loading_spinner";
import ProhibitionIcon from "../icons/ProhibitionIcon";

const MatchLatestHistory = () => {
    const supabase = useSupabaseBrowser();
    let gameId:number = 0;
    let imageUrl1:string = "";
    let imageUrl2:string = "";
    let lcgMaxDamageTotal:number = 0;
    let lcgMaxDamageTaken:number = 0;
    let lcgGameDuration:number = 0; 
    let lcgGameDurationMin:number = 0; 
    let lcgGameDate:string = "";
    let lcgGameVer:string = "";

    const [load, setLoad] = useState<boolean>(false);

    const { data: lcgMatchLog, isLoading: loading1, isError: dataError1, error: errorMsg1 } = useQuery(getLcgMatchLogLatestQuery(supabase));
    if(!!lcgMatchLog) {
        gameId = lcgMatchLog[0].lcg_game_id;
        lcgGameDate = lcgMatchLog[0].lcg_game_date; 
        lcgGameVer = lcgMatchLog[0].lcg_game_ver;
    } else if(dataError1) {
        console.log(errorMsg1);
        return <div>Error</div>
    }

    const { data: lcgMatchInfo, isLoading: loading2, isError: dataErro2, error: errorMsg2 } = useQuery(getLcgMatchInfoQuery(supabase, gameId), {enabled:!!lcgMatchLog});

    useEffect(() => {
        let loadTime:number = 0;
        if(!loading2) {
            loadTime += 1000;
        } else if (dataErro2) {
            console.log(errorMsg2);
        } else {
            loadTime = 0;
        }
        setTimeout(() => {setLoad(true)}, loadTime);
    }, [lcgMatchInfo])

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {enabled:!!lcgMatchInfo});
    const { data: lcgPlayerData } = useQuery(getLcgPlayerDataQuery(supabase), {enabled:!!lcgMatchEtc});
    const { data: lcgMatchMain } = useQuery(getLcgMatchMainQuery(supabase, gameId), {enabled:!!lcgPlayerData});
    const { data: lcgMatchSub } = useQuery(getLcgMatchSubQuery(supabase, gameId), {enabled:!!lcgMatchMain});
    const { data: lcgMatchTeam, isLoading: loading3} = useQuery(getLcgMatchTeamQuery(supabase, gameId), {enabled:!!lcgMatchSub});

    const playerData = (puuid:string, flag:string):string|undefined => {
        let result:string|undefined = "";

        if(!!lcgPlayerData) {
            result = getPlayerData(lcgPlayerData, puuid, flag);
        }

        return result;
    }

    if(!!lcgMatchInfo) {
        lcgMaxDamageTotal = lcgMatchInfo[0].lcg_max_damage_total;
        lcgMaxDamageTaken = lcgMatchInfo[0].lcg_max_damage_taken;

        lcgGameDuration = lcgMatchInfo[0].lcg_game_duration;
        lcgGameDurationMin = getGameDuration(lcgGameDuration);

        if(!!lcgMatchEtc) {
            imageUrl1 = lcgMatchEtc[0].lcg_main_image;
            imageUrl2 = lcgMatchEtc[0].lcg_sub_image;
        }
    }
    
    return (
        <Style.MatchHistory $load={load} $type={"L"}>
            {
                loading1 && !loading3 ? <LoadingSpinner /> :
                    <>
                        {
                            lcgMatchTeam ?       
                                <div className="lcg_history_title">
                                    <div className="skeleton_title" />
                                    <div className="lcg_history_title_head">
                                        <div className="lcg_history_date">
                                            {lcgGameDate.substring(0, 10)}
                                        </div>
                                        <div className="lcg_history_ver"> 
                                            ver. {lcgGameVer}
                                        </div>
                                    </div>
                                    <div className="lcg_history_title_body">
                                        <div className="lcg_history_duration">
                                            <GameTimeIcon />&nbsp;{lcgGameDurationMin}:{String(lcgGameDuration % 60).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                                : <></>
                        }

                        {
                            lcgMatchTeam?.map((lcgTeam) => {
                                return (
                                    <table key={"lcgTeam" + lcgTeam.lcg_team_id} width={load ? 0 : 560}>
                                        <thead>
                                            <tr className="skeleton_ui">
                                                <th colSpan={11}>
                                                    <div className="aggregate">
                                                        <div className="aggregate_head">
                                                            <div className="skeleton_header" />
                                                            {lcgTeam.lcg_team_id === 100 ? 
                                                                <div className="aggregate_team team_blue">
                                                                    <TeamBlueIcon />&nbsp;&nbsp;TeamBlue
                                                                </div> 
                                                                : 
                                                                <div className="aggregate_team team_red">
                                                                    <TeamRedIcon />&nbsp;&nbsp;TeamRed
                                                                </div>
                                                            }
                                                            <div className="lcg_team_bans">
                                                                <div className="ban_champion">
                                                                    <Image src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_1 + ".png"} 
                                                                    alt={"ban_champion_1"} height={30} width={35} className="lcg_image bans_image" />
                                                                    <ProhibitionIcon />
                                                                </div>
                                                                <div className="ban_champion">
                                                                    <Image src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_2 + ".png"} 
                                                                    alt={"ban_champion_2"} height={30} width={35} className="lcg_image bans_image" />
                                                                    <ProhibitionIcon />
                                                                </div>
                                                                <div className="ban_champion">
                                                                    <Image src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_3 + ".png"} 
                                                                    alt={"ban_champion_3"} height={30} width={35} className="lcg_image bans_image" />
                                                                    <ProhibitionIcon />
                                                                </div>
                                                                <div className="ban_champion">
                                                                    <Image src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_4 + ".png"} 
                                                                    alt={"ban_champion_4"} height={30} width={35} className="lcg_image bans_image" />
                                                                    <ProhibitionIcon />
                                                                </div>
                                                                <div className="ban_champion">
                                                                    <Image src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_5 + ".png"} 
                                                                    alt={"ban_champion_5"} height={30} width={35} className="lcg_image bans_image" />
                                                                    <ProhibitionIcon />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="aggregate_body"> 
                                                            <div className="skeleton_header" />
                                                            <div className="lcg_team_data">
                                                                <div className="lcg_win" style={lcgTeam.lcg_team_win === 'Y' ? {color:"#5383E8"} : {color:"#E84057"}}>
                                                                    {lcgTeam.lcg_team_win === 'Y' ? "승리" : "패배"}
                                                                </div>
                                                                <div className="lcg_team_kda">
                                                                    {lcgTeam.lcg_total_kill + " / " + lcgTeam.lcg_total_death + " / " +  lcgTeam.lcg_total_assist}
                                                                </div>
                                                                <div className="lcg_team_gold">
                                                                    <div className="lcg_object_icon"><GoldIcon /></div> 
                                                                    <div className="lcg_object_data">{(lcgTeam.lcg_total_gold).toLocaleString()}</div>
                                                                </div>
                                                            </div>
                                                            <div className="lcg_object_count">
                                                                <div className="lcg_object_item">
                                                                    <div className="lcg_object_icon"><DragonIcon /></div> 
                                                                    <div className="lcg_object_data">{lcgTeam.lcg_total_dragon}</div>
                                                                </div>
                                                                <div className="lcg_object_item">
                                                                    <div className="lcg_object_icon"><BaronIcon /></div> 
                                                                    <div className="lcg_object_data">{lcgTeam.lcg_total_baron}</div>
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
                                                        </div>
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
                                                        <tr key={"lcgMain" + idx}>
                                                            <td className="lcg_champion">
                                                                <div className="skeleton_portrait" />
                                                                <Image src={imageUrl1 + "champion/" + lcgMain.lcg_champion_name + ".png"} 
                                                                alt={"champion"} height={40} width={40} className="lcg_image champion_image" />
                                                                <div className="lcg_sub_data lcg_level">
                                                                    {lcgMain.lcg_champion_level}
                                                                </div>
                                                            </td>
                                                            <td className="lcg_spell">
                                                                <div className="skeleton_content" />
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
                                                                <Link href={"https://www.op.gg/summoners/kr/" + playerData(lcgMain.lcg_summoner_puuid, "opgg")} target="_blank">
                                                                    <div className="lcg_nickname">
                                                                        {playerData(lcgMain.lcg_summoner_puuid, "name")}
                                                                    </div>
                                                                </Link>
                                                                <MvpIcon rank={lcgMain.lcg_mvp_rank} />
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
                                                                <div className="lcg_sub_data lcg_ward_count">
                                                                    {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_normal_ward}
                                                                    &nbsp;/&nbsp;
                                                                    {lcgMatchSub?.find((lcgSub) => lcgSub.lcg_participant_id === lcgMain.lcg_participant_id)?.lcg_vision_ward}
                                                                </div>
                                                            </td>
                                                            <td className="lcg_minion">
                                                                {lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count}
                                                                <div className="lcg_sub_data lcg_minute_cs">
                                                                    분당 {((lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count) / lcgGameDurationMin).toFixed(1)}
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
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>  
                                    </table>
                                )
                            })
                        }
                    </>
            }
        </Style.MatchHistory>
    )
}

export default MatchLatestHistory;
