'use client';

import * as Style from "./match_ranking.style"
import Image from "next/image";
import Link from "next/link";

const RankingView1G3BDeath = (props : {data:{
            lcg_summoner_puuid: string
            lcg_summoner_nickname: string
            lcg_champion_name: string
            death: number
            rank: number
            lcg_perk_name_1: string
            lcg_perk_name_2: string
            lcg_item_id_1: number
            lcg_item_id_2: number
            lcg_item_id_3: number
            lcg_item_id_4: number
            lcg_item_id_5: number
            lcg_item_id_6: number
            lcg_game_date: string
        }[], path:{
            lcg_cdn: string
            lcg_lang: string
            lcg_main_ver: string
            lcg_main_image: string
            lcg_sub_image: string
        }}) => {

    return (
        <>
            <div className="ranking_card">
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 2).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 2).map((item, idx) => {
                        return (
                            <Style.HighRankingCard $rank={2} $image={props.path.lcg_cdn + "/img/champion/loading/" + item.lcg_champion_name +"_0.jpg"} key={"rank2_" + idx}>
                                <div className="card_container">
                                    <div className="card_head">
                                        <div className="card_champion" />
                                        <div className="card_effect" />
                                    </div>
                                    <div className="card_body">
                                        <div className="card_perk">
                                            <Image src={props.path.lcg_sub_image + item.lcg_perk_name_1} 
                                            alt={"perk1"} height={50} width={50} className="perk_image1" />
                                            <Image src={props.path.lcg_sub_image + item.lcg_perk_name_2} 
                                            alt={"perk2"} height={20} width={20} className="perk_image2" />
                                        </div>
                                        <div className="card_item">
                                            {
                                                item.lcg_item_id_1 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_1 + ".png"} 
                                                    alt={"item1"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_2 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_2 + ".png"} 
                                                    alt={"item2"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_3 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_3 + ".png"} 
                                                    alt={"item3"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_4 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_4 + ".png"} 
                                                    alt={"item4"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_5 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_5 + ".png"} 
                                                    alt={"item5"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_6 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_6 + ".png"} 
                                                    alt={"item6"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                        </div>
                                        <div className="card_name">
                                            <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                                <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                            </Link>
                                        </div>
                                        <div className="card_data">
                                            {item.death} 데스
                                        </div>
                                        <div className="card_date">
                                            {(item.lcg_game_date).substring(0, 4)}. {(item.lcg_game_date).substring(5, 7)}. {(item.lcg_game_date).substring(8, 10)}.
                                        </div>
                                    </div>
                                </div>
                            </Style.HighRankingCard>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 1).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 1).map((item, idx) => {
                        return (
                            <Style.HighRankingCard $rank={1} $image={props.path.lcg_cdn + "/img/champion/loading/" + item.lcg_champion_name +"_0.jpg"} key={"rank1_" + idx}>
                                <div className="card_container">
                                    <div className="card_head">
                                        <div className="card_champion" />
                                        <div className="card_effect" />
                                    </div>
                                    <div className="card_body">
                                        <div className="card_perk">
                                            <Image src={props.path.lcg_sub_image + item.lcg_perk_name_1} 
                                            alt={"perk1"} height={50} width={50} className="perk_image1" />
                                            <Image src={props.path.lcg_sub_image + item.lcg_perk_name_2} 
                                            alt={"perk2"} height={20} width={20} className="perk_image2" />
                                        </div>
                                        <div className="card_item">
                                            {
                                                item.lcg_item_id_1 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_1 + ".png"} 
                                                    alt={"item1"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_2 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_2 + ".png"} 
                                                    alt={"item2"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_3 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_3 + ".png"} 
                                                    alt={"item3"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_4 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_4 + ".png"} 
                                                    alt={"item4"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_5 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_5 + ".png"} 
                                                    alt={"item5"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_6 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_6 + ".png"} 
                                                    alt={"item6"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                        </div>
                                        <div className="card_name">
                                            <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                                <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                            </Link>
                                        </div>
                                        <div className="card_data">
                                            {item.death} 데스
                                        </div>
                                        <div className="card_date">
                                            {(item.lcg_game_date).substring(0, 4)}. {(item.lcg_game_date).substring(5, 7)}. {(item.lcg_game_date).substring(8, 10)}.
                                        </div>
                                    </div>
                                </div>
                            </Style.HighRankingCard>
                        )
                    })}
                </Style.RankingBox>
                <Style.RankingBox $ea={props.data.filter((item) => item.rank === 3).length}>
                    {props.data.filter((highRanking) => highRanking.rank === 3).map((item, idx) => {
                        return (
                            <Style.HighRankingCard $rank={3} $image={props.path.lcg_cdn + "/img/champion/loading/" + item.lcg_champion_name +"_0.jpg"} key={"rank3_" + idx}>
                                <div className="card_container">
                                    <div className="card_head">
                                        <div className="card_champion" />
                                        <div className="card_effect" />
                                    </div>
                                    <div className="card_body">
                                        <div className="card_perk">
                                            <Image src={props.path.lcg_sub_image + item.lcg_perk_name_1} 
                                            alt={"perk1"} height={50} width={50} className="perk_image1" />
                                            <Image src={props.path.lcg_sub_image + item.lcg_perk_name_2} 
                                            alt={"perk2"} height={20} width={20} className="perk_image2" />
                                        </div>
                                        <div className="card_item">
                                            {
                                                item.lcg_item_id_1 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_1 + ".png"} 
                                                    alt={"item1"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_2 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_2 + ".png"} 
                                                    alt={"item2"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_3 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_3 + ".png"} 
                                                    alt={"item3"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_4 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_4 + ".png"} 
                                                    alt={"item4"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_5 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_5 + ".png"} 
                                                    alt={"item5"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                            {
                                                item.lcg_item_id_6 !== 0 ?
                                                    <Image src={props.path.lcg_main_image + "item/" + item.lcg_item_id_6 + ".png"} 
                                                    alt={"item6"} height={35} width={35} className="item_image" />
                                                    :<div className="item_image empty_image"/>
                                            }
                                        </div>
                                        <div className="card_name">
                                            <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                                <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                            </Link>
                                        </div>
                                        <div className="card_data">
                                            {item.death} 데스
                                        </div>
                                        <div className="card_date">
                                            {(item.lcg_game_date).substring(0, 4)}. {(item.lcg_game_date).substring(5, 7)}. {(item.lcg_game_date).substring(8, 10)}.
                                        </div>
                                    </div>
                                </div>
                            </Style.HighRankingCard>
                        )
                    })}
                </Style.RankingBox>
            </div>
        </>
    )
}

export default RankingView1G3BDeath;