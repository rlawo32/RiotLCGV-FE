'use client'

import * as Style from "./match_player.style";

import { useEffect, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgPlayerDataQuery, getSelectLcgPlayerChampionQuery, 
    getSelectLcgAllKdaQuery, getSelectLcgWinningRateQuery,
    getSelectLcgPlayerDataQuery, getSelectLcgPlayerRelativeQuery } from "../queries/getLcgPlayerDataQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";

import TopIcon from "../icons/topIcon";
import JugIcon from "../icons/jugIcon";
import MidIcon from "../icons/midIcon";
import AdcIcon from "../icons/adcIcon";
import SupIcon from "../icons/supIcon";

const MatchPlayer = () => {
    const supabase = useSupabaseBrowser();

    let imageUrl1:string = "";

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {});
    const { data: lcgPlayerData } = useQuery(getLcgPlayerDataQuery(supabase), {});

    const [selectPlayer, setSelectPlayer] = useState<string>("");
    const { data: selectPlayerData } = useQuery(getSelectLcgPlayerDataQuery(supabase, selectPlayer), {});
    const { data: selectPlayerAllKda } = useQuery(getSelectLcgAllKdaQuery(supabase, selectPlayer), {});
    const { data: selectPlayerWinningRate } = useQuery(getSelectLcgWinningRateQuery(supabase, selectPlayer), {});
    const { data: selectPlayerChampion } = useQuery(getSelectLcgPlayerChampionQuery(supabase, selectPlayer), {});
    const { data: selectPlayerRelative } = useQuery(getSelectLcgPlayerRelativeQuery(supabase, selectPlayer), {});

    if(!!lcgMatchEtc) {
        imageUrl1 = lcgMatchEtc[0].lcg_main_image;
    }

    useEffect(() => {
        if(!!lcgPlayerData) {
            setSelectPlayer(lcgPlayerData[0].lcg_summoner_puuid);
        }
    }, [])

    return (
        <Style.MatchPlayer>
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
                    {
                        !!selectPlayerData ? 
                            <>
                                <div className="head_section head_player">
                                    <img src={imageUrl1 + "profileicon/" + selectPlayerData[0].lcg_summoner_icon + ".png"} 
                                    alt={"profileIcon"} className="player_img" loading="lazy"/>
                                    <div className="player_name">
                                        {selectPlayerData[0].lcg_summoner_nickname}
                                    </div>
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
                            </> : <></>
                    }
                    {
                        !!selectPlayerWinningRate && !!selectPlayerAllKda ? 
                            <>
                                <div className="head_data">
                                    <div className="head_graph">
                                        <div className="graph_gage">
                                            <strong>{selectPlayerWinningRate[0].rate}%</strong>
                                        </div>
                                        <svg viewBox="0 0 200 200">
                                            <circle cx="100" cy="100" r="80" fill="none" stroke="#E84057" strokeWidth="30">
                                            </circle>
                                            <circle cx="100" cy="100" r="80" fill="none" stroke="#5383E8" strokeWidth="30" 
                                            strokeDasharray={`${2 * Math.PI * 80 * (parseInt(selectPlayerWinningRate[0].rate) / 100)} ${
                                                2 * Math.PI * 80 * (Math.trunc((1 - (parseInt(selectPlayerWinningRate[0].rate) / 100)) * 100) / 100)
                                            }`}
                                            strokeDashoffset={2 * Math.PI * 80 * 0.25}>
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
                                        {data.lcg_summoner_nickname.split("#")[0]}
                                    </div>
                                    <div className="player_winningRate">
                                        <div className="match_detail">
                                            {data.lcg_play_count}전&nbsp;/&nbsp;{data.lcg_win_count}승&nbsp;/&nbsp;{data.lcg_fail_count}패
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
                                        alt={"champion"} className="champion_img"  loading="lazy"/>
                                    </div>
                                    <div className="player_kda">
                                        <div className="match_detail">
                                            <span>{(data.lcg_kill_count / data.lcg_play_count).toFixed(1)}</span>/
                                            <span>{(data.lcg_death_count / data.lcg_play_count).toFixed(1)}</span>/
                                            <span>{(data.lcg_assist_count / data.lcg_play_count).toFixed(1)}</span>
                                        </div>
                                        <div className="match_kda">
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
                                        <span>{data.lcg_play_count}전</span>
                                        <span>{data.lcg_win_count}승</span>
                                        <span>{data.lcg_fail_count}패</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Style.PlayerDataBox>
        </Style.MatchPlayer>
    )
}

export default MatchPlayer;