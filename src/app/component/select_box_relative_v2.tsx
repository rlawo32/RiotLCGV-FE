'use client'

import styled from "styled-components";

import { useEffect, useRef, useState } from "react";

import { PlayerListData } from "@/app/views/components_player/match_player_types";
import { textColors, purpleColors, bgColors, borderColors, media } from "@/app/views/components_player/match_player_theme";

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
        font-size: 1.2rem;
        text-align: left;
        line-height: 1.4em;
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

    /* ---------- responsive ---------- */
    ${media.tablet} {
        button {
            height: 38px;
            padding: 6px 14px;
            font-size: 1.15rem;
        }

        .select_box.show_select { height: 190px; }
        .select_list.show_select { height: 172px; }

        ul.select_list li {
            padding: 6px 10px;
            font-size: 1.15rem;
        }
    }

    ${media.mobile} {
        button {
            height: 36px;
            padding: 6px 12px;
            font-size: 1.1rem;
        }

        .select_box.show_select { height: 168px; }
        .select_list.show_select { height: 150px; }

        ul.select_list li { font-size: 1.1rem; }
    }
`;

const RelativeListBox = styled('li')<{$result:boolean}>`
    position: relative;
    background-color: ${({$result}) => $result ? `${purpleColors.blue}` : `${bgColors.card_active}`};
    color: ${({$result}) => $result ? `${textColors.main}` : `${textColors.default}`};
    font-weight: ${({$result}) => $result ? 700 : 600};
    opacity: ${({$result}) => $result ? 1 : 0.7};

    &:hover {
        background-color: ${({$result}) => $result ? `${purpleColors.blue}` : `${bgColors.card_hover}`};
    }
`;

interface PlayerRelativeSelectBoxProps {
    playerList:PlayerListData[],
    selectPlayer: string,
    selectOpponent: string,
    setSelectOpponent: React.Dispatch<React.SetStateAction<string>>,
    selectRelativeIdx: number,
    setSelectRelativeIdx: React.Dispatch<React.SetStateAction<number>>,
}

const SelectBoxRelativeV2 = (props : PlayerRelativeSelectBoxProps) => {
    const selectBox:any = useRef<any>(null);
    const selectList:any = useRef<any>(null);

    const [isSelectBoxShow, setIsSelectBoxShow] = useState<boolean>(false);

    const customSelectBox = () => {
        const result:any[] = [];

        for(let i:number=0; i<=props.playerList.length; i++) {
            if(i === 0) {
                result.push(<RelativeListBox key={"player_all"} value={""}
                                onClick={() => props.setSelectOpponent("")}
                                $result={props.selectOpponent === ""}>
                    전체</RelativeListBox>)
            } else {
                if(props.selectPlayer !== props.playerList[i-1].lcg_summoner_puuid) {
                    result.push(<RelativeListBox key={"player_" + i} value={props.playerList[i-1].lcg_summoner_puuid}
                                    onClick={() => props.setSelectOpponent(props.playerList[i-1].lcg_summoner_puuid)}
                                    $result={props.selectOpponent === props.playerList[i-1].lcg_summoner_puuid}>
                        {props.playerList[i-1].lcg_summoner_name}</RelativeListBox>)
                } 
            }
        }
        return result;
    }

    const opponentNickname = (oppid:string) => {
        return props.playerList.find((item) => item.lcg_summoner_puuid === oppid)?.lcg_summoner_name;
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

    useEffect(() => {
        setIsSelectBoxShow(false);
    }, [props.selectOpponent])

    return (
        <SelectBoxRelativeV2Style>
            <button onClick={() => setIsSelectBoxShow(!isSelectBoxShow)}>
                {
                    props.selectOpponent.length > 0 ? opponentNickname(props.selectOpponent) : "전체"
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