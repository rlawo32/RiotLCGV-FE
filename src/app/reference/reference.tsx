'use client';

import { useRef } from "react";
import styled from "styled-components";

const ReferenceStyle = styled('div')`
    .test_btn {
      height: 50px;
      width: 100px;
      text-align: center;
      line-height: 50px;
      color: black;
      background-color: white;
      cursor: pointer;
    }
    
    .test_box {
      height: 0;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .test_box.sizeUp {
      height: 160px;
      background-color: red;
    }
`;

export const TestView = styled('div')`
    display: flex;
    color: white;
`;

export const TestItem = styled('div')<{$cnt:number}>`
    
    height: ${({$cnt}) => $cnt === 1 ? '100px' : $cnt === 2 ? '50px' : $cnt === 3 ? '25px' : '10px'};
    width: ${({$cnt}) => $cnt === 1 ? '100px' : $cnt === 2 ? '50px' : $cnt === 3 ? '25px' : '10px'};
    margin: 0 10px;
    border: 1px solid red;
    border-radius: 50%;
`;

const Reference = () => {
    const testRef:any = useRef<any>([]);
    
    const testArr:{id:number, rank:number}[] = [{id:1, rank:1}, {id:2, rank:2}, {id:3, rank:2}, {id:4, rank:3}, {id:5, rank:3}, {id:6, rank:3}];
    
    const testClick = (target:number) => {
    
        if(!testRef.current[target].className.includes('sizeUp')) {
            testRef.current[target].className += ' sizeUp';
        } else {            
            testRef.current[target].className = testRef.current[target].className.replace(' sizeUp', '');
        }
    
        for(let i:number=0; i<testRef.current.length; i++) {
            if(i !== target) {
                testRef.current[i].className = testRef.current[i].className.replace(' sizeUp', '');
            }
        }
    }

    return (
        <ReferenceStyle>
            <div className="test_btn" onClick={() => testClick(0)}> 
                TEST1
            </div>
            <div className="test_box" ref={(li:any) => (testRef.current[0] = li)}>
                HELLO1
            </div>   
            <div className="test_btn" onClick={() => testClick(1)}>
                TEST2
            </div>
            <div className="test_box" ref={(li:any) => (testRef.current[1] = li)}>
                HELLO2
            </div>
            
            <TestView>
                {
                    testArr.filter((item) => item.rank === 3).map((test, idx, arr) => {
                        return (
                            <TestItem $cnt={arr.length} key={idx} />
                        )
                    })
                }
            </TestView>
        </ReferenceStyle>
    )
}

export default Reference;
