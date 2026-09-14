import styled from "styled-components";
import { bgColors, borderColors, textColors, purpleColors, media } from "../components_player/match_player_theme";

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
`;