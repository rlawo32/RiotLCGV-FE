import styled from "styled-components";

export const MatchAnalyze = styled('div')`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    margin: 0 auto;

    .lcg_analyze_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(94% / 2);
        margin: 10px;

        .lcg_analyze_title {
            margin-bottom: 10px;
            font-size: 1.5rem;
            font-weight: 700;

            span {
                font-size: 1.2rem;
            }
        }

        .lcg_analyze_content {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 200px;
            width: 100%;

            .lcg_analyze_team {
                font-size: 1.2rem;
                font-weight: 700;
                margin-bottom: 5px;

                .team_blue {
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 8px;
                    content: "";
                    width: 8px;
                    height: 8px;
                    background-color: #5383E8;
                    border-radius: 50%;
                }

                .team_red {
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 8px;
                    content: "";
                    width: 8px;
                    height: 8px;
                    background-color: #E84057;
                    border-radius: 50%;
                }
            }

            .lcg_analyze_data {
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 30px;
                margin: 3px 5px;

                .lcg_analyze_champion {

                    .champion_image {
                        border: none;
                        border-radius: 10px;
                    }
                }

                .lcg_analyze_graph {
                    position: relative;
                    margin: 2px 4px;

                    .lcg_analyze_figure {
                        position: absolute;
                        top: 6px;
                        right: 5px;
                        font-size: 1.1rem;
                        font-weight: 700;
                    }
                }

                .lcg_analyze_addition {
                    display: flex;
                    font-size: 1.1rem;
                    margin: 2px 4px;

                    .addition_item {
                        margin: 0 3px;
                    }
                }
            }
        }
    }
`