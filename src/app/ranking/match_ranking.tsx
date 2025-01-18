'use client';

import * as Style from "./match_ranking.style"

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgAllWinningRateQuery } from "../queries/getLcgPlayerStatisticsQuery";
import useSupabaseBrowser from "../supabase-browser";

import RankingViewWinningRate from "./rankingView_winningRate";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();
    
    const { data: best3gold } = useQuery(getLcgAllWinningRateQuery(supabase));

    return (
        <Style.MatchRanking>
            <div className="ranking_container">
                {best3gold ? <RankingViewWinningRate data={best3gold}/> : <></>}
            </div> 
        </Style.MatchRanking>
    )
}

export default MatchRanking;