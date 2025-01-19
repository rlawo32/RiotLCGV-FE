'use client';

import * as Style from "./match_ranking.style"

import { useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgAllWinningRateQuery, getLcgAllKillQuery, getLcgAllDeathQuery } from "../queries/getLcgMatchRankingQuery";
import useSupabaseBrowser from "../supabase-browser";

import RankingViewWinningRate from "./rankingView_winningRate";
import RankingViewKill from "./rankingView_kill";
import RankingViewDeath from "./rankingView_death";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();

    const [rankSelect, setRankSelect] = useState<string>("AW");
    
    const { data: queryWinningRateResult } = useQuery(getLcgAllWinningRateQuery(supabase), {enabled: rankSelect === 'AW'});
    const { data: queryAllKillResult } = useQuery(getLcgAllKillQuery(supabase), {enabled: rankSelect === 'AK'});
    const { data: queryAllDeathResult } = useQuery(getLcgAllDeathQuery(supabase), {enabled: rankSelect === 'AD'});

    return (
        <Style.MatchRanking $type={rankSelect}>
            <div className="ranking_container">
                <div className="ranking_select">
                    <Style.RankingSelect onChange={(e) => setRankSelect(e.target.value)}>
                        <option value={"AW"}>총 승률</option>
                        <option value={"AK"}>총 킬</option>
                        <option value={"AD"}>총 데스</option>
                    </Style.RankingSelect>
                </div>
                {
                    queryWinningRateResult && rankSelect === 'AW'   ? <RankingViewWinningRate data={queryWinningRateResult}/>   : 
                    queryAllKillResult && rankSelect === 'AK'       ? <RankingViewKill data={queryAllKillResult}/>              : 
                    queryAllDeathResult && rankSelect === 'AD'      ? <RankingViewDeath data={queryAllDeathResult}/>            : <></>
                }
            </div> 
        </Style.MatchRanking>
    )
}

export default MatchRanking;