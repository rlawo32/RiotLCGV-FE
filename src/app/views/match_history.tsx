'use client';

import * as Style from "./match_history.style";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgMatchInfoQuery } from "../queries/getLcgMatchInfoQuery";
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
import ProhibitionIcon from "../icons/ProhibitionIcon";
import MatchAnalyze from "./match_analyze";
import GameTimeIcon from "../icons/GameTimeIcon";

const MatchHistory = (props : {gameId:number}) => {
    const selectRef:any = useRef<any>([]);

    const supabase = useSupabaseBrowser();
    const gameId:number = props.gameId;
    let imageUrl1:string = "";
    let imageUrl2:string = "";
    let lcgMaxDamageTotal:number = 0;
    let lcgMaxDamageTaken:number = 0;
    let lcgGameDuration:number = 0; 
    let lcgGameDurationMin:number = 0; 

    const [load, setLoad] = useState<boolean>(false);
    const [selectTab, setSelectTab] = useState<string>("S");
    
    const { data: lcgMatchInfo, isLoading: dataLoading, isError: dataError, error: errorMsg } = useQuery(getLcgMatchInfoQuery(supabase, gameId), {});

    useEffect(() => {
        let loadTime:number = 0;
        if(!dataLoading) {
            loadTime += 1000;
        } else if (dataError) {
            console.log(errorMsg);
        } 
        setTimeout(() => {setLoad(true)}, loadTime);
    }, [lcgMatchInfo])

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {enabled:!!lcgMatchInfo});
    const { data: lcgPlayerData } = useQuery(getLcgPlayerDataQuery(supabase), {enabled:!!lcgMatchEtc});
    const { data: lcgMatchMain } = useQuery(getLcgMatchMainQuery(supabase, gameId), {enabled:!!lcgMatchEtc});
    const { data: lcgMatchSub } = useQuery(getLcgMatchSubQuery(supabase, gameId), {enabled:!!lcgMatchMain});
    const { data: lcgMatchTeam } = useQuery(getLcgMatchTeamQuery(supabase, gameId), {enabled:!!lcgMatchSub});

    const playerData = (puuid:string, flag:string):string|undefined => {
        let result:string|undefined = "";

        if(!!lcgPlayerData) {
            result = getPlayerData(lcgPlayerData, puuid, flag);
        }

        return result;
    }

    const selectTabClick = (idx:number, tab:string) => {
        setSelectTab(tab);

        if(!selectRef.current[idx].className.includes('select_tab')) {
            selectRef.current[idx].className += ' select_tab';
        } else {            
            selectRef.current[idx].className = selectRef.current[idx].className.replace(' select_tab', '');
        }

        for(let i:number=0; i<selectRef.current.length; i++) {
            if(i !== idx) {
                selectRef.current[i].className = selectRef.current[i].className.replace(' select_tab', '');
            }
        }
    }

    if(!!lcgMatchInfo) {
        lcgMaxDamageTotal = lcgMatchInfo[0].lcg_max_damage_total;
        lcgMaxDamageTaken = lcgMatchInfo[0].lcg_max_damage_taken;

        lcgGameDuration = getGameDuration(lcgMatchInfo[0].lcg_game_duration);
        lcgGameDurationMin = getGameDuration(lcgGameDuration);

        if(!!lcgMatchEtc) {
            imageUrl1 = lcgMatchEtc[0].lcg_main_image;
            imageUrl2 = lcgMatchEtc[0].lcg_sub_image;
        }
    }
    
    return (
        <Style.MatchHistory $load={load} $type={"H"}>
            <div className="lcg_history_head">
                <div className="lcg_history_duration">
                    <GameTimeIcon />&nbsp;{lcgGameDurationMin}:{String(lcgGameDuration % 60).padStart(2, '0')}
                </div>
                <div className="lcg_history_tab">
                    <div className="lcg_tab_item lcg_tab_left select_tab" ref={(sl:any) => (selectRef.current[0] = sl)} 
                        onClick={() => selectTabClick(0, "S")}>
                        종합
                    </div>
                    <div className="lcg_tab_item lcg_tab_right" ref={(sl:any) => (selectRef.current[1] = sl)} 
                        onClick={() => selectTabClick(1, "A")}>
                        상세 지표
                    </div>
                </div>
                <div className="lcg_history_empty">
                </div>
            </div>
            {
                selectTab === 'S' ?
                    <>
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
                                                                {
                                                                    lcgTeam.lcg_bans_name_1 !== 'Empty' ?
                                                                        <div className="ban_champion">
                                                                            <img src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_1 + ".png"} 
                                                                            alt={"ban_champion_5"} className="lcg_image bans_image" />
                                                                            <ProhibitionIcon />
                                                                        </div> : <div/>
                                                                }
                                                                {
                                                                    lcgTeam.lcg_bans_name_2 !== 'Empty' ?
                                                                        <div className="ban_champion">
                                                                            <img src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_2 + ".png"} 
                                                                            alt={"ban_champion_2"} className="lcg_image bans_image" />
                                                                            <ProhibitionIcon />
                                                                        </div> : <div/>
                                                                }
                                                                {
                                                                    lcgTeam.lcg_bans_name_3 !== 'Empty' ?
                                                                        <div className="ban_champion">
                                                                            <img src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_3 + ".png"} 
                                                                            alt={"ban_champion_3"} className="lcg_image bans_image" />
                                                                            <ProhibitionIcon />
                                                                        </div> : <div/>
                                                                }
                                                                {
                                                                    lcgTeam.lcg_bans_name_4 !== 'Empty' ?
                                                                        <div className="ban_champion">
                                                                            <img src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_4 + ".png"} 
                                                                            alt={"ban_champion_4"} className="lcg_image bans_image" />
                                                                            <ProhibitionIcon />
                                                                        </div> : <div/>
                                                                }
                                                                {
                                                                    lcgTeam.lcg_bans_name_5 !== 'Empty' ?
                                                                        <div className="ban_champion">
                                                                            <img src={imageUrl1 + "champion/" + lcgTeam.lcg_bans_name_5 + ".png"} 
                                                                            alt={"ban_champion_5"} className="lcg_image bans_image" />
                                                                            <ProhibitionIcon />
                                                                        </div> : <div/>
                                                                }
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
                                                <th>소환사</th>
                                                <th>KDA</th>
                                                <th>피해량</th>
                                                <th className="lcg_ward_head">와드</th>
                                                <th>CS</th>
                                                <th colSpan={2}>아이템</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                lcgMatchMain?.filter((lcgFilter) => lcgFilter.lcg_team_id === lcgTeam.lcg_team_id).map((lcgMain, idx) => {
                                                    return (
                                                        <tr key={"lcgMain" + idx}>
                                                            <td className="lcg_summoner">
                                                                <div className="lcg_summoner_wrap">
                                                                    <div className="lcg_summoner_info">
                                                                        <div className="lcg_champion">
                                                                            <div className="skeleton_portrait" />
                                                                            <img src={imageUrl1 + "champion/" + lcgMain.lcg_champion_name + ".png"} 
                                                                            alt={"champion"} className="lcg_image champion_image" />
                                                                            <div className="lcg_sub_data lcg_level">
                                                                                {lcgMain.lcg_champion_level}
                                                                            </div>
                                                                        </div>
                                                                        <div className="lcg_spell">
                                                                            <div className="skeleton_content" />
                                                                            <img src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_1 + ".png"} 
                                                                            alt={"spell1"} className="lcg_image spell_image" />
                                                                            <img src={imageUrl1 + "spell/" + lcgMain.lcg_spell_name_2 + ".png"} 
                                                                            alt={"spell2"} className="lcg_image spell_image" />
                                                                        </div>
                                                                        <div className="lcg_perk">
                                                                            <img src={imageUrl2 + lcgMain.lcg_perk_name_1} 
                                                                            alt={"perk1"} className="lcg_image perk_image1" />
                                                                            <img src={imageUrl2 + lcgMain.lcg_perk_name_2} 
                                                                            alt={"perk2"} className="lcg_image perk_image2" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="lcg_summoner_name">
                                                                        <Link href={"https://www.op.gg/summoners/kr/" + playerData(lcgMain.lcg_summoner_puuid, "opgg")} target="_blank">
                                                                            <div className="lcg_nickname">
                                                                                {playerData(lcgMain.lcg_summoner_puuid, "name")}
                                                                            </div>
                                                                        </Link>
                                                                        <MvpIcon rank={lcgMain.lcg_mvp_rank} />
                                                                    </div>
                                                                </div>
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
                                                            <td className="lcg_deal">
                                                                <div className="lcg_graph">
                                                                    <div className="lcg_damage">
                                                                        {lcgMain.lcg_damage_total.toLocaleString()}
                                                                        <DamageGraph standard={lcgMaxDamageTotal} target={lcgMain.lcg_damage_total} flag={"D"}/>
                                                                    </div>
                                                                    <div className="lcg_taken">
                                                                        {lcgMain.lcg_damage_taken.toLocaleString()}
                                                                        <DamageGraph standard={lcgMaxDamageTaken} target={lcgMain.lcg_damage_taken} flag={"T"}/>
                                                                    </div>
                                                                </div>
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
                                                                    분당 {((lcgMain.lcg_minion_count + lcgMain.lcg_jungle_count) / lcgGameDuration).toFixed(1)}
                                                                </div>
                                                            </td>
                                                            <td className="lcg_item">
                                                                {
                                                                    lcgMain.lcg_item_id_1 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_1 + ".png"} 
                                                                        alt={"item1"} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_2 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_2 + ".png"} 
                                                                        alt={"item2"} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_3 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_3 + ".png"} 
                                                                        alt={"item3"} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_4 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_4 + ".png"} 
                                                                        alt={"item4"} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_5 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_5 + ".png"} 
                                                                        alt={"item5"} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                                {
                                                                    lcgMain.lcg_item_id_6 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_6 + ".png"} 
                                                                        alt={"item6"} className="item_image" />
                                                                        :<div className="item_image empty_image"/>
                                                                }
                                                            </td>
                                                            <td className="lcg_acc">
                                                                {
                                                                    lcgMain.lcg_item_id_7 !== 0 ?
                                                                        <img src={imageUrl1 + "item/" + lcgMain.lcg_item_id_7 + ".png"} 
                                                                        alt={"item7"} className="item_image" />
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
                    :
                selectTab === 'A' ?
                    <>
                        {
                            lcgMatchInfo && lcgMatchMain && lcgMatchSub ?
                            <MatchAnalyze lcgMatchInfo={lcgMatchInfo} lcgMatchMain={lcgMatchMain} lcgMatchSub={lcgMatchSub} imageUrl={imageUrl1} />
                            : <></>
                        }
                    </>
                    : <></>
            }
        </Style.MatchHistory>
    )
}

export default MatchHistory;
