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
    getLcgOneGameBest3KillQuery, getLcgOneGameBest3AssistQuery, getLcgOneGameBest3DeathQuery,
    getLcgOneGameBest3CsQuery, getLcgOneGameBest3GoldQuery, getLcgOneGameBest3TowerQuery,
    getLcgOneGameBest3DamageQuery, getLcgOneGameBest3HighTakenQuery, getLcgOneGameBest3LowTakenQuery,
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

import RankingView1G3BKill from "./rankingView_1G3B_kill";
import RankingView1G3BAssist from "./rankingView_1G3B_assist";
import RankingView1G3BDeath from "./rankingView_1G3B_death";
import RankingView1G3BCs from "./rankingView_1G3B_cs";
import RankingView1G3BGold from "./rankingView_1G3B_gold";
import RankingView1G3BTower from "./rankingView_1G3B_tower";
import RankingView1G3BDamage from "./rankingView_1G3B_damage";
import RankingView1G3BHighTaken from "./rankingView_1G3B_highTaken";
import RankingView1G3BLowTaken from "./rankingView_1G3B_lowTaken";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();

    const [rankSelectIdx, setRankSelectIdx] = useState<number>(0);
    const rankSelectArr:{key:string, name:string}[] = [
        {key:"AW", name:"총 승률"}, {key:"AK", name:"총 킬"}, {key:"AD", name:"총 데스"}, 
        {key:"AS", name:"총 어시스트"}, {key:"AC", name:"총 CS"}, {key:"AT", name:"총 철거"}, 
        {key:"AG", name:"총 골드"}, {key:"ADA", name:"총 피해량"}, {key:"ATA", name:"총 받은피해량"}, 
        {key:"AJ", name:"총 오브젝트"}, {key:"AM", name:"총 멀티킬"}, {key:"AV", name:"총 시야점수"}, 
        {key:"1GK", name:"최다 킬"}, {key:"1GD", name:"최다 데스"}, {key:"1GA", name:"최다 어시스트"}, 
        {key:"1GC", name:"최다 CS"}, {key:"1GG", name:"최다 골드"}, {key:"1GT", name:"최다 철거"}, 
        {key:"1GDA", name:"최고 피해량"}, {key:"1GHT", name:"최고 받은피해량"}, {key:"1GLT", name:"최저 받은피해량"}, 
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

    const { data: queryOneGameBest3KillResult } = useQuery(getLcgOneGameBest3KillQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GK'});
    const { data: queryOneGameBest3DeathResult } = useQuery(getLcgOneGameBest3DeathQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GD'});
    const { data: queryOneGameBest3AssistResult } = useQuery(getLcgOneGameBest3AssistQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GA'});
    const { data: queryOneGameBest3CsResult } = useQuery(getLcgOneGameBest3CsQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GC'});
    const { data: queryOneGameBest3GoldResult } = useQuery(getLcgOneGameBest3GoldQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GG'});
    const { data: queryOneGameBest3TowerResult } = useQuery(getLcgOneGameBest3TowerQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GT'});
    const { data: queryOneGameBest3DamageResult } = useQuery(getLcgOneGameBest3DamageQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GDA'});
    const { data: queryOneGameBest3HTakenResult } = useQuery(getLcgOneGameBest3HighTakenQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GHT'});
    const { data: queryOneGameBest3LTakenResult } = useQuery(getLcgOneGameBest3LowTakenQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GLT'});

    return (
        <Style.MatchRanking $type={rankSelectArr[rankSelectIdx].key}>
            <div className="ranking_container">
                <div className="ranking_select">
                    <SelectBox rankSelect={rankSelectArr} rankSelectIdx={rankSelectIdx} setRankSelectIdx={setRankSelectIdx}/>
                </div>
                {
                    queryWinningRateResult && rankSelectArr[rankSelectIdx].key === 'AW'             ? <RankingViewWinningRate data={queryWinningRateResult}/>           : 
                    queryAllKillResult && rankSelectArr[rankSelectIdx].key === 'AK'                 ? <RankingViewKill data={queryAllKillResult}/>                      : 
                    queryAllDeathResult && rankSelectArr[rankSelectIdx].key === 'AD'                ? <RankingViewDeath data={queryAllDeathResult}/>                    : 
                    queryAllAssistResult && rankSelectArr[rankSelectIdx].key === 'AS'               ? <RankingViewAssist data={queryAllAssistResult}/>                  : 
                    queryAllCsResult && rankSelectArr[rankSelectIdx].key === 'AC'                   ? <RankingViewCs data={queryAllCsResult}/>                          : 
                    queryAllDemolisherResult && rankSelectArr[rankSelectIdx].key === 'AT'           ? <RankingViewDemolisher data={queryAllDemolisherResult}/>          : 
                    queryAllGoldResult && rankSelectArr[rankSelectIdx].key === 'AG'                 ? <RankingViewGold data={queryAllGoldResult}/>                      : 
                    queryAllDamageResult && rankSelectArr[rankSelectIdx].key === 'ADA'              ? <RankingViewDamage data={queryAllDamageResult}/>                  : 
                    queryAllTakenResult && rankSelectArr[rankSelectIdx].key === 'ATA'               ? <RankingViewTaken data={queryAllTakenResult}/>                    : 
                    queryAllJungleObjectResult && rankSelectArr[rankSelectIdx].key === 'AJ'         ? <RankingViewJungleObject data={queryAllJungleObjectResult}/>      : 
                    queryAllMultiKillResult && rankSelectArr[rankSelectIdx].key === 'AM'            ? <RankingViewMultiKill data={queryAllMultiKillResult}/>            : 
                    queryAllVisionResult && rankSelectArr[rankSelectIdx].key === 'AV'               ? <RankingViewVision data={queryAllVisionResult}/>                  : 
                    queryOneGameBest3KillResult && rankSelectArr[rankSelectIdx].key === '1GK'       ? <RankingView1G3BKill data={queryOneGameBest3KillResult}/>         : 
                    queryOneGameBest3DeathResult && rankSelectArr[rankSelectIdx].key === '1GD'      ? <RankingView1G3BDeath data={queryOneGameBest3DeathResult}/>       : 
                    queryOneGameBest3AssistResult && rankSelectArr[rankSelectIdx].key === '1GA'     ? <RankingView1G3BAssist data={queryOneGameBest3AssistResult}/>     : 
                    queryOneGameBest3CsResult && rankSelectArr[rankSelectIdx].key === '1GC'         ? <RankingView1G3BCs data={queryOneGameBest3CsResult}/>             : 
                    queryOneGameBest3GoldResult && rankSelectArr[rankSelectIdx].key === '1GG'       ? <RankingView1G3BGold data={queryOneGameBest3GoldResult}/>         : 
                    queryOneGameBest3TowerResult && rankSelectArr[rankSelectIdx].key === '1GT'      ? <RankingView1G3BTower data={queryOneGameBest3TowerResult}/>       : 
                    queryOneGameBest3DamageResult && rankSelectArr[rankSelectIdx].key === '1GDA'    ? <RankingView1G3BDamage data={queryOneGameBest3DamageResult}/>     : 
                    queryOneGameBest3HTakenResult && rankSelectArr[rankSelectIdx].key === '1GHT'    ? <RankingView1G3BHighTaken data={queryOneGameBest3HTakenResult}/>  : 
                    queryOneGameBest3LTakenResult && rankSelectArr[rankSelectIdx].key === '1GLT'    ? <RankingView1G3BLowTaken data={queryOneGameBest3LTakenResult}/>   : 
                    <></>
                }
            </div> 
        </Style.MatchRanking>
    )
}

export default MatchRanking;