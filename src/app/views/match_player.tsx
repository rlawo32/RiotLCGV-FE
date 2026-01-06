'use client'

import * as Style from "./match_player.style";
import * as MainStyle from "./main_view.style";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgPlayerDataQuery, getSelectLcgPlayerChampionQuery, 
    getSelectLcgAllKdaQuery, getSelectLcgWinningRateQuery, getSelectLcgPlayerDataQuery, 
    getSelectLcgPlayerRelativeTotalQuery, getSelectLcgPlayerRelativeQuery, getSelectLcgPlayerPositionQuery,
    getSelectLcgPlayerAvgDpmQuery, getSelectLcgPlayerAvgGpmQuery, getSelectLcgPlayerAvgDpgQuery, 
    getSelectLcgPlayerMvpQuery, getSelectLcgPlayerAceQuery, getSelectLcgPlayerAiSummaryDataQuery,
    getPlayerMatchTotalQuery, getPlayerMatchQuery
} from "../queries/getLcgPlayerDataQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getWinningRateCalc, getPlayerData, getGameDuration, getCurrentTimeCalc } from "../component/match_tool";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown as arrow} from "@fortawesome/free-solid-svg-icons";

import LoadingSpinner from "../component/loading_spinner";
import LastUpdate from "../component/last_update";
import SelectBox from "../component/select_box_relative";
import ModalView from "../component/modal_view";
import MatchHistory from "./match_history";

import TopIcon from "../icons/TopIcon";
import JugIcon from "../icons/JugIcon";
import MidIcon from "../icons/MidIcon";
import AdcIcon from "../icons/AdcIcon";
import SupIcon from "../icons/SupIcon";
import MvpIcon from "../icons/MvpIcon";
import MultikillIcon from "../icons/MultikillIcon";

const MatchPlayer = (props:{directPuuid:string}) => {
    const supabase = useSupabaseBrowser();
    const matchListRef:any = useRef<any>([]);
    const matchHistoryRef:any = useRef<any>([]);
    const selectRef:any = useRef<any>([]);

    let imageUrl:string = ""; // R2
    let imageUrl1:string = ""; // ddragon
    let imageUrl2:string = ""; // ddragon
    let lastUpdate:string = "";
    let aiSummaryPrompt:{prompt:string, maxToken:number} = {prompt:"", maxToken:0};

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {});
    const { data: lcgPlayerData, isLoading: loading1 } = useQuery(getLcgPlayerDataQuery(supabase), {enabled:!!lcgMatchEtc});

    const [selectTab, setSelectTab] = useState<string>("A");
    const [selectPlayer, setSelectPlayer] = useState<string>("");
    const [selectOpponent, setSelectOpponent] = useState<string>("");
    const [pageChampion, setPageChampion] = useState<number>(1);
    const [pageRelative, setPageRelative] = useState<number>(1);
    const [pageHistory, setPageHistory] = useState<number>(1);
    const [isSummaryModal, setIsSummaryModal] = useState<boolean>(false);
    
    const [selectGameId, setSelectGameId] = useState<number>(0);
    const [selectIdx, setSelectIdx] = useState<number>(-1);
    
    const { data: selectPlayerData, isLoading: loading2 } = useQuery(getSelectLcgPlayerDataQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAllKda } = useQuery(getSelectLcgAllKdaQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerWinningRate } = useQuery(getSelectLcgWinningRateQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: playerRelativeTotal } = useQuery(getSelectLcgPlayerRelativeTotalQuery(supabase, selectPlayer, selectOpponent), {enabled:!!lcgPlayerData});
    const { data: selectPlayerChampion, count: countChampion } = useQuery(getSelectLcgPlayerChampionQuery(supabase, selectPlayer, pageChampion), {enabled:!!lcgPlayerData});
    const { data: selectPlayerRelative } = useQuery(getSelectLcgPlayerRelativeQuery(supabase, selectPlayer, selectOpponent, pageRelative), {enabled:!!lcgPlayerData});
    const { data: selectPlayerPostion } = useQuery(getSelectLcgPlayerPositionQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerDpm } = useQuery(getSelectLcgPlayerAvgDpmQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerGpm } = useQuery(getSelectLcgPlayerAvgGpmQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerDpg } = useQuery(getSelectLcgPlayerAvgDpgQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerMvp } = useQuery(getSelectLcgPlayerMvpQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAce } = useQuery(getSelectLcgPlayerAceQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: playerMatchTotal } = useQuery(getPlayerMatchTotalQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerMatch } = useQuery(getPlayerMatchQuery(supabase, selectPlayer, pageHistory), {enabled:!!lcgPlayerData});

    if(!!lcgMatchEtc) {
        imageUrl = lcgMatchEtc[0].lcg_r2_image;
        imageUrl1 = lcgMatchEtc[0].lcg_main_image;
        imageUrl2 = lcgMatchEtc[0].lcg_sub_image;
        lastUpdate = lcgMatchEtc[0].lcg_update_player;
    }

    // ai summary
    const { data: aiSummaryData } = useQuery(getSelectLcgPlayerAiSummaryDataQuery(supabase, selectPlayer), {enabled:!!selectPlayerData ? selectPlayerData[0].lcg_ai_summary_verify === 'N' : false});

    if(!!aiSummaryData && aiSummaryData.length > 0) {
        aiSummaryPrompt = {
            prompt: `다음은 LOL 유저의 데이터입니다 :\n\n
            ${JSON.stringify({
                tier : aiSummaryData[0].tier + " " + aiSummaryData[0].division,
                winRate : aiSummaryData[0].lcg_count_victory + "W/" + aiSummaryData[0].lcg_count_defeat + "L (" + aiSummaryData[0].winningrate + "%)",
                avgKda : aiSummaryData[0].avgkda + " (avgKill " + aiSummaryData[0].avgkill + " / avgDeath " + aiSummaryData[0].avgdeath + " / avgAssist " + aiSummaryData[0].avgassist + ")",
                avgVision : aiSummaryData[0].avgvision,
                avgDamage : aiSummaryData[0].avgdamage,
                avgTakenDamage : aiSummaryData[0].avgtaken,
                countMvp : aiSummaryData[0].lcg_count_mvp,
                countAce : aiSummaryData[0].lcg_count_ace,
                positionWinRate : {
                    top : aiSummaryData[0].topwin + "W/" + aiSummaryData[0].topfail + "L (" + aiSummaryData[0].toprate + "%)",
                    jug : aiSummaryData[0].jugwin + "W/" + aiSummaryData[0].jugfail + "L (" + aiSummaryData[0].jugrate + "%)",
                    mid : aiSummaryData[0].midwin + "W/" + aiSummaryData[0].midfail + "L (" + aiSummaryData[0].midrate + "%)",
                    adc : aiSummaryData[0].adcwin + "W/" + aiSummaryData[0].adcfail + "L (" + aiSummaryData[0].adcrate + "%)",
                    sup : aiSummaryData[0].supwin + "W/" + aiSummaryData[0].supfail + "L (" + aiSummaryData[0].suprate + "%)",
                },
                additionalData : {
                    dpm : aiSummaryData[0].avgdpm,
                    gpm : aiSummaryData[0].avggpm,
                    dpg : aiSummaryData[0].avgdpg,         
                }
            })}
            \n\n이 유저의 플레이 스타일, 강점, 약점을 요약해주고 평가해줘`,
            maxToken: 700,
        };
    } else {
        aiSummaryPrompt = {prompt:"", maxToken:0};
    }
    // ai summary

    const playerData = (puuid:string, flag:string):string|undefined => {
        let result:string|undefined = "";

        if(!!lcgPlayerData) {
            result = getPlayerData(lcgPlayerData, puuid, flag);
        }

        return result;
    }

    const lineDataExtraction = (flag:number):{play:number, win:number} => {
        let result:{play:number, win:number};
        if(!!selectPlayerPostion && selectPlayerPostion.length > 0) {
            switch(flag) {
                case 0:
                    result = {
                        play:selectPlayerPostion[0].lcg_position_top_count, 
                        win:selectPlayerPostion[0].lcg_position_top_win
                    }
                    break;
                case 1:
                    result = {
                        play:selectPlayerPostion[0].lcg_position_jug_count, 
                        win:selectPlayerPostion[0].lcg_position_jug_win
                    }
                    break;
                case 2:
                    result = {
                        play:selectPlayerPostion[0].lcg_position_mid_count, 
                        win:selectPlayerPostion[0].lcg_position_mid_win
                    }
                    break;
                case 3:
                    result = {
                        play:selectPlayerPostion[0].lcg_position_adc_count, 
                        win:selectPlayerPostion[0].lcg_position_adc_win
                    }
                    break;
                case 4:
                    result = {
                        play:selectPlayerPostion[0].lcg_position_sup_count, 
                        win:selectPlayerPostion[0].lcg_position_sup_win
                    }
                    break;
                default:
                    result = {
                        play:0, 
                        win:0
                    }
                    break;
            }
        } else {
            result = {
                play:0, 
                win:0
            }
        }
        return result;
    }

    const playerDataLine = ():any[] => {
        const result:any[] = [];
        // 0=top, 1=jug, 2=mid, 3=adc, 4=sup
        for(let i=0; i<5; i++) {
            result.push(<div className="line_data" key={"line_" + i}>
                <div className="item_icon">
                    {
                        i === 0 ? <TopIcon /> :
                        i === 1 ? <JugIcon /> :
                        i === 2 ? <MidIcon /> : 
                        i === 3 ? <AdcIcon /> : <SupIcon />
                    }
                </div>
                <div className="item_figure"> 
                    <div className="figure_graph">
                        <div className="graph_gage">
                            <strong>{getWinningRateCalc(lineDataExtraction(i).play, lineDataExtraction(i).win)}%</strong>
                        </div>
                        <svg viewBox="0 0 200 200" className="b_graph">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="#E84057" strokeWidth="30">
                            </circle>
                            <circle cx="100" cy="100" r="80" fill="none" stroke="#5383E8" strokeWidth="30" 
                            strokeDasharray={`${2 * Math.PI * 80 * (getWinningRateCalc(lineDataExtraction(i).play, lineDataExtraction(i).win) / 100)} ${
                                2 * Math.PI * 80 * (Math.trunc((1 - (getWinningRateCalc(lineDataExtraction(i).play, lineDataExtraction(i).win) / 100)) * 100) / 100)
                            }`}
                            strokeDashoffset={2 * Math.PI * 80 * 0.25}>
                            </circle>
                        </svg>
                        <svg viewBox="0 0 200 200" className="s_graph">
                            <circle cx="100" cy="100" r="70" fill="none" stroke="#E84057" strokeWidth="20">
                            </circle>
                            <circle cx="100" cy="100" r="70" fill="none" stroke="#5383E8" strokeWidth="20" 
                            strokeDasharray={`${2 * Math.PI * 70 * (getWinningRateCalc(lineDataExtraction(i).play, lineDataExtraction(i).win) / 100)} ${
                                2 * Math.PI * 70 * (Math.trunc((1 - (getWinningRateCalc(lineDataExtraction(i).play, lineDataExtraction(i).win) / 100)) * 100) / 100)
                            }`}
                            strokeDashoffset={2 * Math.PI * 70 * 0.25}>
                            </circle>
                        </svg>
                    </div>
                    <div className="figure_detail">
                        <div className="detail_play">
                            {lineDataExtraction(i).play} 게임
                        </div>
                        <div className="detail_wof">
                            {lineDataExtraction(i).win}승&nbsp;{lineDataExtraction(i).play - lineDataExtraction(i).win}패
                        </div>
                    </div>
                </div>
            </div>)
        }
        return result;
    }

    const selectTabClick = (idx:number, tab:string) => {
        setSelectTab(tab);

        if(!selectRef.current[idx].className.includes('select_tab')) {
            selectRef.current[idx].className += ' select_tab';
        } 

        for(let i:number=0; i<selectRef.current.length; i++) {
            if(i !== idx) {
                selectRef.current[i].className = selectRef.current[i].className.replace(' select_tab', '');
            }
        }
    }

    const matchListBoxClick = (gameId:number, idx:number) => {
        setSelectGameId(gameId);
        setSelectIdx(idx);

        if(!matchListRef.current[idx].className.includes('viewList_active')) {
            matchListRef.current[idx].className += ' viewList_active';
            matchHistoryRef.current[idx].className += ' view_active';
        } else {            
            matchListRef.current[idx].className = matchListRef.current[idx].className.replace(' viewList_active', '');
            matchHistoryRef.current[idx].className = matchHistoryRef.current[idx].className.replace(' view_active', '');
        }

        for(let i:number=0; i<matchListRef.current.length; i++) {
            if(i !== idx) {
                matchListRef.current[i].className = matchListRef.current[i].className.replace(' viewList_active', '');
                matchHistoryRef.current[i].className = matchHistoryRef.current[i].className.replace(' view_active', '');
            }
        }
    }

    useEffect(() => {
        setPageChampion(1);
        setPageRelative(1);
        setPageHistory(1);
        selectTabClick(0, "A");
        setSelectGameId(0);
        setSelectIdx(-1);
        aiSummaryPrompt = {prompt:"", maxToken:0};
    }, [selectPlayer])

    useEffect(() => {
        if(!!lcgPlayerData) {
            if(props.directPuuid.length > 0) {
                setSelectPlayer(props.directPuuid);
            } else {
                setSelectPlayer(lcgPlayerData[0].lcg_summoner_puuid);
            }
        }
    }, [])

    return (
        <Style.MatchPlayer>
            <LastUpdate type={"U"} date={lastUpdate}/>
            {
                loading1 && loading2 ? <LoadingSpinner /> :
                    <>
                        <Style.PlayerSelectBox>
                            {lcgPlayerData?.filter((data) => data.lcg_player_hide === 'N').map((data, idx) => {
                                return (
                                    <div className="select_item" onClick={() => {setSelectPlayer(data.lcg_summoner_puuid); setSelectOpponent("");}} key={"select_" + idx}>
                                        {data.lcg_summoner_nickname}
                                    </div>
                                )
                            })}
                        </Style.PlayerSelectBox>
                        <Style.PlayerDataBox>
                            {/* ai summary */}
                            {
                                !!selectPlayerData && isSummaryModal ? 
                                    <ModalView isModal={isSummaryModal} setIsModal={setIsSummaryModal} 
                                        selectPlayer={selectPlayer}
                                        aiSummaryVerify={selectPlayerData[0].lcg_ai_summary_verify} 
                                        aiSummaryContent={selectPlayerData[0].lcg_ai_summary_content}
                                        aiSummaryPrompt={aiSummaryPrompt} /> 
                                    : <></>
                            }
                            <div className="box_head">
                                <div className="head_top">
                                </div>
                                <div className="head_mid">
                                    {
                                        !!lcgPlayerData && !!selectPlayerData ? 
                                            <div className="head_summoner">
                                                <div className="head_section head_player">
                                                    <img src={imageUrl1 + "profileicon/" + selectPlayerData[0].lcg_summoner_icon + ".png"} 
                                                    alt={"profileIcon"} className="player_img" loading="lazy"/>
                                                    <Link href={"https://www.op.gg/summoners/kr/" + playerData(selectPlayerData[0].lcg_summoner_puuid, "opgg")} target="_blank">
                                                        <div className="player_name">
                                                            {playerData(selectPlayerData[0].lcg_summoner_puuid, "nick")}
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="head_section head_rank">
                                                    <img src={imageUrl + "public/rank_" + selectPlayerData[0].lcg_present_tier.toLowerCase() + ".png"} 
                                                    alt={"present_tier"} className="rank_img" loading="lazy"/>
                                                    {selectPlayerData[0].lcg_present_tier === 'NA' ? 
                                                        <div className="rank_desc">
                                                            UNRANK
                                                        </div>
                                                        :
                                                        <div className="rank_desc">
                                                            {selectPlayerData[0].lcg_present_tier}&nbsp;{selectPlayerData[0].lcg_present_division}
                                                        </div>
                                                    }
                                                </div>
                                            </div> : <></>
                                    }
                                    {
                                        !!lcgPlayerData && !!selectPlayerWinningRate && !!selectPlayerAllKda ? 
                                            <>
                                                <div className="head_data">
                                                    <div className="head_graph">
                                                        <div className="graph_gage">
                                                            <strong>{selectPlayerWinningRate[0].rate}%</strong>
                                                        </div>
                                                        <svg viewBox="0 0 200 200" className="b_graph">
                                                            <circle cx="100" cy="100" r="80" fill="none" stroke="#E84057" strokeWidth="30">
                                                            </circle>
                                                            <circle cx="100" cy="100" r="80" fill="none" stroke="#5383E8" strokeWidth="30" 
                                                            strokeDasharray={`${2 * Math.PI * 80 * (parseInt(selectPlayerWinningRate[0].rate) / 100)} ${
                                                                2 * Math.PI * 80 * (Math.trunc((1 - (parseInt(selectPlayerWinningRate[0].rate) / 100)) * 100) / 100)
                                                            }`}
                                                            strokeDashoffset={2 * Math.PI * 80 * 0.25}>
                                                            </circle>
                                                        </svg>
                                                        <svg viewBox="0 0 200 200" className="s_graph">
                                                            <circle cx="100" cy="100" r="70" fill="none" stroke="#E84057" strokeWidth="20">
                                                            </circle>
                                                            <circle cx="100" cy="100" r="70" fill="none" stroke="#5383E8" strokeWidth="20" 
                                                            strokeDasharray={`${2 * Math.PI * 70 * (parseInt(selectPlayerWinningRate[0].rate) / 100)} ${
                                                                2 * Math.PI * 70 * (Math.trunc((1 - (parseInt(selectPlayerWinningRate[0].rate) / 100)) * 100) / 100)
                                                            }`}
                                                            strokeDashoffset={2 * Math.PI * 70 * 0.25}>
                                                            </circle>
                                                        </svg>
                                                    </div>
                                                    <div className="head_detail">
                                                        <div className="detail_play">
                                                            <div className="count_play">
                                                                {selectPlayerWinningRate[0].lcg_count_play} 게임
                                                            </div>
                                                            <div className="count_wof">
                                                                {selectPlayerWinningRate[0].lcg_count_victory}승&nbsp;{selectPlayerWinningRate[0].lcg_count_defeat}패
                                                            </div>
                                                        </div>
                                                        <div className="detail_kda">
                                                            <div className="calc_kda">
                                                                <Style.LcgKdaCalc $k={selectPlayerAllKda[0].lcg_count_kill} $d={selectPlayerAllKda[0].lcg_count_death} $a={selectPlayerAllKda[0].lcg_count_assist}>
                                                                    {selectPlayerAllKda[0].lcg_count_death !== 0 ? 
                                                                        <span>
                                                                            KDA
                                                                            <span className="kda">
                                                                                {((selectPlayerAllKda[0].lcg_count_kill + selectPlayerAllKda[0].lcg_count_assist) / selectPlayerAllKda[0].lcg_count_death).toFixed(2)}
                                                                            </span>
                                                                        </span>: <span className="kda">Perfect</span>}
                                                                </Style.LcgKdaCalc>
                                                            </div>
                                                            <div className="origin_kda">
                                                                <span>{(selectPlayerAllKda[0].lcg_count_kill / selectPlayerAllKda[0].lcg_count_play).toFixed(1)}</span>/
                                                                <span>{(selectPlayerAllKda[0].lcg_count_death / selectPlayerAllKda[0].lcg_count_play).toFixed(1)}</span>/
                                                                <span>{(selectPlayerAllKda[0].lcg_count_assist / selectPlayerAllKda[0].lcg_count_play).toFixed(1)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : <></>
                                    }
                                    
                                    <div className="openai">
                                        <button onClick={() => setIsSummaryModal(true)}>
                                            <img src={imageUrl + "public/openai.png"} alt={"openai_img"} className="openai_img" loading="lazy"/>
                                        </button>
                                        <Style.ToolTipStyle className="tooltip">
                                            AI 분석
                                        </Style.ToolTipStyle>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="head_bottom">
                                    <div className="player_data_line">
                                        {playerDataLine()}
                                    </div>
                                    <hr></hr>
                                    <div className="player_data_info">
                                        <div className="info_item">
                                            <div className="item_figure">
                                                {
                                                    !!selectPlayerDpm ? selectPlayerDpm[0].avg : <></>
                                                }
                                            </div>
                                            <div className="item_title">
                                                평균 분당 데미지
                                            </div>
                                        </div>
                                        <div className="info_item">
                                            <div className="item_figure">
                                                {
                                                    !!selectPlayerGpm ? selectPlayerGpm[0].avg : <></>
                                                }
                                            </div>
                                            <div className="item_title">
                                                평균 분당 골드 획득
                                            </div>
                                        </div>
                                        <div className="info_item">
                                            <div className="item_figure">
                                                {
                                                    !!selectPlayerDpg ? selectPlayerDpg[0].avg : <></>
                                                }
                                            </div>
                                            <div className="item_title">
                                                평균 골드당 데미지
                                            </div>
                                        </div>
                                        <div className="info_item">
                                            <div className="item_figure">
                                                {
                                                    !!selectPlayerMvp ? selectPlayerMvp[0].lcg_count_mvp : <></>
                                                }
                                            </div>
                                            <div className="item_title">
                                                MVP 횟수
                                            </div>
                                        </div>
                                        <div className="info_item">
                                            <div className="item_figure">
                                                {
                                                    !!selectPlayerAce ? selectPlayerAce[0].lcg_count_ace : <></>
                                                }
                                            </div>
                                            <div className="item_title">
                                                ACE 횟수
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box_body">
                                <div className="body_tab">
                                    <button className="lcg_tab_item" onClick={() => selectTabClick(0, "A")} ref={(sl:any) => (selectRef.current[0] = sl)}>
                                        최근 전적
                                    </button>
                                    <button className="lcg_tab_item" onClick={() => selectTabClick(1, "B")} ref={(sl:any) => (selectRef.current[1] = sl)}>
                                        상대 전적
                                    </button>
                                    <button className="lcg_tab_item" onClick={() => selectTabClick(2, "C")} ref={(sl:any) => (selectRef.current[2] = sl)}>
                                        챔피언 전적
                                    </button>
                                </div>
                                {
                                    selectTab === "A" ? 
                                        <div className="body_section">
                                            {selectPlayerMatch?.map((data, idx) => {
                                                const gameDurationMin = getGameDuration(data.lcg_game_duration);
                                                return (
                                                    <React.Fragment key={"match_" + idx}>
                                                        <Style.MatchItem $win={data.lcg_team_win} ref={(ml:any) => (matchListRef.current[idx] = ml)}>
                                                            <div className="item_bar" />
                                                            <div className="item_info">
                                                                <div className="info_mode">{data.lcg_game_mode === 'CLASSIC' ? '소환사의 협곡' : '칼바람나락'}</div>
                                                                <div className="info_date">{getCurrentTimeCalc(data.lcg_game_date).split('오')[0]}</div>
                                                                <div className="info_win">{data.lcg_team_win === 'Y' ? '승리' : '패배'}</div>
                                                                <div className="info_time">{gameDurationMin}분 {String(data.lcg_game_duration % 60).padStart(2, '0')}초</div>
                                                            </div>
                                                            <div className="item_main">
                                                                <div className="main_top">
                                                                    <div className="main_champion">
                                                                        <img src={imageUrl1 + "champion/" + data.lcg_champion_name + ".png"}
                                                                            alt={"champion"} className="champion_image"/>
                                                                        <div className="champion_level">
                                                                            {data.lcg_champion_level}
                                                                        </div>
                                                                    </div>
                                                                    <div className="main_spell">
                                                                        <img src={imageUrl1 + "spell/" + data.lcg_spell_name_1 + ".png"} 
                                                                        alt={"spell1"} className="lcg_image spell_image" />
                                                                        <img src={imageUrl1 + "spell/" + data.lcg_spell_name_2 + ".png"} 
                                                                        alt={"spell2"} className="lcg_image spell_image" />
                                                                    </div>
                                                                    <div className="main_perk">
                                                                        <img src={imageUrl2 + data.lcg_perk_name_1} 
                                                                        alt={"perk1"} className="lcg_image perk_image1" />
                                                                        <img src={imageUrl2 + data.lcg_perk_name_2} 
                                                                        alt={"perk2"} className="lcg_image perk_image2" />
                                                                    </div>
                                                                    <div className="main_kda">
                                                                        <div className="kda_view">
                                                                            {data.lcg_kill_count} / <span>{data.lcg_death_count}</span> / {data.lcg_assist_count}
                                                                        </div>
                                                                        <div className="kda_calc">
                                                                            <Style.LcgKdaCalc $k={data.lcg_kill_count} $d={data.lcg_death_count} $a={data.lcg_assist_count}>
                                                                                {data.lcg_death_count !== 0 ? ((data.lcg_kill_count + data.lcg_assist_count) / data.lcg_death_count).toFixed(2) + ":1" : "Perfect"}
                                                                            </Style.LcgKdaCalc>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="main_bottom">
                                                                    <div className="main_item">
                                                                        {
                                                                            data.lcg_item_id_1 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_1 + ".png"} 
                                                                                alt={"item1"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                        {
                                                                            data.lcg_item_id_2 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_2 + ".png"} 
                                                                                alt={"item2"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                        {
                                                                            data.lcg_item_id_3 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_3 + ".png"} 
                                                                                alt={"item3"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                        {
                                                                            data.lcg_item_id_4 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_4 + ".png"} 
                                                                                alt={"item4"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                        {
                                                                            data.lcg_item_id_5 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_5 + ".png"} 
                                                                                alt={"item5"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                        {
                                                                            data.lcg_item_id_6 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_6 + ".png"} 
                                                                                alt={"item6"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                        {
                                                                            data.lcg_item_id_7 !== 0 ?
                                                                                <img src={imageUrl1 + "item/" + data.lcg_item_id_7 + ".png"} 
                                                                                alt={"item7"} className="item_image" />
                                                                                :<div className="item_image empty_image"/>
                                                                        }
                                                                    </div>
                                                                    <div className="main_mvp">
                                                                        <MvpIcon rank={data.lcg_mvp_rank} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item_sub">
                                                                <div className="sub_rate">
                                                                    킬관여 {Math.round((data.lcg_kill_count + data.lcg_assist_count) / data.lcg_total_kill * 100)}%
                                                                </div>
                                                                <div className="sub_cs">
                                                                    CS {data.cs}
                                                                    <div className="cs_minute">
                                                                        &nbsp;({((data.cs) / gameDurationMin).toFixed(1)})
                                                                    </div>
                                                                </div>
                                                                <div className="sub_multikill">
                                                                    {
                                                                        data.lcg_penta_kill > 0 || data.lcg_quadra_kill > 0 || data.lcg_triple_kill > 0 || data.lcg_double_kill > 0 ? 
                                                                            <MultikillIcon kill={
                                                                                data.lcg_penta_kill > 0 ? '펜타킬' :
                                                                                data.lcg_quadra_kill > 0 ? '쿼드라킬' :
                                                                                data.lcg_triple_kill > 0 ? '트리플킬' :
                                                                                data.lcg_double_kill > 0 ? '더블킬' : ''
                                                                            } />
                                                                            :
                                                                            <></>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="item_players">
                                                                {(data.player_list as any[]).sort((a, b) => a.team - b.team).map((player, idx2) => (
                                                                    <div className="players_info" key={idx2}>
                                                                        <img src={imageUrl1 + "champion/" + player.champion + ".png"}
                                                                            alt={"champion"} className="champion_image"/>
                                                                        <div className="info_name">{String(player.name)}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="item_detail" onClick={() => matchListBoxClick(Number(data.lcg_game_id), idx)}>
                                                                <FontAwesomeIcon icon={arrow} className="arrow_icon" />
                                                            </div>
                                                        </Style.MatchItem>
                                                        <div className="matchHistory_box" ref={(mh:any) => (matchHistoryRef.current[idx] = mh)}>
                                                            {selectIdx === idx && <MatchHistory gameId={selectGameId} type={"P"} />}  
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })}
                                            {
                                                !!playerMatchTotal && !!selectPlayerMatch ?
                                                    <>
                                                        {
                                                            playerMatchTotal.length <= selectPlayerMatch.length ? <></> : 
                                                                <MainStyle.Pagination>
                                                                    <button onClick={() => setPageHistory(pageHistory + 1)} className="more_btn">더보기</button>
                                                                </MainStyle.Pagination>
                                                        }
                                                    </> : <LoadingSpinner />
                                            }
                                        </div>
                                        :
                                    selectTab === "B" ? 
                                        <div className="body_section">
                                            {
                                                !!lcgPlayerData ? <SelectBox playerList={lcgPlayerData} selectOpponent={selectOpponent} setSelectOpponent={setSelectOpponent} /> : <></>
                                            }
                                            <div className="relative_head">
                                                <div className="head_matchLine">
                                                    포지션
                                                </div>
                                                <div className="head_opponent">
                                                    상대
                                                </div>
                                                <div className="head_winningRate">
                                                    승률
                                                </div>
                                            </div>
                                            {selectPlayerRelative?.map((data, idx) => {
                                                return (
                                                    <div className="relative_item" key={"champ_" + idx}>
                                                        <div className="player_matchLine">
                                                            {
                                                                data.lcg_match_line === 'TOP' ? <TopIcon />
                                                                :
                                                                data.lcg_match_line === 'JUG' ? <JugIcon />
                                                                :
                                                                data.lcg_match_line === 'MID' ? <MidIcon />
                                                                :
                                                                data.lcg_match_line === 'ADC' ? <AdcIcon />
                                                                :
                                                                <SupIcon />
                                                            }
                                                        </div>
                                                        <div className="player_opponent">
                                                            {playerData(data.lcg_opponent_puuid, "name")}
                                                        </div>
                                                        <div className="player_winningRate">
                                                            <div className="match_detail">
                                                                <span>{data.lcg_play_count}전</span>
                                                                <span>{data.lcg_win_count}승</span>
                                                                <span>{data.lcg_fail_count}패</span>
                                                            </div>
                                                            <div className="match_winning">
                                                                {((data.lcg_win_count * 100) / data.lcg_play_count).toFixed(1)}%
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            {
                                                !!playerRelativeTotal && !!selectPlayerRelative ?
                                                    <>
                                                        {
                                                            playerRelativeTotal.length <= selectPlayerRelative.length ? <></> : 
                                                                <MainStyle.Pagination>
                                                                    <button onClick={() => setPageRelative(pageRelative + 1)} className="more_btn">더보기</button>
                                                                </MainStyle.Pagination>
                                                        }
                                                    </> : <LoadingSpinner />
                                            }
                                        </div> 
                                        :
                                    selectTab === "C" ? 
                                        <div className="body_section">
                                            <div className="champion_head">
                                                <div className="head_champion">
                                                    챔피언
                                                </div>
                                                <div className="head_kda">
                                                    KDA
                                                </div>
                                                <div className="head_winningRate">
                                                    승률
                                                </div>
                                            </div>
                                            {selectPlayerChampion?.map((data, idx) => {
                                                return (
                                                    <div className="champion_item" key={"relative_" + idx}>
                                                        <div className="player_champion">
                                                            <img src={imageUrl + "champion/" + data.lcg_champion_name + ".png"} 
                                                            alt={"champion"} className="champion_img" loading="lazy"/>
                                                        </div>
                                                        <div className="player_kda">
                                                            <div className="kda_detail">
                                                                <span>{(data.lcg_kill_count / data.lcg_play_count).toFixed(1)}</span>/
                                                                <span>{(data.lcg_death_count / data.lcg_play_count).toFixed(1)}</span>/
                                                                <span>{(data.lcg_assist_count / data.lcg_play_count).toFixed(1)}</span>
                                                            </div>
                                                            <div className="kda_calc">
                                                                <Style.LcgKdaCalc $k={data.lcg_kill_count} $d={data.lcg_death_count} $a={data.lcg_assist_count}>
                                                                    {data.lcg_death_count !== 0 ? 
                                                                        <span>
                                                                            KDA
                                                                            <span className="kda">
                                                                                {((data.lcg_kill_count + data.lcg_assist_count) / data.lcg_death_count).toFixed(2)}
                                                                            </span>
                                                                        </span>: <span className="kda">Perfect</span>}
                                                                </Style.LcgKdaCalc>
                                                            </div>
                                                        </div>
                                                        <div className="player_winningRate">
                                                            <div className="match_detail">
                                                                <span>{data.lcg_play_count}전</span>
                                                                <span>{data.lcg_win_count}승</span>
                                                                <span>{data.lcg_fail_count}패</span>
                                                            </div>
                                                            <div className="match_winning">
                                                                {((data.lcg_win_count * 100) / data.lcg_play_count).toFixed(1)}%
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            {
                                                !!countChampion && !!selectPlayerChampion ?
                                                    <>
                                                        {
                                                            countChampion <= selectPlayerChampion.length ? <></> : 
                                                                <MainStyle.Pagination>
                                                                    <button onClick={() => setPageChampion(pageChampion + 1)} className="more_btn">더보기</button>
                                                                </MainStyle.Pagination>
                                                        }
                                                    </> : <LoadingSpinner />
                                            }
                                        </div>
                                        : <></>
                                }
                            </div>
                        </Style.PlayerDataBox>
                    </>
            }
        </Style.MatchPlayer>
    )
}

export default MatchPlayer;
