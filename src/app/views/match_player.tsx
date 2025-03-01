'use client'

import * as Style from "./match_player.style";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgPlayerDataQuery, getSelectLcgPlayerChampionQuery, 
    getSelectLcgAllKdaQuery, getSelectLcgWinningRateQuery, getSelectLcgPlayerDataQuery, 
    getSelectLcgPlayerRelativeQuery, getSelectLcgPlayerAvgDpmQuery, getSelectLcgPlayerAvgGpmQuery,
    getSelectLcgPlayerAvgDpgQuery, getSelectLcgPlayerMvpQuery, getSelectLcgPlayerAceQuery
} from "../queries/getLcgPlayerDataQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getPlayerData } from "../component/match_tool";

import TopIcon from "../icons/topIcon";
import JugIcon from "../icons/jugIcon";
import MidIcon from "../icons/midIcon";
import AdcIcon from "../icons/adcIcon";
import SupIcon from "../icons/supIcon";
import LoadingSpinner from "../component/loading_spinner";

const MatchPlayer = () => {
    const supabase = useSupabaseBrowser();

    let imageUrl1:string = "";

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {});
    const { data: lcgPlayerData, isLoading: loading1 } = useQuery(getLcgPlayerDataQuery(supabase), {enabled:!!lcgMatchEtc});

    const [selectPlayer, setSelectPlayer] = useState<string>("");

    const { data: selectPlayerData, isLoading: loading2 } = useQuery(getSelectLcgPlayerDataQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAllKda } = useQuery(getSelectLcgAllKdaQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerWinningRate } = useQuery(getSelectLcgWinningRateQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerChampion } = useQuery(getSelectLcgPlayerChampionQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerRelative } = useQuery(getSelectLcgPlayerRelativeQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerDpm } = useQuery(getSelectLcgPlayerAvgDpmQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerGpm } = useQuery(getSelectLcgPlayerAvgGpmQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerDpg } = useQuery(getSelectLcgPlayerAvgDpgQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerMvp } = useQuery(getSelectLcgPlayerMvpQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAce } = useQuery(getSelectLcgPlayerAceQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData});

    if(!!lcgMatchEtc) {
        imageUrl1 = lcgMatchEtc[0].lcg_main_image;
    }

    const playerData = (puuid:string, flag:string):string|undefined => {
        let result:string|undefined = "";

        if(!!lcgPlayerData) {
            result = getPlayerData(lcgPlayerData, puuid, flag);
        }

        return result;
    }

    useEffect(() => {
        if(!!lcgPlayerData) {
            setSelectPlayer(lcgPlayerData[0].lcg_summoner_puuid);
        }
    }, [])

    return (
        <Style.MatchPlayer>
            {
                loading1 && loading2 ? <LoadingSpinner /> :
                    <>
                        <Style.PlayerSelectBox>
                            {lcgPlayerData?.map((data, idx) => {
                                return (
                                    <div className="select_item" onClick={() => setSelectPlayer(data.lcg_summoner_puuid)} key={"select_" + idx}>
                                        {data.lcg_summoner_nickname}
                                    </div>
                                )
                            })}
                        </Style.PlayerSelectBox>
                        <Style.PlayerDataBox>
                            <div className="box_head">
                                <div className="head_top">
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
                                </div>
                                <hr></hr>
                                <div className="head_bottom">
                                    <div className="bottom_item">
                                        <div className="item_figure">
                                            {
                                                !!selectPlayerDpm ? selectPlayerDpm[0].avg : <></>
                                            }
                                        </div>
                                        <div className="item_title">
                                            분당 데미지
                                        </div>
                                    </div>
                                    <div className="bottom_item">
                                        <div className="item_figure">
                                            {
                                                !!selectPlayerGpm ? selectPlayerGpm[0].avg : <></>
                                            }
                                        </div>
                                        <div className="item_title">
                                            분당 골드 획득
                                        </div>
                                    </div>
                                    <div className="bottom_item">
                                        <div className="item_figure">
                                            {
                                                !!selectPlayerDpg ? selectPlayerDpg[0].avg : <></>
                                            }
                                        </div>
                                        <div className="item_title">
                                            골드당 데미지
                                        </div>
                                    </div>
                                    <div className="bottom_item">
                                        <div className="item_figure">
                                            {
                                                !!selectPlayerMvp ? selectPlayerMvp[0].lcg_count_mvp : <></>
                                            }
                                        </div>
                                        <div className="item_title">
                                            MVP 횟수
                                        </div>
                                    </div>
                                    <div className="bottom_item">
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
                                </div>
                            </div>
                        </Style.PlayerDataBox>
                    </>
            }
        </Style.MatchPlayer>
    )
}

export default MatchPlayer;