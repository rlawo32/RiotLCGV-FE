'use client';

import * as Style from "./match_ranking.style"
import Image from "next/image";

import { duplicationRank } from "./ranking_tool";

const RankingViewDeath = (props : {data:{
            lcg_summoner_puuid: string
            lcg_nickname: string
            lcg_count_death: number
            rank: number
        }[]}) => {

    const testArr:{lcg_nickname: string, lcg_count_death: number, rank: number}[] = [
        {lcg_nickname:'hello1', lcg_count_death:1, rank:1},
        {lcg_nickname:'hello1', lcg_count_death:1, rank:2},
        {lcg_nickname:'hello1', lcg_count_death:1, rank:3},
        {lcg_nickname:'hello1', lcg_count_death:1, rank:3},
    ];

    return (
        <>
            {/* {props.data.map((rankingData) => {
                return (

                )
            })} */}
            <div className="ranking_top">    
                <Style.RankingBox $ea={testArr.filter((item) => item.rank === 2).length}>
                    {testArr.filter((highRanking) => highRanking.rank === 2).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={2} key={"rank2_" + idx}>
                                <Image src={"/img/border_silver_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    <div className="ranker_title">총 {item.lcg_count_death} 데스</div>
                                    <div className="item_detail"></div>
                                </Style.RankerContent>
                            </Style.RankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={testArr.filter((item) => item.rank === 1).length}>
                    {testArr.filter((highRanking) => highRanking.rank === 1).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={1} key={"rank1_" + idx}>
                                <Image src={"/img/border_gold_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    <div className="ranker_title">총 {item.lcg_count_death} 데스</div>
                                    <div className="item_detail"></div>
                                </Style.RankerContent>
                            </Style.RankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={testArr.filter((item) => item.rank === 3).length}>
                    {testArr.filter((highRanking) => highRanking.rank === 3).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={3} key={"rank3_" + idx}>
                                <Image src={"/img/border_bronze_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    <div className="ranker_title">총 {item.lcg_count_death} 데스</div>
                                    <div className="item_detail"></div>
                                </Style.RankerContent>   
                            </Style.RankingItem>
                        )
                    })}
                </Style.RankingBox>
            </div>
            <div className="ranking_bottom">
                {testArr.filter((lowRanking) => lowRanking.rank > 3).map((item, idx) => {
                    return (
                        <div className="ranking_item" key={"lowRank_" + idx}>
                            <div className="item_rank">{item.rank}</div>
                            <div className="item_nickname">{item.lcg_nickname.split('#')[0]}</div>
                            <div className="ranker_title">총 {item.lcg_count_death} 데스</div>
                            <div className="item_detail"></div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RankingViewDeath;