import styled from "styled-components";

export const MatchList = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 7px 30px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);
`;

export const ListContainer = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    border: 1px solid rgba(0,0,0,0);

    .viewList_active {
        border: 1px solid rgb(255 68 56 / 1);
    }

    .matchHistory_box {
        height: 0;
        overflow: hidden;
        transition: all .4s ease;
    }
      
    .matchHistory_box.view_active {
        height: 830px;
    }
`

export const ListBox = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 768px;
    margin: 0 0 5px 0;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: rgb(49 49 60 / 1);
    cursor: pointer;

    .box_head {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
    }

    .box_body {
        display: flex;
        align-items: center;
        justify-content: center;

        .box_player {
            position: relative;
            display: flex;
            align-items: center;

            .player {
                margin: 0 15px;
            }

            .box_win {
                position: absolute;
                top: -54px;
            }
        }

        .body_center {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px;

            .box_vs {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 29px;
                width: 47px;
                border-radius: 5px;
                font-size: 1.7rem;
                line-height: 20px;
                background-color: rgb(28 28 31 / 1);
            }

            .box_time {
                position: absolute;
                top: 55px;
                font-size: 14px;
            }
        }
    }

    .box_foot {
        display: flex;
        align-items: end;
        justify-content: right;
        height: 100%;
        font-size: .9rem;
    }
`;