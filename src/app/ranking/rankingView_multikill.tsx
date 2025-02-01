'use client';

import * as Style from "./match_ranking.style"
import Image from "next/image";
import Link from "next/link";

import { duplicationRank } from "./ranking_tool";
import DoubleKillIcon from "../icons/DoubleKillIcon";
import TripleKillIcon from "../icons/TripleKillIcon";
import QuadraKillIcon from "../icons/QuadraKillIcon";
import PentaKillIcon from "../icons/PentaKillIcon";

const RankingViewMultiKill = (props : {data:{
            lcg_summoner_puuid: string
            lcg_nickname: string
            lcg_count_play: number
            lcg_count_double_kill: number
            lcg_count_triple_kill: number
            lcg_count_quadra_kill: number
            lcg_count_penta_kill: number
            lcg_multi_kill_total: number
            lcg_multi_kill_score: number
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
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_detail">멀티킬 점수 {item.lcg_multi_kill_score}</div>
                                    <div className="object_box ranker_title">
                                        <div className="highRank_multikill_item"><DoubleKillIcon /><span>{item.lcg_count_double_kill}</span></div>
                                        <div className="highRank_multikill_item"><TripleKillIcon /><span>{item.lcg_count_triple_kill}</span></div>
                                        <div className="highRank_multikill_item"><QuadraKillIcon /><span>{item.lcg_count_quadra_kill}</span></div>
                                        <div className="highRank_multikill_item"><PentaKillIcon /><span>{item.lcg_count_penta_kill}</span></div>
                                    </div>
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
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_detail">멀티킬 점수 {item.lcg_multi_kill_score}</div>
                                    <div className="object_box ranker_title">
                                        <div className="highRank_multikill_item"><DoubleKillIcon /><span>{item.lcg_count_double_kill}</span></div>
                                        <div className="highRank_multikill_item"><TripleKillIcon /><span>{item.lcg_count_triple_kill}</span></div>
                                        <div className="highRank_multikill_item"><QuadraKillIcon /><span>{item.lcg_count_quadra_kill}</span></div>
                                        <div className="highRank_multikill_item"><PentaKillIcon /><span>{item.lcg_count_penta_kill}</span></div>
                                    </div>
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
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_nickname.split('#')[0]}</div>
                                    </Link>
                                    <div className="ranker_detail">멀티킬 점수 {item.lcg_multi_kill_score}</div>
                                    <div className="object_box ranker_title">
                                        <div className="highRank_multikill_item"><DoubleKillIcon /><span>{item.lcg_count_double_kill}</span></div>
                                        <div className="highRank_multikill_item"><TripleKillIcon /><span>{item.lcg_count_triple_kill}</span></div>
                                        <div className="highRank_multikill_item"><QuadraKillIcon /><span>{item.lcg_count_quadra_kill}</span></div>
                                        <div className="highRank_multikill_item"><PentaKillIcon /><span>{item.lcg_count_penta_kill}</span></div>
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
                                idx === 0 || idx === 6 ? 
                                    <>
                                        <div className="ranking_item_header">
                                            <div className="item_header item_header_rank">순위</div>
                                            <div className="item_header item_header_nickname">소환사명</div>
                                            <div className="item_header item_header_title">멀티킬 횟수</div>
                                            <div className="item_header item_header_detail">멀티킬 점수</div>
                                        </div>
                                        <Style.LowRankingItem $type={"M"}>
                                            <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                                <div className="item_rank">{item.rank}</div>
                                            </Link>
                                            <div className="item_nickname">{item.lcg_nickname.split('#')[0]}</div>
                                            <div className="object_box item_title">
                                                <div className="lowRank_multikill_item"><DoubleKillIcon /><span>{item.lcg_count_double_kill}</span></div>
                                                <div className="lowRank_multikill_item"><TripleKillIcon /><span>{item.lcg_count_triple_kill}</span></div>
                                                <div className="lowRank_multikill_item"><QuadraKillIcon /><span>{item.lcg_count_quadra_kill}</span></div>
                                                <div className="lowRank_multikill_item"><PentaKillIcon /><span>{item.lcg_count_penta_kill}</span></div>
                                            </div>
                                            <div className="item_detail">{item.lcg_multi_kill_score}</div>
                                        </Style.LowRankingItem>
                                    </>
                                    :
                                    <Style.LowRankingItem $type={"M"}>
                                        <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_nickname.split('#')[0] + "-" + item.lcg_nickname.split('#')[1]} target="_blank">
                                            <div className="item_rank">{item.rank}</div>
                                        </Link>
                                        <div className="item_nickname">{item.lcg_nickname.split('#')[0]}</div>
                                        <div className="object_box item_title">
                                            <div className="lowRank_multikill_item"><DoubleKillIcon /><span>{item.lcg_count_double_kill}</span></div>
                                            <div className="lowRank_multikill_item"><TripleKillIcon /><span>{item.lcg_count_triple_kill}</span></div>
                                            <div className="lowRank_multikill_item"><QuadraKillIcon /><span>{item.lcg_count_quadra_kill}</span></div>
                                            <div className="lowRank_multikill_item"><PentaKillIcon /><span>{item.lcg_count_penta_kill}</span></div>
                                        </div>
                                        <div className="item_detail">{item.lcg_multi_kill_score}</div>
                                    </Style.LowRankingItem>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RankingViewMultiKill;
