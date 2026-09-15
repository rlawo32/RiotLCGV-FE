'use client';

import * as Style from '../match_ranking_v2.style';
import TurretIcon from '@/app/icons/TurretIcon';
import InhibitorIcon from '@/app/icons/InhibitorIcon';
import WardIcon from '@/app/icons/WardIcon';
import HordeIcon from '@/app/icons/HordeIcon';
import HeraldIcon from '@/app/icons/HeraldIcon';
import BaronIcon from '@/app/icons/BaronIcon';
import DragonIcon from '@/app/icons/DragonIcon';
import DoubleKillIcon from '@/app/icons/DoubleKillIcon';
import TripleKillIcon from '@/app/icons/TripleKillIcon';
import QuadraKillIcon from '@/app/icons/QuadraKillIcon';
import PentaKillIcon from '@/app/icons/PentaKillIcon';

import useSupabaseBrowser from "@/app/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgWinningRateV2Query, getLcgRankingRecordCountQuery, getLcgRankingRecordDetailQuery } from "@/app/queries/getLcgMatchRankingQuery";

import { DemolisherData, VisionData, ObjectData, MultikillData } from "./match_ranking_types";

interface RankingRecordBodyProps {
    type: string,
    more: string,
    imageMainUrl: string,
    imageSubUrl: string,
    imageExtension: string,
}

const RankingRecordBody = (props: RankingRecordBodyProps) => {
    const supabase = useSupabaseBrowser();
    const type:string = props.type;
    const more:boolean = props.more === 'R' ? true : false;
    const imageMainUrl:string = props.imageMainUrl;
    const imageExtension:string = props.imageExtension;

    const { data: queryRecordWinning } = useQuery(getLcgWinningRateV2Query(supabase), {enabled: type === 'AW'});
    const { data: queryRecordCount } = useQuery(getLcgRankingRecordCountQuery(supabase, type), {enabled: type === 'AMP' || type === 'AAE' || type === 'AK' || type === 'AD' || type === 'AA' || type === 'AC' || type === 'AG'});
    const { data: queryRecordDetail } = useQuery(getLcgRankingRecordDetailQuery(supabase, type), {enabled: type === 'AT' || type === 'AV' || type === 'AJ' || type === 'AM'});

    return (
        !!queryRecordWinning && type === 'AW' ?
            <>
                {(more ? queryRecordWinning : queryRecordWinning?.slice(0, 5))?.map((item, idx) => (
                    <Style.RecordRankingListBox $flag={"B"} $type={type} key={"winning_" + idx}>
                        <div className="row_1 body_rownum">
                            {item.rank}
                        </div>
                        <div className="row_2 body_summoner">
                            <div className="summoner_icon">
                                <img src={imageMainUrl + "profileicon/" + item.lcg_summoner_icon + imageExtension} alt={"player_icon_" + idx} />
                            </div>
                            <div className="summoner_nickname">
                                {item.lcg_nickname.split("#")[0]}
                            </div>
                        </div>
                        <div className="row_3 body_info">
                            <Style.LcgWinningGraph $rate={Number(item.rate)}>
                                <div className="rate_graph" />
                            </Style.LcgWinningGraph>
                            {Number(item.rate)}%
                        </div>
                        <div className="row_4 body_play">
                            {item.lcg_count_play}
                        </div>
                    </Style.RecordRankingListBox>
                ))}
            </>
        :
        !!queryRecordDetail && (type === 'AT' || type === 'AV' || type === 'AJ' || type === 'AM') ?
            <>
                {(more ? queryRecordDetail : queryRecordDetail?.slice(0, 5))?.map((item, idx) => (
                    <Style.RecordRankingListBox $flag={"B"} $type={type} key={"count_" + idx}>
                        <div className="row_1 body_rownum">
                            {item.rank}
                        </div>
                        <div className="row_2 body_summoner">
                            <div className="summoner_icon">
                                <img src={imageMainUrl + "profileicon/" + item.lcg_summoner_icon + imageExtension} alt={"player_icon_" + idx} />
                            </div>
                            <div className="summoner_nickname">
                                {item.lcg_summoner_nickname.split("#")[0]}
                            </div>
                        </div>
                        <div className="row_3 body_info">
                            {type === 'AT' ? 
                                <>
                                    <div className="info_detail">
                                        <div className="info_score">
                                            <div className="info_desc">누적 구조물 피해량</div>
                                            {(item.lcg_detail as DemolisherData).towerDamage.toLocaleString()}
                                        </div>
                                        <div className='icon_wrap'>
                                            <div className="info_icon"><TurretIcon />{(item.lcg_detail as DemolisherData).tower.toLocaleString()}</div>
                                            <div className="info_icon"><InhibitorIcon />{(item.lcg_detail as DemolisherData).inhibitor.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </> : 
                             type === 'AV' ? 
                                <>
                                    <div className="info_detail">
                                        <div className="info_score">
                                            <div className="info_desc">누적 시야 점수</div>
                                            {(item.lcg_detail as VisionData).visionScore.toLocaleString()}
                                        </div>
                                        <div className='icon_wrap'>
                                            <div className="info_icon"><WardIcon type={"N"} />{(item.lcg_detail as VisionData).wardPlaced.toLocaleString()}</div>
                                            <div className="info_icon"><WardIcon type={"P"} />{(item.lcg_detail as VisionData).visionWard.toLocaleString()}</div>
                                            <div className="info_icon"><WardIcon type={"D"} />{(item.lcg_detail as VisionData).wardKill.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </> : 
                             type === 'AJ' ? 
                                <>
                                    <div className="info_detail">
                                        <div className="info_score">
                                            <div className="info_desc">누적 오브젝트 점수</div>
                                            {(item.lcg_detail as ObjectData).jungleObjectScore.toLocaleString()}
                                        </div>
                                        <div className='icon_wrap'>
                                            <div className="info_icon"><DragonIcon />{(item.lcg_detail as ObjectData).dragon.toLocaleString()}</div>
                                            <div className="info_icon"><BaronIcon />{(item.lcg_detail as ObjectData).baron.toLocaleString()}</div>
                                            <div className="info_icon"><HeraldIcon />{(item.lcg_detail as ObjectData).herald.toLocaleString()}</div>
                                            <div className="info_icon"><HordeIcon />{(item.lcg_detail as ObjectData).horde.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </> : 
                             type === 'AM' ? 
                                <>
                                    <div className="info_detail">
                                        <div className="info_score">
                                            <div className="info_desc">누적 멀티킬 점수</div>
                                            {(item.lcg_detail as MultikillData).multiKillScore.toLocaleString()}
                                        </div>
                                        <div className='icon_wrap'>
                                            <div className="info_icon"><DoubleKillIcon />{(item.lcg_detail as MultikillData).doubleKill.toLocaleString()}</div>
                                            <div className="info_icon"><TripleKillIcon />{(item.lcg_detail as MultikillData).tripleKill.toLocaleString()}</div>
                                            <div className="info_icon"><QuadraKillIcon />{(item.lcg_detail as MultikillData).quadraKill.toLocaleString()}</div>
                                            <div className="info_icon"><PentaKillIcon />{(item.lcg_detail as MultikillData).pentaKill.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </> : <></>}
                        </div>
                        <div className="row_4 body_play">
                            {item.lcg_count_play}
                        </div>
                    </Style.RecordRankingListBox>
                ))}
            </>
        :
        !!queryRecordCount ?
            <>
                {(more ? queryRecordCount : queryRecordCount?.slice(0, 5))?.map((item, idx) => (
                    <Style.RecordRankingListBox $flag={"B"} $type={type} key={"detail_" + idx}>
                        <div className="row_1 body_rownum">
                            {item.rank}
                        </div>
                        <div className="row_2 body_summoner">
                            <div className="summoner_icon">
                                <img src={imageMainUrl + "profileicon/" + item.lcg_summoner_icon + imageExtension} alt={"player_icon_" + idx} />
                            </div>
                            <div className="summoner_nickname">
                                {item.lcg_summoner_nickname.split("#")[0]}
                            </div>
                        </div>
                        <div className="row_3 body_info">
                            <div className="info_desc">
                                {type === 'AMP' ? "MVP" : type === 'AAE' ? "ACE" : type === 'AC' ? "CS" : ""}
                            </div>
                            <div className="info_data">
                                {item.lcg_count.toLocaleString()}&nbsp;
                                {type === 'AMP' || type === 'AAE' ? "회" : type === 'AK' ? "킬" : type === 'AD' ? "데스" : type === 'AA' ? "어시" : 
                                 type === 'AC' ? "마리" : type === 'AG' ? "원" : ""}
                            </div>
                        </div>
                        <div className="row_4 body_play">
                            {item.lcg_count_play}
                        </div>
                    </Style.RecordRankingListBox>
                ))}
            </>
        :
            <>
                <h1>HELLO</h1>
            </>
    )
}

export default RankingRecordBody;