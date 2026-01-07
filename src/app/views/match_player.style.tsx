import styled from "styled-components";

export const MatchPlayer = styled('div')`
    @media (max-width: 1024px) {
        width: 100%;
        padding: 7px 15px;
    }
    // mobile_view
    @media (max-width: 480px) {
        padding: 5px 8px;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 768px;
    height: 100%;
    min-height: 860px;
    margin: 0 auto;
    padding: 7px 30px;
    border: 1px solid #887d7d;
    border-radius: 10px;    
    background-color: rgb(49 49 60 / .7);
`;

export const PlayerSelectBox = styled('div')`
    // mobile_view
    @media (max-width: 480px) {
        padding: 10px 3px;
    }
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 5px;
    padding: 10px 5px;
    border-bottom: 1px solid rgb(255 68 56 / 1);

    .select_item {
        @media (max-width: 768px) {
            font-size: 1rem;
            margin: 1px;
            padding: 3px 6px;
        }
        // mobile_view
        @media (max-width: 480px) {
            font-size: .8rem;
            padding: 2px 5px;
        }
        margin: 2px;
        padding: 4px 7px;
        border-radius: 10px;
        border: none;
        background-color: rgb(30 30 38 / 1);
        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
            background-color: rgb(255 68 56 / 1);
        }
    }
`;

export const PlayerDataBox = styled('div')`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px auto;

    .player_img {
        // mobile_view
        @media (max-width: 480px) {
            height: 60px;
            width: 60px;
        }
        height: 80px;
        width: 80px;
        border-radius: 35px;
    }

    .rank_img {
        // mobile_view
        @media (max-width: 480px) {
            height: 60px;
            width: 60px;
        }
        height: 80px;
        width: 80px;
        object-fit: cover;
        transform: scale(1.4);
    }

    .champion_img {
        // mobile_view
        @media (max-width: 480px) {
            height: 30px;
            width: 30px;
        }
        height: 35px;
        width: 35px;
        border-radius: 15px;
        object-fit: cover;
    }

    .box_head {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px 30px;
        border-radius: 10px;
        background-color: rgb(30 30 38 / 1);

        hr {
            height: 0;
            width: 100%;
            margin: 20px 0;
            border: .1rem solid #eaeaf1;
            opacity: .5;
        }

        
        @media (min-width: 768px) {
            .b_graph {
                display: block;
            }
            .s_graph {
                display: none;
            }
        }
        @media (max-width: 768px) {
            .b_graph {
                display: none;
            }
            .s_graph {
                display: block;
            }
        }

        .head_top {
        }

        .head_mid {
            @media (max-width: 768px) {
                flex-direction: column;
                height: fit-content;
            }
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 170px;
            width: 100%;

            .head_summoner {
                // mobile_view
                @media (max-width: 480px) {
                    justify-content: space-around;
                }
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 280px;
            
                .head_section  {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .head_player {
                    width: 100px;
                    text-align: center;

                    .player_name {
                        width: 100px;
                        margin-top: 12px;
                        font-size: 1.2rem;
                        font-weight: 700;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                .head_rank {
                    // mobile_view
                    @media (max-width: 480px) {
                        width: 100px;
                    }
                    width: 120px;

                    .rank_desc {
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: 1rem;
                        }
                        margin-top: 10px;
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                }
            }

            .head_data {
                @media (max-width: 768px) {
                    margin-top: 35px;
                }
                display: flex;
                align-items: center;
                width: 220px;

                .head_graph {
                    position: relative;
                    height: 108px;
                    width: 108px;

                    .graph_gage {
                        @media (max-width: 768px) {
                            font-size: 1.3rem;
                        }
                        position: absolute;
                        height: 108px;
                        width: 108px;
                        text-align: center;
                        color: #3182ce;
                        font-size: 1.6rem;
                        line-height: 108px;
                    }
                }

                .head_detail {
                    display: flex;
                    flex-direction: column;
                    margin-left: 25px;

                    .detail_play {
                        margin-bottom: 20px;

                        .count_play {
                            @media (max-width: 768px) {
                                font-size: 1.2rem;
                            }
                            font-size: 1.5rem;
                            font-weight: 700;
                        }

                        .count_wof {
                            @media (max-width: 768px) {
                                font-size: 1rem;
                            }
                            padding-top: 2px;
                            font-size: 1.2rem;
                            font-weight: 400;
                            color: rgb(123 122 142 / 1);
                        }
                    }

                    .detail_kda {

                        .calc_kda {
                            @media (max-width: 768px) {
                                font-size: 1.2rem;
                            }
                            font-size: 1.5rem;
                            font-weight: 700;
                        }

                        .origin_kda {
                            @media (max-width: 768px) {
                                font-size: 1rem;
                            }
                            padding-top: 2px;
                            font-size: 1.2rem;
                            font-weight: 700;
                            color: rgb(123 122 142 / 1);

                            span:nth-child(1) {
                                margin: 0 4px 0 0;
                            }

                            span:nth-child(1n+2) {
                                margin: 0 4px;
                            }
                        }
                    }
                }
            }

            .openai {
                position: absolute;
                top: 10px;
                right: 10px;

                button {
                    height: 20px;
                    width: 20px;
                    border: none;
                    background-color: transparent;
                    cursor: pointer;    

                    .openai_img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }

                    &:hover {

                        + .tooltip {
                            // mobile_view
                            @media (max-width: 480px) {
                                top: -20px;
                            }
                            top: -27px;
                            opacity: 1;
                            visibility: visible;
                            pointer-events: auto;
                            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
                            color: #c97874;
                            z-index: 0;
                        }
                    }
                }
            }
        }

        .head_bottom {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .player_data_info {
                position: relative;
                display: flex;
                flex-wrap: wrap-reverse;
                justify-content: center;
                align-items: center;
                width: 100%;

                .info_item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: calc(100% / 4);
                    margin: 15px 5px;

                    .item_figure {
                        @media (max-width: 768px) {
                            font-size: 1.5rem;
                        }
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: 1.2rem;
                        }
                        color: #ffffff;
                        font-size: 1.7rem;
                        font-weight: 700;
                        line-height: 26px;
                    }
                    
                    .item_title {
                        @media (max-width: 768px) {
                            font-size: 1rem;
                        }
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: .7rem;
                        }
                        padding-top: .125rem;
                        color: #7B7A8E;
                        font-size: 1.2rem;
                        font-weight: 700;
                        line-height: 16px;
                    }
                }
            }

            .player_data_line {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 5px 0 10px;

                .line_data {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: calc(100% / 5);
                    margin: 5px;

                    .item_icon {
                        @media (max-width: 768px) {
                            margin: 0 0 3px 0;
                        }
                        // mobile_view
                        @media (max-width: 480px) {
                            svg {
                                height: 25px;
                                width: 25px;
                            }
                        }
                        svg {
                            height: 35px;
                            width: 35px;
                        }
                        margin: 0 0 10px 0;
                    }
                    
                    .item_figure {
                        display: flex;
                        @media (max-width: 768px) {
                            flex-direction: column;
                            align-items: center;
                        }

                        .figure_graph {
                            position: relative;
                            height: 54px;
                            width: 54px;

                            .graph_gage {
                                @media (max-width: 768px) {
                                    font-size: .7rem;
                                }
                                position: absolute;
                                height: 54px;
                                width: 54px;
                                text-align: center;
                                color: #3182ce;
                                font-size: .9rem;
                                line-height: 54px;
                            }
                        }

                        .figure_detail {
                            @media (max-width: 768px) {
                                margin: 3px 0 0 0;
                            }
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            margin-left: 10px;

                            .detail_play {
                                @media (max-width: 768px) {
                                    font-size: .9rem;
                                }
                                font-size: 1.1rem;
                                font-weight: 700;
                            }

                            .detail_wof {
                                @media (max-width: 768px) {
                                    font-size: .8rem;
                                }
                                padding-top: 2px;
                                font-size: .9rem;
                                font-weight: 400;
                                color: rgb(123 122 142 / 1);
                            }
                        }
                    }
                }
            }
        }
    }

    .box_body {
        @media (max-width: 768px) {
            flex-direction: column;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        margin-top: 20px;
        border-radius: 10px;

        .match_detail {
            font-size: 1.2rem;
            
            span {
                margin: 0 1px;
                letter-spacing: .1rem;
            }
        }

        .match_winning {
            padding-top: 3px;
            font-size: 1rem;
            font-weight: 700;
            color: rgb(123 122 142 / 1);
        }

        .body_tab {
            display: flex;
            border: none;

            button {
                width: 100%;
                margin: 3px 1px;
                padding: 9px 7px;
                border: none;
                background-color: rgb(30 30 38 / 1);
                font-size: 1.2rem;
                cursor: pointer;

                &:hover {
                    background-color: rgb(255 68 56 / 1);
                }

                &:nth-child(1) {
                    border-radius: 10px 0 0 10px;
                }

                &:nth-child(3) {
                    border-radius: 0 10px 10px 0;
                }
            }

            .lcg_tab_item {
                border: none;

                &:hover {
                    background-color: rgb(89 89 100 / 1);
                }
            }

            .lcg_tab_item.select_tab {
                background-color: rgb(255 68 56 / 1);
            }
        }
        
        .body_section  {
            @media (max-width: 1024px) {
                padding: 38px 12px 15px;
            }
            @media (max-width: 768px) {
                padding: 38px 5px 15px;
                margin: 10px 0 0 0;
            }
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            min-width: calc(90% / 2);
            height: 100%;
            min-height: 350px;
            padding: 38px 7px 15px;
            border-radius: 10px;
            background-color: rgb(30 30 38 / 1);
            text-align: center;

            .matchHistory_box {
                width: 100%;
                height: 0;
                overflow: hidden;
                transition: height .4s ease;
            }
            
            .matchHistory_box.view_active {
                height: 830px;
                margin-bottom: 5px;
            }

            .relative_head {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 5px 10px;
                border-bottom: 1px solid rgb(80 80 98 / 1);
                font-size: 1.2rem;
                font-weight: 700;

                .head_opponent {
                    width: 100px;
                    text-align: center;
                }

                .head_winningRate {
                    width: 110px;
                }

                .head_matchLine {
                    width: 40px;
                    text-align: left;
                }
            }

            .relative_item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 45px;
                width: 100%;
                margin-top: 3px;
                padding: 7px 10px;
                border-bottom: 1px solid rgb(80 80 98 / 1);

                &:hover {
                    background-color: rgb(40 40 48 / 1);
                }

                .player_opponent {
                    // mobile_view
                    @media (max-width: 480px) {
                        font-size: 1.1rem;
                    }
                    width: 100px;
                    font-size: 1.3rem;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .player_winningRate {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 110px;

                    .match_detail {
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: 1.1rem;
                        }
                    }
                }

                .player_matchLine {
                    // mobile_view
                    @media (max-width: 480px) {
                        svg {
                            height: 25px;
                            width: 25px;
                        }
                    }
                    width: 40px;
                    text-align: left;
                }
            }

            .champion_head {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 5px 10px;
                border-bottom: 1px solid rgb(80 80 98 / 1);
                font-size: 1.2rem;
                font-weight: 700;

                .head_champion {
                    width: 45px;
                    text-align: left;
                }

                .head_kda {
                    width: 120px;
                }

                .head_winningRate {
                    width: 110px;
                }
            }

            .champion_item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 45px;
                width: 100%;
                margin-top: 3px;
                padding: 5px 10px;
                border-bottom: 1px solid rgb(80 80 98 / 1);

                &:hover {
                    background-color: rgb(40 40 48 / 1);
                }

                .player_champion {
                    width: 45px;
                    text-align: left;
                }
                
                .player_kda {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 120px;

                    .kda_detail {
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: 1rem;
                        }
                        font-size: 1.2rem;

                        span:nth-child(1) {
                            margin: 0 4px 0 0;
                        }

                        span:nth-child(1n+2) {
                            margin: 0 4px;
                        }
                    }

                    .kda_calc {
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: .9rem;
                        }
                        padding-top: 3px;
                        font-size: 1rem;
                        font-weight: 700;
                        color: rgb(123 122 152 / 1);
                    }
                }

                .player_winningRate {
                    width: 110px;

                    .match_detail {
                        // mobile_view
                        @media (max-width: 480px) {
                            font-size: 1.1rem;
                        }
                    }

                    span {
                        margin: 0 1px;
                        letter-spacing: .1rem;
                    }
                }
            }
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

export const ToolTipStyle = styled('div')`
    // mobile_view
    @media (max-width: 480px) {
        height: 16px;
        padding: 3px 7px;
        font-size: .9rem;
    }
    position: absolute;
    top: -13px;
    left: -10px;
    width: 48px;
    height: 18px;
    padding: 3px 8px;
    border-radius: 10px;
    background: white;
    /* background: rgb(28 28 31 / 1); */
    font-size: 1rem;
    font-weight: 700;
    color: #c97874;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 1;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: -1;

    &::before {
        @media (max-width: 1024px) {
            left: 42%;
        }
        // mobile_view
        @media (max-width: 480px) {
            bottom: -2px;
        }
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        /* background: rgb(28 28 31 / 1); */
        background: white;
        bottom: -3px;
        left: 40%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        z-index: -1;
    }
`;

export const MatchItem = styled('div')<{$win:string}>`
    // mobile_view
    @media (max-width: 768px) {
        height: 75px;
    }
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90px;
    padding: 7px 20px 7px 10px;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
    background-color: ${({$win}) => $win === 'Y' ? '#2F436E' : '#703C47'};
    overflow: hidden;

    .item_bar {
        // mobile_view
        @media (max-width: 768px) {
            width: 6px;
        }
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background-color: ${({$win}) => $win === 'Y' ? '#5383E8' : '#E84057'};
    }

    .item_info {
        // mobile_view
        @media (max-width: 768px) {
            flex-shrink: 0;
            align-items: center;
            width: 40px;
            font-size: 0.8rem;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        font-size: 1.1rem;
        color: #9E9EB1;

        .info_mode {
            // mobile_view
            @media (max-width: 768px) {
                font-size: 0.9rem;
            }
            font-size: 1.2rem;
            font-weight: 700;
            color: ${({$win}) => $win === 'Y' ? '#5383E8' : '#E84057'};
        }

        .info_date {
            margin-bottom: 7px;
            font-weight: 400;
        }

        .info_win {
            font-weight: 700;
        }

        .info_time {
            font-weight: 400;
        }
    }
    
    .item_main {
        // mobile_view
        @media (max-width: 768px) {
            padding-left: 2px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;

        .main_top {
            display: flex;
            align-items: center;

            .main_champion {
                position: relative;

                .champion_image {
                    // mobile_view
                    @media (max-width: 768px) {
                        height: 35px;
                        width: 35px;
                    }
                    height: 45px;
                    width: 45px;
                    margin: 0 3px 0 0;
                    border-radius: 50%;
                }

                .champion_level {
                    // mobile_view
                    @media (max-width: 768px) {
                        padding: 2px;
                        font-size: 0.8rem;
                    }
                    position: absolute;
                    bottom: 3px;
                    right: 3px;
                    margin: 0;
                    padding: 2px 4px 2px 2px;
                    background-color: black;
                    border-radius: 50%;
                    font-size: 1rem;
                }
            }

            .main_spell {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 2px;

                .spell_image {
                    // mobile_view
                    @media (max-width: 768px) {
                        height: 15px;
                        width: 15px;
                    }
                    height: 20px;
                    width: 20px;
                    margin: 1px 0;
                    border-radius: 7px;
                }
            }

            .main_perk {
                display: flex;
                flex-direction: column;
                align-items: center;

                .perk_image1 {
                    // mobile_view
                    @media (max-width: 768px) {
                        height: 17px;
                        width: 17px;
                    }
                    height: 22px;
                    width: 22px;
                    border-radius: 50%;
                    background-color: #000000;
                }

                .perk_image2 {
                    // mobile_view
                    @media (max-width: 768px) {
                        height: 11px;
                        width: 11px;
                    }
                    height: 16px;
                    width: 16px;
                    margin: 2px 0;
                }
            }

            .main_kda {
                // mobile_view
                @media (max-width: 768px) {
                    padding: 0 0 3px 15px;
                }
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 0 3px 30px;

                .kda_view {
                    // mobile_view
                    @media (max-width: 768px) {
                        font-size: 1.2rem;
                    }
                    font-size: 1.5rem;
                    font-weight: 700;

                    span {
                        color: #E84057;
                    }
                }

                .kda_calc {
                    // mobile_view
                    @media (max-width: 768px) {
                        font-size: 0.8rem;
                    }
                    font-size: 1.1rem;
                    font-weight: 400;
                    color: #9E9EB1;
                }
            }
        }

        .main_bottom {
            display: flex;
            align-items: center;
            padding-top: 3px;

            .main_item {
                display: flex;

                .item_image {
                    // mobile_view
                    @media (max-width: 768px) {
                        height: 15px;
                        width: 15px;
                    }
                    height: 22px;
                    width: 22px;
                    margin: 0 2px 0 0;
                    border-radius: 7px;
                }

                .empty_image {
                    // mobile_view
                    @media (max-width: 768px) {
                        height: 17px;
                        width: 17px;
                    }
                    height: 22px;
                    width: 22px;
                    border: 1px solid grey;
                }
            }

            .main_mvp {
                // mobile_view
                @media (max-width: 768px) {
                    padding: 0;
                    margin-left: 1px;
                }
                padding-bottom: 3px;
                margin-left: 5px;
            }
        }
    }

    .item_sub {
        // mobile_view
        @media (max-width: 768px) {
            padding: 1px 7px 0 0;
            font-size: 0.7rem;
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        padding-top: 3px;
        font-weight: 700;
        color: #9E9EB1;

        .sub_rate {
            margin-bottom: 3px;
        }

        .sub_cs {
            display: flex;
            margin-bottom: 3px;
        }
    }

    .item_players {
        // mobile_view
        @media (max-width: 768px) {
            display: none;
        }
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        height: 100%;

        .players_info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            row-gap: 1;
            margin-left: 7px;

            .champion_image {
                height: 15px;
                width: 15px;
                border-radius: 50%;
            }

            .info_name {
                width: 50px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
            }
        }
    }

    .item_detail {
        // mobile_view
        @media (max-width: 768px) {
            width: 20px;
            padding-bottom: 7px;
        }
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 35px;
        height: 100%;
        padding-bottom: 10px;
        background-color: ${({$win}) => $win === 'Y' ? '#28344E' : '#59343B'};
        cursor: pointer;

        .arrow_icon {
            font-size: 1.2rem;
        }
    }
`;
