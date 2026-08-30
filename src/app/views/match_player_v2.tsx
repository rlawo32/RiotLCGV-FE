'use client'

import * as Style from "./match_player_v2.style";

import { useEffect, useState } from "react";

import useSupabaseBrowser from "../supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getLcgPlayerDataQuery, getSelectLcgPlayerChampionQuery, 
    getSelectLcgPlayerDataV2Query, getSelectLcgPlayerPositionQuery, 
    getSelectLcgPlayerMvpV2Query, getSelectLcgPlayerAceV2Query, 
    getPlayerMatchV2Query, getSelectLcgPlayerRelativeV2Query
} from "../queries/getLcgPlayerDataQuery";
import { getLcgMatchLogTotalQuery } from "../queries/getLcgMatchLogQuery";

import { getWinningRateCalc, getGameDuration, getCurrentTimeCalc } from "@/app/component/match_tool";
import { LaneIcon, LaneBest, unrankConv, lineDataExtract, RankIcon } from "./components_player/match_player_tool";
import { CategoryData, PositionData, ChampionData, RelativeData } from "./components_player/match_player_types";

import PlayerHistory from "./components_player/player_history";
import PlayerChampion from "./components_player/player_champion";
import PlayerRelative from "./components_player/player_relative";

import MvpIcon from "../icons/MvpIcon";
import MultikillIcon from "../icons/MultikillIcon";

const MatchPlayerV2 = (props:{directPlayer:string|null}) => {
    const supabase = useSupabaseBrowser();

    let imageMainUrl:string = "";
    let imageSubUrl:string = "";
    let imageExtension:string = "";
    let lastUpdate:string = "";
    let totalGameCount:number = 0;

    const [selectPlayer, setSelectPlayer] = useState<string>("");
    const [selectCategory, setSelectCategory] = useState<string>("A"); // A:종합, H:최근전적, C:챔피언전적, R:상대전적
    const [pageHistory, setPageHistory] = useState<number>(1);
    const [pageChampion, setPageChampion] = useState<number>(1);
    const [pageRelative, setPageRelative] = useState<number>(1);
    const [selectGameId, setSelectGameId] = useState<number>(0);
    const [selectRelativeIdx, setSelectRelativeIdx] = useState<number>(0);
    const [selectOpponent, setSelectOpponent] = useState<string>("");
    const [selectLane, setSelectLane] = useState<string>("");

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {});
    const { data: lcgMatchLog } = useQuery(getLcgMatchLogTotalQuery(supabase), {});

    if(!!lcgMatchEtc && !!lcgMatchLog) {
        imageMainUrl = lcgMatchEtc[0].lcg_main_image;
        imageSubUrl = lcgMatchEtc[0].lcg_sub_image;
        imageExtension = lcgMatchEtc[0].lcg_image_extension;
        lastUpdate = lcgMatchEtc[0].lcg_update_player;
        totalGameCount = lcgMatchLog.length;
    }

    const { data: lcgPlayerData, isLoading: loading1 } = useQuery(getLcgPlayerDataQuery(supabase), {enabled:!!lcgMatchEtc});
    const { data: selectPlayerData, isLoading: loading2 } = useQuery(getSelectLcgPlayerDataV2Query(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerPostion } = useQuery(getSelectLcgPlayerPositionQuery(supabase, selectPlayer), {enabled:!!lcgPlayerData && !!selectPlayerData});
    const { data: selectPlayerHistory } = useQuery(getPlayerMatchV2Query(supabase, selectPlayer, pageHistory), {enabled:!!lcgPlayerData});
    const { data: selectPlayerChampion, count: countChampion } = useQuery(getSelectLcgPlayerChampionQuery(supabase, selectPlayer, pageChampion), {enabled:!!lcgPlayerData});
    const { data: selectPlayerRelative } = useQuery(getSelectLcgPlayerRelativeV2Query(supabase, selectPlayer, selectOpponent, selectLane, pageRelative), {enabled:!!lcgPlayerData});
    const { data: selectPlayerMvpRank } = useQuery(getSelectLcgPlayerMvpV2Query(supabase, selectPlayer), {enabled:!!lcgPlayerData});
    const { data: selectPlayerAceRank } = useQuery(getSelectLcgPlayerAceV2Query(supabase, selectPlayer), {enabled:!!lcgPlayerData});

    const categoryList:CategoryData[] = [{title:"종합", value:"A"}, {title:"최근 전적", value:"H"}, {title:"챔피언 전적", value:"C"}, {title:"상대 전적", value:"R"}];
    const positionList:PositionData[] = !!selectPlayerPostion ? lineDataExtract(selectPlayerPostion ?? []) as PositionData[] : [];
    const championList:ChampionData[] = !!selectPlayerData ? selectPlayerData[0].champion_list as ChampionData[] : [];
    const relativeList:RelativeData[] = !!selectPlayerData ? selectPlayerData[0].relative_list as RelativeData[] : [];

    useEffect(() => {
        setSelectCategory("A");
        setPageHistory(1);
        setPageChampion(1);
        setPageRelative(1);
        setSelectGameId(0);
        setSelectRelativeIdx(0);
        setSelectOpponent("");
        setSelectLane("")
    }, [selectPlayer])

    useEffect(() => {
        setPageHistory(1);
        setPageChampion(1);
        setPageRelative(1);
        setSelectGameId(0);
        setSelectRelativeIdx(0);
        setSelectOpponent("");
        setSelectLane("")
    }, [selectCategory])

    useEffect(() => {
        setPageRelative(1);
    }, [selectLane])

    useEffect(() => {
        if(!!lcgPlayerData) {
            if(props.directPlayer) {
                const directPuuid:string|undefined = lcgPlayerData.find((item) => item.lcg_player === props.directPlayer)?.lcg_summoner_puuid;
                if(directPuuid !== undefined) {
                    setSelectPlayer(directPuuid);
                } else {
                    setSelectPlayer(lcgPlayerData[0].lcg_summoner_puuid);
                }
            } else {
                setSelectPlayer(lcgPlayerData[0].lcg_summoner_puuid);
            }
        }
    }, [lcgPlayerData, props.directPlayer])

    return (
        <Style.MatchPlayer>
            <Style.MatchPlayerHeader $most={!!selectPlayerData ? imageMainUrl + "centered/" + selectPlayerData[0].lcg_champion_name + "_0" + imageExtension : ""}>
                <div className="player_list">
                    {lcgPlayerData?.filter((data) => data.lcg_player_hide === 'N').map((data, idx) => {
                        return (
                            <Style.MatchPlayerListBox key={data.lcg_summoner_puuid} $selected={selectPlayer === data.lcg_summoner_puuid} onClick={() => {setSelectPlayer(data.lcg_summoner_puuid);}}>
                                <div className="box_left">
                                    <img src={imageMainUrl + "profileicon/" + data.lcg_summoner_icon + imageExtension} alt={"player_icon_" + idx} />
                                </div>
                                <div className="box_right">
                                    <div className="box_name">{data.lcg_summoner_name}</div>
                                    <div className="box_tier">{unrankConv(data.lcg_present_tier, "T")} {unrankConv(data.lcg_present_division, "D")}</div>
                                </div>
                            </Style.MatchPlayerListBox>
                        )
                    })}
                </div>
                <div className="player_info">
                    {!!lcgPlayerData && !!selectPlayerData ? 
                        <>
                            <div className="info_left">
                                <div className="info_left_a">
                                    <img src={imageMainUrl + "profileicon/" + selectPlayerData[0].lcg_summoner_icon + imageExtension} alt="player_icon" />
                                    <div className="info_level">{selectPlayerData[0].lcg_summoner_level}</div>
                                </div>
                                <div className="info_left_b">
                                    <div className="info_name">
                                        {selectPlayerData[0].lcg_summoner_nickname.split("#")[0]}
                                    </div>
                                    <div className="info_rank">
                                        <div className="rank_icon">
                                            <img src={imageMainUrl + "public/rank_" + selectPlayerData[0].lcg_present_tier.toLowerCase() + imageExtension} alt="tier_icon" />
                                        </div>
                                        <div className="rank_tier">
                                            {unrankConv(selectPlayerData[0].lcg_present_tier, "T")} {unrankConv(selectPlayerData[0].lcg_present_division, "D")}
                                        </div>
                                        <div className="rank_point" style={selectPlayerData[0].lcg_present_tier === 'NA' ? {opacity:0} : {}}>
                                            {selectPlayerData[0].lcg_rank_point}LP
                                        </div>
                                    </div>
                                    <div className="info_winning_rate">
                                        내전 승률 - {selectPlayerData[0].lcg_count_victory}승&nbsp;
                                        {selectPlayerData[0].lcg_count_defeat}패&nbsp;
                                        ({getWinningRateCalc(selectPlayerData[0].lcg_count_play, selectPlayerData[0].lcg_count_victory)}%)
                                    </div>
                                    <div className="info_recent_form">
                                        최근 20경기 - <span className="recent_win">{selectPlayerData[0].win}</span>승&nbsp;
                                        <span className="recent_fail">{selectPlayerData[0].fail}</span>패&nbsp;
                                        ({getWinningRateCalc(selectPlayerData[0].win+selectPlayerData[0].fail, selectPlayerData[0].win)}%)
                                    </div>
                                </div>
                            </div>
                            <div className="info_right">
                                {!!selectPlayerMvpRank ?
                                    <Style.InfoRankBox $rank={selectPlayerMvpRank[0].rank}>
                                        <div className="rank_icon">
                                            {RankIcon(selectPlayerMvpRank[0].rank)}
                                        </div>
                                        <div className="rank_text">
                                            <div>MVP 횟수</div>
                                            <div className="rank_cnt">
                                                {selectPlayerMvpRank[0].lcg_count_mvp}회
                                            </div>
                                        </div>
                                    </Style.InfoRankBox> : <></>
                                }
                                {!!selectPlayerAceRank ?
                                    <Style.InfoRankBox $rank={selectPlayerAceRank[0].rank}>
                                        <div className="rank_icon">
                                            {RankIcon(selectPlayerAceRank[0].rank)}
                                        </div>
                                        <div className="rank_text">
                                            <div>ACE 횟수</div>
                                            <div className="rank_cnt">
                                                {selectPlayerAceRank[0].lcg_count_ace}회
                                            </div>
                                        </div>
                                    </Style.InfoRankBox> : <></>
                                }
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </Style.MatchPlayerHeader>
            <Style.MatchPlayerBody $category={selectCategory}>
                <div className="player_position">
                    {positionList.map((item) => {
                        const bestLane:boolean = item.lane === LaneBest(positionList);
                        return (
                            <Style.MatchPlayerPosition key={item.lane} $rate={item.rate} $best={bestLane}>
                                <div className="position_lane">
                                    {LaneIcon(item.lane, bestLane)} {item.lane}
                                </div>
                                <div className="position_rate">
                                    <Style.LcgWinningGraph $rate={item.rate}>
                                        <div className="rate_graph" />
                                    </Style.LcgWinningGraph>
                                    <div className="position_rate_info">
                                        {item.rate}%
                                    </div>
                                </div>
                                <div className="position_info">
                                    {item.win}승 {item.fail}패
                                </div>
                            </Style.MatchPlayerPosition>
                        )
                    })}
                </div>
                <div className="player_category">
                    {categoryList?.map((item) => {
                        return (
                            <Style.MatchPlayerCategoryListBox key={item.value} $selected={selectCategory === item.value} onClick={() => {setSelectCategory(item.value);}}>
                                {item.title}
                            </Style.MatchPlayerCategoryListBox>
                        )
                    })}
                </div>
                <div className="player_wrap">
                    {
                        selectCategory === 'A' ? 
                            <div className="player_detail">
                                <div className="detail_item detail_history">
                                    <div className="detail_title">
                                        <div className="title">최근 전적</div>
                                        <div className="more" onClick={() => setSelectCategory("H")}>더 보기</div>
                                    </div>
                                    <div className="history_list">
                                        {!!selectPlayerHistory ?
                                            selectPlayerHistory?.slice(0, 5).map((item) => {
                                                const gameDurationMin = getGameDuration(item.lcg_game_duration);
                                                return (
                                                    <Style.MatchPlayerHistoryListBox key={item.lcg_game_id} $result={item.lcg_team_win === 'Y'}>
                                                        <div className="history_left">
                                                            <div className="history_result">{item.lcg_team_win === 'Y' ? '승리' : '패배'}</div>
                                                            <div className="history_date">{getCurrentTimeCalc(item.lcg_game_date).split('오')[0]}</div>
                                                            <div className="history_duration">{gameDurationMin}분 {String(item.lcg_game_duration % 60).padStart(2, '0')}초</div>
                                                        </div>
                                                        <div className="history_center">
                                                            <div className="history_summoner">
                                                                <div className="summoner_info">
                                                                    <div className="history_champion">
                                                                        <img src={imageMainUrl + "champion/" + item.lcg_champion_name + imageExtension}
                                                                            alt={"champion"} className="champion_image"/>
                                                                        <div className="champion_level">
                                                                            {item.lcg_champion_level}
                                                                        </div>
                                                                    </div>
                                                                    <div className="history_spell">
                                                                        <img src={imageMainUrl + "spell/" + item.lcg_spell_name_1 + imageExtension} 
                                                                        alt={"spell1"} className="lcg_image spell_image" />
                                                                        <img src={imageMainUrl + "spell/" + item.lcg_spell_name_2 + imageExtension} 
                                                                        alt={"spell2"} className="lcg_image spell_image" />
                                                                    </div>
                                                                    <div className="history_perk">
                                                                        <img src={imageSubUrl + item.lcg_perk_name_1 + imageExtension} 
                                                                        alt={"perk1"} className="lcg_image perk_image1" />
                                                                        <img src={imageSubUrl + item.lcg_perk_name_2 + imageExtension} 
                                                                        alt={"perk2"} className="lcg_image perk_image2" />
                                                                    </div>
                                                                </div>
                                                                <div className="history_kda">
                                                                    <div className="kda_view">
                                                                        {item.lcg_kill_count} / <span>{item.lcg_death_count}</span> / {item.lcg_assist_count} 
                                                                        
                                                                    </div>
                                                                    <div className="kda_calc">
                                                                        <Style.LcgKdaCalc $k={item.lcg_kill_count} $d={item.lcg_death_count} $a={item.lcg_assist_count}>
                                                                            {item.lcg_death_count !== 0 ? 
                                                                                <span>
                                                                                    <span className="kda">
                                                                                        {((item.lcg_kill_count + item.lcg_assist_count) / item.lcg_death_count).toFixed(2)}
                                                                                    </span>
                                                                                    :1
                                                                                    <span className="kda_rate">
                                                                                        ({Math.round((item.lcg_kill_count + item.lcg_assist_count) / item.lcg_total_kill * 100)}%)
                                                                                    </span>
                                                                                </span> : <span className="kda">Perfect</span>}
                                                                        </Style.LcgKdaCalc>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="history_item">
                                                                {Array.from({ length: 7 }).map((_, idx) => {
                                                                    const itemId = item[`lcg_item_id_${idx + 1}` as keyof typeof item];

                                                                    return itemId !== 0 ? (
                                                                        <img key={idx} src={imageMainUrl + "item/" + itemId + imageExtension} alt={`item${idx + 1}`} className="item_image" />
                                                                    ) : (
                                                                        <div key={idx} className="item_image empty_image" />
                                                                    );
                                                                })}
                                                                <div className="history_mvp">
                                                                    <MvpIcon rank={item.lcg_mvp_rank} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="history_right">
                                                            <div className="history_cs">
                                                                CS {item.cs}
                                                                <div className="cs_minute">
                                                                    &nbsp;({((item.cs) / gameDurationMin).toFixed(1)})
                                                                </div>
                                                            </div>
                                                            <div className="history_multikill">
                                                                {
                                                                    item.lcg_penta_kill > 0 || item.lcg_quadra_kill > 0 || item.lcg_triple_kill > 0 || item.lcg_double_kill > 0 ? 
                                                                        <MultikillIcon kill={
                                                                            item.lcg_penta_kill > 0 ? '펜타킬' :
                                                                            item.lcg_quadra_kill > 0 ? '쿼드라킬' :
                                                                            item.lcg_triple_kill > 0 ? '트리플킬' :
                                                                            item.lcg_double_kill > 0 ? '더블킬' : ''
                                                                        } />
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                            <div className=""></div>
                                                        </div>
                                                    </Style.MatchPlayerHistoryListBox>
                                                )
                                            })
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>
                                <div className="detail_item detail_champion">
                                    <div className="detail_title">
                                        <div className="title">모스트 챔피언</div>
                                        <div className="more" onClick={() => setSelectCategory("C")}>더 보기</div>
                                    </div>
                                    <div className="champion_most">
                                        {!!championList ?
                                            // [championList[1], championList[0], championList[2]].map((item, idx) => {
                                            championList?.map((item, idx) => {
                                                const play = item.win + item.fail;
                                                return (
                                                    <Style.MatchPlayerChampionListBox $idx={idx+1} $img={imageMainUrl + "centered/" + item.champion_name + "_0" + imageExtension} key={item.champion_name}>
                                                        <div className="champion_left">
                                                            <div className="champion_name">
                                                                {item.champion_name}
                                                            </div>
                                                            <div className="champion_kda">
                                                                <Style.LcgKdaCalc $k={item.kill} $d={item.death} $a={item.assist}>
                                                                    {item.death !== 0 ? 
                                                                        <span>
                                                                            KDA
                                                                            <span className="kda">
                                                                                {((item.kill + item.assist) / item.death).toFixed(2)}
                                                                            </span>
                                                                        </span>: <span className="kda">Perfect</span>}
                                                                </Style.LcgKdaCalc>
                                                            </div>
                                                            <div className="champion_right">
                                                                <div className="champion_rate">
                                                                    {getWinningRateCalc(play, item.win)}%
                                                                </div>
                                                                <div className="champion_info">
                                                                    {item.win}승 {item.fail}패
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Style.MatchPlayerChampionListBox>
                                                )
                                            })
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>
                                <div className="detail_item detail_relative">
                                    <div className="detail_title">
                                        <div className="title">상대 전적</div>
                                        <div className="more" onClick={() => setSelectCategory("R")}>더 보기</div>
                                    </div>
                                    <div className="relative_most">
                                        {!!relativeList ?
                                            relativeList?.map((item) => {
                                                const rate = getWinningRateCalc(item.play, item.win);
                                                return (
                                                    <Style.MatchPlayerRelativeListBox key={item.opponent}>
                                                        <div className="relative_item relative_left">
                                                            <img src={imageMainUrl + "profileicon/" + item.icon + imageExtension} alt="opponent_icon" />
                                                            <div className="opponent_nickname">{item.nickname.split("#")[0]}</div>
                                                        </div>
                                                        <div className="relative_info">
                                                            <div className="relative_item relative_center">
                                                                <span><span className="relative_play">{item.play}</span>전</span>
                                                                <span><span className="relative_win">{item.win}</span>승</span>
                                                                <span><span className="relative_fail">{item.fail}</span>패</span>
                                                            </div>
                                                            <div className="relative_item relative_right">
                                                                <div className="relative_rate">
                                                                    승률 {rate}%
                                                                </div>
                                                                <Style.LcgWinningGraph $rate={rate}>
                                                                    <div className="rate_graph" />
                                                                </Style.LcgWinningGraph>
                                                            </div>
                                                        </div>
                                                    </Style.MatchPlayerRelativeListBox>
                                                )
                                            })
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                        selectCategory === 'H' ? 
                            !!lcgPlayerData && !!selectPlayerHistory ?
                                <PlayerHistory dataList={selectPlayerHistory} 
                                               selectGameId={selectGameId} setSelectGameId={setSelectGameId}
                                               pageHistory={pageHistory} setPageHistory={setPageHistory}
                                               imageMainUrl={imageMainUrl} imageSubUrl={imageSubUrl} imageExtension={imageExtension} />
                                :
                                <></>
                            :
                        selectCategory === 'C' ? 
                            !!lcgPlayerData && !!selectPlayerChampion ?
                                <PlayerChampion totalGameCount={countChampion} dataList={selectPlayerChampion} 
                                                pageChampion={pageChampion} setPageChampion={setPageChampion}
                                                imageMainUrl={imageMainUrl} imageExtension={imageExtension} />
                                :
                                <></>
                            :
                        selectCategory === 'R' ? 
                            !!lcgPlayerData && !!selectPlayerData && !!selectPlayerRelative ?
                                <PlayerRelative totalGameCount={totalGameCount} playerList={lcgPlayerData} dataList={selectPlayerRelative} 
                                                selectPlayer={selectPlayer} selectOpponent={selectOpponent} setSelectOpponent={setSelectOpponent} 
                                                selectLane={selectLane} setSelectLane={setSelectLane}
                                                pageRelative={pageRelative} setPageRelative={setPageRelative}
                                                selectRelativeIdx={selectRelativeIdx} setSelectRelativeIdx={setSelectRelativeIdx}
                                                personNickname={selectPlayerData[0].lcg_summoner_nickname} personIcon={selectPlayerData[0].lcg_summoner_icon}
                                                imageMainUrl={imageMainUrl} imageExtension={imageExtension} />
                                :
                                <></>
                            :
                            <></>
                    }
                </div>
                
            </Style.MatchPlayerBody>
        </Style.MatchPlayer>
    )
}

export default MatchPlayerV2;