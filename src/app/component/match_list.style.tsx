import styled from "styled-components";

export const MatchList = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    margin: auto;
`;

export const ListItem = styled('div')`
    height: 125px;
    width: 850px;
    margin: 10px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    background-color: grey;
    // background: linear-gradient(to right, 
    rgba(50,10,245,0.8) 5%, 
    rgba(240,240,240,0.8) 50%, 
    rgba(245,10,50,0.8) 95%);
    cursor: pointer;

    .item_head {
        display: flex;
        align-items: center;
    }

    .item_body {
        position: relative;
        top: -3px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 12px;

        .item_player {
            position: relative;
            display: flex;
            align-items: center;
            padding-top: 7px;
            font-size: 18px;

            .item_win {
                position: absolute;
                top: -45px;
            }

            .left_icon {
                right: 85px;
            }

            .right_icon {
                left: 85px;
            }
        }

        .body_center {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 30px;

            .item_time {
                position: absolute;
                top: 55px;
                font-size: 14px;
            }
        }
    }

    .item_foot {
        display: flex;
        align-items: center;
        justify-content: right;
        font-size: 10px;
    }
`;