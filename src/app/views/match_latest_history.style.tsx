import styled from "styled-components";

export const MatchLatestHistory = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 768px;
    height: 100%;
    margin: 0 auto;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);

    .lcg_history_title {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px 15px;
        border-radius: 10px;
        background-color: rgb(30 30 38 / 1);

        .lcg_history_title_head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-bottom: 8px;
            font-weight: 700;

            .lcg_history_date {
                font-size: 1.4rem;
            }

            .lcg_history_ver {
                font-size: 1.2rem; 
            }
        }

        .lcg_history_title_body {
            display: flex;
            align-items: center;
            width: 100%;

            .lcg_history_duration {
                display: flex;
                align-items: center;
                font-size: 1.5rem;
            }
        }
    }

    table {
        margin: 10px 3px;
        border-collapse: collapse;
        table-layout: fixed;
        color: white;

        .skeleton_ui {

            .skeleton_header {
                height: 20px;
                width: 100%;
                margin: auto 22px;
                border-radius: 10px;
                animation: pulse 2s infinite ease-in-out;
            }

            .skeleton_portrait {
                height: 80%;
                width: 80%;
                margin: auto;
                border-radius: 10px;
                animation: pulse 2s infinite ease-in-out;
            }

            .skeleton_content {
                height: 60%;
                width: 100%;
                margin: auto;
                border-radius: 10px;
                animation: pulse 2s infinite ease-in-out;
            }
        }

        thead {
            tr:nth-child(n+2) {
                border-bottom: 1px solid #3d96ff;
            }

            th {
                padding: 3px;
                font-size: 1.4rem;
            }

            .aggregate {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 7px 10px;

                .lcg_team_data {
                    display: flex;
                    align-items: center;
                }

                .lcg_win {
                    margin: 0 10px;
                    font-weight: bold;
                    font-size: 1.8rem;
                }
    
                .lcg_team_kda {
                    margin: 0 16px;
                    font-size: 1.7rem;
                }

                .lcg_team_gold {
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

                .lcg_object_count {
                    display: flex;
                    align-items: center;
                    margin: 0 8px;

                    .lcg_object_item {
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

        tbody {
            tr {
                border-bottom: 1px solid #3d96ff;
                font-size: 1.2rem;
            }

            td {
                height: 59px;
                padding: 3px 2px;
                text-align: center;
            }
        }

        .lcg_image {
            margin: 1px 0;
            border-radius: 10px;
        }

        .lcg_sub_data  {
            margin: 4px 0 0; 
            font-size: 1.1rem;
        }

        .lcg_champion {
            position: relative;
            width: 40px;

            .lcg_level {
                position: absolute;
                bottom: 12px;
                left: 3px;
                margin: 0;
                padding: 2px 4px 2px 2px;
                background-color: black;
                border-radius: 50%;
            }

            .champion_image {
                margin: 0 3px 0 0;
            }
        }

        .lcg_spell {
            width: 22px;

            .spell_image {
                margin: 0;
            }
        }

        .lcg_perk {
            width: 22px;

            .perk_image1 {
                margin-top: 2px;
            }

            .perk_image2 {
                margin: 0 0 3px;
            }
        }

        .lcg_summoner_name {
            padding: 0 15px;

            .lcg_nickname {
                width: 80px;
                padding-bottom: 3px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .lcg_kda {
            width: 130px;

            .lcg_kda_head {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 3px;  
            }

            .lcg_kda_rate {
                margin: 0 3px;
            }

            .lcg_kda_calc {
                margin: 3px 0; 
            }
        }

        .lcg_damage {
            width: 60px;
            padding-top: 7px;
        }

        .lcg_taken {
            width: 60px;
            padding-top: 7px;
        }

        .lcg_ward {
            width: 60px;
        }

        .lcg_minion {
            width: 60px;
        }

        .lcg_item {
            display: flex;
            flex-wrap: wrap;
            justify-content: right;
            width: 90px;
        }
        
        .item_image {
            margin: 2px;
            border-radius: 10px;
        }

        .empty_image {
            height: 22px;
            width: 22px;
            border: 1px solid grey;
        }

        .lcg_acc {
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