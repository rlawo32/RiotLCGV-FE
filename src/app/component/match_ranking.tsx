'use client';

import * as Style from "./match_ranking.style"

const MatchRanking = () => {

    return (
        <Style.MatchRanking>
            <div className="ranking_box">
                <div className="ranking_item ranking-2">
                    <div className="ranker_img" />
                    <div className="ranker_name">JSON</div>
                    <div className="ranker_detail">총 딜량 100,000</div>
                </div>
                <div className="ranking_item ranking_1">
                    <div className="ranker_img" />
                    <div className="ranker_name">JAVA</div>
                    <div className="ranker_detail">총 딜량 200,000</div>
                </div>
                <div className="ranking_item ranking_3">
                    <div className="ranker_img" />
                    <div className="ranker_name">PHP</div>
                    <div className="ranker_detail">총 딜량 50,000</div>
                </div>
            </div>
        </Style.MatchRanking>
    )
}

export default MatchRanking;