import styled from "styled-components";

export const MatchHistory = styled('div')`
    display: flex;
    align-items: center;
    width: 1140px;
    height: 100%;

    table {
        margin: 3px;
        border-collapse: collapse;
        table-layout: fixed;
        color: white;

        .skeleton_ui {

            .aggregate_left {.skeleton_header {justify-content: right;flex-direction: row;}}

            .aggregate_right {.skeleton_header {justify-content: left;flex-direction: row-reverse;}}

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
                padding: 4px;
                font-size: 14px;
            }

            .aggregate_left {.aggregate {justify-content: right;flex-direction: row;}.lcg_object_count {justify-content: right;flex-direction: row-reverse;}}

            .aggregate_right {.aggregate {justify-content: left;flex-direction: row-reverse;}.lcg_object_count {justify-content: left;flex-direction: row;}}

            .aggregate {
                display: flex;
                align-items: center;

                padding-bottom: 22px;

                .lcg_win {
                    margin: 0 20px;
                    font-size: 17px;
                    font-weight: bold;
                }
    
                .lcg_team_kda {
                    margin: 0 16px;
                    font-size: 18px;
                }

                .lcg_team_gold {
                    position: relative;
                    width: 30px;
                    margin: 0 35px;
                    font-size: 16px;

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
                        font-size: 14px;
                        margin: 0 5px 0 25px;

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

        .lcg_champion {
            position: relative;
            width: 40px;

            .lcg_level {
                position: absolute;
                bottom: 12px;
                left: 3px;
                padding: 2px 4px 2px 2px;
                font-size: 10px;
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

            .lcg_nickname {
                width: 65px;
                padding-bottom: 3px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 11px;
            }
        }

        .lcg_kda {
            width: 140px;
            font-size: 10px;

            .lcg_kda_head {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 3px;  
            }

            .lcg_kda_rate {
                margin: 0 3px;
                font-size: 9px;  
            }

            .lcg_kda_calc {
                margin: 3px 0; 
                font-size: 9px;  
            }
        }

        .lcg_damage {
            width: 60px;
            padding-top: 7px;
            font-size: 10px;
            font-weight: bold;
        }

        .lcg_taken {
            width: 60px;
            padding-top: 7px;
            font-size: 10px;
            font-weight: bold;
        }

        .lcg_ward {
            width: 50px;
            font-size: 10px;

            .lcg_ward_count {
                margin-top: 3px;
            }
        }

        .lcg_minion {
            width: 70px;
            font-size: 10px;

            .lcg_minute_cs {
                margin: 2px 0;
                font-size: 10px;        
            }
        }

        .lcg_item {
            display: flex;
            flex-wrap: wrap;
            width: 82px;
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
            width: 16px;
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
    font-size: 11px;
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
