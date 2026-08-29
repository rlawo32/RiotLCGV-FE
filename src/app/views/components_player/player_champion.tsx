'use client'

import * as Tool from "../match_player_v2.style";
import * as Style from "./player_champion.style";

import React from "react";

import { ChampionListData } from "./match_player_types";
import { championInfoMessage } from "./match_player_message"

interface PlayerChampionProps {
    totalGameCount:number|null,
    dataList:ChampionListData[],
    pageChampion: number,
    setPageChampion: React.Dispatch<React.SetStateAction<number>>,
    imageMainUrl: string,
    imageExtension: string,
}

const PlayerChampion = (props : PlayerChampionProps) => {

    return (
        <Style.PlayerChampion>
            <div className="champion_list">
                {props.dataList.map((item, idx, arr) => {
                    const name:string = item.lcg_champion_name;
                    const play:number = item.lcg_play_count;
                    const win:number = item.lcg_win_count;
                    const fail:number = item.lcg_fail_count;
                    const kill:number = item.lcg_kill_count;
                    const death:number = item.lcg_death_count;
                    const assist:number = item.lcg_assist_count;
                    const rate:number = Number(((item.lcg_win_count * 100) / item.lcg_play_count).toFixed(1));
                    const totalPage:number|null = props.totalGameCount;
                    return (
                        <React.Fragment key={name}>
                            <Style.PlayerChampionListItem>
                                <div className="item_left">
                                    <Tool.LcgRowNumCalc $idx={idx+1}>
                                        {idx+1}
                                    </Tool.LcgRowNumCalc>
                                    <img src={"https://img.rabbitgang-img.shop/champion/" + name + ".webp"} 
                                    alt={"champion"} className="champion_img" loading="lazy"/>
                                    <div>
                                        {name}
                                    </div>
                                    {championInfoMessage(kill, death, assist, win, fail).map((info, index) => (
                                        <Tool.InfoMessageBox key={index} $flag={info.flag}>
                                            {info.message}
                                        </Tool.InfoMessageBox>
                                    ))}
                                </div>
                                <div className="item_center">
                                    <div className="kda_detail">
                                        <span>{(kill / play).toFixed(1)}</span>/
                                        <span className="kda_death">{(death / play).toFixed(1)}</span>/
                                        <span>{(assist / play).toFixed(1)}</span>
                                    </div>
                                    <div className="kda_calc">
                                        <Tool.LcgKdaCalc $k={kill} $d={death} $a={assist}>
                                            {death !== 0 ? 
                                                <span>
                                                    KDA
                                                    <span className="kda">
                                                        {((kill + assist) / death).toFixed(2)}
                                                    </span>
                                                </span>: <span className="kda">Perfect</span>}
                                        </Tool.LcgKdaCalc>
                                    </div>
                                </div>
                                <div className="item_right">
                                    <div className="match_detail">
                                        <span>{play}전</span><span>{win}승</span><span>{fail}패</span>
                                    </div>
                                    <div className="match_calc">
                                        <div>승률 - {rate}%</div>
                                        <Tool.LcgWinningGraph $rate={rate}>
                                            <div className="rate_graph" />
                                        </Tool.LcgWinningGraph>
                                    </div>
                                </div>
                            </Style.PlayerChampionListItem>
                            {
                                idx === arr.length-1 && (!!totalPage ? totalPage > 10*props.pageChampion : 10) ? 
                                    <Tool.Pagination>
                                        <button onClick={() => props.setPageChampion(props.pageChampion + 1)}>
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
        </Style.PlayerChampion>
    )
}

export default PlayerChampion;