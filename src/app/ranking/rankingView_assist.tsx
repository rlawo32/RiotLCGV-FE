'use client';

import * as Style from "./match_ranking.style"
import Link from "next/link";

import { duplicationRank } from "../component/match_tool";

const RankingViewAssist = (props : {data:{
            lcg_summoner_puuid: string
            lcg_nickname: string
            lcg_count_play: number
            lcg_count_assist: number
            rank: number
        }[]}) => {

    return (
        <>
            <div className="ranking_top">    
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 2).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 2).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={2} $h={duplicationRank(arr.length)} $w={duplicationRank(arr.length)} key={"rank2_" + idx}>
                                <div className="ranker_img_box">
                                    <img src={"/img/border_silver_image.png"} alt={"ranking_border"} className="ranker_img" />
                                    {/* <img src={"/img/" + item.lcg_summoner_puuid + ".jpg"} alt={"ranking_player"} 
                                    height={duplicationRank(arr.length)-10} width={duplicationRank(arr.length)-10} className="player_img" /> */}
                                </div>
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_content_main">{item.lcg_count_play} 게임</div>
                                    <div className="ranker_content_sub">
                                        총 {item.lcg_count_assist.toLocaleString()} 어시
                                    </div>
                                </Style.RankerContent>
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 1).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 1).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={1} $h={duplicationRank(arr.length)} $w={duplicationRank(arr.length)} key={"rank1_" + idx}>
                                <div className="ranker_img_box">
                                    <img src={"/img/border_gold_image.png"} alt={"ranking_border"} className="ranker_img" />
                                    {/* <img src={"/img/" + item.lcg_summoner_puuid + ".jpg"} alt={"ranking_player"} 
                                    height={duplicationRank(arr.length)-10} width={duplicationRank(arr.length)-10} className="player_img" /> */}
                                </div>
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_content_main">{item.lcg_count_play} 게임</div>
                                    <div className="ranker_content_sub">
                                        총 {item.lcg_count_assist.toLocaleString()} 어시
                                    </div>
                                </Style.RankerContent>
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 3).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 3).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={3} $h={duplicationRank(arr.length)} $w={duplicationRank(arr.length)} key={"rank3_" + idx}>
                                <div className="ranker_img_box">
                                    <img src={"/img/border_bronze_image.png"} alt={"ranking_border"} className="ranker_img" />
                                    {/* <img src={"/img/" + item.lcg_summoner_puuid + ".jpg"} alt={"ranking_player"} 
                                    height={duplicationRank(arr.length)-10} width={duplicationRank(arr.length)-10} className="player_img" /> */}
                                </div>
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_content_main">{item.lcg_count_play} 게임</div>
                                    <div className="ranker_content_sub">
                                        총 {item.lcg_count_assist.toLocaleString()} 어시
                                    </div>
                                </Style.RankerContent>   
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
            </div>
            <div className="ranking_bottom">
                {props.data.filter((lowRanking) => lowRanking.rank > 3).map((item, idx) => {
                    return (
                        <div key={"lowRank_" + idx}>
                            {
                                idx === 0 ? 
                                        <div className="ranking_item_header">
                                            <div className="item_header item_header_rank">순위</div>
                                            <div className="item_header item_header_nickname">소환사명</div>
                                            <div className="item_header item_header_count">게임 횟수</div>
                                            <div className="item_header item_header_title"></div>
                                            <div className="item_header item_header_detail">총 어시스트</div>
                                        </div> : <></>
                            }
                            <Style.LowRankingItem $type={""}>
                                <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                    <div className="item_rank">{item.rank}<span>th</span></div>
                                </Link>
                                <div className="item_nickname">{item.lcg_nickname.split('#')[0]}</div>
                                <div className="item_detail1">{item.lcg_count_play} 게임</div>
                                <div className="item_detail2"></div>
                                <div className="item_detail3">{item.lcg_count_assist.toLocaleString()} 어시</div>
                            </Style.LowRankingItem> 
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RankingViewAssist;