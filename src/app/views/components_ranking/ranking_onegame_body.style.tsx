import styled from "styled-components";
import { media } from "../components_player/match_player_theme";

export const MatchRankingOnegameCard = styled('div')<{$rank:number, $image:string}>`
    position: relative;
    top: ${({$rank}) => $rank === 1 ? "-50px" : 0};
    height: 390px;
    width: 160px;
    margin-top: 80px;
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
                    height: 50px;
                    width: 50px;
                }

                .perk_image2 {
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
                    height: 35px;
                    width: 35px;
                    margin: 2px;
                    border-radius: 7px;
                }

                .empty_image {
                    height: 35px;
                    width: 35px;
                    background-color: rgb(28 28 31 / 1);
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

    ${media.laptop} {
    }

    ${media.tablet} {
        top: ${({$rank}) => $rank === 1 ? "-40px" : 0};
        width: calc(90% / 3);
        height: 350px;
        margin-top: 50px;

        .card_container {

            .card_body {

                .card_perk {

                    .perk_image1 {
                        @media (min-width: 620px) {
                            height: 45px;
                            width: 45px;
                        }
                        height: 35px;
                        width: 35px;
                    }

                    .perk_image2 {
                        @media (min-width: 620px) {
                            height: 18px;
                            width: 18px;
                        }
                        bottom: 1px;
                        right: 1px;
                        height: 15px;
                        width: 15px;
                    }
                }

                .card_item {
                    @media (min-width: 620px) {
                        width: 80%;
                    }
                    width: 90%;
                    margin-top: 5px;

                    .item_image {
                        @media (min-width: 620px) {
                            height: 35px;
                            width: 35px;
                        }
                        height: 27px;
                        width: 27px;
                        margin: 2px;
                    }

                    .empty_image {
                        @media (min-width: 620px) {
                            height: 35px;
                            width: 35px;
                        }
                        height: 27px;
                        width: 27px;
                    }
                }

                .card_name {
                    margin-top: 12px;
                    font-size: 1.3rem;
                    line-height: 12px;
                }

                .card_data {
                    margin-top: 8px;
                    padding: 4px 9px;
                    font-size: 1.1rem;
                    line-height: 8px;
                }

                .card_date {
                    margin-top: 8px;
                    font-size: 1.2rem;
                    line-height: 12px;
                }
            }
        }
    }

    ${media.mobile} {
        top: ${({$rank}) => $rank === 1 ? "-30px" : 0};
        width: 85px;
        height: 250px;
        margin-top: 10px;

        .card_container {

            .card_body {

                .card_perk {

                    .perk_image1 {
                        height: 27px;
                        width: 27px;
                    }

                    .perk_image2 {
                        bottom: 1px;
                        right: 1px;
                        height: 11px;
                        width: 11px;
                    }
                }

                .card_item {
                    width: 90%;
                    margin-top: 5px;

                    .item_image {
                        height: 20px;
                        width: 20px;
                        margin: 2px;
                    }

                    .empty_image {
                        height: 20px;
                        width: 20px;
                    }
                }

                .card_name {
                    margin-top: 12px;
                    font-size: 1.1rem;
                    line-height: 12px;
                }

                .card_data {
                    margin-top: 8px;
                    padding: 4px 9px;
                    font-size: .9rem;
                    line-height: 8px;
                }

                .card_date {
                    margin-top: 8px;
                    font-size: 1rem;
                    line-height: 12px;
                }
            }
        }
    }
`;