'use client';

import * as Style from "./page.style";  

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGrinStars as add, faAnchor as anchor, 
    faBacon as bacon, faVcard as vcard
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Test1 from "./test1";
import Test2 from "./test2";
import Test3 from "./test3";

// global root 
// font-size: 62.5%;
// line-height: 150%;
const PageStyle = styled('div')`
    display: block;
    align-items: center;
    justify-content: center;
    height: 100%;

    .list_section {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 600px;
        max-width: 1200px;
        min-width: 800px;

        .list_wrap {
            position: relative;
            display: flex;

            .list_parent {
                display: block;
                width: 330px;
                margin: 50px 0 0;
    
                .list_child {
                    position: relative;
                    display: flex;
                    align-items: center;
                    margin: auto;
                    
                    .list_select {
                        position: absolute;
                        top: 13px;
                        left: 15px;
                    }

                    .list_check {
                        position: absolute;
                        top: 17px;
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
`

const Page = () => {
    const btnSecRef:any = useRef<any>();

    const [processStep, setProcessStep] = useState<number>(0);
    const [playerCount, setPlayerCount] = useState<number>(10);
    const [teamCount, setTeamCount] = useState<number>(2);
    const [shuffleCount, setShuffleCount] = useState<number>(0);

    const [teams, setTeams] = useState<{id:number, lv:number, nm:string}[][]>([[]]);
    const [fix, setFix] = useState<{id:number, row:number, cell:number}[]>([]);

    const shuffleTime:number = 3000;
    const decrease:number = 150;

    const createTeam = () => {
        const realPlayerCount:number = playerCount;
        const realTeamCount:number = teamCount;
        const realComposition:number = realPlayerCount / realTeamCount;

         // 1. 입력한 인원, 팀수로 2차원 배열 생성 //
        let temp2DemList:{id:number, lv:number, nm:string}[][] = Array.from({length: realTeamCount}, () => Array.from({length: realComposition}));

        // 2. 인원이 홀수일 경우 2차원 배열 재생성 //
        if(realPlayerCount % realTeamCount !== 0) {
            let tempComposition:number = Math.ceil(realPlayerCount/realTeamCount);
            let tempPersonnel:number = realPlayerCount;
            const cellArray:number[] = [];
            let idx:number = 0;
            
            for(let i=1; i<=realTeamCount; i++) {
                cellArray[idx++] = tempComposition;
                tempPersonnel -= tempComposition;
                if((realTeamCount - i) === 2 && tempPersonnel % 2 === 0) {
                    tempComposition = tempPersonnel / 2;
                } else if((realTeamCount - i) === 3 && tempPersonnel % 3 === 0) {
                    tempComposition = tempPersonnel / 3;
                } else if((realTeamCount - i) === 1) {
                    tempComposition = tempPersonnel;
                }
            }

            temp2DemList = [];
            temp2DemList = Array.from({length: realTeamCount});

            for(let i=0; i<realTeamCount; i++) {
                temp2DemList[i] = Array.from({length: cellArray[i]});
            }
        }
        // 3. 생성된 2차원 배열에 객체 생성 //
        for(let i=0; i<temp2DemList.length; i++) {
            let plus:number = 1;
            for(let j=0; j<temp2DemList[i].length; j++) {
                temp2DemList[i][j] = {id:i+plus, lv:5, nm:''};
                plus += realTeamCount;
            }
        }    

        setTeams(temp2DemList);
    }

    const updateInputData = (data:{index:number; arrNo:number; value:string;}) => {
        const tempProduceTeam:{id:number, lv:number, nm:string}[][] = teams;
        const copyTempDataList:{id:number, lv:number, nm:string}[][] = JSON.parse(JSON.stringify(tempProduceTeam));
        const index = copyTempDataList[data.arrNo].findIndex((item) => item.id === data.index);
        copyTempDataList[data.arrNo][index].nm = data.value;
        setTeams(copyTempDataList);
    }

    const updateSelectData = (data:{index:number; arrNo:number; value:number;}) => {
        const tempProduceTeam:{id:number, lv:number, nm:string}[][] = teams;
        const copyTempDataList:{id:number, lv:number, nm:string}[][] = JSON.parse(JSON.stringify(tempProduceTeam));
        const index = copyTempDataList[data.arrNo].findIndex((item) => item.id === data.index);
        copyTempDataList[data.arrNo][index].lv = data.value;
        setTeams(copyTempDataList);
    }

    const updateCheckData = (data:{checked:boolean; index:number; arrNo:number; value:number;}) => {
        if(data.checked) {
            setFix(prev => [...prev, {id:data.index, row:data.arrNo, cell:data.value}]);
        } else {
            setFix(fix.filter((el) => el.id !== data.index));
        }
    }

    const onActiveSelectBox = ():any[] => {
        const list:any[] = [];
        const textBox:string[] = ["E", "D", "C", "B", "A"];

        for(let i=4; i>=0; i--) {
            list.push(<option key={i} value={i+1}>{textBox[i]}</option>);
        }

        return list;
    }
    
    const activeRandomData = () => {
        const tempProduceTeam:{id:number, lv:number, nm:string}[][] = teams;
        const tempPlayerFix:{id:number, row:number, cell:number}[] = fix;
        const copyTempDataList:{id:number, lv:number, nm:string}[][] = JSON.parse(JSON.stringify(tempProduceTeam));
    
        // 1. 배열 랜덤하게 정렬
        for(let i=copyTempDataList.length-1; i>=0; i--) { 
            for(let j=copyTempDataList[i].length-1; j>=0; j--) {
                let n = Math.floor(Math.random() * (i+1));
                let m = Math.floor(Math.random() * (j+1));
                [copyTempDataList[n][j], copyTempDataList[i][m]] = [copyTempDataList[i][m], copyTempDataList[n][j]];
            }
          }
        // 2. 고정 체크된 선수 처리 //
        /* 
           미리 저장했던 고정 체크한 정보를 이용해 정렬된 배열 상에서 
           고정 체크한 인덱스 값을 찾아 저장한 값과 정렬된 배열의 인덱스 값과 교환
        */
        if(tempPlayerFix.length > 0) { 
            for(let i=0; i<tempPlayerFix.length; i++) {
                for(let j=0; j<copyTempDataList.length; j++) {
                    for(let x=0; x<copyTempDataList[j].length; x++) {
                        if(j === tempPlayerFix[i].row && x === tempPlayerFix[i].cell) {
                            let tempBox:{id:number, lv:number, nm:string} = copyTempDataList[j][x];
                            let row:number = -1;
                            let cell:number = -1;
                            for(let y=0; y<copyTempDataList.length; y++) {
                                cell = copyTempDataList[y].findIndex((item) => item.id === tempPlayerFix[i].id);
                                if(cell !== -1) {
                                    row = y;
                                    break;
                                }
                            }
                            copyTempDataList[j][x] = copyTempDataList[row][cell];
                            copyTempDataList[row][cell] = tempBox;
                        }
                    }
                }
            }
        }
        setTeams(copyTempDataList);
    }

    const activeBalanceData = () => {
        const realPersonnel:number = playerCount;
        const realTeamCount:number = teamCount;
        const realComposition:number = realPersonnel/realTeamCount;
        const tempProduceTeam:{id:number, lv:number, nm:string}[][] = teams;
        const tempPlayerFix:{id:number, row:number, cell:number}[] = fix;

        const copyTempDataList:{id:number, lv:number, nm:string}[][] = JSON.parse(JSON.stringify(tempProduceTeam));
        const temp1DemList:{id:number, lv:number, nm:string}[] = [];
        let temp2DemList:{id:number, lv:number, nm:string}[][] = Array.from({length: realTeamCount}, () => Array.from({length: realComposition}));

        // 1. 1차원 객체 배열 생성 //
        for(let i=0; i<copyTempDataList.length; i++) {
            for(let j=0; j<copyTempDataList[i].length; j++) {
                temp1DemList.push(copyTempDataList[i][j]);
            }
        }
        // 2. 1차원 객체 배열 섞기 //
        for(let i=temp1DemList.length-1; i>=0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [temp1DemList[i], temp1DemList[j]] = [temp1DemList[j], temp1DemList[i]];
        }
        // 3. 1차원 객체 배열 정렬(내림차순) //
        temp1DemList.sort((a, b) => {
            return b.lv - a.lv;
        });
        // 4. 인원이 홀수일 경우 2차원 배열 재생성 //
        if(realPersonnel % realTeamCount !== 0) {
            let tempComposition:number = Math.ceil(realPersonnel/realTeamCount);
            let tempPersonnel:number = realPersonnel;
            const cellArray:number[] = [];
            let idx:number = 0;
            // 4-1. 팀별 인원수 조정 //
            for(let i=1; i<=realTeamCount; i++) {
                cellArray[idx++] = tempComposition;
                tempPersonnel -= tempComposition;
                if((realTeamCount - i) === 2 && tempPersonnel % 2 === 0) {
                    tempComposition = tempPersonnel / 2;
                } else if((realTeamCount - i) === 3 && tempPersonnel % 3 === 0) {
                    tempComposition = tempPersonnel / 3;
                } else if((realTeamCount - i) === 1) {
                    tempComposition = tempPersonnel;
                }
            }
            // 4-2. 조정된 팀별 인원으로 2차원 배열 재생성 //
            temp2DemList = [];
            temp2DemList = Array.from({length: realTeamCount});
            for(let i=0; i<realTeamCount; i++) {
                temp2DemList[i] = Array.from({length: cellArray[i]});
            }
        }

        let tempComposition:number = Math.ceil(realPersonnel/realTeamCount);
        let tempCompare:{idx:number, sum:number, len:number}[] = [];
        // 팀별 합산 값, 길이 값 객체 생성 //
        for(let i=0; i<realTeamCount; i++) {
            tempCompare[i] = {idx:i, sum:0, len:temp2DemList[i].length};
        }

        let tmpIdx:number = 0;
        // 5. 팀별 합산 값으로 밸런스 조정 //
        for(let i=0; i<tempComposition; i++) {

            // 5-1. 팀별 합산 정렬(오름차순) //
            tempCompare.sort((a, b) => {
                return a.sum - b.sum;
            });
            // 5-2. 적은 인원 팀 부터 정렬(오름차순) //
            if(realPersonnel % realTeamCount !== 0) {
                tempCompare.sort((a, b) => {
                    return a.len - b.len;
                }); 
            }
            // 5-3. 정렬된 순서로 결과 생성 //
            for(let j=0; j<realTeamCount; j++) {
                if(temp2DemList[tempCompare[j].idx].length-1 >= i) {
                    temp2DemList[tempCompare[j].idx][i] = temp1DemList[tmpIdx++];
                }
            }
            // 5-4. 생성된 결과 값으로 합산 //
            for(let j=0; j<realTeamCount; j++) {
                if(temp2DemList[tempCompare[j].idx].length-1 >= i) {
                    tempCompare[j].sum += temp2DemList[tempCompare[j].idx][i].lv;   
                }
            }
        }

        // 6. 고정 체크된 선수 처리 //
        /* 
        미리 저장했던 고정 체크한 정보를 이용해 정렬된 배열 상에서 
        고정 체크한 인덱스 값을 찾아 저장한 값과 정렬된 배열의 인덱스 값과 교환
        */
        if(tempPlayerFix.length > 0) { 
            for(let i=0; i<tempPlayerFix.length; i++) {
                for(let j=0; j<temp2DemList.length; j++) {
                    for(let x=0; x<temp2DemList[j].length; x++) {
                        if(j === tempPlayerFix[i].row && x === tempPlayerFix[i].cell) {
                            let tempBox:{id:number, lv:number, nm:string} = temp2DemList[j][x];
                            let row:number = -1;
                            let cell:number = -1;
                            for(let y=0; y<temp2DemList.length; y++) {
                                cell = temp2DemList[y].findIndex((item) => item.id === tempPlayerFix[i].id);
                                if(cell !== -1) {
                                    row = y;
                                    break;
                                }
                            }
                            temp2DemList[j][x] = temp2DemList[row][cell];
                            temp2DemList[row][cell] = tempBox;
                        }
                    }
                }
            }
        }
        setTeams(temp2DemList);
    }
    
    const onClickRandom = () => {
        // gateLeftRef.current.className += " gate_close";
        // gateRightRef.current.className += " gate_close";
        // btnSecRef.current.className += " btn_visible";
        // setShCount(shCount+1);

        let intervalTime:number = shuffleTime;
        let interval = setInterval(() => {
            activeRandomData();    
            intervalTime -= decrease;
            if(intervalTime === 0) {
                clearInterval(interval);
                // gateLeftRef.current.className = gateLeftRef.current.className.replace(' gate_close', '');
                // gateRightRef.current.className = gateRightRef.current.className.replace(' gate_close', '');
                // btnSecRef.current.className = btnSecRef.current.className.replace(' btn_visible', '');
            }
        }, decrease);
    }

    const onClickBalance = () => {
        // btnSecRef.current.className += " btn_visible";
        // setShCount(shCount+1);

        let intervalTime:number = shuffleTime;
        let interval = setInterval(() => {
            activeBalanceData();    
            intervalTime -= decrease;
            if(intervalTime === 0) {
                clearInterval(interval);
                // btnSecRef.current.className = btnSecRef.current.className.replace(' btn_visible', '');
            }
        }, decrease);
    }

    useEffect(() => {
        createTeam();
    }, [])

    return (
        <PageStyle>
            <div className="list_section">
                {/* <div className="gate_section gate_left" ref={gateLeftRef} />
                <div className="gate_section gate_right" ref={gateRightRef} /> */}
                {teams.map((parent, idx1) => (
                    <div key={idx1} className="list_wrap" id={parent.length + "_t"}>
                        <div className="list_parent">
                            {parent.map((child, idx2) => (
                                <div key={idx2} className="list_child">
                                    <div className="list_select">
                                        <Style.SelectStyle onChange={(e) => updateSelectData({index:child.id, arrNo:idx1, value:parseInt(e.target.value)})} value={child.lv}>
                                            {onActiveSelectBox()}
                                        </Style.SelectStyle>    
                                        <Style.ToolTipStyle className="tooltip">
                                            Level
                                        </Style.ToolTipStyle>
                                    </div>
                                    <Style.InputPlayerStyle onChange={(e) => updateInputData({index:child.id, arrNo:idx1, value:e.target.value})} value={child.nm} 
                                                type="text" id={"input_" + child.id} placeholder="이름 입력" />
                                    <div className="list_check">
                                        <Style.CheckStyle onChange={(e) => updateCheckData({checked:e.target.checked, index:child.id, arrNo:idx1, value:idx2})} 
                                                    checked={fix.some(data => data.id === child.id) ? true : false} type="checkbox" id={"chkbx" + child.id} />
                                        <Style.LabelStyle htmlFor={"chkbx" + child.id} className="check-box" />
                                        <Style.ToolTipStyle className="tooltip">
                                            Fix
                                        </Style.ToolTipStyle>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <Style.FadeUp $timing={parent.length+5} $team={teams.length}
                                        style={idx1 < teams.length-1 ? {display: "inline-block"} : {display: "none"}}>
                            <Image src={"/images/vs_image.png"} alt={"VS"} height={120} width={120} className="list_image" />
                        </Style.FadeUp> */}
                    </div>
                ))}
            </div>
            <div className="btn_section">
                <Style.BtnStyle onClick={() => onClickRandom()}>무작위</Style.BtnStyle>
                <Style.BtnStyle onClick={() => onClickBalance()}>밸런스</Style.BtnStyle>
            </div>
        </PageStyle>
    )
}

export default Page;
