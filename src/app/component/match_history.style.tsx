import styled from "styled-components";

export const MatchHistory = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    table {
        margin: 3px;
        border-collapse: collapse;
        table-layout: fixed;
        color: white;

        thead {
            tr:nth-child(n+2) {
                border-bottom: 1px solid #3d96ff;
            }

            th {
                padding: 4px;
                font-size: 14px;
            }

            .aggregate {
                padding-bottom: 24px;
            }

            .aggregate_left {
                padding-right: 35px;
                text-align: right;
            }

            .aggregate_right {
                padding-left: 35px;
                text-align: left;
            }

            .lcg_team_kda {
                font-size: 18px;
            }

            .lcg_team_gold {
                position: relative;
                margin: 0 55px 0 70px;
                font-size: 16px;

                .lcg_object_icon {
                    position: absolute;
                    top: 0;
                    left: -20px;
                }
            }

            .lcg_object_count {

                .lcg_object_item {
                    position: relative;
                    margin: 15px;
                    font-size: 16px;

                    .lcg_object_icon {
                        position: absolute;
                        top: -1px;
                        left: -18px;
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
            width: 70px;
            padding-bottom: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 11px;
        }

        .lcg_kda {
            width: 130px;
            font-size: 11px;

            .lcg_kda_head {
                display: flex;
            }

            .lcg_kda_rate {
                margin: 0 3px;  
                font-size: 10px;
            }

            .lcg_kda_calc {
                margin: 3px 0; 
                font-size: 10px;  
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

export const LcgGameMvp = styled('div')`

    
`;
