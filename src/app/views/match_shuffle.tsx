'use client'

import TeamBlueIcon from "../icons/TeamBlueIcon";
import TeamRedIcon from "../icons/TeamRedIcon";
import * as Style from "./match_shuffle.style";

import { useEffect, useState } from "react";

const MatchShuffle = () => {
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

        let temp2DemList:{id:number, lv:number, nm:string}[][] = Array.from({length: realTeamCount}, () => Array.from({length: realComposition}));

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
    
        for(let i=copyTempDataList.length-1; i>=0; i--) { 
            for(let j=copyTempDataList[i].length-1; j>=0; j--) {
                let n = Math.floor(Math.random() * (i+1));
                let m = Math.floor(Math.random() * (j+1));
                [copyTempDataList[n][j], copyTempDataList[i][m]] = [copyTempDataList[i][m], copyTempDataList[n][j]];
            }
        }

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

        for(let i=0; i<copyTempDataList.length; i++) {
            for(let j=0; j<copyTempDataList[i].length; j++) {
                temp1DemList.push(copyTempDataList[i][j]);
            }
        }

        for(let i=temp1DemList.length-1; i>=0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [temp1DemList[i], temp1DemList[j]] = [temp1DemList[j], temp1DemList[i]];
        }

        temp1DemList.sort((a, b) => {
            return b.lv - a.lv;
        });

        if(realPersonnel % realTeamCount !== 0) {
            let tempComposition:number = Math.ceil(realPersonnel/realTeamCount);
            let tempPersonnel:number = realPersonnel;
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

        let tempComposition:number = Math.ceil(realPersonnel/realTeamCount);
        let tempCompare:{idx:number, sum:number, len:number}[] = [];

        for(let i=0; i<realTeamCount; i++) {
            tempCompare[i] = {idx:i, sum:0, len:temp2DemList[i].length};
        }

        let tmpIdx:number = 0;

        for(let i=0; i<tempComposition; i++) {
            tempCompare.sort((a, b) => {
                return a.sum - b.sum;
            });
            if(realPersonnel % realTeamCount !== 0) {
                tempCompare.sort((a, b) => {
                    return a.len - b.len;
                }); 
            }
            for(let j=0; j<realTeamCount; j++) {
                if(temp2DemList[tempCompare[j].idx].length-1 >= i) {
                    temp2DemList[tempCompare[j].idx][i] = temp1DemList[tmpIdx++];
                }
            }
            for(let j=0; j<realTeamCount; j++) {
                if(temp2DemList[tempCompare[j].idx].length-1 >= i) {
                    tempCompare[j].sum += temp2DemList[tempCompare[j].idx][i].lv;   
                }
            }
        }

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
        let intervalTime:number = shuffleTime;
        let interval = setInterval(() => {
            activeRandomData();    
            intervalTime -= decrease;
            if(intervalTime === 0) {
                clearInterval(interval);
            }
        }, decrease);
    }

    const onClickBalance = () => {
        let intervalTime:number = shuffleTime;
        let interval = setInterval(() => {
            activeBalanceData();    
            intervalTime -= decrease;
            if(intervalTime === 0) {
                clearInterval(interval);
            }
        }, decrease);
    }

    useEffect(() => {
        createTeam();
    }, [])

    return (
        <Style.MatchShuffle>
            <div className="list_section">
                {teams.map((parent, idx1) => (
                    <div key={idx1} className="list_wrap" id={parent.length + "_t"}>
                        <div className="list_parent">
                            {idx1 === 0 ? 
                                <div className="team_camp team_blue">
                                    <TeamBlueIcon />&nbsp;&nbsp;TeamBlue
                                </div> 
                                : 
                                <div className="team_camp team_red">
                                    <TeamRedIcon />&nbsp;&nbsp;TeamRed
                                </div>
                            }
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
                                                type="text" id={"input_" + child.id} placeholder="이름 입력" $camp={idx1}/>
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
                    </div>
                ))}
            </div>
            <div className="btn_section">
                <Style.BtnStyle onClick={() => onClickRandom()}>무작위</Style.BtnStyle>
                <Style.BtnStyle onClick={() => onClickBalance()}>밸런스</Style.BtnStyle>
            </div>
        </Style.MatchShuffle>
    )
}

export default MatchShuffle;