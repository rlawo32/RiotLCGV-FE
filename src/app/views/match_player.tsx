'use client'

import * as Style from "./match_player.style";
import * as MainStyle from "./main_view.style";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgPlayerDataQuery, getSelectLcgPlayerChampionTotalQuery, getSelectLcgPlayerChampionQuery, 
    getSelectLcgAllKdaQuery, getSelectLcgWinningRateQuery, getSelectLcgPlayerDataQuery, 
    getSelectLcgPlayerRelativeTotalQuery, getSelectLcgPlayerRelativeQuery, getSelectLcgPlayerPositionQuery,
    getSelectLcgPlayerAvgDpmQuery, getSelectLcgPlayerAvgGpmQuery, getSelectLcgPlayerAvgDpgQuery, 
    getSelectLcgPlayerMvpQuery, getSelectLcgPlayerAceQuery, getSelectLcgPlayerAiSummaryDataQuery
} from "../queries/getLcgPlayerDataQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getWinningRateCalc, getPlayerData } from "../component/match_tool";

import LoadingSpinner from "../component/loading_spinner";
import LastUpdate from "../component/last_update";

import TopIcon from "../icons/TopIcon";
import JugIcon from "../icons/JugIcon";
import MidIcon from "../icons/MidIcon";
import AdcIcon from "../icons/AdcIcon";
import SupIcon from "../icons/SupIcon";
import ModalView from "../component/modal_view";

const MatchPlayer = () => {
    const supabase = useSupabaseBrowser();

    let imageUrl1:string = "";
    let lastUpdate:string = "";
    let aiSummaryPrompt:{prompt:string, maxToken:number} = {prompt:"", maxToken:0};

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {});
    const { data: lcgPlayerData, isLoading: loading1 } = useQuery(getLcgPlayerDataQuery(supabase), {enabled:!!lcgMatchEtc});

    const [selectPlayer, setSelectPlayer] = useState<string>("");
    const [pageChampion, setPageChampion] = useState<number>(1);
    const [pageRelative, setPageRelative] = useState<number>(1);
    const [isSummaryModal, setIsSummaryModal] = useState<boolean>(false);
    
    const { data: selectPlayerData, isLoading: loading2 } = useQuery(getSelectLcgPlayerDataQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAllKda } = useQuery(getSelectLcgAllKdaQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerWinningRate } = useQuery(getSelectLcgWinningRateQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: playerChampionTotal } = useQuery(getSelectLcgPlayerChampionTotalQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: playerRelativeTotal } = useQuery(getSelectLcgPlayerRelativeTotalQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerChampion } = useQuery(getSelectLcgPlayerChampionQuery(supabase, selectPlayer, pageChampion), {enabled:!!lcgPlayerData});
    const { data: selectPlayerRelative } = useQuery(getSelectLcgPlayerRelativeQuery(supabase, selectPlayer, pageRelative), {enabled:!!lcgPlayerData});
    const { data: selectPlayerPostion } = useQuery(getSelectLcgPlayerPositionQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerDpm } = useQuery(getSelectLcgPlayerAvgDpmQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerGpm } = useQuery(getSelectLcgPlayerAvgGpmQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerDpg } = useQuery(getSelectLcgPlayerAvgDpgQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerMvp } = useQuery(getSelectLcgPlayerMvpQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAce } = useQuery(getSelectLcgPlayerAceQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});

    if(!!lcgMatchEtc) {
        imageUrl1 = lcgMatchEtc[0].lcg_main_image;
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

    useEffect(() => {
        setPageChampion(1);
        setPageRelative(1);
        aiSummaryPrompt = {prompt:"", maxToken:0};
    }, [selectPlayer])

    useEffect(() => {
        if(!!lcgPlayerData) {
            setSelectPlayer(lcgPlayerData[0].lcg_summoner_puuid);
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
                                    <div className="select_item" onClick={() => setSelectPlayer(data.lcg_summoner_puuid)} key={"select_" + idx}>
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
                                                    <img src={"/img/rank_" + selectPlayerData[0].lcg_present_tier + ".png"} 
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
                                            <img src={"/img/openai.png"} alt={"openai_img"} className="openai_img" loading="lazy"/>
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
                                <div className="body_section body_left">
                                    <div className="relative_head">
                                        <div className="head_opponent">
                                            상대
                                        </div>
                                        <div className="head_winningRate">
                                            승률
                                        </div>
                                        <div className="head_matchLine">
                                            포지션
                                        </div>
                                    </div>
                                    {selectPlayerRelative?.map((data, idx) => {
                                        return (
                                            <div className="relative_item" key={"champ_" + idx}>
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
                                <div className="body_section body_right">
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
                                                    <img src={imageUrl1 + "champion/" + data.lcg_champion_name + ".png"} 
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
                                        !!playerChampionTotal && !!selectPlayerChampion ?
                                            <>
                                                {
                                                    playerChampionTotal.length <= selectPlayerChampion.length ? <></> : 
                                                        <MainStyle.Pagination>
                                                            <button onClick={() => setPageChampion(pageChampion + 1)} className="more_btn">더보기</button>
                                                        </MainStyle.Pagination>
                                                }
                                            </> : <LoadingSpinner />
                                    }
                                </div>
                            </div>
                        </Style.PlayerDataBox>
                    </>
            }
        </Style.MatchPlayer>
    )
}

export default MatchPlayer;