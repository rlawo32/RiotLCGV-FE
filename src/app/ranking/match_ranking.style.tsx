import styled from "styled-components";

export const MatchRanking = styled('div')<{$type:string}>`
    position: relative;
    border-radius: 15px;
    height: ${({$type}) => $type.includes('1G') ? '300px' : '500px'};
    width: ${({$type}) => $type.includes('1G') ? '850px' : '950px'};
    margin: 30px auto 50px;
    background: linear-gradient(0deg, #000, #272727);

    &::before, &::after {
        border-radius: 15px;
        content: '';
        position: absolute;
        left: -1.5px;
        top: -1.5px;
        background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094,
                #0000ff, #00ff00,#ffff00, #ff0000);
        background-size: 400%;
        width: calc(100% + 3px);
        height: calc(100% + 3.5px);
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

        padding: 20px 50px;
        height: 100%;
        width: 100%;
        font-size: 17px;
        color: #badbcc;

        svg {
            height: 12px;
            width: 12px;
            margin-right: 2px;
        }

        .ranking_select {
            display: flex;
            justify-content: right;
            margin-bottom: ${({$type}) => $type.includes('1G') ? '40px' : '0'};
            padding: 0 15px;
        }
    }

    .ranking_top {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 170px;
    }

    .ranking_bottom {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        height: 260px;
        margin-top: 25px;

        .ranking_item_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 6px 10px;
            padding: 5px 15px 5px 10px;
            border-radius: 10px;
            background-color: rgba(42,50,73, .68);
            font-size: 12px;
            color: whitesmoke;

            .item_header {
                text-align: center;
                font-weight: bold;
            }

            .item_header_rank {
                width: 40px;
            }

            .item_header_nickname {
                width: 90px;
                margin-right: 15px;
            }

            .item_header_title {
                width: 120px;
            }

            .item_header_detail {
                width: 80px;
            }

            .item_header_title_long {
                width: 70px;
            }

            .item_header_detail_long {
                width: 130px;
            }
        }
    }

    .object_box {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .highRank_object_item {
            margin: 1px 3px;

            svg {
                height: 11px;
                width: 11px;
            }
        }

        .lowRank_object_item {
            width: 40px;
            margin: 1px 0 0;

            svg {
                height: 11px;
                width: 11px;
            }
        }
        
        .highRank_multikill_item {
            margin: 2px 3px;

            span {
                margin-left: 2px;
            }
        }

        .lowRank_multikill_item {
            width: 26px;
            margin: 0 4px 0 0;
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
    justify-content: ${({$ea}) => $ea > 3 ? "flex-start" : "center"};
    flex-wrap: wrap;
    height: 100%;
    width: 250px;
`

export const HighRankingItem = styled('div')<{$ea:number, $rank:number}>`
    position: relative;
    top: ${({$rank}) => $rank === 1 ? "-45px" : 0};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({$ea}) => $ea > 3 ? "55px" : $ea === 3 ? "70px" : $ea === 2 ? "100px" : "170px"};
    text-align: center;
    margin: ${({$ea}) => $ea > 3 ? "3px" : $ea === 3 ? "5px" : $ea === 2 ? "10px" : "10px 30px"};

    .ranker_img {
        margin: 3px auto;
    }
`

export const LowRankingItem = styled('div')<{$type:string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({$type}) => $type === 'J' ? "30px" : "20px"};
    width: 400px;
    margin: 3px 10px;
    padding: 14px 15px 14px 10px;
    border-radius: 10px;
    background-color: rgba(42,50,73, .68);
    font-size: 12px;
    color: whitesmoke;
    text-align: center;

    .item_rank {
        width: 40px;
        text-align: center;
        font-weight: bold;
    }

    .item_nickname {
        width: 90px;
        margin-right: 15px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .item_title {
        width: ${({$type}) => $type === 'L' ? "70px" : "120px"};
        font-size: ${({$type}) => $type === 'J' || $type === 'M' ? "11px" : "12px"};
    }

    .item_detail {
        width: ${({$type}) => $type === 'L' ? "130px" : "80px"};
    }
`

export const RankerContent = styled('div')<{$ea:number}>`
    
    .ranker_name {
        margin: 0 0 3px;
        font-size: ${({$ea}) => $ea > 3 ? "11px" : $ea === 2 ? "14px" : $ea === 3 ? "12px" : "17px"};
        cursor: pointer;
    }

    .ranker_title {
        justify-content: center;
        font-size: ${({$ea}) => $ea > 3 ? "9px" : $ea === 2 ? "11px" : $ea === 3 ? "9px" : "12px"};
        font-weight: bold;
    }

    .ranker_detail {
        font-size: ${({$ea}) => $ea > 3 ? "8px" : $ea === 2 ? "10px" : $ea === 3 ? "8px" : "11px"};
    }
`