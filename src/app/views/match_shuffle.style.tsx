import styled from "styled-components";

export const MatchShuffle = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 768px;
    height: 100%;
    margin: 0 auto;
    padding: 70px 30px;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);

    .list_section {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .list_wrap {
            position: relative;
            display: flex;

            .list_parent {
                margin: 0 10px;

                .team_camp {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    svg {height:35px; width:35px;}
                }

                .team_blue {color:#1F85FD;}
                .team_red {color:#F60C50;}

                .list_child {
                    position: relative;
                    display: flex;
                    align-items: center;
                    margin: auto;
                    
                    .list_select {
                        position: absolute;
                        top: 19px;
                        left: 15px;
                    }

                    .list_check {
                        position: absolute;
                        top: 19px;
                        right: 15px;
                    }

                    .list_image {
                        position: absolute;
                        top: 35%;
                        left: 10px;
                        transform: translateY(-35%);
                    }
                }
            }
        }
    }

    .control_section {
        padding: 25px 45px;
        margin-top: 35px;
        border-radius: 20px;
        background-color: rgb(30 30 38 / 1);

        .info_section {
            display: flex;
            flex-direction: column;
            width: 300px;
            margin: 0 auto 35px;
            color: #ffffff;
            text-align: center;

            .shuffle_count {
                font-size: 1.8rem;
                font-weight: 700;
                margin-bottom: 15px;
            }

            .shuffle_control {
                display: flex;
                justify-content: center;
                font-size: 1.3rem;

                button {
                    padding: 3px 4px;
                    margin: 0 3px;
                    border: none;
                    border-radius: 5px;
                    font-size: .9rem;
                    font-weight: 700;
                    cursor: pointer;

                    &:active {
                        scale: .7;
                        transition: scale .3s;
                    }
                }

                .control_item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0 5px;

                    .control_title {
                        font-size: 1.4rem;
                        margin-bottom: 3px;
                    }

                    .control_tool {
                        display: flex;
                        align-items: center;

                        .sec_time {
                            width: 35px;
                        }
                    }
                }
            }
        }
        
        .btn_section {
            display: flex;
            justify-content: space-between;
            margin: 10px auto;
        }
    }
`;

export const InputValueStyle = styled('input')`
    width: 100px;
    margin: 20px 10px;
    padding: 14px 0 13px 20px;
    border: none;
    border-radius: 15px;
    background: rgba(42,50,73, .68);
    color: #ffffff;
    font-size: 2.2rem;
    outline: none;

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder {
        color: gray;
        font-size: 17px;
        opacity: 0.7;
    }
`;

export const InputPlayerStyle = styled('input')<{$camp:number}>`
    width: 300px;
    margin: 10px 5px;
    padding: 10px 55px 10px 70px;
    border: 2px solid ${({$camp}) => $camp === 0 ? "#1F85FD" : "#F60C50"};
    border-radius: 15px;
    background: rgb(28 28 31 / 1);
    color: #ffffff;
    font-size: 2.2rem;

    &:focus {
        outline: 1px solid #ffffff;
    }

    &::placeholder {
        color: gray;
        font-size: 18px;
        opacity: 0.7;
    }
`;

export const BtnStyle= styled('button')`
    display: flex;
    align-items: center;
    margin: 0 10px;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 40px rgba(42,50,113, .68);
    background-color: rgb(28 28 31 / 1);
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.5s;
    transition-duration: .3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(42,50,113, .68);
        background-position: right center;
    }

    .btn_icon {
        margin-right: 7px;
    }
`;

export const QuickBtnStyle = styled('button')`
    flex: 1 1 auto;
    margin: 10px;
    padding: 10px 15px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: #6cacc5;
    box-shadow: 0 0 40px rgba(42,50,113, .68);
    border: none;
    border-radius: 10px;
    background-image: linear-gradient(to right, rgba(42,50,113) 0%, rgba(42,50,73, .88) 51%, rgba(42,50,113) 100%);
    cursor: pointer;
    &:hover {
        background-position: right center;
    }
`;

export const CheckStyle = styled('input')`
    display: none;

    &:checked {

        + .check-box {
            border-color:#7B7A8E;
    
            &::after{
                height: 25px;
                -moz-animation: dothabottomcheck .2s ease 0s forwards;
                -o-animation: dothabottomcheck .2s ease 0s forwards;
                -webkit-animation: dothabottomcheck .2s ease 0s forwards;
                animation: dothabottomcheck .2s ease 0s forwards;
            }
            
            &::before{
                height: 60px;
                box-shadow: 0 0 0 3px rgba(42,50,73, .7);
                -moz-animation: dothatopcheck .4s ease 0s forwards;
                -o-animation: dothatopcheck .4s ease 0s forwards;
                -webkit-animation: dothatopcheck .4s ease 0s forwards;
                animation: dothatopcheck .4s ease 0s forwards;
            }
        }
    }

    @-moz-keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 24px; }
    } 
    @-webkit-keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 24px; }
    }
    @keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 24px;  }
    }
    @keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 50px; }
    }
    @-webkit-keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 50px; }
    }
    @-moz-keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 50px; }
    }
`;

export const LabelStyle = styled('label')`
    display: inline-block;
    height: 27px;
    width: 27px;
    margin: 3px 0 0 0;
    background-color: transparent;
    border: 2px solid #7B7A8E;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease .2s;
    -o-transition: border-color ease .2s;
    -webkit-transition: border-color ease .2s;
    transition: border-color ease .2s;
    cursor:pointer;

    transition-property: transform;

    &:hover {

        + .tooltip {
            width: 32px;
            top: -30px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
            color: #c97874;
            z-index: 1;

            &::before {
                left: 35%;
            }
        }
    }

    &::before, &::after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        height: 0;
        width: 4px;
        background-color: #ffffff;
        display: inline-block;
        -moz-transform-origin: left top;
        -ms-transform-origin: left top;
        -o-transform-origin: left top;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        border-radius: 5px;
        content: '';
        -webkit-transition: opacity ease .5;
        -moz-transition: opacity ease .5;
        transition: opacity ease .5;
    }

    &::before {
        top: 17px;
        left: 12px;
        -moz-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    &::after {
        top: 7px;
        left: 1px;
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    @-moz-keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 14px; }
    } 
    @-webkit-keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 14px; }
    }
    @keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 14px;  }
    }
    @keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 25px; }
    }
    @-webkit-keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 25px; }
    }
    @-moz-keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 25px; }
    }
`;

export const SelectStyle = styled('select')`    
    padding: 5px;
    border: none;
    border-radius: 10px;
    background: rgb(68 68 71 / 1);
    color: #ffffff;
    font-size: 1.8rem;
    cursor: pointer;
    outline: none;

    &:hover {
        + .tooltip {
            width: 45px;
            top: -32px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
            color: #c97874;
            z-index: 1;

            &::before {
                left: 30%;
            }
        }
    }
`;

export const ToolTipStyle = styled('div')`
    position: absolute;
    top: 0;
    height: 25px;
    font-size: 11px;
    font-weight: bold;
    background: rgb(28 28 31 / 1);
    color: #c97874;
    padding: 5px 8px;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 1;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: -1;

    &::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: rgb(28 28 31 / 1);
        bottom: -3px;
        left: 32%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
`;