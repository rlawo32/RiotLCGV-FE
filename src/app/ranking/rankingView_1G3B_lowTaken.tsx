'use client';

import * as Style from "./match_ranking.style"
import Image from "next/image";
import Link from "next/link";

import { duplicationRank } from "../component/match_tool";

const RankingView1G3BLowTaken = (props : {data:{
            lcg_summoner_puuid: string
            lcg_summoner_nickname: string
            lcg_champion_name: string
            damagetaken: number
            rank: number
        }[]}) => {

    return (
        <>
            <div className="ranking_top">    
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 2).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 2).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={2} key={"rank2_" + idx}>
                                <Image src={"/img/border_silver_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_detail">
                                        <Image src={"https://ddragon.leagueoflegends.com/cdn/15.2.1/img/champion/" + item.lcg_champion_name + ".png"} 
                                        alt={"champion"} height={40} width={40} className="champion_img" />
                                    </div>
                                    <div className="ranker_title">최저 {item.damagetaken.toLocaleString()} 받은피해량</div>
                                </Style.RankerContent>
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 1).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 1).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={1} key={"rank1_" + idx}>
                                <Image src={"/img/border_gold_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_detail">
                                        <Image src={"https://ddragon.leagueoflegends.com/cdn/15.2.1/img/champion/" + item.lcg_champion_name + ".png"} 
                                        alt={"champion"} height={40} width={40} className="champion_img" />
                                    </div>
                                    <div className="ranker_title">최저 {item.damagetaken.toLocaleString()} 받은피해량</div>
                                </Style.RankerContent>
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 3).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 3).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={3} key={"rank3_" + idx}>
                                <Image src={"/img/border_bronze_image.png"} alt={"ranking_border"} 
                                height={duplicationRank(arr.length)} width={duplicationRank(arr.length)} className="ranker_img" />
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_detail">
                                        <Image src={"https://ddragon.leagueoflegends.com/cdn/15.2.1/img/champion/" + item.lcg_champion_name + ".png"} 
                                        alt={"champion"} height={40} width={40} className="champion_img" />
                                    </div>
                                    <div className="ranker_title">최저 {item.damagetaken.toLocaleString()} 받은피해량</div>
                                </Style.RankerContent>   
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
            </div>
        </>
    )
}

export default RankingView1G3BLowTaken;