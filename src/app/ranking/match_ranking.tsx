'use client';

import * as Style from "./match_ranking.style"

import { useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { 
    getLcgAllWinningRateQuery, getLcgAllKillQuery, getLcgAllDeathQuery, 
    getLcgAllAssistQuery, getLcgAllCsQuery, getLcgAllDemolisherQuery,
    getLcgAllGoldQuery, getLcgAllDamageQuery, getLcgAllTakenQuery,
    getLcgAllJungleObjectQuery, getLcgAllMultiKillQuery, getLcgAllVisionQuery,
} from "../queries/getLcgMatchRankingQuery";

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
import SelectBox from "../component/select_box";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();

    const [rankSelectIdx, setRankSelectIdx] = useState<number>(0);
    const rankSelectArr:{key:string, name:string}[] = [
        {key:"AW", name:"총 승률"}, {key:"AK", name:"총 킬"}, {key:"AD", name:"총 데스"}, 
        {key:"AS", name:"총 어시스트"}, {key:"AC", name:"총 CS"}, {key:"AT", name:"총 철거"}, 
        {key:"AG", name:"총 골드"}, {key:"ADA", name:"총 피해량"}, {key:"ATA", name:"총 받은피해량"}, 
        {key:"AJ", name:"총 오브젝트"}, {key:"AM", name:"총 멀티킬"}, {key:"AV", name:"총 시야점수"}, 
    ];
    
    const { data: queryWinningRateResult } = useQuery(getLcgAllWinningRateQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AW'});
    const { data: queryAllKillResult } = useQuery(getLcgAllKillQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AK'});
    const { data: queryAllDeathResult } = useQuery(getLcgAllDeathQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AD'});
    const { data: queryAllAssistResult } = useQuery(getLcgAllAssistQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AS'});
    const { data: queryAllCsResult } = useQuery(getLcgAllCsQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AC'});
    const { data: queryAllDemolisherResult } = useQuery(getLcgAllDemolisherQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AT'});
    const { data: queryAllGoldResult } = useQuery(getLcgAllGoldQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AG'});
    const { data: queryAllDamageResult } = useQuery(getLcgAllDamageQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'ADA'});
    const { data: queryAllTakenResult } = useQuery(getLcgAllTakenQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'ATA'});
    const { data: queryAllJungleObjectResult } = useQuery(getLcgAllJungleObjectQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AJ'});
    const { data: queryAllMultiKillResult } = useQuery(getLcgAllMultiKillQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AM'});
    const { data: queryAllVisionResult } = useQuery(getLcgAllVisionQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AV'});

    return (
        <Style.MatchRanking $type={rankSelectArr[rankSelectIdx].key}>
            <div className="ranking_container">
                <div className="ranking_select">
                    <SelectBox rankSelect={rankSelectArr} rankSelectIdx={rankSelectIdx} setRankSelectIdx={setRankSelectIdx}/>
                </div>
                {
                    queryWinningRateResult && rankSelectArr[rankSelectIdx].key === 'AW'       ? <RankingViewWinningRate data={queryWinningRateResult}/>       : 
                    queryAllKillResult && rankSelectArr[rankSelectIdx].key === 'AK'           ? <RankingViewKill data={queryAllKillResult}/>                  : 
                    queryAllDeathResult && rankSelectArr[rankSelectIdx].key === 'AD'          ? <RankingViewDeath data={queryAllDeathResult}/>                : 
                    queryAllAssistResult && rankSelectArr[rankSelectIdx].key === 'AS'         ? <RankingViewAssist data={queryAllAssistResult}/>              : 
                    queryAllCsResult && rankSelectArr[rankSelectIdx].key === 'AC'             ? <RankingViewCs data={queryAllCsResult}/>                      : 
                    queryAllDemolisherResult && rankSelectArr[rankSelectIdx].key === 'AT'     ? <RankingViewDemolisher data={queryAllDemolisherResult}/>      : 
                    queryAllGoldResult && rankSelectArr[rankSelectIdx].key === 'AG'           ? <RankingViewGold data={queryAllGoldResult}/>                  : 
                    queryAllDamageResult && rankSelectArr[rankSelectIdx].key === 'ADA'        ? <RankingViewDamage data={queryAllDamageResult}/>              : 
                    queryAllTakenResult && rankSelectArr[rankSelectIdx].key === 'ATA'         ? <RankingViewTaken data={queryAllTakenResult}/>                : 
                    queryAllJungleObjectResult && rankSelectArr[rankSelectIdx].key === 'AJ'   ? <RankingViewJungleObject data={queryAllJungleObjectResult}/>  : 
                    queryAllMultiKillResult && rankSelectArr[rankSelectIdx].key === 'AM'      ? <RankingViewMultiKill data={queryAllMultiKillResult}/>        : 
                    queryAllVisionResult && rankSelectArr[rankSelectIdx].key === 'AV'         ? <RankingViewVision data={queryAllVisionResult}/>              : 
                    <></>
                }
            </div> 
        </Style.MatchRanking>
    )
}

export default MatchRanking;