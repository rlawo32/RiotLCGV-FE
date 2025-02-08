import styled from "styled-components";

export const MatchRanking = styled('div')<{$type:string}>`
    position: relative;
    height: 100%;
    width: 768px;
    margin: 0 auto;
    padding: 7px 30px;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);
    color: #ffffff;

    .ranking_container {
        z-index: 1;
        position: relative;
        border-radius: 15px;

        padding: 20px 0;
        height: 100%;
        width: 100%;

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
            margin-bottom: 20px;
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
        margin-top: 65px;

        .ranking_item_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 10px;
            padding: 10px 15px 10px;
            border-top: 1px solid rgb(255 68 56 / 1);
            border-bottom: 1px solid rgb(255 68 56 / 1);
            font-size: 1.6rem;

            .item_header {
                text-align: center;
                font-weight: bold;
            }

            .item_header_rank {
                width: 40px;
            }

            .item_header_nickname {
                width: 160px;
            }

            .item_header_count {
                width: 100px;
            }

            .item_header_title {
                width: 160px;
            }

            .item_header_detail {
                width: 160px;
            }
        }
    }

    .ranking_card {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 50px 0;
    }

    .object_box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        
        span {
            margin-left: 2px;
        }

        .highRank_object_item {
            margin: 1px 3px;
        }

        .lowRank_object_item {
            width: 40px;
        }
        
        .highRank_multikill_item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 3px 4px 0 3px;
        }

        .lowRank_multikill_item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 4px;
        }
    }
`;

export const RankingBox = styled('div')<{$ea:number}>`
    display: flex;
    justify-content: ${({$ea}) => $ea > 3 ? "flex-start" : "center"};
    flex-wrap: wrap;
    height: 100%;
    width: calc(100% / 3);
`

export const HighRankingItem = styled('div')<{$ea:number, $rank:number}>`
    position: relative;
    top: ${({$rank}) => $rank === 1 ? "-45px" : 0};
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: ${({$ea}) => $ea > 2 ? "55px" : $ea === 2 ? "90px" : "170px"};
    text-align: center;
    margin: ${({$ea}) => $ea > 2 ? "3px" : $ea === 2 ? "10px" : "10px 30px"};

    .ranker_img {
        margin: 4px auto;
    }

    .champion_img {
        margin: 1px 0;
        border-radius: 15px;
    }
`

export const LowRankingItem = styled('div')<{$type:string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3px 10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: rgb(49 49 60 / 1);
    font-size: 1.4rem;
    text-align: center;

    .item_rank {
        width: 40px;
        span {
            margin-left: 1px;
            font-size: 1.2rem;
        }
    }

    .item_nickname {
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .item_detail1 {
        width: 100px;
    }

    .item_detail2 {
        width: 160px;
    }

    .item_detail3 {
        width: 160px;
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
export const HighRankingCard = styled('div')<{$rank:number, $image:string}>`
    position: relative;
    top: ${({$rank}) => $rank === 1 ? "-55px" : 0};
    height: 460px;
    width: 160px;
    border-radius: 10px;
    background-color: rgb(43 43 48 / 1);
    overflow: hidden;

    .card_container {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        &:hover > .card_head > .card_champion {
            transition: transform .4s ease-in-out;
            transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1.1) scaleY(1.1);
        }

        &:not(:hover) > .card_head > .card_champion {
            transition: transform .4s ease-in-out;
        }

        .card_head {
            position: relative;
            height: 65%;
            width: 100%;
            overflow: hidden;

            .card_champion {
                position: absolute;
                top: 0;
                left: 0;
                height: 99%;
                width: 100%;
                background-image: ${({$image}) => "url(" + $image + ")"};
                background-size: 100%;
                background-repeat: no-repeat;
            }

            .card_effect {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-image: linear-gradient(rgba(43, 43, 48, 0) 30%, rgb(43, 43, 48) 90%);
            }
        }

        .card_body {
            position: absolute;
            bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .card_perk {
                position: relative;
                display: flex;
                justify-content: center;

                .perk_image1 {

                }

                .perk_image2 {
                    position: absolute;
                    bottom: 2px;
                    right: -2px;
                    border-radius: 100%;
                    background-color: rgb(28 28 31 / 1);
                }
            }

            .card_item {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                width: 80%;
                margin-top: 10px;

                .item_image {
                    margin: 2px;
                    border-radius: 7px;
                }

                .empry_image {
                    height: 35px;
                    width: 35px;
                    border: 1px solid rgb(28 28 31 / 1);
                }
            }

            .card_name {
                margin-top: 12px;
                font-size: 1.4rem;
                line-height: 16px;
            }

            .card_data {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 8px;
                padding: 4px 9px;
                border-radius: 10px;
                background-color: rgb(255 68 56 / 1);
                font-size: 1.3rem;
                font-weight: 700;
                line-height: 16px;
            }

            .card_date {
                margin-top: 6px;
                font-size: 1.4rem;
                line-height: 16px;
                color: rgb(158 158 177 / 1);
            }
        }
    }
`