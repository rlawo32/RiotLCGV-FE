import styled from "styled-components";

export const MatchRanking = styled('div')`
    position: relative;
    border-radius: 15px;
    height: 480px;
    width: 950px;
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

    .ranking_container {
        z-index: 1;
        position: relative;
        border-radius: 15px;
        background: #070719;

        padding: 40px 60px 20px;
        height: 100%;
        width: 950px;
        font-size: 17px;
        color: #badbcc;
    }

    .ranking_top {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ranking_bottom {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        height: 180px;
        margin-top: 25px;

        .ranking_item {
            display: flex;
            align-items: center;
            height: 30px;
            margin: 3px 10px;
            padding: 10px 5px 10px 20px;
            border-radius: 10px;
            background-color: rgba(42,50,73, .68);
            font-size: 14px;

            .item_rank {
                width: 40px;
                margin-right: 20px;
            }

            .item_nickname {
                width: 105px;
                margin-right: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .item_title {
                width: 90px;
            }

            .item_detail {
                width: 110px;

            }
        }
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

export const RankingBox = styled('div')<{$ea:number}>`
    display: flex;
    justify-content: ${({$ea}) => $ea > 4 ? "flex-start" : "center"};
    flex-wrap: wrap;
    height: 100%;
    width: 250px;
`

export const RankingItem = styled('div')<{$ea:number, $rank:number}>`
    position: relative;
    top: ${({$rank}) => $rank === 1 ? "-45px" : 0};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: ${({$ea}) => $ea > 3 ? "5px" : $ea === 3 ? "10px" : $ea === 2 ? "10px 20px" : "10px 30px"};

    .ranker_img {
        margin: 3px auto;
    }
`

export const RankerContent = styled('div')<{$ea:number}>`
    
    .ranker_name {
        margin: 0 0 3px;
        font-size: ${({$ea}) => $ea > 3 ? "12px" : $ea === 3 ? "15px" : $ea === 2 ? "17px" : "20px"};
    }

    .ranker_title {
        font-size: ${({$ea}) => $ea > 3 ? "9px" : $ea === 3 ? "12px" : $ea === 2 ? "13px" : "14px"};
    }

    .ranker_detail {
        font-size: ${({$ea}) => $ea > 3 ? "8px" : $ea === 3 ? "11px" : $ea === 2 ? "12px" : "13px"};
    }
`