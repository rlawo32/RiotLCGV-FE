import styled from "styled-components";
import { bgColors, borderColors, textColors, purpleColors } from "./components_player/match_player_theme";

export const MatchPlayer = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 928px;
    height: 100%;
    min-height: 860px;
    margin: 0 auto;
    border: 1px solid ${borderColors.default};
    border-radius: 10px;    
    background: ${bgColors.main};
`;

export const MatchPlayerHeader = styled('div')<{$most:string}>`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 16px 16px 4px;

    .player_list {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left;
        gap: 2px 3px;
        padding-bottom: 10px;
        border-bottom: 2px solid ${borderColors.purple_default};
    }

    .player_info {
        position: relative;
        display: flex;
        align-items: center;
        gap: 30px;
        height: 180px;
        padding: 16px 36px;
        border-radius: 6px;
        border: 2px solid ${borderColors.default};
        background-color: ${bgColors.sub};
        background-image: linear-gradient(to right, #070F1B 0%, rgba(7, 15, 27, 0.8) 25%, rgba(7, 15, 27, 0.5) 50%, rgba(7, 15, 27, 0.3) 90%),
  url(${({$most}) => $most});
        background-size: 50% auto;
        background-position: 100% 20%;
        background-repeat: no-repeat;
        overflow: hidden;

        .info_left {
            display: flex;
            align-items: flex-start;
            gap: 30px;

            .info_left_a {
                position: relative;
                width: 120px;
                height: 120px;

                img {
                    width: 100%;
                    height: 100%;
                    border: 2px solid ${borderColors.purple_neon};
                    border-radius: 50%;
                }

                .info_level {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, 45%);
                    padding: 2px 9px;
                    border: 2px solid ${borderColors.purple_neon};
                    border-radius: 10px;
                    font-size: 1rem;
                    font-weight: 600;
                    background-color: ${bgColors.card};
                    z-index: 99;
                }
            }
            
            .info_left_b {
                display: flex;
                flex-direction: column;
                align-items: left;
                gap: 6px;
                font-size: 1.2rem;
                font-weight: 500;
                
                .info_name {
                    font-size: 2.5rem;
                    font-weight: 700;
                }

                .info_rank {
                    display: flex;
                    align-items: center;
                    gap: 7px;

                    .rank_icon {
                        width: 32px;
                        height: 32px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .rank_tier {

                    }

                    .rank_point {
                        padding: 3px 9px;
                        border-radius: 7px;
                        background-color: #1f283a;
                        color: ${textColors.sub};;
                    }
                }

                .info_winning_rate {
                    color: ${textColors.sub};
                }

                .info_recent_form {
                    margin-top: 16px;
                    padding-top: 6px;
                    border-top: 1px solid ${textColors.sub};
                    color: ${textColors.sub};
                    font-weight: 400;

                    .recent_win {
                        color: ${textColors.win};
                    }

                    .recent_fail {
                        color: ${textColors.fail};
                    }
                }
            }
        }

        .info_right {
            display: flex;
            align-items: end;
            height: 100%;
            gap: 6px;
        }
    }
`;

export const MatchPlayerListBox = styled('div')<{$selected:boolean}>`
    display: flex;
    flex: 0 0 calc((100% - 16px) / 6);
    align-items: center;
    gap: 10px;
    width: calc(100% / 6);
    max-width: 145px;
    padding: 6px 10px;
    border: ${({$selected}) => $selected ? `2px solid ${purpleColors.blue}` : `2px solid ${bgColors.card}`};
    border-radius: 8px;
    background-color: ${bgColors.card};
    cursor: pointer;

    .box_right {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 1rem;

        .box_name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.2rem; 
            font-weight:600;
            color: ${textColors.main};
        }
        .box_tier {
            font-size: 0.9rem;
            color: ${textColors.default};
        }
    }

    img {
        width: 40px;
        height: 40px;
        border: 1px solid ${borderColors.purple_default};
        border-radius: 50%;
    }

    &:hover {
        border: 2px solid ${borderColors.purple_default};
        background-color: ${bgColors.card_hover};
    }
`;

export const MatchPlayerBody = styled('div')<{$category:string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    padding: 4px 16px 16px;

    .player_position {
        position: relative;
        width: 100%;
        min-height: 110px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid ${borderColors.default};
        border-radius: 6px;
        background-color: ${bgColors.sub};
    }

    .player_category {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        width: 100%;
        height: 32px;
        padding: 2px 32px 0;
        border: 1px solid ${borderColors.default};
        border-radius: 6px;
        background-color: ${bgColors.sub};
    }

    .player_wrap {
        width: 100%;
        height: 100%;
        min-height: ${({$category}) => $category === 'A' ? 450 : 780}px;
    }
    
    .player_detail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4px;
        width: 100%;
        height: 100%;

        .detail_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            width: 100%;
            height: 100%;
            padding: 12px 16px;
            border: 1px solid ${borderColors.default};
            border-radius: 6px;
            background-color: ${bgColors.sub};
            font-size: 1.2rem;
            color: ${textColors.main};
        }

        .detail_title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 12px;
            color: ${textColors.main};
            font-weight: 500;
            
            .more {
                position: relative;
                padding-right: 10px;
                font-size: 1.1rem;
                color: ${textColors.sub};
                cursor: pointer;

                &::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    top: 60%;
                    width: 6px;
                    height: 6px;
                    border-right: 2px solid ${textColors.sub};
                    border-bottom: 2px solid ${textColors.sub};
                    transform: translateY(-65%) rotate(-45deg);
                    pointer-events: none;
                }
            }
        }

        .detail_history {
            grid-row: 1 / 3;
            height: 100%;
            
            .history_list {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                width: 100%;
                height: 100%;
            }
        }

        .detail_champion {
            height: 100%;
            
            .champion_most {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                width: 100%;
                height: 100%;
            }
        }

        .detail_relative {
            height: 100%;
            
            .relative_most {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                width: 100%;
            }
        }
    }
`;

export const MatchPlayerPosition = styled('div')<{$rate:number; $best:boolean;}>`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    min-width: 130px;    
    min-height: 90px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${bgColors.card};
    font-size: 1.1rem;
    color: ${textColors.sub};

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        padding: 2px;
        border-radius: inherit;
        background: linear-gradient(
            to bottom,
            ${({$best}) => $best ? `${purpleColors.neon}` : ""},
            rgba(157, 78, 255, 0.2)
        );
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    .position_lane {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 50%;
        font-size: 1.4rem;
        color: ${({$best}) => $best ? `${purpleColors.best}` : `${textColors.main}`};
        font-weight: ${({$best}) => $best ? 700 : 400};

        svg {
            flex-shrink: 0;
            width: 18px;
            height: 18px;
        }
    }

    .position_rate {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;

        .position_rate_info {
            width: 25%;
            font-size: 1.3rem;
            font-weight: 600;
            color: ${textColors.main};
        }
    }
    
    .position_info {
    }
`;

export const MatchPlayerCategoryListBox = styled('div')<{$selected:boolean}>`
    position: relative;
    width: fit-content;
    height: 100%;
    padding: 4px 32px;
    border-bottom: 2px solid ${({$selected}) => $selected ? `${borderColors.purple_best}` : `${bgColors.sub}`};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: ${({$selected}) => $selected ? 600 : 400};
    color: ${({$selected}) => $selected ? `${purpleColors.best}` : `${textColors.main}`};
    cursor: pointer;

    &:hover {
        background-color: ${bgColors.card_hover};
    }
`;

export const MatchPlayerChampionListBox = styled('div')<{$idx:number, $img:string}>`
    position: relative;
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 100%;
    min-height: 160px;
    padding: 2px 4px;
    border: none;
    border-radius: 8px;
    background-color: ${bgColors.card};
    background-image: linear-gradient(to top, #070F1B 0%, rgba(7, 15, 27, 0.8) 25%, rgba(7, 15, 27, 0.5) 50%, rgba(7, 15, 27, 0.3) 90%),
  url(${({$img}) => $img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 1.1rem;
    color: ${textColors.sub};
    overflow: hidden;
    /* transform: translateY(${({$idx}) => $idx === 1 ? 0 : $idx === 2 ? -25 : 15}px); */
    transform: translateY(${({$idx}) => $idx === 1 ? -15 : $idx === 2 ? 0 : 15}px);

    .champion_left {
        display: flex;
        flex-direction: column;
        gap: 3px;

        .champion_name {
            font-size: 2rem;
            font-weight: 600;
            color: ${textColors.main};
        }

        .champion_kda {
        }
    }

    .champion_right {
        display: flex;
        align-items: center;

        .champion_rate {
            margin-right: 5px;
            color: ${textColors.main};
        }

        .champion_info {

        }
    }
`;

export const MatchPlayerRelativeListBox = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 110px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background-color: ${bgColors.card};

    .relative_item {
        display: flex;
        align-items: center;
        width: calc(100% / 3);
    }

    .relative_left {
        gap: 10px;

        img {
            width: 40px;
            height: 40px;
            border: 2px solid ${borderColors.purple_default};
            border-radius: 50%;
        }

        .opponent_nickname {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.2rem;
            font-weight: 600;
        }
    }

    .relative_center {
        justify-content: flex-start;
        gap: 6px;
        padding-left: 15px;

        .relative_play { color: ${textColors.default}; padding-right: 1px; }
        .relative_win { color: ${textColors.win}; padding-right: 1px; }
        .relative_fail { color: ${textColors.fail}; padding-right: 1px; }
    }

    .relative_right {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }
`;

export const MatchPlayerHistoryListBox = styled('div')<{$result:boolean}>`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    padding: 8px 18px;
    border: none;
    border-radius: 8px;
    background-color: ${bgColors.card};

    .history_left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 4px;
        height: 100%;
        width: 50px;

        .history_result { 
            font-size: 1.5rem;
            font-weight: 600;
            color: ${({$result}) => $result ? "#5383E8" : "#E84057"};
        }

        .history_date {
            font-size: 1rem;
            color: ${textColors.main}
        }

        .history_duration {
            font-size: .9rem;
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
                        height: 40px;
                        width: 40px;
                        margin: 0 3px 0 0;
                        border-radius: 40%;
                    }

                    .champion_level {
                        position: absolute;
                        bottom: 1px;
                        right: 1px;
                        margin: 0;
                        padding: 2px 4px 2px 2px;
                        background-color: black;
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
                        height: 17px;
                        width: 17px;
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
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background-color: #000000;
                    }

                    .perk_image2 {
                        height: 15px;
                        width: 15px;
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
                    font-size: 1.4rem;
                    font-weight: 700;

                    span { color: ${textColors.fail}; }
                }

                .kda_calc {
                    margin-top: 2px;
                    font-size: .9rem;
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
                height: 20px;
                width: 20px;
                border: 1px solid ${bgColors.card};
                border-radius: 7px;
            }

            .empty_image {
                height: 20px;
                width: 20px;
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
        font-size: .9rem;
        font-weight: 700;
        color: ${textColors.sub};

        .history_cs {
            display: flex;
            margin-bottom: 3px;
        }
    }
`;

export const LcgKdaCalc = styled('div')<{$k:number, $d:number, $a:number}>`
    display: flex;
    align-items: center;

    .kda {
        margin: 0 0 0 4px;
        color: ${({$k, $d, $a}) => 
            ($k > 0 || $a > 0) && $d == 0 ? "#FF8200"
            :
            Math.floor(($k + $a) / $d) > 4 ? "#FF8200" 
            :
            Math.floor(($k + $a) / $d) > 3 ? "#0093FF"
            :
            Math.floor(($k + $a) / $d) > 2 ? "#00BBA3"
            :
            "#9E9EB1"
        }
    }
`;

export const LcgWinningGraph = styled('div')<{$rate:number}>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 7px;
    border: none;
    border-radius: 12px;
    background-color: #364268;
    overflow: hidden;

    .rate_graph {
        width: ${({$rate}) => $rate}%;
        height: 100%;
        background-color: #4c3fff;
    }
`;

export const LcgRowNumCalc = styled('div')<{$idx:number}>`
    width: 15px;
    margin-right: 10px;
    font-size: ${({$idx}) =>  $idx <= 3 ? 1.5 : 1.3}rem;
    font-weight: ${({$idx}) =>  $idx <= 3 ? 600 : 400};
    color: ${({$idx}) =>  $idx === 1 ? "#FFD75C" : $idx === 2 ? "#C0CCDA" : $idx === 3 ? "#CD8F5B" : "#9194A5"};
`;

export const InfoMessageBox = styled('div')<{$flag:string}>`
    width: fit-content;
    height: fit-content;
    padding: 4px 12px;
    border: 1px solid;
    border-radius: 8px;
    border-color: ${({$flag}) => $flag === 'S' ? "#bc49ff" : 
                                 $flag === 'P' ? "#6E9AFF" : 
                                 $flag === 'N' ? "#FFA13A" : "#FF6378"};
                                //  $flag === 'W' ? "#FF6378" : "#A94A5A"};
    background-color: ${({$flag}) => $flag === 'S' ? "#1D0D35" : 
                                     $flag === 'P' ? "#101D45" : 
                                     $flag === 'N' ? "#3A210C" : "#3A1118"};
                                     /* $flag === 'W' ? "#3A1118" : "#2A171C"}; */
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({$flag}) => $flag === 'S' ? "#ae44ff" : 
                          $flag === 'P' ? "#4C7DFF" : 
                          $flag === 'N' ? "#FF8A1F" : "#FF526A"};
                          /* $flag === 'W' ? "#FF526A" : "#B85A6A"}; */
`;

export const InfoRankBox = styled('div')<{$rank:number}>`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 135px;
    height: 60px;
    padding: 2px 12px;
    border: 1px solid ${borderColors.purple_blue};
    border-radius: 16px;
    background-color: ${bgColors.card};

    .rank_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        color: ${textColors.sub};
        font-size: 1.1rem;

        .rank_cnt {
            color: ${textColors.main};
            font-size: 1.4rem;
            font-weight: 600;
        }
    }
`;

export const Pagination = styled('div')`
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 8px;
        border: 2px solid ${bgColors.card};
        border-radius: 8px;
        background-color: ${bgColors.card};
        color: ${textColors.main};
        font-size: 1.2rem;
        cursor: pointer;

        .btn_text {
            position: relative;
            width: 100px;

            &::after {
                content: "";
                position: absolute;
                right: 14px;
                top: 50%;
                width: 7px;
                height: 7px;
                border-right: 2px solid ${textColors.main};
                border-bottom: 2px solid ${textColors.main};
                transform: translateY(-65%) rotate(45deg);
                pointer-events: none;
            }
        }

        &:hover {
            border-color: ${borderColors.purple_blue};
            background-color: ${bgColors.card_hover};
        }
    }
`;