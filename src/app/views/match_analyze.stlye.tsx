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
        @media (max-width: 768px) {
            width: 93%;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(93% / 2);
        margin: 10px;

        .lcg_analyze_title {
            // mobile_view
            @media (max-width: 480px) {
                font-size: 1.2rem;
            }
            margin-bottom: 10px;
            font-size: 1.5rem;
            font-weight: 700;

            span {
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1rem;
                }
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
                // mobile_view
                @media (max-width: 480px) {
                    font-size: 1rem;
                }
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
                        // mobile_view
                        @media (max-width: 480px) {
                            height: 22px;
                            width: 22px;
                        }
                        height: 27px;
                        width: 27px;
                        border: none;
                        border-radius: 10px;
                    }
                }

                .lcg_analyze_graph {
                    position: relative;
                    margin: 2px 4px;

                    .lcg_analyze_figure {
                        // mobile_view
                        @media (max-width: 480px) {
                            top: 5px;
                            font-size: .9rem;
                        }
                        position: absolute;
                        top: 6px;
                        right: 5px;
                        font-size: 1.1rem;
                        font-weight: 700;
                    }
                }

                .lcg_analyze_addition {
                    // mobile_view
                    @media (max-width: 480px) {
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 70px;
                        margin: 2px;
                        font-size: 1rem;
                    }
                    display: flex;
                    margin: 2px 4px;
                    font-size: 1.1rem;

                    .addition_item {
                        // mobile_view
                        @media (max-width: 480px) {
                            margin: 1px 3px;
                        }
                        margin: 0 3px;
                    }
                }
            }
        }
    }
`