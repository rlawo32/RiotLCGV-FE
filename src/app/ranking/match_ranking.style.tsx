import styled from "styled-components";

export const MatchRanking = styled('div')<{$type:string}>`
    @media (max-width: 1024px) {
        width: 100%;
        padding: 7px 15px;
    }
    // mobile_view
    @media (max-width: 480px) {
        padding: 7px 5px;
    }
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
        padding-top: 25px;
    }

    .ranking_bottom {
        @media (max-width: 768px) {
            margin-top: 55px;
        }
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 110px;

        .ranking_item_header {
            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
            // mobile_view
            @media (max-width: 480px) {
                font-size: .9rem;
            }
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
                @media (max-width: 768px) {
                    width: 20px;
                }
                width: 40px;
            }

            .item_header_nickname {
                @media (max-width: 768px) {
                    width: 80px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    width: 65px;
                }
                width: 160px;
            }

            .item_header_count {
                @media (max-width: 768px) {
                    width: 50px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    width: 35px;
                }
                width: 100px;
            }

            .item_header_title {
                @media (max-width: 768px) {
                    width: 80px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    width: 65px;
                }
                width: 160px;
            }

            .item_header_detail {
                @media (max-width: 768px) {
                    width: 80px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    width: 65px;
                }
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
            @media (max-width: 768px) {
                width: 37px;
                margin: 4px 1px 0;
            }
            width: 40px;
        }
        
        .highRank_multikill_item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 3px 4px 0 3px;
        }

        .lowRank_multikill_item {
            @media (max-width: 768px) {
                margin: 2px 4px;
            }
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 4px;
        }
    }
    
    .player_img {
        position: absolute;
        top: 10px;
        left: 5px;
        border-radius: 50%;
        z-index: -1;
    }
`;

export const RankingBox = styled('div')<{$ea:number}>`
    @media (max-width: 768px) {
        width: calc(86% / 2);
    }
    display: flex;
    justify-content: ${({$ea}) => $ea > 3 ? "flex-start" : "center"};
    flex-wrap: wrap;
    height: 100%;
    width: calc(100% / 3);
`

export const HighRankingItem = styled('div')<{$ea:number, $rank:number, $h:number, $w:number}>`
    @media (max-width: 768px) {
        top: ${({$rank}) => $rank === 1 ? "-65px" : 0};
        width: fit-content;
        margin: 5px;
    }
    // mobile_view
    @media (max-width: 480px) {
        width: ${({$ea}) => $ea > 2 ? "30px" : $ea === 2 ? "40px" : "75px"};
        margin: 2px;
    }
    position: relative;
    top: ${({$rank}) => $rank === 1 ? "-45px" : 0};
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: ${({$ea}) => $ea > 2 ? "55px" : $ea === 2 ? "80px" : "170px"};
    text-align: center;
    margin: ${({$ea}) => $ea > 2 ? "3px" : $ea === 2 ? "10px" : "10px 30px"};

    .ranker_img_box {
        position: relative;
        overflow: hidden;
    }

    .ranker_img {
        @media (max-width: 768px) {
            height: ${({$h}) => $h-25}px;
            width: ${({$w}) => $w-25}px;
        }
        // mobile_view
        @media (max-width: 480px) {
            height: ${({$h}) => $h-40}px;
            width: ${({$w}) => $w-40}px;
        }
        height: ${({$h}) => $h}px;
        width: ${({$w}) => $w}px;
        margin: 4px auto;
    }

    .champion_img {
        margin: 1px 0;
        border-radius: 15px;
    }
`

export const LowRankingItem = styled('div')<{$type:string}>`
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    // mobile_view
    @media (max-width: 480px) {
        font-size: .8rem;
    }
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
        @media (max-width: 768px) {
            width: 20px;
        }
        width: 40px;
        span {
            @media (max-width: 768px) {
                font-size: .9rem;
            }
            // mobile_view
            @media (max-width: 480px) {
                font-size: .7rem;
            }
            margin-left: 1px;
            font-size: 1.2rem;
        }
    }

    .item_nickname {
        @media (max-width: 768px) {
            width: 80px;
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 65px;
        }
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .item_detail1 {
        @media (max-width: 768px) {
            width: 50px;
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 35px;
        }
        width: 100px;
    }

    .item_detail2 {
        @media (max-width: 768px) {
            width: 80px;
            svg {
                height: 10px;
                width: 10px;
            }
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 65px;
            svg {
                height: 7px;
                width: 7px;
            }
        }
        width: 160px;
    }

    .item_detail3 {
        @media (max-width: 768px) {
            width: 80px;
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 65px;
        }
        width: 160px;
    }
`

export const RankerContent = styled('div')<{$ea:number}>`
    
    .ranker_name {
        @media (max-width: 768px) {
            font-size: ${({$ea}) => $ea > 3 ? ".7rem" : $ea === 2 ? "1.1rem" : $ea === 3 ? ".9rem" : "1.3rem"};
        }
        // mobile_view
        @media (max-width: 480px) {
            font-size: ${({$ea}) => $ea > 3 ? ".5rem" : $ea === 2 ? ".9rem" : $ea === 3 ? ".7rem" : "1.1rem"};
        }
        margin: 0 0 3px;
        font-size: ${({$ea}) => $ea > 3 ? ".9rem" : $ea === 2 ? "1.3rem" : $ea === 3 ? "1.1rem" : "1.5rem"};
        cursor: pointer;
    }

    .ranker_title {
        @media (max-width: 768px) {
            font-size: ${({$ea}) => $ea > 3 ? ".6rem" : $ea === 2 ? ".8rem" : $ea === 3 ? ".6rem" : ".9rem"};
        }
        // mobile_view
        @media (max-width: 480px) {
            font-size: ${({$ea}) => $ea > 3 ? ".45rem" : $ea === 2 ? ".65rem" : $ea === 3 ? ".45rem" : ".75rem"};
        }
        justify-content: center;
        font-size: ${({$ea}) => $ea > 3 ? ".8rem" : $ea === 2 ? "1rem" : $ea === 3 ? ".8rem" : "1.1rem"};
        font-weight: bold;
    }

    .ranker_detail {
        @media (max-width: 768px) {
            font-size: ${({$ea}) => $ea > 3 ? ".5rem" : $ea === 2 ? ".7rem" : $ea === 3 ? ".5rem" : ".8rem"};
        }
        font-size: ${({$ea}) => $ea > 3 ? ".7rem" : $ea === 2 ? ".9rem" : $ea === 3 ? ".7rem" : "1rem"};
    }
`

export const HighRankingCard = styled('div')<{$rank:number, $image:string}>`
    @media (max-width: 768px) {
        height: 310px;
        width: 120px;
        margin: 0 5px;
    }
    // mobile_view
    @media (max-width: 480px) {
        height: 270px;
        width: 90px;
    }
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
                    @media (max-width: 768px) {
                        height: 30px;
                        width: 30px;
                    }
                    // mobile_view
                    @media (max-width: 480px) {
                        height: 25px;
                        width: 25px;
                    }
                    height: 50px;
                    width: 50px;
                }

                .perk_image2 {
                    @media (max-width: 768px) {
                        height: 14px;
                        width: 14px;
                    }
                    // mobile_view
                    @media (max-width: 480px) {
                        height: 12px;
                        width: 12px;
                    }
                    position: absolute;
                    bottom: 2px;
                    right: -2px;
                    height: 20px;
                    width: 20px;
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
                    @media (max-width: 768px) {
                        height: 22px;
                        width: 22px;
                    }
                    // mobile_view
                    @media (max-width: 480px) {
                        height: 17px;
                        width: 17px;
                    }
                    height: 35px;
                    width: 35px;
                    margin: 2px;
                    border-radius: 7px;
                }

                .empty_image {
                    @media (max-width: 768px) {
                        height: 22px;
                        width: 22px;
                    }
                    // mobile_view
                    @media (max-width: 480px) {
                        height: 17px;
                        width: 17px;
                    }
                    height: 35px;
                    width: 35px;
                    background-color: rgb(28 28 31 / 1);
                    border: 1px solid rgb(28 28 31 / 1);
                }
            }

            .card_name {
                @media (max-width: 768px) {
                    font-size: 1.1rem;
                    line-height: 10px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1rem;
                    line-height: 9px;
                }
                margin-top: 12px;
                font-size: 1.4rem;
                line-height: 16px;
            }

            .card_data {
                @media (max-width: 768px) {
                    padding: 3px 7px;
                    font-size: .9rem;
                    line-height: 8px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    padding: 3px 4px;
                    font-size: .8rem;
                    line-height: 6px;
                }
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
                @media (max-width: 768px) {
                    font-size: 1.1rem;
                    line-height: 10px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    font-size: .9rem;
                    line-height: 9px;
                }
                margin-top: 6px;
                font-size: 1.4rem;
                line-height: 16px;
                color: rgb(158 158 177 / 1);
            }
        }
    }
`