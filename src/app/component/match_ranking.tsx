'use client';

import * as Style from "./match_ranking.style"

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgBest3GoldQuery } from "../queries/getLcgPlayerStatisticsQuery";
import useSupabaseBrowser from "../supabase-browser";
import Image from "next/image";

const MatchRanking = () => {
    const supabase = useSupabaseBrowser();
    
    const { data: best3gold } = useQuery(getLcgBest3GoldQuery(supabase));

    if(best3gold !== null && best3gold !== undefined) {
        
    }

    return (
        <Style.MatchRanking>
            {best3gold ? 
                <div className="ranking_box">
                    <div className="ranking_item ranking-2">
                        <div className="ranker_img" />
                        <Image src={"/img/border_silver_image.png"} alt={"ranking_border"} 
                        height={170} width={170} className="ranker_img" />
                        <div className="ranker_name">{best3gold[1].lcg_nickname.split('#')[0]}</div>
                        <div className="ranker_detail">총 골드 {best3gold[1].lcg_count_gold.toLocaleString()}</div>
                    </div>
                    <div className="ranking_item ranking_1">
                        <Image src={"/img/border_gold_image.png"} alt={"ranking_border"} 
                        height={170} width={170} className="ranker_img" />
                        <div className="ranker_name">{best3gold[0].lcg_nickname.split('#')[0]}</div>
                        <div className="ranker_detail">총 골드 {best3gold[0].lcg_count_gold.toLocaleString()}</div>
                    </div>
                    <div className="ranking_item ranking_3">
                        <Image src={"/img/border_bronze_image.png"} alt={"ranking_border"} 
                        height={170} width={170} className="ranker_img" />
                        <div className="ranker_name">{best3gold[2].lcg_nickname.split('#')[0]}</div>
                        <div className="ranker_detail">총 골드 {best3gold[2].lcg_count_gold.toLocaleString()}</div>
                    </div>
                </div>
            
            : <></>}
            
        </Style.MatchRanking>
    )
}

export default MatchRanking;