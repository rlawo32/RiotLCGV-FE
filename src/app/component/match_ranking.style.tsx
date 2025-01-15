import styled from "styled-components";

export const MatchRanking = styled('div')`
    position: relative;
    border-radius: 15px;
    height: 100%;
    width: 740px;
    margin: 30px auto 50px;
    background: linear-gradient(0deg, #000, #272727);

    &::before, &::after {
        border-radius: 15px;
        content: '';
        position: absolute;
        left: -1px;
        top: -1.5px;
        background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094,
                #0000ff, #00ff00,#ffff00, #ff0000);
        background-size: 400%;
        width: calc(100% + 2px);
        height: calc(100% + 3px);
        z-index: 0;
        animation: steam 60s linear infinite;
    }

    &::after {
        filter: blur(30px);
    }

    .ranking_box {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: center;
        border-radius: 15px;
        background: #070719;

        padding: 70px 60px 40px;
        height: 99%;
        width: 740px;
        font-size: 17px;
        color: #badbcc;
    }

    .ranking_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 10px 30px;

        .ranker_img {
            height: 150px;
            width: 150px;
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
        top: -65px;
    }

    
    @keyframes steam {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
`;