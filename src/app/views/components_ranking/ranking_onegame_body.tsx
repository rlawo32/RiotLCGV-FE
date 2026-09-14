'use client';

import * as Style from './ranking_onegame_body.style';

import useSupabaseBrowser from "@/app/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgRankingOnegameDataQuery } from "@/app/queries/getLcgMatchRankingQuery";
import Link from 'next/link';

interface RankingOnegameBodyProps {
    type: string,
    imageMainUrl: string,
    imageSubUrl: string,
    imageExtension: string,
}

const RankingOnegameBody = (props: RankingOnegameBodyProps) => {
    const supabase = useSupabaseBrowser();
    const type:string = props.type;
    const imageMainUrl:string = props.imageMainUrl;
    const imageSubUrl:string = props.imageSubUrl;
    const imageExtension:string = props.imageExtension;
    let change:boolean = false;

    const { data: queryOnegameData } = useQuery(getLcgRankingOnegameDataQuery(supabase, type), {enabled: type.length > 0});
    const rankingOnegameData = [...(queryOnegameData ?? [])];
    if(!!queryOnegameData && rankingOnegameData.length > 2) {
        [rankingOnegameData[0], rankingOnegameData[1]] = [rankingOnegameData[1], rankingOnegameData[0]];
        change = true;
    }

    return (
        !!queryOnegameData && change ?
            <>
                {rankingOnegameData.map((item, idx) => (
                    <Style.MatchRankingOnegameCard $rank={item.rank} $image={imageMainUrl + "loading/" + item.lcg_champion_name +"_0" + imageExtension} key={"onegame_" + idx}>
                        <div className="card_container">
                            <div className="card_head">
                                <div className="card_champion" />
                                <div className="card_effect" />
                            </div>
                            <div className="card_body">
                                <div className="card_perk">
                                    <img src={imageSubUrl + item.lcg_perk_name_1 + imageExtension} alt={"perk1"} className="perk_image1" />
                                    <img src={imageSubUrl + item.lcg_perk_name_2 + imageExtension} alt={"perk2"} className="perk_image2" />
                                </div>
                                <div className="card_item">
                                    {
                                        item.lcg_item_id_1 !== 0 ?
                                            <img src={imageMainUrl + "item/" + item.lcg_item_id_1 + imageExtension} alt={"item1"} className="item_image" />
                                            :<div className="item_image empty_image"/>
                                    }
                                    {
                                        item.lcg_item_id_2 !== 0 ?
                                            <img src={imageMainUrl + "item/" + item.lcg_item_id_2 + imageExtension} alt={"item2"} className="item_image" />
                                            :<div className="item_image empty_image"/>
                                    }
                                    {
                                        item.lcg_item_id_3 !== 0 ?
                                            <img src={imageMainUrl + "item/" + item.lcg_item_id_3 + imageExtension} alt={"item3"} className="item_image" />
                                            :<div className="item_image empty_image"/>
                                    }
                                    {
                                        item.lcg_item_id_4 !== 0 ?
                                            <img src={imageMainUrl + "item/" + item.lcg_item_id_4 + imageExtension} alt={"item4"} className="item_image" />
                                            :<div className="item_image empty_image"/>
                                    }
                                    {
                                        item.lcg_item_id_5 !== 0 ?
                                            <img src={imageMainUrl + "item/" + item.lcg_item_id_5 + imageExtension} alt={"item5"} className="item_image" />
                                            :<div className="item_image empty_image"/>
                                    }
                                    {
                                        item.lcg_item_id_6 !== 0 ?
                                            <img src={imageMainUrl + "item/" + item.lcg_item_id_6 + imageExtension} alt={"item6"} className="item_image" />
                                            :<div className="item_image empty_image"/>
                                    }
                                </div>
                                <div className="card_name">
                                    <Link href={"https://www.op.gg/summoners/kr/" + item.lcg_summoner_nickname.split('#')[0] + "-" + item.lcg_summoner_nickname.split('#')[1]} target="_blank">
                                        <div className="ranker_name">{item.lcg_summoner_nickname.split('#')[0]}</div>
                                    </Link>
                                </div>
                                <div className="card_data">
                                    {type === '1GDM' ? "DPM " : type === '1GGM' ? "GPM " : type === '1GDG' ? "DPG " : ""}
                                    {item.record_value.toLocaleString()}
                                    {type === '1GK' ? " 킬" : type === '1GD' ? " 데스" : type === '1GA' ? " 어시" : type === '1GC' ? " CS" : type === '1GG' ? " 골드" : 
                                     type === '1GDA' ? " 피해량" : type === '1GHT' || type === '1GLT' ? " 받은 피해량" : ""}
                                </div>
                                <div className="card_date">
                                    {(item.lcg_game_date).substring(0, 4)}. {(item.lcg_game_date).substring(5, 7)}. {(item.lcg_game_date).substring(8, 10)}.
                                </div>
                            </div>
                        </div>
                    </Style.MatchRankingOnegameCard>
                ))}
            </>
        :
            <>
                <h1>HELLO</h1>
            </>
    )
}

export default RankingOnegameBody;