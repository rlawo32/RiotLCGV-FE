'use client'

import styled from "styled-components";

const GraphTotal = styled('div')<{$flag:string}>`
    height: ${({$flag}) => $flag === 'D' || $flag === 'T' ? "11px" : "16px"};
    width: ${({$flag}) => $flag === 'D' || $flag === 'T' ? "50px" : "100px"};
    margin: 5px auto;
    background-color: rgb(28 28 31 / 1);
    border-radius: 4px;
    overflow: hidden;
`;

const GraphTarget = styled('div')<{$data:number, $flag:string}>`
    height: 100%;
    width: ${({$data}) => $data + "%"};
    background-color: ${({$flag}) => $flag === 'T' ? "#7B7A8E" : "#E84057"};
    border-radius: 2px;
`;

const DamageGraph = (props : {standard:number|undefined, target:number, flag:string}) => {

    // division - D : 피해량, T : 받은 피해량
    // 일부 값 / 기준 값 * 100

    return (
        <GraphTotal $flag={props.flag}>
            <GraphTarget $data={props.target / (!!props.standard ? props.standard : 0) * 100} $flag={props.flag} />
        </GraphTotal>
    )
}

export default DamageGraph;