'use client';

import Image from "next/image";
import * as Style from "./match_ranking.style"

const RankingViewWinningRate = (props : {data:{
          lcg_summoner_puuid: string
          lcg_nickname: string
          lcg_count_play: number
          lcg_count_victory: number
          lcg_count_defeat: number
          rate: string
          rank: number
        }[]}) => {
        
    const duplicationRank = (ea:number):number => {
        let size:number = 0;
        if(ea === 1) {
            size = 120;
        } else if(ea === 2) {
            size = 80;
        } else if(ea === 3) {
            size = 50;
        } else {
            size = 30;
        }
        return size;
    }

    return (
        <>
            {/* {props.data.map((rankingData) => {
                return (

                )
            })} */}
            <div className="ranking_top">    
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 2).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 2).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={2} key={"rank2_" + idx}>
                                <Image src={"/img/border_silver_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    <div className="ranker_title">승률 {item.rate}%</div>
                                    <div className="ranker_detail">{item.lcg_count_victory}승 {item.lcg_count_defeat}패</div>
                                </Style.RankerContent>
                            </Style.RankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 1).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 1).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={1} key={"rank1_" + idx}>
                                <Image src={"/img/border_gold_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    <div className="ranker_title">승률 {item.rate}%</div>
                                    <div className="ranker_detail">{item.lcg_count_victory}승 {item.lcg_count_defeat}패</div>
                                </Style.RankerContent>
                            </Style.RankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 3).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 3).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={3} key={"rank3_" + idx}>
                                <Image src={"/img/border_bronze_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    <div className="ranker_title">승률 {item.rate}%</div>
                                    <div className="ranker_detail">{item.lcg_count_victory}승 {item.lcg_count_defeat}패</div>
                                </Style.RankerContent>   
                            </Style.RankingItem>
                        )
                    })}
                </Style.RankingBox>
            </div>
            <div className="ranking_bottom">
                {props.data.filter((lowRanking) => lowRanking.rank > 3).map((item, idx) => {
                    return (
                        <div className="ranking_item" key={"lowRank_" + idx}>
                            <div className="item_rank">{item.rank}</div>
                            <div className="item_nickname">{item.lcg_nickname.split('#')[0]}</div>
                            <div className="item_title">{item.lcg_count_victory}승 {item.lcg_count_defeat}패</div>
                            <div className="item_detail">승률 {item.rate}%</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RankingViewWinningRate;