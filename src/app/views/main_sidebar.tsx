'use client'

import * as Style from "./main_sidebar.style";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShuffle as icon_shuffle, faGamepad as icon_latest, faUsers as icon_player,
    faScroll as icon_history, faTrophy as icon_ranking
} from "@fortawesome/free-solid-svg-icons";

const MainSidebar = (props : {selectView:number, changeView:any}) => {
    const btnRef:any = useRef<any>([]);

    const btnClick = (idx:number) => {
        props.changeView(idx);

        if(btnRef.current[idx].className.includes('select_active')) {
            btnRef.current[idx].className = btnRef.current[idx].className.replace(' select_active', '');
        }

        for(let i:number=0; i<btnRef.current.length; i++) {
            if(i !== idx) {
                btnRef.current[i].className = btnRef.current[i].className.replace(' select_active', '');
            }
        }
    }

    useEffect(() => {
        btnRef.current[props.selectView].className += ' select_active';
    }, [props.selectView])

    return (
        <Style.MainSidebar>
            <div className="sidebar_container">
                <button onClick={() => btnClick(0)} ref={(btn:any) => (btnRef.current[0] = btn)}>
                    <FontAwesomeIcon icon={icon_latest} className="btn_icon"/>
                    최근 게임
                </button>
                <button onClick={() => btnClick(1)} ref={(btn:any) => (btnRef.current[1] = btn)}>
                    <FontAwesomeIcon icon={icon_history} className="btn_icon"/>
                    내전 전적
                </button>
                <button onClick={() => btnClick(2)} ref={(btn:any) => (btnRef.current[2] = btn)}>
                    <FontAwesomeIcon icon={icon_ranking} className="btn_icon"/>
                    스코어 랭킹
                </button>
                <button onClick={() => btnClick(3)} ref={(btn:any) => (btnRef.current[3] = btn)}>
                    <FontAwesomeIcon icon={icon_player} className="btn_icon"/>
                    플레이어
                </button>
                <button onClick={() => btnClick(4)} ref={(btn:any) => (btnRef.current[4] = btn)}>
                    <FontAwesomeIcon icon={icon_shuffle} className="btn_icon"/>
                    팀 섞기
                </button>
            </div>
        </Style.MainSidebar>
    )
}

export default MainSidebar;
