'use client'

import * as Style from "./main_header.style";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShuffle as icon_shuffle, faGamepad as icon_latest, faUsers as icon_player,
    faScroll as icon_history, faTrophy as icon_ranking, faClipboardList as icon_patch
} from "@fortawesome/free-solid-svg-icons";

const MainHeader = (props : {selectView:number, changeView:any}) => {

    return (
        <Style.MainHeader>
            <div className="header_glow" />
            <div className="header_container">
                <Style.HeaderItem $selected={props.selectView === 0} onClick={() => props.changeView(0)}>
                    <FontAwesomeIcon icon={icon_latest} className="btn_icon"/>
                    최근 게임
                </Style.HeaderItem>
                <Style.HeaderItem $selected={props.selectView === 1}  onClick={() => props.changeView(1)}>
                    <FontAwesomeIcon icon={icon_history} className="btn_icon"/>
                    내전 전적
                </Style.HeaderItem>
                <Style.HeaderItem $selected={props.selectView === 2}  onClick={() => props.changeView(2)}>
                    <FontAwesomeIcon icon={icon_ranking} className="btn_icon"/>
                    랭킹
                </Style.HeaderItem>
                <Style.HeaderItem $selected={props.selectView === 3}  onClick={() => props.changeView(3)}>
                    <FontAwesomeIcon icon={icon_player} className="btn_icon"/>
                    플레이어
                </Style.HeaderItem>
                <Style.HeaderItem $selected={props.selectView === 4}  onClick={() => props.changeView(4)}>
                    <FontAwesomeIcon icon={icon_patch} className="btn_icon"/>
                    패치 노트
                </Style.HeaderItem>
                <Style.HeaderItem $selected={props.selectView === 5}  onClick={() => props.changeView(5)}>
                    <FontAwesomeIcon icon={icon_shuffle} className="btn_icon"/>
                    팀 섞기
                </Style.HeaderItem>
            </div>
        </Style.MainHeader>
    )
}

export default MainHeader;
