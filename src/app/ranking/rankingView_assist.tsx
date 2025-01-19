'use client';

import * as Style from "./match_ranking.style"
import Image from "next/image";
import Link from "next/link";

import { duplicationRank } from "./ranking_tool";

const RankingViewAssist = (props : {data:{
            lcg_summoner_puuid: string
            lcg_nickname: string
            lcg_count_assist: number
            rank: number
        }[]}) => {

    return (
        <>
            <div className="ranking_top">    
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 2).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 2).map((item, idx, arr) => {
                        return (
                            <Style.RankingItem $ea={arr.length} $rank={2} key={"rank2_" + idx}>
                                <Image src={"/img/border_silver_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_title">총 {item.lcg_count_assist.toLocaleString()} 어시</div>
                                    <div className="ranker_detail"></div>
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
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_title">총 {item.lcg_count_assist.toLocaleString()} 어시</div>
                                    <div className="ranker_detail"></div>
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
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_title">총 {item.lcg_count_assist.toLocaleString()} 어시</div>
                                    <div className="ranker_detail"></div>
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
                            <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                <div className="item_rank">{item.rank}</div>
                            </Link>
                            <div className="item_nickname">{item.lcg_nickname.split('#')[0]}</div>
                            <div className="item_title"></div>
                            <div className="item_detail">총 {item.lcg_count_assist.toLocaleString()} 어시</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RankingViewAssist;