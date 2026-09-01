import styled from "styled-components";

import { textColors, purpleColors, bgColors, borderColors, media } from "./match_player_theme";

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

    /* ---------- responsive ---------- */
    ${media.laptop} {
        padding: 12px 16px;
    }

    ${media.tablet} {
        height: auto;
        padding: 10px 10px;
        border-radius: 12px;

        .relative_body {
            height: auto;
            gap: 8px;
            padding: 12px 0;

            .relative_one {
                gap: 6px;

                .one_center {
                    width: 44px;
                    font-size: 1.8rem;

                    svg { width: 17px; height: 17px; }
                }
            }
        }
    }

    ${media.mobile} {
        padding: 8px 6px;

        .relative_head .relative_select_lane { gap: 4px; }

        .relative_body .relative_one .one_center {
            width: 36px;
            font-size: 1.5rem;
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

    /* ---------- responsive : 라인 6개를 한 줄 -> 3개씩 두 줄 ---------- */
    ${media.laptop} {
        height: 52px;
        padding: 12px 16px;
        font-size: 1.2rem;

        svg { width: 21px; height: 21px; }
    }

    ${media.tablet} {
        flex: 0 0 calc((100% - 10px) / 3);
        height: 46px;
        gap: 4px;
        padding: 8px 6px;
        font-size: 1.15rem;

        svg { width: 19px; height: 19px; }
    }

    ${media.mobile} {
        height: 42px;
        font-size: 1.05rem;

        svg { width: 16px; height: 16px; }
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
        width: 50%;
        min-width: 0;
        font-size: 1.4rem;
        
        .item_rownum {
            flex-shrink: 0;
        }

        .relative_info {
            display: flex;
            align-items: center;
            gap: 6px;

            img {
                flex-shrink: 0;
                width: 40px;
                height: 40px;
                border: 2px solid ${borderColors.purple_default};
                border-radius: 50%;
            }

            .opponent_nickname {
                min-width: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .relative_message {
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }

    .item_info {
        display: flex;
        align-items: center;
        width: 100%;

        .item_center {
            position: relative;
            display: flex;
            width: 40%;
            align-items: center;
            justify-content: flex-start;
            gap: 6px;
            font-size: 1.4rem;

            .relative_play { color: ${textColors.default}; padding-right: 1px; }
            .relative_win { color: ${textColors.win}; padding-right: 1px; }
            .relative_fail { color: ${textColors.fail}; padding-right: 1px; }
        }

        .item_right {
            display: flex;
            width: 60%;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            font-size: 1.3rem;
        }
    }

    /* ---------- responsive ---------- */
    ${media.laptop} {
        gap: 16px;
        padding: 8px 16px;

        .item_left { width: 60%; font-size: 1.3rem; }
        .item_center { font-size: 1.25rem; }
        .item_right { font-size: 1.2rem; }
    }

    ${media.tablet} {
        justify-content: space-between;
        height: 75px;
        gap: 6px 12px;
        padding: 10px 14px;
        border-radius: 12px;

        .item_left {
            gap: 2px;
            width: 45%;
            font-size: 1rem;

            .relative_info {
                flex-direction: column;
                width: 70px;

                .opponent_nickname {
                    width: 100%;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .relative_message {
                flex-direction: column;
                align-items: flex-start;
                padding-left: 5px;
            }
        }

        .item_info {
            width: 60%;
            gap: 8px;

            .item_center {
                justify-content: center;
                gap: 3px;
                width: 45%;
                font-size: 1.2rem;
            }

            .item_right {
                width: 50%;
                font-size: 1.1rem;
            }
        }
    }

    ${media.mobile} {
        padding: 10px;

        .item_left {
            width: 60%;
            font-size: 1rem;

            .relative_info { margin-left: 5px; }
            img { width: 28px; height: 28px; }
        }

        .item_info {
            flex-direction: column;
            align-items: flex-start;
            width: 40%;
        
            .item_center { 
                width: fit-content;
                font-size: 1.1rem; 
            }
            .item_right { 
                width: 100%;
                font-size: 1.05rem; 
            }
        }
    }
`;

export const RelativeListCard = styled('div')<{$type:string}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${({$type}) => $type === 'P' ? "flex-end" : "flex-start"};
    gap: 30px;
    flex: 1 1 0;
    min-width: 0;
    height: 80px;
    padding: 8px 24px;
    border: none;
    border-radius: 16px;
    background-color: ${({$type}) => $type === 'P' ? "#27478d" : "#80202d"};
    color: ${textColors.main};
    font-size: 1.5rem;
    font-weight: 600;

    .one_player {
        display: flex;
        align-items: center;
        justify-content: ${({$type}) => $type === 'P' ? "flex-end" : "flex-start"};
        gap: 10px;
        width: 50%;

        img {
            width: 50px;
            height: 50px;
            border-radius: 16px;
        }

        .one_nickname {
            text-align: ${({$type}) => $type === 'P' ? "right" : "left"};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .one_win {
        width: 15%;
        font-size: 1.8rem;
        text-align: center;
    }

    .one_compare {
        width: 15%;
        color: #FFD75C;
        font-size: 2.3rem;
        text-align: center;
    }

    /* ---------- responsive ---------- */
    ${media.laptop} {
        gap: 16px;
        padding: 8px 16px;
        font-size: 1.3rem;

        .one_win { font-size: 1.5rem; }
        .one_compare { font-size: 2rem; }
    }

    ${media.tablet} {
        justify-content: space-between;
        gap: 5px;
        height: 60px;
        min-height: 64px;
        padding: 8px 12px;
        border-radius: 12px;
        font-size: 1.2rem;

        .one_player { 
            flex-direction: ${({$type}) => $type === 'P' ? "column-reverse" : "column"};            
            gap: 4px;
            width: 60px;
            font-size: 1rem;

            img {
                flex-shrink: 0;
                width: 32px;
                height: 32px;
                border-radius: 12px;
            }
        }
        .one_win { width: 50px; font-size: 1.4rem; }
        .one_compare { width: 50px; font-size: 1.6rem; }
    }

    ${media.mobile} {
        gap: 6px;
        padding: 8px;
        font-size: 1.05rem;

        img { width: 30px; height: 30px; border-radius: 9px; }

        .one_win { font-size: 1.2rem; }
        .one_compare { font-size: 1.2rem; }
    }
`;