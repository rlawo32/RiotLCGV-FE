'use client';

import * as Style from "./match_ranking.style"

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgAllWinningRateQuery, getLcgAllDeathQuery } from "../queries/getLcgPlayerStatisticsQuery";
import useSupabaseBrowser from "../supabase-browser";

import RankingViewWinningRate from "./rankingView_winningRate";
import { useState } from "react";
import RankingViewDeath from "./rankingView_death";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();

    const [rankSelect, setRankSelect] = useState<string>("AW");
    
    const { data: queryWinningRateResult } = useQuery(getLcgAllWinningRateQuery(supabase), {enabled: rankSelect === 'AW'});
    const { data: queryAllDeathResult } = useQuery(getLcgAllDeathQuery(supabase), {enabled: rankSelect === 'AD'});

    return (
        <Style.MatchRanking $type={rankSelect}>
            <div className="ranking_container">
                <select onChange={(e) => setRankSelect(e.target.value)}>
                    <option value={"AW"}>승률</option>
                    <option value={"AD"}>데스</option>
                </select>
                {queryWinningRateResult && rankSelect === 'AW' ? <RankingViewWinningRate data={queryWinningRateResult}/> : 
                 queryAllDeathResult && rankSelect === 'AD' ? <RankingViewDeath data={queryAllDeathResult}/> : <></>
                }
            </div> 
        </Style.MatchRanking>
    )
}

export default MatchRanking;