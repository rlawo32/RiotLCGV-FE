'use client'

import { useEffect, useRef } from "react";
import styled from "styled-components";

const GraphMother = styled('div')`
    height: 200px;
    width: 1000px;
    background: black;
`;

const GraphTotal = styled('div')<{$a:number}>`
    height: 100px;
    width: ${({$a}) => $a + "%"};
    background: red;
`;

const GraphTarget = styled('div')<{$a:number}>`
    height: 50px;
    width: ${({$a}) => $a + "%"};
    background: blue;
`;

const ChartTest = () => {

    // 57,509
    // 31,250
    // 29,324
    // 49,412
    // 22,317
    // 일부 값 / 기준 값 * 100
    let test:number = 31250 / 57509 * 100;

    return (
        <GraphMother>
            <GraphTotal $a={100} />
            <GraphTarget $a={test} />
        </GraphMother>
    )
}

export default ChartTest;