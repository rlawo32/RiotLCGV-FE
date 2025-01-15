'use client';

import styled from "styled-components";

const TestCss = styled('div')`
    position: relative;
    display: flex;
    width: 500px;

    .ranking_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 10px;

        .ranker_img {
            height: 100px;
            width: 100px;
            margin: 7px auto;
            border: 1px solid red;
            border-radius: 50%;
        }

        .ranker_name {
            font-size: 20px;
        }

        .ranker_detail {
            font-size: 14px;
        }
    }

    .ranking_1 {
        position: relative;
        top: -15px;
    }
`

const Test = () => {

    return (
        <TestCss>
            <div className="ranking_box ranking-2">
                <div className="ranker_img" />
                <div className="ranker_name">JSON</div>
                <div className="ranker_detail">총 딜량 100,000</div>
            </div>
            <div className="ranking_box ranking_1">
                <div className="ranker_img" />
                <div className="ranker_name">JAVA</div>
                <div className="ranker_detail">총 딜량 200,000</div>
            </div>
            <div className="ranking_box ranking_3">
                <div className="ranker_img" />
                <div className="ranker_name">PHP</div>
                <div className="ranker_detail">총 딜량 50,000</div>
            </div>
        </TestCss>
    )
}

export default Test;
