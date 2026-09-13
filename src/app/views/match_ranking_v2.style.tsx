import styled from "styled-components";
import { bgColors, borderColors, textColors, purpleColors, media } from "./components_player/match_player_theme";

export const MatchRanking = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 928px;
    height: 100%;
    min-height: 860px;
    padding: 16px 16px 4px;
    margin: 0 auto;
    border: 1px solid ${borderColors.default};
    border-radius: 10px;    
    background: ${bgColors.main};

    /* ---------- responsive ---------- */
    ${media.laptop} {
        min-width: 900px;
        height: auto;
        min-height: 0;
        flex-shrink: 0;
    }
    ${media.tablet} {
        min-width: 0;
        border-radius: 8px;
    }

    .ranking_box {
        position: relative;
        width: 100%;
        min-height: 110px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        padding: 12px 32px;
        border: 1px solid ${borderColors.default};
        border-radius: 6px;
        background-color: ${bgColors.sub};

        .box_header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding: 8px;
            margin-bottom: 8px;
            font-size: 1.8rem;
            font-weight: 600;
            color: ${purpleColors.blue};
        }

        .box_category {
            position: relative;
            width: 100%;
            padding: 0 28px;

            .category_slider {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 1px;
                width: 100%;
                border-radius: 6px;
                overflow: hidden;
                overflow-x: auto;
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-behavior: smooth;

                &::-webkit-scrollbar { display: none; }
                & > * { flex: 0 0 auto; }
            }

            .category_arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 3;
                width: 20px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid ${borderColors.purple_dark};
                border-radius: 8px;
                background: ${bgColors.card};
                color: ${textColors.main};
                font-size: 1.8rem;
                cursor: pointer;
                transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
            }

            .category_arrow:hover {
                background: ${bgColors.card_hover};
                color: ${borderColors.purple_light};
            }

            .category_arrow_prev { left: 4px; }
            .category_arrow_next { right: 4px; }
        }

        .ranking_list {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            min-height: 280px;
            padding: 0 16px;
            margin-top: 12px;

            .list_top {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 32px;

                div:nth-child(1) { top: 15px; }
                div:nth-child(2) { top: -15px; }
                div:nth-child(3) { top: 20px; }
            }

            .list_bottom {
                position: relative; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: 4px;
                width: 100%;
            }
        }

        .ranking_more {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 30px;
            margin-top: 5px;
            font-size: 1.3rem;
            font-weight: 400;
            color: ${purpleColors.default};
            opacity: 0.8;
            text-align: center;
            cursor: pointer;
        }
    }

    .ranking_power {
        min-height: 790px;
    }

    .ranking_record {
        min-height: 440px;
    }

    .ranking_onegame {
        min-height: 540px;
    }
`;

export const MatchRankingRecordCategoryBox = styled('div')<{$selected:boolean}>`
    position: relative;
    width: fit-content;
    flex-shrink: 0;
    height: 100%;
    padding: 8px 24px 6px;
    border-bottom: 3px solid ${({$selected}) => $selected ? `${borderColors.purple_best}` : `${bgColors.card}`};
    background-color: ${({$selected}) => $selected ? 'rgba(90, 84, 119, 0.6)' : `${bgColors.card}`};
    text-align: center;
    font-size: 1.3rem;
    font-weight: ${({$selected}) => $selected ? 600 : 400};
    color: ${({$selected}) => $selected ? `${textColors.main}` : `${textColors.default}`};
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid ${bgColors.card_hover};
        background-color: ${bgColors.card_hover};
    }

    /* ---------- responsive ---------- */
    ${media.laptop} {
        padding: 4px 20px;
    }

    ${media.tablet} {
        flex: 1 1 0;
        width: auto;
        padding: 4px 8px;
        font-size: 1.15rem;
        white-space: nowrap;
    }

    ${media.mobile} {
        padding: 4px 4px;
        font-size: 1.05rem;
    }
`;

export const MatchRankingOnegameCategoryBox = styled('div')<{$selected:boolean}>`
    position: relative;
    width: fit-content;
    flex-shrink: 0;
    height: 100%;
    padding: 8px 24px 6px;
    border-bottom: 3px solid ${({$selected}) => $selected ? `${borderColors.purple_best}` : `${bgColors.card}`};
    background-color: ${({$selected}) => $selected ? 'rgba(90, 84, 119, 0.6)' : `${bgColors.card}`};
    text-align: center;
    font-size: 1.3rem;
    font-weight: ${({$selected}) => $selected ? 600 : 400};
    color: ${({$selected}) => $selected ? `${textColors.main}` : `${textColors.default}`};
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid ${bgColors.card_hover};
        background-color: ${bgColors.card_hover};
    }

    /* ---------- responsive ---------- */
    ${media.laptop} {
        padding: 4px 20px;
    }

    ${media.tablet} {
        flex: 1 1 0;
        width: auto;
        padding: 4px 8px;
        font-size: 1.15rem;
        white-space: nowrap;
    }

    ${media.mobile} {
        padding: 4px 4px;
        font-size: 1.05rem;
    }
`;

export const PowerRankingTop3Card = styled('div')<{$rank:number}>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    min-height: 270px;
    padding: 48px 12px 16px;
    border-radius: 8px;
    overflow: visible;

    border: 2px solid ${({$rank}) => $rank === 1 ? 'rgba(255, 193, 58, 0.45)' : 
                                     $rank === 2 ? 'rgba(104, 139, 181, 0.45)' : 'rgba(156, 98, 77, 0.45)'};
    background: linear-gradient(180deg, ${({$rank}) => $rank === 1 ? `
                                rgba(33, 27, 19, 0.95) 0%, 
                                rgba(17, 14, 26, 0.95) 45%, 
                                rgba(8, 8, 18, 0.95) 100%
                                ` :  $rank === 2 ? `
                                rgba(20, 32, 52, 0.95) 0%, 
                                rgba(13, 22, 38, 0.95) 45%, 
                                rgba(7, 10, 20, 0.95) 100%
                                ` : `
                                rgba(34, 18, 20, 0.95) 0%, 
                                rgba(20, 12, 16, 0.95) 45%, 
                                rgba(8, 8, 14, 0.95) 100%`}
            );
    box-shadow: inset 0 0 60px ${({$rank}) => $rank === 1 ? `
                                rgba(255, 202, 91, 0.12), 
                                  0 0 25px rgba(255, 184, 50, 0.15)
                                  ` : $rank === 2 ? `
                                rgba(72, 126, 190, 0.12), 
                                  0 0 25px rgba(70, 120, 180, 0.12)
                                  ` : `
                                rgba(174, 92, 62, 0.12), 
                                  0 0 25px rgba(145, 75, 55, 0.12)`};
    
    &::before {
        content: '';
        position: absolute;
        top: -90px;
        left: 50%;
        transform: translateX(-50%) translateZ(0);
        width: 130%;
        height: 130px;
        filter: blur(14px);
        pointer-events: none;
        will-change: transform, filter;
        background: radial-gradient(ellipse at 50% 80%,
                    ${({$rank}) => $rank === 1 ? `
                        rgba(255, 245, 210, 0.25) 0%,
                        rgba(255, 220, 130, 0.15) 25%,
                        rgba(255, 190, 60, 0.08) 55%,
                    ` :  $rank === 2 ? `
                        rgba(220, 238, 255, 0.25) 0%,
                        rgba(140, 190, 240, 0.15) 28%,
                        rgba(80, 130, 190, 0.08) 55%,
                    ` : `
                        rgba(255, 225, 210, 0.25) 0%,
                        rgba(220, 145, 110, 0.15) 28%,
                        rgba(170, 80, 55, 0.08) 55%,
                    `} transparent 75%);
    }

    .card_top {

        img {
            width: 85px;
            height: 85px;
            border: 2px solid ${({$rank}) => $rank === 1 ? '#ffb71b' :  $rank === 2 ? '#7096c5' : '#c46543'};
            border-radius: 50%;
        }
    }

    .card_middle {
        font-size: 1.7rem;
        font-weight: 600;
        color: ${textColors.main};
    }

    .card_bottom {
        display: flex;
        flex-direction: column;
        align-items: center;

        .card_score {
            font-size: 3.5rem;
            font-weight: 700;
            color: ${({$rank}) => $rank === 1 ? '#ffb71b' :  $rank === 2 ? '#7096c5' : '#c46543'};
        }

        .card_desc {
            font-size: 1rem;
            font-weight: 400;
            color: ${textColors.sub};
            opacity: 0.8;
        }
    }
`;

export const PowerRankingRemainCard = styled('div')<{$change:number}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 48px;
    padding: 4px 24px 4px 16px;
    border-radius: 6px;
    background-color: ${bgColors.card};

    .card_left {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;

        .card_rownum {
            width: 16px;
            margin-right: 12px;
            font-size: 1.5rem;
            font-weight: 600;
            color: ${purpleColors.bright};
            text-align: center;
            opacity: 0.8;
        }

        .card_icon {
            
            img {
                width: 31px;
                height: 31px;
                border: 1px solid ${borderColors.purple_main};
                border-radius: 50%;
            }
        }

        .card_nickname {
            font-size: 1.3rem;
            font-weight: 500;
            color: ${textColors.main};
            opacity: 0.9;
        }
    }

    .card_right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        width: 30%;    

        .card_desc {
            font-size: 1rem;
            font-weight: 400;
            color: ${textColors.sub};
            opacity: 0.8;
        }

        .card_score {
            font-size: 1.4rem;
            font-weight: 600;
            color: ${purpleColors.light};
        }

        .card_change {
            width: 25px;
            margin-left: 20px;
            font-size: 1.2rem;
            font-weight: 400;
            color: ${({$change}) => $change > 0 ? `${textColors.win}` : $change < 0 ? `${textColors.fail}` : `${textColors.default}`};
            text-align: center;
        }
    }
`;

export const RecordRankingListBox = styled('div')<{$flag:string, $type:string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    min-height: ${({$flag}) => $flag === 'H' ? 32 : 48}px;
    padding: 4px 18px;
    border-radius: 4px;
    background-color: ${({$flag}) => $flag === 'H' ? `${bgColors.card_active}` : `${bgColors.card}`} ;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({$flag}) => $flag === 'H' ? `${textColors.head}` : `${textColors.main}`};
    text-align: center;

    .row_1 { width: 5%; }
    .row_2 { width: 25%; }
    .row_3 { width: 55%; }
    .row_4 { width: 15%; }

    .body_rownum {
        font-size: 1.3rem;
        font-weight: 600;
        color: ${textColors.sub};
    }

    .body_summoner {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-left: 5px;
        font-size: 1.3rem;

        img {
            width: 31px;
            height: 31px;
            border: 1px solid ${borderColors.purple_main};
            border-radius: 50%;
        }
    }

    .body_info {
        display: flex;
        align-items: center;
        justify-content: ${({$type}) => $type === 'AW' || $type === 'AT' || $type === 'AV' || $type === 'AJ' || $type === 'AM' ? "space-around" : "center"};
        gap: ${({$type}) => $type === 'AW' ? 16 : 8}px;
        font-size: 1.3rem;

        .info_desc {
            font-size: 1.2rem;
            color: ${textColors.sub};
        }

        .info_data {
            font-weight: 600;
        }

        .info_icon {
            display: flex;
            align-items: center;
            gap: 4px;

            svg {
                flex-shrink: 0;
                width: 18px;
                height: 18px;
            }
        }

        .info_score {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-right: 16px;
        }
    }

    .body_play {
        color: ${textColors.sub};
    }
`;

export const LcgWinningGraph = styled('div')<{$rate:number}>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 9px;
    border: none;
    border-radius: 12px;
    background-color: #364268;
    overflow: hidden;

    .rate_graph {
        width: ${({$rate}) => $rate}%;
        height: 100%;
        background: linear-gradient(
            90deg,
            #5b20c7 0%,
            #7130d9 45%,
            #a64ff0 80%,
            #c36cff 100%
        );
    }
`;