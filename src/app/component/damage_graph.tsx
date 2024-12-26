'use client'

import styled from "styled-components";

const GraphTotal = styled('div')`
    height: 10px;
    width: 50px;
    margin: 5px auto;
    background-color: #31313C;
    border: 1px solid white;
`;

const GraphTarget = styled('div')<{$data:number, $color:string}>`
    height: 8px;
    width: ${({$data}) => $data + "%"};
    background-color: ${({$color}) => $color};
`;

const DamageGraph = (props : {standard:number, target:number, flag:string}) => {

    // division - D : 피해량, T : 받은 피해량
    // 일부 값 / 기준 값 * 100

    return (
        <GraphTotal>
            <GraphTarget $data={props.target / props.standard * 100} $color={props.flag === 'D' ? '#E84057' : '#7B7A8E'} />
        </GraphTotal>
    )
}

export default DamageGraph;