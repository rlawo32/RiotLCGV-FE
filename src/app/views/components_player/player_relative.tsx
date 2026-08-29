'use client'

import * as Tool from "../match_player_v2.style"
import * as Style from "./player_relative.style";

import React, { useEffect, useState } from "react";

import { getWinningRateCalc } from "@/app/component/match_tool";
import { PlayerListData, RelativeListData } from "./match_player_types";
import { LaneIcon } from "./match_player_tool";
import { relativeInfoMessage } from "./match_player_message"

import SelectBoxRelativeV2 from "@/app/component/select_box_relative_v2";

interface PlayerRelativeProps {
    totalGameCount:number,
    playerList:PlayerListData[],
    dataList:RelativeListData[],
    selectOpponent: string,
    setSelectOpponent: React.Dispatch<React.SetStateAction<string>>,
    selectLane: string,
    setSelectLane: React.Dispatch<React.SetStateAction<string>>,
    pageRelative: number,
    setPageRelative: React.Dispatch<React.SetStateAction<number>>,
    selectRelativeIdx: number,
    setSelectRelativeIdx: React.Dispatch<React.SetStateAction<number>>,
    personNickname: string,
    personIcon: number,
    imageMainUrl: string,
    imageExtension: string,
}

const PlayerRelative = (props : PlayerRelativeProps) => {

    const [selectOption, setSelectOption] = useState<string>("A");

    const laneArr:string[] = ["", "TOP", "JUG", "MID", "ADC", "SUP"];

    useEffect(() => {
        if(props.selectLane === '' && props.selectOpponent.length === 0) { 
            // 라인 X & 상대 X
            setSelectOption("A")
        } else if(props.selectLane !== '' && props.selectOpponent.length === 0) {
            // 라인 O & 상대 X 
            setSelectOption("L")
        } else if(props.selectLane === '' && props.selectOpponent.length > 0) { 
            // 라인 X & 상대 O
            setSelectOption("O")
        } else if(props.selectLane !== '' && props.selectOpponent.length > 0) { 
            // 라인 O & 상대 O
            setSelectOption("M")
        } 
    }, [props.selectLane, props.selectOpponent])

    return (
        <Style.PlayerRelative>
            <div className="relative_head">
                <div className="relative_select_lane">
                    {laneArr.map((item) => {
                        return (
                            <Style.RelativeSelectLaneBox key={item} $selected={props.selectLane === item} onClick={() => {props.setSelectLane(item)}}>
                                {LaneIcon(item, props.selectLane === item)} {item.length === 0 ? "전체" : item}
                            </Style.RelativeSelectLaneBox>
                        )
                    })}
                </div>
                <div className="relative_select_player">
                    <SelectBoxRelativeV2 playerList={props.playerList} 
                                         selectOpponent={props.selectOpponent} setSelectOpponent={props.setSelectOpponent} 
                                         selectRelativeIdx={props.selectRelativeIdx} setSelectRelativeIdx={props.setSelectRelativeIdx} />
                </div>
            </div>
            <div className="relative_body">
                {     // 상대 선택
                    // selectOption === 'O' ?  
                    selectOption === 'NONE' ?  
                        props.dataList.map((item) => {
                            return (
                                <Style.RelativeListItem key={item.lcg_opponent_puuid} $type={"O"}>
                                    {item.play}
                                </Style.RelativeListItem>
                            )
                        })
                    : // 라인 선택
                    // selectOption === 'L' ?  
                    selectOption === 'NONE' ?  
                        props.dataList.map((item) => {
                            return (
                                <Style.RelativeListItem key={item.lcg_opponent_puuid} $type={"L"}>

                                </Style.RelativeListItem>
                            )
                        }) 
                    : // 상대&라인 선택
                    selectOption === 'M' ?  
                        <div className="relative_one">
                            {props.dataList?.slice(0,1).map((item, idx) => {
                                return (
                                    <React.Fragment key={item.lcg_opponent_puuid + idx}>
                                        <Style.RelativeListCard $type={"P"}>
                                            <div className="one_compare">
                                                {item.win > item.fail ? "우세" : ""}
                                            </div>
                                            <div className="one_win">
                                                {item.win}승
                                            </div>
                                            <div className="one_nickname">
                                                {props.personNickname.split("#")[0]}
                                            </div>
                                            <img src={props.imageMainUrl + "profileicon/" + props.personIcon + props.imageExtension} alt="person_icon" />
                                        </Style.RelativeListCard>
                                        <div className="one_center">
                                            {LaneIcon(props.selectLane, false)}
                                            <div>
                                                VS
                                            </div>
                                            <div className="one_play">
                                                {item.play}전
                                            </div>
                                        </div>
                                        <Style.RelativeListCard $type={"O"}>
                                            <img src={props.imageMainUrl + "profileicon/" + item.lcg_opponent_icon + props.imageExtension} alt="opponent_icon" />
                                            <div className="one_nickname">
                                                {item.lcg_opponent_nickname.split("#")[0]}
                                            </div>
                                            <div className="one_win">
                                                {item.fail}승
                                            </div>
                                            <div className="one_compare">
                                                {item.fail > item.win ? "우세" : ""}
                                            </div>
                                        </Style.RelativeListCard>
                                    </React.Fragment>
                                )
                            })}
                        </div> 
                    : // 기본                  
                        props.dataList.map((item, idx, arr) => {
                            const nickname:string = item.lcg_opponent_nickname;
                            const icon:number = item.lcg_opponent_icon;
                            const play:number = item.play;
                            const win:number = item.win;
                            const fail:number = item.fail;
                            const totalPage:number = item.total_page;
                            const rate = getWinningRateCalc(play, win);
                            return (
                                <React.Fragment key={item.lcg_opponent_puuid}>
                                    <Style.RelativeListItem  $type={"A"}>
                                        <div className="item_left">
                                            <Tool.LcgRowNumCalc $idx={idx+1}>
                                                {idx+1}
                                            </Tool.LcgRowNumCalc>
                                            <img src={props.imageMainUrl + "profileicon/" + icon + props.imageExtension} alt="opponent_icon" />
                                            <div className="opponent_nickname">
                                                {nickname.split("#")[0]}
                                            </div>
                                            {relativeInfoMessage(win, fail, props.totalGameCount).map((info, index) => (
                                                <Tool.InfoMessageBox key={index} $flag={info.flag}>
                                                    {info.message}
                                                </Tool.InfoMessageBox>
                                            ))}
                                        </div>
                                        <div className="item_center">
                                            <span><span className="relative_play">{item.play}</span>전</span>
                                            <span><span className="relative_win">{item.win}</span>승</span>
                                            <span><span className="relative_fail">{item.fail}</span>패</span>
                                        </div>
                                        <div className="item_right">
                                            승률 - {rate}%
                                            <Tool.LcgWinningGraph $rate={rate}>
                                                <div className="rate_graph" />
                                            </Tool.LcgWinningGraph>
                                        </div>
                                    </Style.RelativeListItem>
                                    {
                                        idx === arr.length-1 && (totalPage > 10*props.pageRelative) ? 
                                            <Tool.Pagination>
                                                <button onClick={() => props.setPageRelative(props.pageRelative + 1)}>
                                                    <div className="btn_text">더 보기</div>
                                                </button>
                                            </Tool.Pagination>
                                            :
                                            <></>
                                    }
                                </React.Fragment>
                            )
                        })
                }
            </div>
        </Style.PlayerRelative>
    )
}

export default PlayerRelative;