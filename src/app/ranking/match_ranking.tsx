'use client';

import * as Style from "./match_ranking.style"

import { useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { 
    getLcgAllOverallQuery, getLcgAllWinningRateQuery, getLcgAllKillQuery, 
    getLcgAllDeathQuery, getLcgAllAssistQuery, getLcgAllCsQuery, 
    getLcgAllDemolisherQuery,getLcgAllGoldQuery, getLcgAllDamageQuery, 
    getLcgAllTakenQuery,getLcgAllJungleObjectQuery, getLcgAllMultiKillQuery, 
    getLcgAllVisionQuery,getLcgAllAvgDpmQuery, getLcgAllAvgGpmQuery, 
    getLcgAllAvgDpgQuery, getLcgAllMvpQuery, getLcgAllAceQuery,
    getLcgOneGameBest3KillQuery, getLcgOneGameBest3AssistQuery, getLcgOneGameBest3DeathQuery,
    getLcgOneGameBest3CsQuery, getLcgOneGameBest3GoldQuery, getLcgOneGameBest3TowerQuery,
    getLcgOneGameBest3DamageQuery, getLcgOneGameBest3HighTakenQuery, getLcgOneGameBest3LowTakenQuery,
    getLcgOneGameBest3DpmQuery, getLcgOneGameBest3GpmQuery, getLcgOneGameBest3DpgQuery,
} from "../queries/getLcgMatchRankingQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";

import SelectBox from "../component/select_box_rank";
import LoadingSpinner from "../component/loading_spinner";

import RankingViewOverall from "./rankingView_overall";
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
import RankingViewAvgDpm from "./rankingView_avgDpm";
import RankingViewAvgGpm from "./rankingView_avgGpm";
import RankingViewAvgDpg from "./rankingView_avgDpg";
import RankingViewMvp from "./rankingView_mvp";
import RankingViewAce from "./rankingView_ace";

import RankingView1G3BKill from "./rankingView_1G3B_kill";
import RankingView1G3BDeath from "./rankingView_1G3B_death";
import RankingView1G3BCs from "./rankingView_1G3B_cs";
import RankingView1G3BGold from "./rankingView_1G3B_gold";
import RankingView1G3BTower from "./rankingView_1G3B_tower";
import RankingView1G3BDamage from "./rankingView_1G3B_damage";
import RankingView1G3BHighTaken from "./rankingView_1G3B_highTaken";
import RankingView1G3BLowTaken from "./rankingView_1G3B_lowTaken";
import RankingView1G3BAssist from "./rankingView_1G3B_assist";
import RankingView1G3BDpm from "./rankingView_1G3B_dpm";
import RankingView1G3BGpm from "./rankingView_1G3B_gpm";
import RankingView1G3BDpg from "./rankingView_1G3B_dpg";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();

    let imageUrl:string = ""; // R2

    const [rankSelectIdx, setRankSelectIdx] = useState<number>(0);
    const rankSelectArr:{key:string, name:string}[] = [
        // {key:"AA", name:"종합 랭킹"}, 
        {key:"AW", name:"총 승률"}, {key:"AK", name:"총 킬"}, 
        {key:"AD", name:"총 데스"}, {key:"AS", name:"총 어시스트"}, {key:"AC", name:"총 CS"}, 
        {key:"AT", name:"총 철거"}, {key:"AG", name:"총 골드"}, {key:"ADA", name:"총 피해량"}, 
        {key:"ATA", name:"총 받은피해량"}, {key:"AJ", name:"총 오브젝트"}, {key:"AM", name:"총 멀티킬"}, 
        {key:"AV", name:"총 시야점수"}, {key:"ADM", name:"총 DPM"}, {key:"AGM", name:"총 GPM"}, 
        {key:"ADG", name:"총 DPG"}, {key:"AMP", name:"총 MVP"}, {key:"AAE", name:"총 ACE"}, 
        {key:"1GK", name:"최다 킬"}, {key:"1GD", name:"최다 데스"}, {key:"1GA", name:"최다 어시스트"}, 
        {key:"1GC", name:"최다 CS"}, {key:"1GG", name:"최다 골드"}, {key:"1GT", name:"최다 철거"}, 
        {key:"1GDA", name:"최고 피해량"}, {key:"1GHT", name:"최고 받은피해량"}, {key:"1GLT", name:"최저 받은피해량"}, 
        {key:"1GDM", name:"최고 DPM"}, {key:"1GGM", name:"최고 GPM"}, {key:"1GDG", name:"최고 DPG"}, 
    ];
    const { data: lcgMatchEtc, isLoading: loading1} = useQuery(getLcgMatchEtcQuery(supabase), {});

    if(!!lcgMatchEtc) {
        imageUrl = lcgMatchEtc[0].lcg_r2_image;
    }
    
    const { data: queryOverallResult } = useQuery(getLcgAllOverallQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AA'});
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
    const { data: queryAllAvgDpmResult } = useQuery(getLcgAllAvgDpmQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'ADM'});
    const { data: queryAllAvgGpmResult } = useQuery(getLcgAllAvgGpmQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AGM'});
    const { data: queryAllAvgDpgResult } = useQuery(getLcgAllAvgDpgQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'ADG'});
    const { data: queryAllMvpResult } = useQuery(getLcgAllMvpQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AMP'});
    const { data: queryAllAceResult } = useQuery(getLcgAllAceQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === 'AAE'});

    const { data: queryOneGameBest3KillResult } = useQuery(getLcgOneGameBest3KillQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GK'});
    const { data: queryOneGameBest3DeathResult } = useQuery(getLcgOneGameBest3DeathQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GD'});
    const { data: queryOneGameBest3AssistResult } = useQuery(getLcgOneGameBest3AssistQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GA'});
    const { data: queryOneGameBest3CsResult } = useQuery(getLcgOneGameBest3CsQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GC'});
    const { data: queryOneGameBest3GoldResult } = useQuery(getLcgOneGameBest3GoldQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GG'});
    const { data: queryOneGameBest3TowerResult } = useQuery(getLcgOneGameBest3TowerQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GT'});
    const { data: queryOneGameBest3DamageResult } = useQuery(getLcgOneGameBest3DamageQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GDA'});
    const { data: queryOneGameBest3HTakenResult } = useQuery(getLcgOneGameBest3HighTakenQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GHT'});
    const { data: queryOneGameBest3LTakenResult } = useQuery(getLcgOneGameBest3LowTakenQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GLT'});
    const { data: queryOneGameBest3DpmResult } = useQuery(getLcgOneGameBest3DpmQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GDM'});
    const { data: queryOneGameBest3GpmResult } = useQuery(getLcgOneGameBest3GpmQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GGM'});
    const { data: queryOneGameBest3DpgResult } = useQuery(getLcgOneGameBest3DpgQuery(supabase), {enabled: rankSelectArr[rankSelectIdx].key === '1GDG'});

    return (
        <Style.MatchRanking $type={rankSelectArr[rankSelectIdx].key}>
            {
                loading1 ? <LoadingSpinner /> :
                    <div className="ranking_container">
                        <div className="ranking_select">
                            <SelectBox rankSelect={rankSelectArr} rankSelectIdx={rankSelectIdx} setRankSelectIdx={setRankSelectIdx}/>
                        </div>
                        {
                            lcgMatchEtc ?
                            queryOverallResult && rankSelectArr[rankSelectIdx].key === 'AA'                 ? <RankingViewOverall data={queryOverallResult} imageUrl={imageUrl}/>                       : 
                            queryWinningRateResult && rankSelectArr[rankSelectIdx].key === 'AW'             ? <RankingViewWinningRate data={queryWinningRateResult} imageUrl={imageUrl}/>               : 
                            queryAllKillResult && rankSelectArr[rankSelectIdx].key === 'AK'                 ? <RankingViewKill data={queryAllKillResult} imageUrl={imageUrl}/>                          : 
                            queryAllDeathResult && rankSelectArr[rankSelectIdx].key === 'AD'                ? <RankingViewDeath data={queryAllDeathResult} imageUrl={imageUrl}/>                        : 
                            queryAllAssistResult && rankSelectArr[rankSelectIdx].key === 'AS'               ? <RankingViewAssist data={queryAllAssistResult} imageUrl={imageUrl}/>                      : 
                            queryAllCsResult && rankSelectArr[rankSelectIdx].key === 'AC'                   ? <RankingViewCs data={queryAllCsResult} imageUrl={imageUrl}/>                              : 
                            queryAllDemolisherResult && rankSelectArr[rankSelectIdx].key === 'AT'           ? <RankingViewDemolisher data={queryAllDemolisherResult} imageUrl={imageUrl}/>              : 
                            queryAllGoldResult && rankSelectArr[rankSelectIdx].key === 'AG'                 ? <RankingViewGold data={queryAllGoldResult} imageUrl={imageUrl}/>                          : 
                            queryAllDamageResult && rankSelectArr[rankSelectIdx].key === 'ADA'              ? <RankingViewDamage data={queryAllDamageResult} imageUrl={imageUrl}/>                      : 
                            queryAllTakenResult && rankSelectArr[rankSelectIdx].key === 'ATA'               ? <RankingViewTaken data={queryAllTakenResult} imageUrl={imageUrl}/>                        : 
                            queryAllJungleObjectResult && rankSelectArr[rankSelectIdx].key === 'AJ'         ? <RankingViewJungleObject data={queryAllJungleObjectResult} imageUrl={imageUrl}/>          : 
                            queryAllMultiKillResult && rankSelectArr[rankSelectIdx].key === 'AM'            ? <RankingViewMultiKill data={queryAllMultiKillResult} imageUrl={imageUrl}/>                : 
                            queryAllVisionResult && rankSelectArr[rankSelectIdx].key === 'AV'               ? <RankingViewVision data={queryAllVisionResult} imageUrl={imageUrl}/>                      : 
                            queryAllAvgDpmResult && rankSelectArr[rankSelectIdx].key === 'ADM'              ? <RankingViewAvgDpm data={queryAllAvgDpmResult} imageUrl={imageUrl}/>                      : 
                            queryAllAvgGpmResult && rankSelectArr[rankSelectIdx].key === 'AGM'              ? <RankingViewAvgGpm data={queryAllAvgGpmResult} imageUrl={imageUrl}/>                      : 
                            queryAllAvgDpgResult && rankSelectArr[rankSelectIdx].key === 'ADG'              ? <RankingViewAvgDpg data={queryAllAvgDpgResult} imageUrl={imageUrl}/>                      :
                            queryAllMvpResult && rankSelectArr[rankSelectIdx].key === 'AMP'                 ? <RankingViewMvp data={queryAllMvpResult} imageUrl={imageUrl}/>                            : 
                            queryAllAceResult && rankSelectArr[rankSelectIdx].key === 'AAE'                 ? <RankingViewAce data={queryAllAceResult} imageUrl={imageUrl}/>                            :
                            queryOneGameBest3KillResult && rankSelectArr[rankSelectIdx].key === '1GK'       ? <RankingView1G3BKill data={queryOneGameBest3KillResult} path={lcgMatchEtc[0]}/>           : 
                            queryOneGameBest3DeathResult && rankSelectArr[rankSelectIdx].key === '1GD'      ? <RankingView1G3BDeath data={queryOneGameBest3DeathResult} path={lcgMatchEtc[0]}/>         : 
                            queryOneGameBest3AssistResult && rankSelectArr[rankSelectIdx].key === '1GA'     ? <RankingView1G3BAssist data={queryOneGameBest3AssistResult} path={lcgMatchEtc[0]}/>       : 
                            queryOneGameBest3CsResult && rankSelectArr[rankSelectIdx].key === '1GC'         ? <RankingView1G3BCs data={queryOneGameBest3CsResult} path={lcgMatchEtc[0]}/>               : 
                            queryOneGameBest3GoldResult && rankSelectArr[rankSelectIdx].key === '1GG'       ? <RankingView1G3BGold data={queryOneGameBest3GoldResult} path={lcgMatchEtc[0]}/>           : 
                            queryOneGameBest3TowerResult && rankSelectArr[rankSelectIdx].key === '1GT'      ? <RankingView1G3BTower data={queryOneGameBest3TowerResult} path={lcgMatchEtc[0]}/>         : 
                            queryOneGameBest3DamageResult && rankSelectArr[rankSelectIdx].key === '1GDA'    ? <RankingView1G3BDamage data={queryOneGameBest3DamageResult} path={lcgMatchEtc[0]}/>       : 
                            queryOneGameBest3HTakenResult && rankSelectArr[rankSelectIdx].key === '1GHT'    ? <RankingView1G3BHighTaken data={queryOneGameBest3HTakenResult} path={lcgMatchEtc[0]}/>    :
                            queryOneGameBest3LTakenResult && rankSelectArr[rankSelectIdx].key === '1GLT'    ? <RankingView1G3BLowTaken data={queryOneGameBest3LTakenResult} path={lcgMatchEtc[0]}/>     : 
                            queryOneGameBest3DpmResult && rankSelectArr[rankSelectIdx].key === '1GDM'       ? <RankingView1G3BDpm data={queryOneGameBest3DpmResult} path={lcgMatchEtc[0]}/>             : 
                            queryOneGameBest3GpmResult && rankSelectArr[rankSelectIdx].key === '1GGM'       ? <RankingView1G3BGpm data={queryOneGameBest3GpmResult} path={lcgMatchEtc[0]}/>             :
                            queryOneGameBest3DpgResult && rankSelectArr[rankSelectIdx].key === '1GDG'       ? <RankingView1G3BDpg data={queryOneGameBest3DpgResult} path={lcgMatchEtc[0]}/>             : 
                            <></> : <></>
                        }
                    </div> 
            }
        </Style.MatchRanking>
    )
}

export default MatchRanking;