import styled from "styled-components";

import { textColors, bgColors, borderColors } from "./match_player_theme";

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
        font-size: 1.4rem;
        
        .item_rownum {
            
        }

        img {
            height: 42px;
            width: 42px;
            border-radius: 15px;
            object-fit: cover;
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
`;



