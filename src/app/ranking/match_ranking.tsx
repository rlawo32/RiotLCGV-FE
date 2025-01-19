'use client';

import * as Style from "./match_ranking.style"

import { useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { 
    getLcgAllWinningRateQuery, getLcgAllKillQuery, getLcgAllDeathQuery, 
    getLcgAllAssistQuery, getLcgAllCsQuery, getLcgAllDemolisherQuery,
    getLcgAllGoldQuery, getLcgAllDamageQuery, getLcgAllTakenQuery,
    getLcgAllJungleObjectQuery, getLcgAllMultiKillQuery, getLcgAllVisionQuery,
} from "../queries/getLcgMatchRankingQuery";
import useSupabaseBrowser from "../supabase-browser";

import RankingViewWinningRate from "./rankingView_winningRate";
import RankingViewKill from "./rankingView_kill";
import RankingViewDeath from "./rankingView_death";
import RankingViewAssist from "./rankingView_assist";
import RankingViewCs from "./rankingView_cs";
import RankingViewGold from "./rankingView_gold";
import RankingViewDamage from "./rankingView_damage";
import RankingViewTaken from "./rankingView_taken";
import RankingViewDemolisher from "./rankingView_demolisher";
import RankingViewJungleObject from "./rankingView_jungleobject";
import RankingViewMultiKill from "./rankingView_multikill";
import RankingViewVision from "./rankingView_vision";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();

    const [rankSelect, setRankSelect] = useState<string>("AW");
    
    const { data: queryWinningRateResult } = useQuery(getLcgAllWinningRateQuery(supabase), {enabled: rankSelect === 'AW'});
    const { data: queryAllKillResult } = useQuery(getLcgAllKillQuery(supabase), {enabled: rankSelect === 'AK'});
    const { data: queryAllDeathResult } = useQuery(getLcgAllDeathQuery(supabase), {enabled: rankSelect === 'AD'});
    const { data: queryAllAssistResult } = useQuery(getLcgAllAssistQuery(supabase), {enabled: rankSelect === 'AS'});
    const { data: queryAllCsResult } = useQuery(getLcgAllCsQuery(supabase), {enabled: rankSelect === 'AC'});
    const { data: queryAllDemolisherResult } = useQuery(getLcgAllDemolisherQuery(supabase), {enabled: rankSelect === 'AT'});
    const { data: queryAllGoldResult } = useQuery(getLcgAllGoldQuery(supabase), {enabled: rankSelect === 'AG'});
    const { data: queryAllDamageResult } = useQuery(getLcgAllDamageQuery(supabase), {enabled: rankSelect === 'ADA'});
    const { data: queryAllTakenResult } = useQuery(getLcgAllTakenQuery(supabase), {enabled: rankSelect === 'ATA'});
    const { data: queryAllJungleObjectResult } = useQuery(getLcgAllJungleObjectQuery(supabase), {enabled: rankSelect === 'AJ'});
    const { data: queryAllMultiKillResult } = useQuery(getLcgAllMultiKillQuery(supabase), {enabled: rankSelect === 'AM'});
    const { data: queryAllVisionResult } = useQuery(getLcgAllVisionQuery(supabase), {enabled: rankSelect === 'AV'});

    return (
        <Style.MatchRanking $type={rankSelect}>
            <div className="ranking_container">
                <div className="ranking_select">
                    <Style.RankingSelect onChange={(e) => setRankSelect(e.target.value)}>
                        <option value={"AW"}>총 승률</option>
                        <option value={"AK"}>총 킬</option>
                        <option value={"AD"}>총 데스</option>
                        <option value={"AS"}>총 어시스트</option>
                        <option value={"AC"}>총 CS</option>
                        <option value={"AT"}>총 철거</option>
                        <option value={"AG"}>총 골드</option>
                        <option value={"ADA"}>총 피해량</option>
                        <option value={"ATA"}>총 받은피해량</option>
                        <option value={"AJ"}>총 오브젝트</option>
                        <option value={"AM"}>총 멀티킬</option>
                        <option value={"AV"}>총 시야점수</option>
                    </Style.RankingSelect>
                </div>
                {
                    queryWinningRateResult && rankSelect === 'AW'       ? <RankingViewWinningRate data={queryWinningRateResult}/>       : 
                    queryAllKillResult && rankSelect === 'AK'           ? <RankingViewKill data={queryAllKillResult}/>                  : 
                    queryAllDeathResult && rankSelect === 'AD'          ? <RankingViewDeath data={queryAllDeathResult}/>                : 
                    queryAllAssistResult && rankSelect === 'AS'         ? <RankingViewAssist data={queryAllAssistResult}/>              : 
                    queryAllCsResult && rankSelect === 'AC'             ? <RankingViewCs data={queryAllCsResult}/>                      : 
                    queryAllDemolisherResult && rankSelect === 'AT'     ? <RankingViewDemolisher data={queryAllDemolisherResult}/>      : 
                    queryAllGoldResult && rankSelect === 'AG'           ? <RankingViewGold data={queryAllGoldResult}/>                  : 
                    queryAllDamageResult && rankSelect === 'ADA'        ? <RankingViewDamage data={queryAllDamageResult}/>              : 
                    queryAllTakenResult && rankSelect === 'ATA'         ? <RankingViewTaken data={queryAllTakenResult}/>                : 
                    queryAllJungleObjectResult && rankSelect === 'AJ'   ? <RankingViewJungleObject data={queryAllJungleObjectResult}/>  : 
                    queryAllMultiKillResult && rankSelect === 'AM'      ? <RankingViewMultiKill data={queryAllMultiKillResult}/>        : 
                    queryAllVisionResult && rankSelect === 'AV'         ? <RankingViewVision data={queryAllVisionResult}/>              : 
                    <></>
                }
            </div> 
        </Style.MatchRanking>
    )
}

export default MatchRanking;