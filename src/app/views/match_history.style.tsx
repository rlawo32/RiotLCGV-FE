import styled from "styled-components";

export const MatchHistory = styled('div')<{$load:boolean, $type:string}>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1024px) {
        width: 100%;
    }
    // mobile_view
    @media (max-width: 480px) {
        padding: 7px 5px;
    }
    width: 768px;
    height: 100%;
    min-height: ${({$type}) => $type === 'L' ? "860px" : "0"};
    margin: 0 auto;
    padding: 7px 30px;
    border: 1px solid #887d7d;
    border-radius: 10px;
    background-color: ${({$type}) => $type === 'L' ? "rgb(49 49 60 / .7)" : "rgb(49 49 60 / 1)"};

    .lcg_history_head {
        @media (max-width: 768px) {
            width: 360px;
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 290px;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .lcg_history_duration {
            @media (max-width: 768px) {
                padding: 0;
                font-size: 1.2rem;
            }
            // mobile_view
            @media (max-width: 480px) {
                padding-left: 7px;
            }
            display: flex;
            align-items: center;
            padding-left: 10px;
            font-size: 1.5rem;
        }

        .lcg_history_empty {
            @media (max-width: 768px) {
                width: 37px;
            }
            width: 50px;
        }
    }

    .lcg_history_title {
        @media (max-width: 768px) {
            width: 360px;
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 290px;
        }
        position: relative;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        width: 100%;
        padding: 7px 15px;
        border-radius: 10px;
        background-color: rgb(30 30 38 / 1);

        .lcg_history_title_head {
            // mobile_view
            @media (max-width: 480px) {
                padding-bottom: 6px;
            }
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-bottom: 4px;
            font-weight: 700;

            .lcg_history_date {
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1.2rem;
                }
                font-size: 1.4rem;
            }

            .lcg_history_ver {
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1rem;
                }
                font-size: 1.2rem; 
            }
        }

        .lcg_history_title_body {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .lcg_history_duration {
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1.2rem;
                }
                display: flex;
                align-items: center;
                font-size: 1.5rem;
            }
        }
    }

    .lcg_history_tab {
        // mobile_view
        @media (max-width: 480px) {
            font-size: 1.1rem;
            line-height: 12px;
        }
        display: flex;
        border: none;
        border-radius: 5px;
        background-color: rgb(40 40 48 / 1);
        text-align: center;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 16px;

        .lcg_tab_left {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        .lcg_tab_right {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        .lcg_tab_item {
            // mobile_view
            @media (max-width: 480px) {
                padding: 3px 10px;
            }
            padding: 3px 15px;
            border: 1px solid rgb(86 86 104 / 1);
            cursor: pointer;

            &:hover {
                background-color: rgb(89 89 100 / 1);
            }
        }

        .lcg_tab_item.select_tab {
            border: 1px solid rgb(255 68 56 / 1);
            background-color: rgb(255 68 56 / 1);
        }
    }

    .skeleton_title {
        // mobile_view
        @media (max-width: 480px) {
            left: 8px;
            width: 95%;
        }
        display: ${({$load}) => $load ? "none" : "block"};
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: auto;
        border-radius: 10px;
        animation: pulse 2s infinite ease-in-out;
        z-index: 1;
    }

    .skeleton_header {
        @media (max-width: 768px) {
            height: 37px;
        }
        // mobile_view
        @media (max-width: 480px) {
            height: 43px;
        }
        display: ${({$load}) => $load ? "none" : "block"};
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 100%;
        margin: auto;
        border-radius: 10px;
        animation: pulse 2s infinite ease-in-out;
        z-index: 1;
    }

    .skeleton_portrait {
        @media (max-width: 768px) {
            top: -10px;
            left: -15px;
            height: 60px;
            width: 80px;
        }
        // mobile_view
        @media (max-width: 480px) {
            top: -5px;
            left: -5px;
            height: 50px;
            width: 70px;
        }
        display: ${({$load}) => $load ? "none" : "block"};
        position: absolute;
        top: -4px;
        left: 0;
        height: 100%;
        width: 100%;
        margin: 3px auto;
        border-radius: 10px;
        animation: pulse 2s infinite ease-in-out;
        z-index: 1;
    }

    .skeleton_content {
        @media (max-width: 768px) {
            left: 50px;
            height: 90%;
            width: 73%;
        }
        // mobile_view
        @media (max-width: 480px) {
            left: 43px;
            height: 90%;
            width: 70%;
        }
        display: ${({$load}) => $load ? "none" : "block"};
        position: absolute;
        top: 0;
        left: -1px;
        height: 90%;
        width: 93%;
        margin: 3px 45px;
        border-radius: 10px;
        animation: pulse 2s infinite ease-in-out;
        z-index: 1;
    }

    table {
        @media (max-width: 1024px) {
            width: 100%;
        }
        @media (max-width: 768px) {
            width: 360px;
        }
        // mobile_view
        @media (max-width: 480px) {
            width: 300px;
        }
        width: 700px;
        margin: 5px 3px;
        border-collapse: collapse;
        color: white;

        thead {
            height: 65px;

            tr:nth-child(n+2) {
                border-bottom: 1px solid #3d96ff;
            }

            th {
                @media (max-width: 768px) {
                    font-size: 1.2rem;
                }
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1rem;
                }
                padding: 3px;
                font-size: 1.4rem;
            }

            .aggregate {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 0 7px 3px;

                .aggregate_head {
                    @media (max-width: 768px) {
                        font-size: 1.4rem;
                    }
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 0 0 6px;
                    font-size: 1.6rem;

                    .aggregate_team {
                        display: flex;
                        align-items: center;
                    }

                    .team_blue {
                        color: #1F85FD;
                    }

                    .team_red {
                        color: #F60C50;
                    }

                    .lcg_team_bans {
                        display: flex;
                        align-items: center;

                        .ban_champion {
                            @media (max-width: 768px) {
                                height: 20px;
                            }
                            // mobile_view
                            @media (max-width: 480px) {
                                margin: 0 2px;
                            }
                            position: relative;
                            height: 25px;
                            margin: 0 4px;
                            border: 1px solid rgba(0,0,0,0);
                            border-radius: 4px;
                            overflow: hidden;
                            z-index: 0;

                            &:hover {
                                border: 1px solid red;
                            }

                            .bans_image {
                                @media (max-width: 768px) {
                                    height: 20px;
                                    width: 25px;
                                }
                                // mobile_view
                                @media (max-width: 480px) {
                                    height: 20px;
                                    width: 20px;
                                }
                                display: block;
                                height: 30px;
                                width: 35px;
                                object-fit: cover;
                                opacity: .6;
                                transform: scale(1.2, 1.2);
                            }
                        }

                        svg {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                        }
                    }
                }

                .aggregate_body {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    
                    .lcg_team_data {
                        // mobile_view
                        @media (max-width: 480px) {
                            flex-wrap: wrap;
                        }
                        display: flex;
                        align-items: center;
                    }

                    .lcg_win {
                        @media (max-width: 768px) {
                            font-size: 1.3rem;
                        }
                        font-weight: bold;
                        font-size: 1.8rem;
                    }

                    .lcg_amount {
                        // mobile_view
                        @media (max-width: 480px) {
                            margin: 5px 0 0;
                        }
                        display: flex;
                        align-items: center;
        
                        .lcg_team_kda {
                            @media (max-width: 768px) {
                                margin: 0 0 0 10px;
                                font-size: 1.3rem;
                            }
                            // mobile_view
                            @media (max-width: 480px) {
                                margin: 0;
                                font-size: 1.2rem;
                            }
                            margin: 0 16px;
                            font-size: 1.7rem;
                        }

                        .lcg_team_gold {
                            @media (max-width: 768px) {
                                font-size: 1.3rem;
                                margin: 0 0 0 30px;
                            }
                            // mobile_view
                            @media (max-width: 480px) {
                                font-size: 1.2rem;
                            }
                            position: relative;
                            width: 30px;
                            margin: 0 35px;
                            font-size: 1.7rem;

                            .lcg_object_icon {
                                position: absolute;
                                top: 1px;
                                left: -20px;
                            }
                        }
                    }

                    .lcg_object_count {
                        @media (max-width: 768px) {
                            justify-content: end;
                            flex-wrap: wrap;
                            width: 150px;
                        }
                        display: flex;
                        align-items: center;
                        margin: 0 8px;

                        .lcg_object_item {
                            @media (max-width: 768px) {
                                font-size: 1.3rem;
                                margin: 3px 5px 0 25px;
                            }
                            // mobile_view
                            @media (max-width: 480px) {
                                font-size: 1rem;

                                svg {
                                    height: 14px;
                                    width: 14px;
                                }
                            }
                            position: relative;
                            display: flex;
                            align-items: center;
                            margin: 0 5px 0 25px;
                            font-size: 1.5rem;

                            .lcg_object_icon {
                                position: absolute;
                                top: -1px;
                                left: -19px;
                            }

                            .lcg_object_data {
                            }
                        }
                    }
                }
            }
        }

        tbody {
            tr {
                @media (max-width: 1024px) {
                    font-size: 1rem;
                }
                // mobile_view
                @media (max-width: 480px) {
                    font-size: .9rem;
                }
                position: relative;
                height: 58px;
                border-bottom: 1px solid #3d96ff;
                font-size: 1.2rem;
            }

            td {
                padding: 3px 2px;
                text-align: center;
            }
        }

        .lcg_image {
            margin: 1px 0;
            border-radius: 10px;
        }

        .lcg_sub_data  {
            @media (max-width: 768px) {
                font-size: .9rem;
            }
            // mobile_view
            @media (max-width: 480px) {
                font-size: .75rem;
            }
            margin: 4px 0 0; 
            font-size: 1.1rem;
        }

        .lcg_summoner {
            // mobile_view
            @media (max-width: 480px) {
                width: 100px;
            }
            width: 200px;

            .lcg_summoner_wrap {
                @media (max-width: 768px) {
                    justify-content: center;
                }
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                width: 100%;

                .lcg_summoner_info {
                    display: flex;
                    align-items: center;

                    .lcg_champion {
                        @media (max-width: 768px) {
                            width: 30px;
                        }
                        position: relative;
                        width: 40px;

                        .lcg_level {
                            @media (max-width: 768px) {
                                font-size: .7rem;
                            }
                            position: absolute;
                            bottom: 3px;
                            left: 1px;
                            margin: 0;
                            padding: 2px 4px 2px 2px;
                            background-color: black;
                            border-radius: 50%;
                            font-size: 1rem;
                        }

                        .champion_image {
                            @media (max-width: 768px) {
                                height: 32px;
                                width: 32px;
                            }
                            height: 40px;
                            width: 40px;
                            margin: 0 3px 0 0;
                        }
                    }

                    .lcg_spell {
                        @media (max-width: 768px) {
                            width: 16px;
                        }
                        width: 22px;

                        .spell_image {
                            @media (max-width: 768px) {
                                height: 14px;
                                width: 14px;
                                margin: 0 0 0 2px;
                            }
                            height: 20px;
                            width: 20px;
                            margin: 0;
                        }
                    }

                    .lcg_perk {
                        @media (max-width: 768px) {
                            width: 16px;
                        }
                        width: 22px;

                        .perk_image1 {
                            @media (max-width: 768px) {
                                height: 14px;
                                width: 14px;
                            }
                            height: 22px;
                            width: 22px;
                            margin-top: 2px;
                        }

                        .perk_image2 {
                            @media (max-width: 768px) {
                                height: 12px;
                                width: 12px;
                            }
                            height: 16px;
                            width: 16px;
                            margin: 0 0 3px;
                        }
                    }
                }

                .lcg_summoner_name {
                    @media (max-width: 768px) {
                        display: flex;
                        align-items: center;
                    }
                    padding: 0 5px;

                    .lcg_nickname {
                        @media (max-width: 1024px) {
                            width: 40px;
                        }
                        width: 80px;
                        margin: 0 auto;
                        padding-bottom: 3px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }

        .lcg_kda {
            width: 140px;

            .lcg_kda_head {
                @media (max-width: 768px) {
                    flex-direction: column;
                }
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 3px;  
            }

            .lcg_kda_rate {
                @media (max-width: 768px) {
                    font-size: .9rem;
                }
                // mobile_view
                @media (max-width: 480px) {
                    font-size: .75rem;
                }
                margin: 0 3px;
            }

            .lcg_kda_calc {
                margin: 3px 0; 
            }
        }

        .lcg_deal {
            @media (max-width: 768px) {
                width: 80px;
            }
            // mobile_view
            @media (max-width: 480px) {
                width: 60px;
                padding: 0;
                font-size: .8rem;
            }
            width: 130px;

            .lcg_graph {
                @media (max-width: 768px) {
                    flex-direction: column;
                    justify-content: center;
                }
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-top: 4px;
            }
        }

        .lcg_ward {
            @media (max-width: 768px) {
                width: 40px;
            }
            // mobile_view
            @media (max-width: 480px) {
                width: 30px;
            }
            width: 60px;
        }

        .lcg_minion {
            @media (max-width: 768px) {
                width: 40px;
            }
            // mobile_view
            @media (max-width: 480px) {
                width: 30px;
            }
            width: 60px;
        }

        .lcg_item {
            @media (max-width: 768px) {
                width: 60px;
            }
            // mobile_view
            @media (max-width: 480px) {
                width: 42px;
            }
            display: flex;
            flex-wrap: wrap;
            justify-content: right;
            width: 90px;
        }
        
        .item_image {
            @media (max-width: 768px) {
                height: 20px;
                width: 20px;
            }
            // mobile_view
            @media (max-width: 480px) {
                height: 15px;
                width: 15px;
            }
            height: 22px;
            width: 22px;
            margin: 2px;
            border-radius: 10px;
        }

        .empty_image {
            @media (max-width: 768px) {
                height: 20px;
                width: 20px;
            }
            // mobile_view
            @media (max-width: 480px) {
                height: 15px;
                width: 15px;
            }
            height: 22px;
            width: 22px;
            border: 1px solid grey;
        }

        .lcg_acc {
            // mobile_view
            @media (max-width: 480px) {
                padding: 0;
            }
        }
    }
    
    @keyframes pulse {
        0% {
            background-color: #94a3b8;
        }

        50% {
            background-color: #cbd5e1;
        }

        100% {
            background-color: #94a3b8;
        }
    }
`;

export const LcgKdaCalc = styled('div')<{$k:number, $d:number, $a:number}>`
    @media (max-width: 768px) {
        font-size: .9rem;
    }
    // mobile_view
    @media (max-width: 480px) {
        font-size: .75rem;
    }
    margin: 4px 0 0; 
    font-size: 1.1rem;
    font-weight: bold;
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
`;