import styled from "styled-components";

export const MatchFearless = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
    padding: 10px;
    color: black;

    .fearless_date {
        margin-bottom: 25px;
        font-size: 2.5rem;
        font-weight: 700;
    }

    .fearless_list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .fearless_box {
            margin-bottom: 5px;

            .game_set {
                margin-bottom: 10px;
                font-size: 2rem;
                font-weight: 700;
                text-align: center;
            }
            
            .champion_list {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .champion_item {
                    display: flex;
                    align-items: center;
                    
                    .champion_img {
                        width: 50px;
                        height: 50px;
                        margin: 0 3px;
                        border-radius: 7px;
                    }
                }
            }
        }
    }
`
