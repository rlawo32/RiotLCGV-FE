'use client';

import * as Style from '../match_ranking_v2.style';

const RankingRecordHeader = (props:{type:string}) => {
    const type = props.type;

    return (
        <Style.RecordRankingListBox $flag={"H"} $type={type}>
            <div className="row_1 header_rownum">
                등수
            </div>
            <div className="row_2 header_summoner">
                소환사
            </div>
            <div className="row_3 header_info">
                {type === 'AW' ? "승률" : type === 'AMP' ? "MVP 횟수" : type === 'AAE' ? "ACE 횟수" : type === 'AK' ? "누적 킬" : type === 'AD' ? "누적 데스" : type === 'AA' ? "누적 어시스트" : 
                 type === 'AC' ? "누적 CS" : type === 'AG' ? "누적 골드" : type === 'AT' ? "구조물 파괴 정보" : type === 'AV' ? "시야 관련 정보" : type === 'AJ' ? "정글 오브젝트 정보" : type === 'AM' ? "멀티킬 정보" : "NONE"}
            </div>
            <div className="row_4 header_play">
                게임 횟수
            </div>
        </Style.RecordRankingListBox>
    )
}

export default RankingRecordHeader;