'use client'

import Image from "next/image";
import DamageGraph from "../component/damage_graph";
import * as Style from "./match_analyze.stlye";
import { getGameDuration } from "../component/match_tool";
import DoubleKillIcon from "../icons/DoubleKillIcon";
import TripleKillIcon from "../icons/TripleKillIcon";
import QuadraKillIcon from "../icons/QuadraKillIcon";
import PentaKillIcon from "../icons/PentaKillIcon";

const MatchAnalyze = (props : {
    lcgMatchInfo:{
        lcg_game_duration: number
        lcg_game_id: number
        lcg_max_crowd: number
        lcg_max_damage_taken: number
        lcg_max_damage_total: number
        lcg_max_dpg: number
        lcg_max_dpm: number
        lcg_max_gold: number
        lcg_max_gpm: number
        lcg_ver_main: string}[],
    lcgMatchMain:{
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
        row_num: number}[],
    lcgMatchSub:{
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
        row_num: number}[],
    imageUrl:string
}) => {

    const duration:number =  getGameDuration(props.lcgMatchInfo[0].lcg_game_duration);
    const analyzeArr:{type:string}[] = [
        {type:"gold"}, {type:"crowd"}, {type:"dpm"}, {type:"gpm"}, {type:"dpg"}, {type:"multi"}
    ];

    return (
        <Style.MatchAnalyze>
            {analyzeArr.map((arr, idx1) => {
                return (
                    <div className="lcg_analyze_box" key={"analyze_" + idx1}>
                        <div className="lcg_analyze_title">
                            {
                                arr.type === 'gold' ? "골드량"
                                    :
                                arr.type === 'crowd' ? "군중제어 점수"
                                    : 
                                arr.type === 'dpm' ? <>DPM <span>({duration}분)</span></>
                                    :
                                arr.type === 'gpm' ? <>GPM <span>({duration}분)</span></>
                                    :
                                arr.type === 'dpg' ? <>DPG <span>({duration}분)</span></>
                                    : 
                                arr.type === 'multi' ? "멀티킬"
                                    : ""
                            }
                        </div>
                        <div className="lcg_analyze_content">
                            {props.lcgMatchSub.map((lcgData, idx2) => {
                                    return (
                                        <>
                                            {
                                                arr.type === 'gold' ?
                                                    <div className="lcg_analyze_data" key={"data_" + idx2}>
                                                        <div className="lcg_analyze_champion">
                                                            <Image src={props.imageUrl + "champion/" + props.lcgMatchMain.find((data) => data.lcg_participant_id === lcgData.lcg_participant_id)?.lcg_champion_name + ".png"} 
                                                            alt={"champion"} height={27} width={27} className="champion_image" />
                                                        </div>
                                                        <div className="lcg_analyze_graph">
                                                            <div className="lcg_analyze_figure">
                                                                {lcgData.lcg_gold_total.toLocaleString()}
                                                            </div>
                                                            <DamageGraph standard={props.lcgMatchInfo.find((data) => data.lcg_game_id === lcgData.lcg_game_id)?.lcg_max_gold} target={lcgData.lcg_gold_total} flag={"G"}/>
                                                        </div>
                                                    </div>
                                                    :
                                                arr.type === 'crowd' ?   
                                                    <div className="lcg_analyze_data" key={"data_" + idx2}>
                                                        <div className="lcg_analyze_champion">
                                                            <Image src={props.imageUrl + "champion/" + props.lcgMatchMain.find((data) => data.lcg_participant_id === lcgData.lcg_participant_id)?.lcg_champion_name + ".png"} 
                                                            alt={"champion"} height={27} width={27} className="champion_image" />
                                                        </div>
                                                        <div className="lcg_analyze_graph">
                                                            <div className="lcg_analyze_figure">
                                                                {lcgData.lcg_crowd_time}
                                                            </div>
                                                            <DamageGraph standard={props.lcgMatchInfo.find((data) => data.lcg_game_id === lcgData.lcg_game_id)?.lcg_max_crowd} target={lcgData.lcg_crowd_time} flag={"C"}/>
                                                        </div>
                                                    </div>        
                                                    :
                                                arr.type === 'dpm' ?   
                                                    <div className="lcg_analyze_data" key={"data_" + idx2}>
                                                        <div className="lcg_analyze_champion">
                                                            <Image src={props.imageUrl + "champion/" + props.lcgMatchMain.find((data) => data.lcg_participant_id === lcgData.lcg_participant_id)?.lcg_champion_name + ".png"} 
                                                            alt={"champion"} height={27} width={27} className="champion_image" />
                                                        </div>
                                                        <div className="lcg_analyze_graph">
                                                            <div className="lcg_analyze_figure">
                                                                {lcgData.lcg_damage_per_minute.toLocaleString()}
                                                            </div>
                                                            <DamageGraph standard={props.lcgMatchInfo.find((data) => data.lcg_game_id === lcgData.lcg_game_id)?.lcg_max_dpm} target={lcgData.lcg_damage_per_minute * 100} flag={"C"}/>
                                                        </div>
                                                    </div>        
                                                    :
                                                arr.type === 'gpm' ?   
                                                    <div className="lcg_analyze_data" key={"data_" + idx2}>
                                                        <div className="lcg_analyze_champion">
                                                            <Image src={props.imageUrl + "champion/" + props.lcgMatchMain.find((data) => data.lcg_participant_id === lcgData.lcg_participant_id)?.lcg_champion_name + ".png"} 
                                                            alt={"champion"} height={27} width={27} className="champion_image" />
                                                        </div>
                                                        <div className="lcg_analyze_graph">
                                                            <div className="lcg_analyze_figure">
                                                                {lcgData.lcg_gold_per_minute}
                                                            </div>
                                                            <DamageGraph standard={props.lcgMatchInfo.find((data) => data.lcg_game_id === lcgData.lcg_game_id)?.lcg_max_gpm} target={lcgData.lcg_gold_per_minute * 100} flag={"C"}/>
                                                        </div>
                                                    </div>        
                                                    :
                                                arr.type === 'dpg' ?   
                                                    <div className="lcg_analyze_data" key={"data_" + idx2}>
                                                        <div className="lcg_analyze_champion">
                                                            <Image src={props.imageUrl + "champion/" + props.lcgMatchMain.find((data) => data.lcg_participant_id === lcgData.lcg_participant_id)?.lcg_champion_name + ".png"} 
                                                            alt={"champion"} height={27} width={27} className="champion_image" />
                                                        </div>
                                                        <div className="lcg_analyze_graph">
                                                            <div className="lcg_analyze_figure">
                                                                {lcgData.lcg_damage_per_gold}
                                                            </div>
                                                            <DamageGraph standard={props.lcgMatchInfo.find((data) => data.lcg_game_id === lcgData.lcg_game_id)?.lcg_max_dpg} target={lcgData.lcg_damage_per_gold * 100} flag={"C"}/>
                                                        </div>
                                                    </div>        
                                                    :
                                                arr.type === 'multi' ?   
                                                    <div className="lcg_analyze_data" key={"data_" + idx2}>
                                                        <div className="lcg_analyze_champion">
                                                            <Image src={props.imageUrl + "champion/" + props.lcgMatchMain.find((data) => data.lcg_participant_id === lcgData.lcg_participant_id)?.lcg_champion_name + ".png"} 
                                                            alt={"champion"} height={27} width={27} className="champion_image" />
                                                        </div>
                                                        <div className="lcg_analyze_addition">
                                                            <div className="addition_item"><DoubleKillIcon /><span>{lcgData.lcg_double_kill}</span></div>
                                                            <div className="addition_item"><TripleKillIcon /><span>{lcgData.lcg_triple_kill}</span></div>
                                                            <div className="addition_item"><QuadraKillIcon /><span>{lcgData.lcg_quadra_kill}</span></div>
                                                            <div className="addition_item"><PentaKillIcon /><span>{lcgData.lcg_penta_kill}</span></div>
                                                        </div>
                                                    </div>        
                                                    :
                                                    <></>
                                            }
                                        </>
                                    )
                            })}
                        </div>
                    </div>
                )
            })}
        </Style.MatchAnalyze>
    )
}

export default MatchAnalyze;