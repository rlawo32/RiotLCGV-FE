'use client'

import styled from "styled-components";

import { useEffect, useRef, useState } from "react";

import { PlayerListData } from "@/app/views/components_player/match_player_types";
import { textColors, purpleColors, bgColors, borderColors } from "@/app/views/components_player/match_player_theme";

const SelectBoxRelativeV2Style = styled('div')`
    position: relative;
    width: 100%;

    button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        padding: 6px 16px;
        margin: 0;
        border: 1px solid ${bgColors.card_active};
        border-radius: 8px;
        background-color: ${bgColors.card_active};
        color: ${textColors.main};
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;

        &::after {
            content: "";
            position: absolute;
            right: 14px;
            top: 50%;
            width: 7px;
            height: 7px;
            border-right: 2px solid ${textColors.main};
            border-bottom: 2px solid ${textColors.main};
            transform: translateY(-65%) rotate(45deg);
            pointer-events: none;
        }

        &:hover {
            border-color: ${borderColors.purple_blue};
        }

        &::focus {
            border-color: ${purpleColors.blue};
            box-shadow: 0 0 0 3px rgba(116, 119, 255, 0.12);
        }
    }

    .select_box {
        position: absolute;
        top: 105%;
        left: 0;
        display: flex;
        justify-content: center;
        height: 0;
        width: 100%;
        padding: 0 3px;
        border: none;
        border-radius: 5px;
        background-color: ${bgColors.card_active};
        z-index: 2;
    }

    ul.select_list {
        height: 0;
        width: 99%;
        padding: 0;
        border-radius: 8px;
        overflow: auto;
        background-color: ${bgColors.card};
        cursor: pointer;
        z-index: 3;
        user-select: none;
        list-style:none;
        word-break: keep-all;
        
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${textColors.main};
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: ${bgColors.card};
            border-radius: 5px;
        }
    }

    ul.select_list li {
        padding: 6px 12px;
        margin: 3px 0;
        border-radius: 8px;
        color: ${textColors.main};
        font-size: 1.2rem;
        text-align: left;
        line-height: 1.4em;
        opacity: 0.7;

        &:hover {
            background-color: ${bgColors.card_hover};
        }
    }

    .select_box.show_select {
        display: flex;
        align-items: center;
        padding: 5px;
        height: 210px;
        border: 1px solid ${borderColors.purple_blue};
    }

    .select_list.show_select {
        padding: 3px 0;
        height: 192px;
    }

    ul.select_list li.rs_active {
        background-color: ${bgColors.card};
        color: #ae90df;
        font-weight: 700;
        opacity: 1;
    }
`

interface PlayerRelativeSelectBoxProps {
    playerList:PlayerListData[],
    selectOpponent: string,
    setSelectOpponent: React.Dispatch<React.SetStateAction<string>>,
    selectRelativeIdx: number,
    setSelectRelativeIdx: React.Dispatch<React.SetStateAction<number>>,
}

const SelectBoxRelativeV2 = (props : PlayerRelativeSelectBoxProps) => {
    const selectBox:any = useRef<any>(null);
    const selectList:any = useRef<any>(null);
    const selectItem:any = useRef<any>([]);

    const [isSelectBoxShow, setIsSelectBoxShow] = useState<boolean>(false);
        
    const customSelectBox = () => {
        const result:any[] = [];

        for(let i:number=0; i<props.playerList.length; i++) {
            if(i === 0) {
                result.push(<li key={"player_all"} value={""}
                                onClick={() => onClickSelectItem(i, "")}
                                ref={(li:any) => (selectItem.current[i] = li)}>
                    전체</li>)
            } else {
                result.push(<li key={"player_" + i} value={props.playerList[i-1].lcg_summoner_puuid}
                                onClick={() => onClickSelectItem(i, props.playerList[i-1].lcg_summoner_puuid)}
                                ref={(li:any) => (selectItem.current[i] = li)}>
                    {props.playerList[i-1].lcg_summoner_name}</li>)
            }
        }
        return result;
    }

    const onClickSelectItem = (idx:number, oppid:string) => {
        setIsSelectBoxShow(false);
        props.setSelectRelativeIdx(idx);
        props.setSelectOpponent(oppid);

        selectItem.current[idx].className = selectItem.current[idx].className.replace('rs_active', '');
        selectItem.current[idx].className += 'rs_active';

        for(let i:number=0; i<selectItem.current.length; i++) {
            if(i !== idx) {
                selectItem.current[i].className = selectItem.current[i].className.replace('rs_active', '');
            }
        }
    }

    useEffect(() => {
        if(isSelectBoxShow) {
            selectBox.current.className += " show_select";
            selectList.current.className += " show_select";
            
            const handleOutsideClose = (e: {target: any}) => {
                // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
                if(isSelectBoxShow && (!selectBox.current.contains(e.target))) setIsSelectBoxShow(false);
            };
            document.addEventListener('click', handleOutsideClose);
            
            return () => document.removeEventListener('click', handleOutsideClose);
        } else {
            selectBox.current.className = selectBox.current.className.replace(' show_select', '');
            selectList.current.className = selectList.current.className.replace(' show_select', '');
        }
    }, [isSelectBoxShow])

    return (
        <SelectBoxRelativeV2Style>
            <button onClick={() => setIsSelectBoxShow(!isSelectBoxShow)}>
                {
                    props.selectRelativeIdx === 0 ? "전체" : props.playerList[props.selectRelativeIdx-1].lcg_summoner_name
                }
            </button>
            <div className="select_box" ref={selectBox}>
                <ul className="select_list" ref={selectList}>
                    {customSelectBox()}
                </ul>
            </div>
        </SelectBoxRelativeV2Style>
    )
}

export default SelectBoxRelativeV2;