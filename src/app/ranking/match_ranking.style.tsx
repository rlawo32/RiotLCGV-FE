import styled from "styled-components";

export const MatchRanking = styled('div')<{$type:string}>`
    position: relative;
    border-radius: 15px;
    height: ${({$type}) => $type === '3D' ? '260px' : '500px'};
    width: 950px;
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
        height: 250px;
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
                width: 100px;
            }

            .item_header_detail {
                width: 100px;
            }

            .item_header_title_long {
                width: 50px;
            }

            .item_header_detail_long {
                width: 120px;
            }
        }

        .ranking_item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 20px;
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
                width: 100px;
            }

            .item_detail {
                width: 100px;
            }

            .item_title_long {
                width: 50px;
            }

            .item_detail_long {
                width: 120px;
            }

            .item_jo_title {
                display: flex;
                flex-wrap: wrap;
                width: 90px;
                font-size: 11px;

                svg {
                    height: 12px;
                    width: 12px;
                    margin: 0 3px 2px 0;
                }
            }

            .item_jo_detail {
                width: 100px;
            }
        }

        .ranking_jo_item {

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

export const HighRankingItem = styled('div')<{$ea:number, $rank:number}>`
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

export const LowRankingItem = styled('div')`
    
`

export const RankerContent = styled('div')<{$ea:number}>`
    
    .ranker_name {
        margin: 0 0 3px;
        font-size: ${({$ea}) => $ea > 2 ? "12px" : $ea === 2 ? "14px" : "17px"};
        cursor: pointer;
    }

    .ranker_title {
        font-size: ${({$ea}) => $ea > 2 ? "9px" : $ea === 2 ? "11px" : "12px"};
        font-weight: bold;
    }

    .ranker_detail {
        font-size: ${({$ea}) => $ea > 2 ? "8px" : $ea === 2 ? "10px" : "11px"};
    }
`

export const RankingSelect = styled('select')`   
    padding: 3px 7px;
    border: none;
    border-radius: 10px;
    background: #231f50;
    color: #6cacc5;
    font-size: 13px;
    cursor: pointer;
        
    &:focus {
        outline: 2px solid #6cacc5;
    }
`