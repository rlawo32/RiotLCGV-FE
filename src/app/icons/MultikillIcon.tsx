'use client'

import styled from "styled-components";

const IconStyle = styled('div')`
    @media (max-width: 1024px) {
        font-size: .9rem;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        height: 11px;
        padding: 0 4px;
        margin: 0 2px 1px 3px;
        font-size: .75rem;
        line-height: 11px;
    }
    height: 15px;
    width: fit-content;
    padding: 0 8px;
    margin: 2px auto 0;
    border: none;
    border-radius: 9px;
    background-color: #E84057;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 15px;
    font-size: 1.1rem;
    font-weight: normal;
`

const MultikillIcon = (props : {kill:string}) => {

    return (
        <IconStyle>
            {props.kill}
        </IconStyle>
    )
}

export default MultikillIcon;
