import styled from "styled-components";

export const MatchList = styled('div')`
    @media (max-width: 1024px) {
        width: 100%;
        padding: 7px 15px;
    }
    // mobile_view
    @media (max-width: 480px) {
        padding: 7px 2px;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 860px;
    padding: 7px 30px;
    margin: 0 auto;
    border: 1px solid #887d7d;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);
`;

export const ListContainer = styled('div')`
    @media (max-width: 1024px) {
        width: 100%;
    }
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
        transition: height .4s ease;
    }
      
    .matchHistory_box.view_active {
        @media (max-width: 768px) {
            height: 100%;
        }
        height: 830px;
    }
`

export const ListBox = styled('div')`
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        justify-content: space-around;
    }
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
        @media (max-width: 1024px) {
            font-size: 1.2rem;
        }
        @media (min-width: 768px) {
            .box_ver {
                display: none;
            }
        }
        @media (max-width: 768px) {
            height: 70px;
            flex-direction: column;
            justify-content: space-between;
            font-size: 1.4rem;

            .box_ver {
                display: block;
                font-size: 1rem;
            }
        }
        // mobile_view
        @media (max-width: 480px) {
            font-size: 1.1rem;

            .box_ver {
                display: block;
                font-size: .9rem;
            }
        }
        display: flex;
        align-items: center;
        font-size: 1.3rem;
    }

    .box_body {
        @media (max-width: 768px) {
            flex-direction: column;

            .body_left {
                flex-direction: row-reverse;
            }
        }
        display: flex;
        align-items: center;
        justify-content: center;

        .box_player {
            @media (max-width: 1024px) {
                font-size: 1.2rem;
            }
            @media (max-width: 768px) {
                margin: 5px 0;
            }
            // mobile_view
            @media (max-width: 480px) {
                font-size: 1rem;
            }
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
                @media (max-width: 768px) {
                    height: 20px;
                    font-size: 1.3rem;
                    line-height: 10px;
                }
                // mobile_view
                @media (max-width: 480px) {
                    height: 16px;
                    width: 42px;
                    font-size: 1.1rem;
                    line-height: 10px;
                }
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
        @media (max-width: 1024px) {
            font-size: .8rem;
        }
        @media (max-width: 768px) {
            display: none;
        }
        display: flex;
        align-items: end;
        justify-content: right;
        height: 100%;
        font-size: .9rem;
    }
`;