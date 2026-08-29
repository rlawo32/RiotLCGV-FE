import styled from "styled-components";

import { textColors, purpleColors, bgColors, borderColors } from "./match_player_theme";

export const PlayerRelative = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 12px 24px;
    border: 1px solid ${borderColors.default};
    border-radius: 16px;
    color: ${textColors.default};

    .relative_head {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .relative_select_lane {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 5px;
            width: 100%;
        }

        .relative_select_player {
            position: relative;
            width: 100%;
        }
    }

    .relative_body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 15px 0;

        .relative_one {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 10px;
            width: 100%;

            .one_center {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 50px;
                padding-bottom: 5px;
                color: ${textColors.main};
                font-size: 2.5rem;
                font-weight: 600;

                svg {
                    flex-shrink: 0;
                    width: 20px;
                    height: 20px;
                }
            }

            .one_play {
                font-size: 1.1rem;
                font-weight: 400;
            }
        }
    }
`;

export const RelativeSelectLaneBox = styled('div')<{$selected:boolean}>`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 60px;
    padding: 15px 35px;
    border: ${({$selected}) => $selected ? `2px solid ${purpleColors.blue}` : `2px solid ${bgColors.card_active}`};
    border-radius: 6px;
    background-color: ${bgColors.card_active};
    color: ${textColors.main};
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        width: 25px;
        height: 25px;
    }

    &:hover {
        border-color: ${borderColors.purple_blue};
    }
`;

export const RelativeSelectOpponentBox = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 40px;
    border: 1px solid ${bgColors.card};
    border-radius: 14px;
    cursor: pointer;

    &:hover {
        border-color: ${borderColors.purple_blue};
    }
`;

export const RelativeListItem = styled('div')<{$type:string}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    width: 100%;
    height: 60px;
    padding: 8px 24px;
    border: none;
    border-radius: 16px;
    background-color: ${bgColors.card};
    color: ${textColors.main};

    .item_left {
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        width: 450px;
        font-size: 1.4rem;
        
        .item_rownum {
            
        }

        img {
            width: 40px;
            height: 40px;
            border: 2px solid ${borderColors.purple_default};
            border-radius: 50%;
        }
    }

    .item_center {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        width: 200px;
        font-size: 1.4rem;

        .relative_play { color: ${textColors.default}; padding-right: 1px; }
        .relative_win { color: ${textColors.win}; padding-right: 1px; }
        .relative_fail { color: ${textColors.fail}; padding-right: 1px; }
    }

    .item_right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        width: 250px;
        font-size: 1.3rem;
    }
`;

export const RelativeListCard = styled('div')<{$type:string}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${({$type}) => $type === 'P' ? "flex-end" : "flex-start"};
    gap: 30px;
    width: 50%;
    height: 80px;
    padding: 8px 24px;
    border: none;
    border-radius: 16px;
    background-color: ${({$type}) => $type === 'P' ? "#27478d" : "#80202d"};
    color: ${textColors.main};
    font-size: 1.5rem;
    font-weight: 600;

    img {
        width: 50px;
        height: 50px;
        border-radius: 16px;
    }

    .one_nickname {
        width: 30%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .one_win {
        width: 15%;
        font-size: 1.8rem;
        text-align: center;
    }

    .one_compare {
        width: 15%;
        color: #FFD75C;
        font-size: 2.5rem;
        text-align: center;
    }
`;