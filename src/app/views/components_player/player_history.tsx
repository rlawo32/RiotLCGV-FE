'use client'

import * as Tool from "../match_player_v2.style"
import * as Style from "./player_history.style";

import React from "react";

import { getGameDuration, getCurrentTimeCalc } from "@/app/component/match_tool";
import { HistoryListData } from "./match_player_types";

import MvpIcon from "@/app/icons/MvpIcon";
import MultikillIcon from "@/app/icons/MultikillIcon";
import MatchHistory from "../match_history";

interface PlayerHistoryProps {
    dataList: HistoryListData[],
    selectGameId: number,
    setSelectGameId: React.Dispatch<React.SetStateAction<number>>,
    pageHistory: number,
    setPageHistory: React.Dispatch<React.SetStateAction<number>>,
    imageMainUrl: string,
    imageSubUrl: string,
    imageExtension: string,
}

const PlayerHistory = (props : PlayerHistoryProps) => {

    return (
        <Style.PlayerHistory>
            <div className="history_list">
                {props.dataList.map((item, idx, arr) => {
                    const gameId:number = Number(item.lcg_game_id);
                    const gameDurationMin:number = getGameDuration(item.lcg_game_duration);
                    const imageMainUrl:string = props.imageMainUrl;
                    const imageSubUrl:string = props.imageSubUrl;
                    const imageExtension:string = props.imageExtension;
                    const totalPage:number = item.total_count;
                    return (
                        <React.Fragment key={idx}>
                            <Style.PlayerHistoryListItem $result={item.lcg_team_win === 'Y'}>
                                <div className="item_bar" />
                                <div className="history_left">
                                    <div className="history_result">{item.lcg_team_win === 'Y' ? '승리' : '패배'}</div>
                                    <div className="history_date">{getCurrentTimeCalc(item.lcg_game_date).split('오')[0]}</div>
                                    <div className="history_duration">{gameDurationMin}분 {String(item.lcg_game_duration % 60).padStart(2, '0')}초</div>
                                </div>
                                <div className="history_center">
                                    <div className="history_summoner">
                                        <div className="summoner_info">
                                            <div className="history_champion">
                                                <img src={imageMainUrl + "champion/" + item.lcg_champion_name + imageExtension}
                                                    alt={"champion"} className="champion_image"/>
                                                <div className="champion_level">
                                                    {item.lcg_champion_level}
                                                </div>
                                            </div>
                                            <div className="history_spell">
                                                <img src={imageMainUrl + "spell/" + item.lcg_spell_name_1 + imageExtension} 
                                                alt={"spell1"} className="lcg_image spell_image" />
                                                <img src={imageMainUrl + "spell/" + item.lcg_spell_name_2 + imageExtension} 
                                                alt={"spell2"} className="lcg_image spell_image" />
                                            </div>
                                            <div className="history_perk">
                                                <img src={imageSubUrl + item.lcg_perk_name_1 + imageExtension} 
                                                alt={"perk1"} className="lcg_image perk_image1" />
                                                <img src={imageSubUrl + item.lcg_perk_name_2 + imageExtension} 
                                                alt={"perk2"} className="lcg_image perk_image2" />
                                            </div>
                                        </div>
                                        <div className="history_kda">
                                            <div className="kda_view">
                                                {item.lcg_kill_count} / <span>{item.lcg_death_count}</span> / {item.lcg_assist_count} 
                                                
                                            </div>
                                            <div className="kda_calc">
                                                <Tool.LcgKdaCalc $k={item.lcg_kill_count} $d={item.lcg_death_count} $a={item.lcg_assist_count}>
                                                    {item.lcg_death_count !== 0 ? 
                                                        <span>
                                                            <span className="kda">
                                                                {((item.lcg_kill_count + item.lcg_assist_count) / item.lcg_death_count).toFixed(2)}
                                                            </span>
                                                            :1
                                                            <span className="kda_rate">
                                                                ({Math.round((item.lcg_kill_count + item.lcg_assist_count) / item.lcg_total_kill * 100)}%)
                                                            </span>
                                                        </span> : <span className="kda">Perfect</span>}
                                                </Tool.LcgKdaCalc>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="history_item">
                                        {Array.from({ length: 7 }).map((_, idx) => {
                                            const itemId = item[`lcg_item_id_${idx + 1}` as keyof typeof item];

                                            return itemId !== 0 ? (
                                                <img key={idx} src={imageMainUrl + "item/" + itemId + imageExtension} alt={`item${idx + 1}`} className="item_image" />
                                            ) : (
                                                <div key={idx} className="item_image empty_image" />
                                            );
                                        })}
                                        <div className="history_mvp">
                                            <MvpIcon rank={item.lcg_mvp_rank} />
                                        </div>
                                    </div>
                                </div>
                                <div className="history_right">
                                    <div className="history_cs">
                                        CS {item.cs}
                                        <div className="cs_minute">
                                            &nbsp;({((item.cs) / gameDurationMin).toFixed(1)})
                                        </div>
                                    </div>
                                    <div className="history_multikill">
                                        {
                                            item.lcg_penta_kill > 0 || item.lcg_quadra_kill > 0 || item.lcg_triple_kill > 0 || item.lcg_double_kill > 0 ? 
                                                <MultikillIcon kill={
                                                    item.lcg_penta_kill > 0 ? '펜타킬' :
                                                    item.lcg_quadra_kill > 0 ? '쿼드라킬' :
                                                    item.lcg_triple_kill > 0 ? '트리플킬' :
                                                    item.lcg_double_kill > 0 ? '더블킬' : ''
                                                } />
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <div className="history_player_list">
                                    {(item.player_list as any[]).sort((a, b) => a.team - b.team).map((player, idx2) => (
                                        <div className="players_info" key={idx2}>
                                            <img src={imageMainUrl + "champion/" + player.champion + imageExtension}
                                                alt={"champion"} className="champion_image"/>
                                            <div className="info_name">{String(player.name)}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="item_detail" onClick={() => gameId === props.selectGameId ? props.setSelectGameId(0) : props.setSelectGameId(gameId)} />
                            </Style.PlayerHistoryListItem>
                            <Style.PlayerHistoryBox $result={gameId === props.selectGameId}>
                                {gameId === props.selectGameId ? <MatchHistory gameId={props.selectGameId} type={"V2"} /> : <></>}
                            </Style.PlayerHistoryBox>
                            {
                                idx === arr.length-1 && totalPage > 10*props.pageHistory ? 
                                    <Tool.Pagination>
                                        <button onClick={() => props.setPageHistory(props.pageHistory + 1)}>
                                            <div className="btn_text">더 보기</div>
                                        </button>
                                    </Tool.Pagination>
                                    :
                                    <></>
                            }
                        </React.Fragment>
                    )
                })}
            </div>
        </Style.PlayerHistory>
    )
}

export default PlayerHistory;