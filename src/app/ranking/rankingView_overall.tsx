'use client';

import * as Style from "./match_ranking.style"
import Link from "next/link";

import { duplicationRank } from "../component/match_tool";

const RankingViewOverall = (props : {data:{
            lcg_summoner_nickname: string
            lcg_ranking_score: number
            lcg_ranking_current: number
        }[], imageUrl:string}) => {

    const calcRankTitle = (score:number):string => {
        let result:string = "";

        if(score > 350) {
            result = "S";
        } else if(score > 300) {
            result = "A";
        } else if(score > 250) {
            result = "B";
        } else if(score > 200) {
            result = "C";
        } else {
            result = "D";
        }

        return result;
    }

    return (
        <>
            <div className="ranking_top">    
                <Style.RankingBox $ea={props.data.filter((item) => item.lcg_ranking_current === 2).length}>
                    {props.data.filter((highRanking) => highRanking.lcg_ranking_current === 2).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={2} $h={duplicationRank(arr.length)} $w={duplicationRank(arr.length)} key={"rank2_" + idx}>
                                <div className="ranker_img_box">
                                    <img src={props.imageUrl + "public/border_silver_image.png"} alt={"ranking_border"} className="ranker_img" />
                                    {/* <img src={props.imageUrl + "public/" + item.lcg_summoner_puuid + ".jpg"} alt={"ranking_player"} 
                                    height={duplicationRank(arr.length)-10} width={duplicationRank(arr.length)-10} className="player_img" /> */}
                                </div>
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_content_main">
                                        <h4 className="a_rank_text">{calcRankTitle(item.lcg_ranking_score)} Rank</h4>
                                    </div>
                                    <div className="ranker_content_sub">
                                        {item.lcg_ranking_score.toLocaleString()} 점
                                    </div>
                                </Style.RankerContent>
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.lcg_ranking_current === 1).length}>
                    {props.data.filter((highRanking) => highRanking.lcg_ranking_current === 1).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={1} $h={duplicationRank(arr.length)} $w={duplicationRank(arr.length)} key={"rank1_" + idx}>
                                <div className="ranker_img_box">
                                    <img src={props.imageUrl + "public/border_gold_image.png"} alt={"ranking_border"} className="ranker_img" />
                                    {/* <img src={props.imageUrl + "public/" + item.lcg_summoner_puuid + ".jpg"} alt={"ranking_player"} 
                                    height={duplicationRank(arr.length)-10} width={duplicationRank(arr.length)-10} className="player_img" /> */}
                                </div>
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_content_main">
                                        <h4 className="s_rank_text">{calcRankTitle(item.lcg_ranking_score)} Rank</h4>
                                    </div>
                                    <div className="ranker_content_sub">
                                        {item.lcg_ranking_score.toLocaleString()} 점
                                    </div>
                                </Style.RankerContent>
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.lcg_ranking_current === 3).length}>
                    {props.data.filter((highRanking) => highRanking.lcg_ranking_current === 3).map((item, idx, arr) => {
                        return (
                            <Style.HighRankingItem $ea={arr.length} $rank={3} $h={duplicationRank(arr.length)} $w={duplicationRank(arr.length)} key={"rank3_" + idx}>
                                <div className="ranker_img_box">
                                    <img src={props.imageUrl + "public/border_bronze_image.png"} alt={"ranking_border"} className="ranker_img" />
                                    {/* <img src={props.imageUrl + "public/" + item.lcg_summoner_puuid + ".jpg"} alt={"ranking_player"} 
                                    height={duplicationRank(arr.length)-10} width={duplicationRank(arr.length)-10} className="player_img" /> */}
                                </div>
                                <Style.RankerContent $ea={arr.length}>
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_content_main">
                                        <h4 className="a_rank_text">{calcRankTitle(item.lcg_ranking_score)} Rank</h4>
                                    </div>
                                    <div className="ranker_content_sub">
                                        {item.lcg_ranking_score.toLocaleString()} 점
                                    </div>
                                </Style.RankerContent>   
                            </Style.HighRankingItem>
                        )
                    })}
                </Style.RankingBox>
            </div>
            <div className="ranking_bottom">
                {props.data.filter((lowRanking) => lowRanking.lcg_ranking_current > 3).map((item, idx) => {
                    return (
                        <div key={"lowRank_" + idx}>    
                            {
                                idx === 0 ? 
                                        <div className="ranking_item_header">
                                            <div className="item_header item_header_rank">순위</div>
                                            <div className="item_header item_header_nickname">소환사명</div>
                                            <div className="item_header item_header_count"></div>
                                            <div className="item_header item_header_title">랭크</div>
                                            <div className="item_header item_header_detail">종합 점수</div>
                                        </div> : <></>
                            }
                            <Style.LowRankingItem $type={""}>
                                <div className="item_rank">{item.lcg_ranking_current}<span>th</span></div>
                                <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                    <div className="item_nickname">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                </Link>
                                <div className="item_detail1"></div>
                                <div className="item_detail2">
                                    {
                                        calcRankTitle(item.lcg_ranking_score) === 'A' ? <h4 className="a_rank_text">{calcRankTitle(item.lcg_ranking_score)} Rank</h4> :
                                        calcRankTitle(item.lcg_ranking_score) === 'B' ? <h4 className="b_rank_text">{calcRankTitle(item.lcg_ranking_score)} Rank</h4> :
                                        calcRankTitle(item.lcg_ranking_score) === 'C' ? <h4 className="c_rank_text">{calcRankTitle(item.lcg_ranking_score)} Rank</h4> :
                                        <h4>{calcRankTitle(item.lcg_ranking_score)} Rank</h4>
                                    }
                                </div>
                                <div className="item_detail3">{item.lcg_ranking_score.toLocaleString()} 점</div>
                            </Style.LowRankingItem>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RankingViewOverall;