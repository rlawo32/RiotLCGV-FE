import styled from "styled-components";

import { textColors, bgColors, borderColors } from "./match_player_theme";

export const PlayerHistory = styled('div')`
    position: relative;
    width: 100%;
    max-width: 928px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 30px;
    border: 1px solid ${borderColors.default};
    border-radius: 10px;    
    background-color: ${bgColors.sub};

    .history_list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        width: 100%;
        height: 100%;
    }
`;

export const PlayerHistoryListItem = styled('div')<{$result:boolean}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    height: 95px;
    padding: 6px 40px 6px 20px;
    border: none;
    border-radius: 8px;
    /* background-color: ${bgColors.card}; */
    background-color: ${({$result}) => $result ? '#2F436E' : '#703C47'};
    overflow: hidden;

    .item_bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 100%;
        background-color: ${({$result}) => $result ? '#5383E8' : '#E84057'};
    }

    .history_left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 4px;
        height: 100%;
        width: 60px;

        .history_result { 
            font-size: 1.7rem;
            font-weight: 600;
            color: ${({$result}) => $result ? "#5383E8" : "#E84057"};
        }

        .history_date {
            font-size: 1.2rem;
            color: ${textColors.main}
        }

        .history_duration {
            font-size: 1.1rem;
            color: ${textColors.sub}
        }
    }
    
    .history_center {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;

        .history_summoner {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            height: 100%;

            .summoner_info {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                height: 100%;

                .history_champion {
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    height: 100%;

                    img {
                        height: 50px;
                        width: 50px;
                        margin: 0 3px 0 0;
                        border-radius: 40%;
                    }

                    .champion_level {
                        position: absolute;
                        bottom: 1px;
                        right: 1px;
                        margin: 0;
                        padding: 2px 4px 2px 4px;
                        background-color: ${bgColors.main};
                        border-radius: 50%;
                        font-size: 1rem;
                    }
                }

                .history_spell {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 3px;
                    height: 100%;
                    padding: 1px 0;
                    margin-right: 2px;

                    img {
                        height: 23px;
                        width: 23px;
                        border-radius: 7px;
                    }
                }

                .history_perk {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    height: 100%;

                    .perk_image1 {
                        height: 25px;
                        width: 25px;
                        border-radius: 50%;
                        background-color: ${bgColors.main};
                    }

                    .perk_image2 {
                        height: 21px;
                        width: 21px;
                        margin: 2px 0;
                    }
                }
            }

            .history_kda {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .kda_view {
                    font-size: 1.6rem;
                    font-weight: 700;

                    span { color: ${textColors.fail}; }
                }

                .kda_calc {
                    margin-top: 2px;
                    font-size: 1.1rem;
                    font-weight: 400;
                    color: ${textColors.sub};
                    
                    .kda_rate {
                        padding-left: 5px;
                    }
                }
            }
        }

        .history_item {
            display: flex;
            align-items: center;
            gap: 2px;
            padding: 3px 0 0 3px;

            .item_image {
                height: 29px;
                width: 29px;
                border: 1px solid ${bgColors.card};
                border-radius: 7px;
            }

            .empty_image {
                height: 29px;
                width: 29px;
                border: 1px solid grey;
            }

            .history_mvp {
                padding-bottom: 3px;
                margin-left: 5px;
            }
        }
    }

    .history_right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 70px;
        height: 100%;
        padding-top: 3px;
        font-size: 1.1rem;
        font-weight: 700;
        color: ${textColors.default};

        .history_cs {
            display: flex;
            margin-bottom: 3px;
        }
    }

    .history_player_list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        color: ${textColors.main};

        .players_info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            row-gap: 1;
            margin-left: 7px;

            .champion_image {
                height: 16px;
                width: 16px;
                margin-right: 3px;
                border-radius: 50%;
            }

            .info_name {
                width: 50px;
                font-size: 1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
            }
        }
    }

    .item_detail {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 30px;
        height: 100%;
        padding-bottom: 10px;
        background-color: ${({$result}) => $result ? '#28344E' : '#59343B'};
        cursor: pointer;

        &::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 10px;
            width: 7px;
            height: 7px;
            border-right: 2px solid ${textColors.main};
            border-bottom: 2px solid ${textColors.main};
            transform: translateX(-65%) rotate(45deg);
            pointer-events: none;
        }
    }
`;

export const PlayerHistoryBox = styled('div')<{$result:boolean}>`
    @media (max-width: 768px) {
        height: ${({$result}) => $result ? 1050 : 0}px;
    }
    // mobile_view
    @media (max-width: 480px) {
        height: ${({$result}) => $result ? 880 : 0}px;
    }
    margin-bottom: 5px;
    width: 100%;
    height: ${({$result}) => $result ? 830 : 0}px;
    overflow: hidden;
`;