import styled from "styled-components";

import { textColors, bgColors, borderColors, media } from "./match_player_theme";

export const PlayerChampion = styled('div')`
    position: relative;
    width: 100%;
    max-width: 928px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 30px;
    border: 1px solid ${borderColors.default};
    border-radius: 10px;    
    background-color: ${bgColors.sub};

    .champion_list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 100%;
    }

    /* ---------- responsive ---------- */
    ${media.laptop} {
        padding: 12px 16px;
    }

    ${media.tablet} {
        height: auto;
        padding: 10px 10px;
        border-radius: 8px;

        .champion_list { height: auto; gap: 6px; }
    }

    ${media.mobile} {
        padding: 8px 6px;
    }
`;

export const PlayerChampionListItem = styled('div')`
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
        width: 40%;
        min-width: 0;
        font-size: 1.4rem;
        
        .item_rownum {
            flex-shrink: 0;
        }

        .champion_info {
            display: flex;
            align-items: center;
            gap: 6px;

            img {
                flex-shrink: 0;
                height: 42px;
                width: 42px;
                border-radius: 15px;
                object-fit: cover;
            }
        }
    }

    .item_center {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;

        .kda_detail {
            font-size: 1.3rem;

            span:nth-child(1) {
                margin: 0 4px 0 0;
            }

            span:nth-child(2) {
                color: ${textColors.fail}
            }

            span:nth-child(1n+2) {
                margin: 0 4px;
            }
        }

        .kda_calc {
            padding-top: 3px;
            font-size: 1.1rem;
            font-weight: 700;
            color: rgb(123 122 152 / 1);
        }
    }

    .item_right {
        display: flex;
        align-items: center;
        width: 30%;
        
        .match_detail {
            width: 40%;
            font-size: 1.2rem;
        }

        .match_calc {
            display: flex;
            flex-direction: column;
            gap: 3px;
            width: 50%;
            font-size: 1.1rem;
        }

        span {
            margin: 0 1px;
            letter-spacing: .1rem;
        }
    }

    /* ---------- responsive ---------- */
    ${media.laptop} {
        gap: 16px;
        padding: 8px 16px;

        .item_left { font-size: 1.3rem; }
        .item_right {
            width: 34%;

            .match_detail { width: 48%; white-space: nowrap; }
            .match_calc { width: 52%; }
        }
    }

    ${media.tablet} {
        height: 70px;
        min-height: 58px;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 12px;

        .item_left {
            width: 42%;
            gap: 4px;
            font-size: 1.1rem;

            > div { white-space: nowrap; }
            img { width: 36px; height: 36px; border-radius: 12px; }

            .champion_info {
                flex-direction: column;
                gap: 2px;
                width: 55px;
            }
        }

        .item_center {
            width: 32%;

            .kda_detail { font-size: 1.2rem; }
            .kda_calc { font-size: 1.05rem; }
        }

        .item_right {
            flex-direction: column;
            align-items: flex-start;
            gap: 3px;
            width: 26%;

            .match_detail { width: 100%; font-size: 1.1rem; }
            .match_calc { width: 100%; font-size: 1rem; }
        }
    }

    ${media.mobile} {
        flex-wrap: wrap;
        gap: 6px 10px;
        height: 100%;
        padding: 10px;

        .item_left {
            width: 100%;
            gap: 10px;
            font-size: 1.2rem;

            .champion_info {
                flex-direction: row;
                gap: 6px;
                width: fit-content;

                img { 
                    width: 32px; 
                    height: 32px; 
                    border-radius: 10px; 
                }
            }
            
        }

        .item_center {
            width: 30%;
            margin-left: 30px;

            .kda_detail { font-size: 1.15rem; }
            .kda_calc { font-size: 1.05rem; }
        }

        .item_right {
            gap: 4px;
            width: 50%;
            margin-left: 10px;

            .match_detail {
                font-size: 1.1rem;
                white-space: nowrap;
            }

            .match_calc { 
                flex-direction: row;
                align-items: center;
                gap: 5px;
                width: 100%; 
                font-size: 1rem; 
                span {
                    display: none;
                }
            }

            span { letter-spacing: 0; }
        }
    }
`;



