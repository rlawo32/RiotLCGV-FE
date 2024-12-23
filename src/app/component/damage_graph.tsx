'use client'

import styled from "styled-components";

const GraphTotal = styled('div')`
    height: 10px;
    width: 70px;
    margin: 0;
    background-color: #31313C;
`;

const GraphTarget = styled('div')<{$data:number, $color:string}>`
    height: 10px;
    width: ${({$data}) => $data + "%"};
    background-color: ${({$color}) => $color};
`;

const ChartTest = (props : {standard:number, target:number, flag:string}) => {

    // division - D : 피해량, T : 받은 피해량
    // 일부 값 / 기준 값 * 100

    return (
        <GraphTotal>
            <GraphTarget $data={props.target / props.standard * 100} $color={props.flag === 'D' ? '#E84057' : '#7B7A8E'} />
        </GraphTotal>
    )
}

export default ChartTest;