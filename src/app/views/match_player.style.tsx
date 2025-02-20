import styled from "styled-components";

export const MatchPlayer = styled('div')`
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
    border-radius: 10px;    
    background-color: rgb(49 49 60 / .7);
`;

export const PlayerSelectBox = styled('div')`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    padding: 10px 20px;
    border-bottom: 1px solid rgb(255 68 56 / 1);

    .select_item {
        margin: 3px;
        padding: 7px 12px;
        border-radius: 10px;
        border: none;
        background-color: rgb(30 30 38 / 1);
        font-size: 1.3rem;
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
        height: 80px;
        height: 80px;
        border-radius: 35px;
    }

    .rank_img {
        height: 80px;
        height: 80px;
        object-fit: cover;
        transform: scale(1.4);
    }

    .champion_img {
        height: 35px;
        height: 35px;
        border-radius: 15px;
        object-fit: cover;
    }

    .box_head {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 170px;
        width: 100%;
        padding: 20px 30px;
        border-radius: 10px;
        background-color: rgb(30 30 38 / 1);
        
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
            width: 120px;

            .rank_desc {
                margin-top: 10px;
                font-size: 1.2rem;
                font-weight: 700;
            }
        }

        .head_data {
            display: flex;
            align-items: center;
            width: 220px;

            .head_graph {
                position: relative;
                height: 108px;
                width: 108px;

                .graph_gage {
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
                        font-size: 1.5rem;
                        font-weight: 700;
                    }

                    .count_wof {
                        padding-top: 2px;
                        font-size: 1.2rem;
                        font-weight: 400;
                        color: rgb(123 122 142 / 1);
                    }
                }

                .detail_kda {

                    .calc_kda {
                        font-size: 1.5rem;
                        font-weight: 700;
                    }

                    .origin_kda {
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
    }

    .box_body {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        margin-top: 20px;
        border-radius: 10px;

        .match_detail {
            font-size: 1.2rem;
            
            span {
                margin: 0 1px;
                letter-spacing: .15rem;
            }
        }

        .match_winning {
            padding-top: 3px;
            font-size: 1rem;
            font-weight: 700;
            color: rgb(123 122 142 / 1);
        }
        
        .body_section  {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 5px;
            border-radius: 10px;
            background-color: rgb(30 30 38 / 1);
            padding: 15px 25px;
            text-align: center;

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
                    text-align: left;
                }

                .head_winningRate {
                    width: 120px;
                }

                .head_matchLine {
                    width: 40px;
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
                    width: 100px;
                    font-size: 1.3rem;
                    text-align: left;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .player_winningRate {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 120px;
                }

                .player_matchLine {
                    width: 40px;
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
                    width: 50px;
                    text-align: left;
                }

                .head_kda {
                    width: 120px;
                }

                .head_winningRate {
                    width: 70px;
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
                    width: 50px;
                    text-align: left;
                }
                
                .player_kda {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 120px;

                    .kda_detail {
                        font-size: 1.2rem;

                        span:nth-child(1) {
                            margin: 0 4px 0 0;
                        }

                        span:nth-child(1n+2) {
                            margin: 0 4px;
                        }
                    }

                    .kda_calc {
                        padding-top: 3px;
                        font-size: 1rem;
                        font-weight: 700;
                        color: rgb(123 122 152 / 1);
                    }
                }

                .player_winningRate {
                    width: 70px;
                    font-size: 1.1rem;

                    span {
                        margin: 0 1px;
                        letter-spacing: .15rem;
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