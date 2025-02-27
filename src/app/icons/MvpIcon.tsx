'use client'

import styled from "styled-components";

const IconStyle = styled('div')<{$rank:string}>`
    @media (max-width: 1024px) {
        font-size: .9rem;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        height: 12px;
        padding: 0 6px;
        margin: 0 2px 3px;
        font-size: .8rem;
        line-height: 12px;
    }
    height: 15px;
    width: fit-content;
    padding: 0 8px;
    margin: 2px auto 0;
    border: none;
    border-radius: 9px;
    background-color: ${({$rank}) => $rank.includes("M") ? "#EB9C00" : $rank.includes("A") ? "#7D59EA" : "#9E9EB1"};
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 15px;
    font-size: 1.1rem;
    font-weight: normal;
`

const MvpIcon = (props : {rank:string}) => {

    return (
        <IconStyle $rank={props.rank}>
            {props.rank.includes("M") ? "MVP" : props.rank.includes("A") ? "ACE" : props.rank.substring(1) + "th"}
        </IconStyle>
    )
}

export default MvpIcon;
