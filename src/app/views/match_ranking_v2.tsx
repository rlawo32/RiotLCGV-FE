'use client';

import * as Style from './match_ranking_v2.style';

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft as icon_left, faCaretRight as icon_right, faLeftLong as icon_back,
    faTrophy as icon_power, faMedal as icon_record, faRankingStar as icon_onegame
} from "@fortawesome/free-solid-svg-icons";

import useSupabaseBrowser from "../supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getLcgPowerRankingQuery } from "../queries/getLcgMatchRankingQuery";

import { CategoryData } from "./components_ranking/match_ranking_types";
import RankingRecordHead from './components_ranking/ranking_record_head';
import RankingRecordBody from './components_ranking/ranking_record_body';
import RankingOnegameBody from './components_ranking/ranking_onegame_body';

const MatchRankingV2 = () => {
    const supabase = useSupabaseBrowser();
    const recordCategoryRef = useRef<HTMLDivElement>(null);
    const onegameCategoryRef = useRef<HTMLDivElement>(null);
    
    let imageMainUrl:string = "";
    let imageSubUrl:string = "";
    let imageExtension:string = "";
    let lastUpdate:string = "";

    const [selectRankingMore, setSelectRankingMore] = useState<string>("A"); // A : ALL, P : PowerRanking, R : RecordRanking
    const [selectRecordCategory, setSelectRecordCategory] = useState<string>("AW"); 
    const [selectOnegameCategory, setSelectOnegameCategory] = useState<string>("1GK");

    const recordCategory:CategoryData[] = [
        {id: 1, title: '승률', value: 'AW'}, {id: 2, title: 'MVP 횟수', value: 'AMP'}, {id: 3, title: 'ACE 횟수', value: 'AAE'},
        {id: 4, title: '누적 킬', value: 'AK'}, {id: 5, title: '누적 데스', value: 'AD'}, {id: 6, title: '누적 어시스트', value: 'AA'}, 
        {id: 7, title: '누적 CS', value: 'AC'}, {id: 8, title: '누적 골드', value: 'AG'}, {id: 9, title: '누적 철거', value: 'AT'}, 
        {id: 10, title: '시야 점수', value: 'AV'}, {id: 11, title: '오브젝트 점수', value: 'AJ'}, {id: 12, title: '멀티킬 점수', value: 'AM'}, 
    ];
    const onegameCategory:CategoryData[] = [
        {id: 1, title: '최다 킬', value: '1GK'}, {id: 2, title: '최다 데스', value: '1GD'}, {id: 3, title: '최다 어시스트', value: '1GA'},
        {id: 4, title: '최다 CS', value: '1GC'}, {id: 5, title: '최다 골드', value: '1GG'}, 
        {id: 6, title: '최고 가한 피해량', value: '1GDA'}, {id: 7, title: '최고 받은 피해량', value: '1GHT'}, {id: 8, title: '최저 받은 피해량', value: '1GLT'}, 
        {id: 9, title: '최고 DPM', value: '1GDM'}, {id: 10, title: '최고 GPM', value: '1GGM'}, {id: 11, title: '최고 DPG', value: '1GDG'}, 
    ];
    
    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {});
    
    if(!!lcgMatchEtc && lcgMatchEtc.length > 0) {
        imageMainUrl = lcgMatchEtc[0].lcg_main_image;
        imageSubUrl = lcgMatchEtc[0].lcg_sub_image;
        imageExtension = lcgMatchEtc[0].lcg_image_extension;
        lastUpdate = lcgMatchEtc[0].lcg_update_player;
    }

    const { data: lcgPowerRanking } = useQuery(getLcgPowerRankingQuery(supabase), {enabled: !!lcgMatchEtc});
    const lcgPowerRankingTop3 = lcgPowerRanking?.slice(0, 3) ?? [];
    const lcgPowerRankingRemain = selectRankingMore === 'P' ? (lcgPowerRanking?.slice(3) ?? []) : (lcgPowerRanking?.slice(3, 10) ?? []);
    if(lcgPowerRankingTop3.length >= 2) {
        [lcgPowerRankingTop3[0], lcgPowerRankingTop3[1]] = [lcgPowerRankingTop3[1], lcgPowerRankingTop3[0]];
    }

    const handleRecordCategoryScroll = (direction: 'left' | 'right') => {
        recordCategoryRef.current?.scrollBy({
            left: direction === 'left' ? -240 : 240,
            behavior: 'smooth',
        });
    };

    const handleOnegameCategoryScroll = (direction: 'left' | 'right') => {
        onegameCategoryRef.current?.scrollBy({
            left: direction === 'left' ? -260 : 260,
            behavior: 'smooth',
        });
    };

    return (
        <Style.MatchRankingV2 $more={selectRankingMore}>
            <div className="ranking_box ranking_power">
                <div className="box_header">
                    <div className="header_left">
                        <FontAwesomeIcon icon={icon_power} className="title_icon"/>
                        <div className="box_title">Power Ranking</div>
                    </div>
                    <div className="header_right" onClick={() => setSelectRankingMore("A")}>
                        <FontAwesomeIcon icon={icon_back} className="title_icon"/>
                        뒤로가기
                    </div>
                </div>
                <div className="ranking_list">
                    <div className="list_top">
                        {lcgPowerRankingTop3.map((item, idx) => (
                            <Style.PowerRankingTop3Card key={item.lcg_summoner_puuid} $rank={item.lcg_ranking_current_rank}>
                                <div className="card_top">
                                    <img src={imageMainUrl + "profileicon/" + item.lcg_summoner_icon + imageExtension} alt={"player_icon_" + idx} />
                                </div>
                                <div className="card_middle">
                                    {item.lcg_summoner_nickname.split('#')[0]}
                                </div>
                                <div className="card_bottom">
                                    <div className="card_score">
                                        {item.lcg_ranking_current_score.toLocaleString()}
                                    </div>
                                    <div className="card_desc">
                                        POWER SCORE
                                    </div>
                                </div>
                            </Style.PowerRankingTop3Card>
                        ))}
                    </div>
                    <div className="list_bottom">
                        {lcgPowerRankingRemain.map((item, idx) => {
                            const change = item.lcg_ranking_previous_rank - item.lcg_ranking_current_rank;

                            return (
                                <Style.PowerRankingRemainCard key={item.lcg_summoner_puuid} $change={change}>
                                    <div className="card_left">
                                        <div className="card_rownum">
                                            {idx+4}
                                        </div>
                                        <div className="card_icon">
                                            <img src={imageMainUrl + "profileicon/" + item.lcg_summoner_icon + imageExtension} alt={"player_icon_" + idx+3} />
                                        </div>
                                        <div className="card_nickname">
                                            {item.lcg_summoner_nickname.split('#')[0]}
                                        </div>
                                    </div>
                                    <div className="card_right">
                                        <div className="card_desc">
                                            POWER SCORE
                                        </div>
                                        <div className="card_score">
                                            {item.lcg_ranking_current_score.toLocaleString()}
                                        </div>
                                        <div className="card_change">
                                            {change > 0 ? `▲ ${Math.abs(change)}` : change < 0 ? `▼ ${Math.abs(change)}` : `-`}
                                        </div>
                                    </div>
                                </Style.PowerRankingRemainCard>
                            )
                        })}
                    </div>
                </div>
                <div className="ranking_more">
                    <button onClick={() => setSelectRankingMore("P")}>
                        전체 랭킹 보기 ⇾
                    </button>
                </div>
            </div>
            <div className="ranking_box ranking_record">
                <div className="box_header">
                    <div className="header_left">
                        <FontAwesomeIcon icon={icon_record} className="title_icon"/>
                        <div className="box_title">Record Ranking</div>
                    </div>
                    <div className="header_right" onClick={() => setSelectRankingMore("A")}>
                        <FontAwesomeIcon icon={icon_back} className="title_icon"/>
                        뒤로가기
                    </div>
                </div>
                <div className="box_category">
                    <button className="category_arrow category_arrow_prev" onClick={() => handleRecordCategoryScroll('left')} aria-label="이전 카테고리">
                        <FontAwesomeIcon icon={icon_left} className="btn_icon"/>
                    </button>

                    <div className="category_slider" ref={recordCategoryRef}>
                        {recordCategory.map((category) => (
                            <Style.MatchRankingRecordCategoryBox key={category.id} $selected={selectRecordCategory === category.value} onClick={() => {setSelectRecordCategory(category.value);}}>
                                {category.title}
                            </Style.MatchRankingRecordCategoryBox>
                        ))}
                    </div>

                    <button className="category_arrow category_arrow_next" onClick={() => handleRecordCategoryScroll('right')} aria-label="다음 카테고리">
                        <FontAwesomeIcon icon={icon_right} className="btn_icon"/>
                    </button>
                </div>
                <div className="ranking_list">
                    <RankingRecordHead type={selectRecordCategory} />
                    <RankingRecordBody type={selectRecordCategory} more={selectRankingMore} imageMainUrl={imageMainUrl} imageSubUrl={imageSubUrl} imageExtension={imageExtension} />
                </div>
                <div className="ranking_more">
                    <button onClick={() => setSelectRankingMore("R")}>
                        더 많은 기록 보기 ⇾
                    </button>
                </div>
            </div>
            <div className="ranking_box ranking_onegame">
                <div className="box_header">
                    <FontAwesomeIcon icon={icon_onegame} className="title_icon"/>
                    <div className="box_title">One Game Best</div>
                </div>
                <div className="box_category">
                    <button className="category_arrow category_arrow_prev" onClick={() => handleOnegameCategoryScroll('left')} aria-label="이전 카테고리">
                        <FontAwesomeIcon icon={icon_left} className="btn_icon"/>
                    </button>

                    <div className="category_slider" ref={onegameCategoryRef}>
                        {onegameCategory.map((category) => (
                            <Style.MatchRankingOnegameCategoryBox key={category.id} $selected={selectOnegameCategory === category.value} onClick={() => {setSelectOnegameCategory(category.value);}}>
                                {category.title}
                            </Style.MatchRankingOnegameCategoryBox>
                        ))}
                    </div>

                    <button className="category_arrow category_arrow_next" onClick={() => handleOnegameCategoryScroll('right')} aria-label="다음 카테고리">
                        <FontAwesomeIcon icon={icon_right} className="btn_icon"/>
                    </button>
                </div>
                <div className="ranking_list">
                    <RankingOnegameBody type={selectOnegameCategory} imageMainUrl={imageMainUrl} imageSubUrl={imageSubUrl} imageExtension={imageExtension} />
                </div>
            </div>
        </Style.MatchRankingV2>
    )
}

export default MatchRankingV2;