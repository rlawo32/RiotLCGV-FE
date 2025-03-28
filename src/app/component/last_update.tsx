'use client'

import styled from "styled-components";

import { getCurrentTimeCalc } from "./match_tool";

const LastUpdateStyle = styled('div')`
    // mobile_view
    @media (max-width: 480px) {
        font-size: .9rem;
    }
    width: 100%;
    margin-top: 5px;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: .7;

    span {
        // mobile_view
        @media (max-width: 480px) {
            font-size: .8rem;
        }
        margin-left: 3px;
        color: #deddf0;
        font-size: 1rem;
        font-weight: 400;
    }
`


const LastUpdate = (props : {type:string, date:string}) => {

    const time:string = getCurrentTimeCalc(props.date);

    return (
        <LastUpdateStyle>
            {
                props.type === 'U' ? 
                    <>
                        마지막 사용자 업데이트 <span>{time}</span>
                    </> 
                    : 
                    <>
                        마지막 게임 업데이트 <span>{time}</span>
                    </>
            }
        </LastUpdateStyle>
    )
}

export default LastUpdate;