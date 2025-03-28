'use client'

import styled from "styled-components";

const IconStyle = styled('div')`
    display: inline-block;
    @media (max-width: 768px) {
        width: 10px;
        height: 10px;
        padding: 0 0 0 1px;
        font-size: .8rem;
    }
    // mobile_view
    @media (max-width: 480px) {
        width: 9px;
        height: 9px;
        padding: 0;
        font-size: .7rem;
    }
    height: 12px;
    width: 12px;
    padding: 0;
    margin-right: 2px;
    border: none;
    border-radius: 3px;
    background-color: #00BBA3;
    color: #FFFFFF;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
`

const TripleKillIcon = () => {

    return (
        <IconStyle>
            T
        </IconStyle>
    )
}

export default TripleKillIcon;
