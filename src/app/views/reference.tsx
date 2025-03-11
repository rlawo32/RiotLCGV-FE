'use client';

import styled from "styled-components";

import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";

const PageStyle = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin: auto;

    .score_section {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #ffffff;
        text-align: center;
        font-size: 2rem;
    }

    .main_container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        user-select: none; /* 드래그 중 텍스트 선택 방지 */
        background: rgba(0, 0, 0, 0);
    }

    .selection_area {
        display: none;
        position: absolute;
        border: 1px dashed #00f;
        background-color: rgba(0, 0, 255, 0.2);
        pointer-events: none; /* 마우스 이벤트가 차단되지 않도록 함 */
        //transition: all 0.2s ease; /* 크기 및 위치 변경에 대한 부드러운 전환 */
    }

    .item_box {
        height: 30px;
        width: 30px;
        margin: 10px;
        border: 1px solid red;
        border-radius: 50%;
        color: red;
        z-index: -1;
        text-align: center;
    }

    .item_box.detected {
        border: 1px solid blue;
    }

    .item_box.pop {
        transition: opacity .1s ease-in-out;
        opacity: 0;
    }

    .text_tool_container {
        display: flex;
        flex-direction: column;
        align-items: center;

        textarea {
            width: 400px;
            height: 500px;
            margin: 10px;
            padding: 45px 10px 10px;
            border: 2px solid #000000;
            border-radius: 10px;
            outline: none;
        }

        .text_input_area {
            display: flex;
            align-items: end;

            .icon {
                margin-bottom: 250px;
                color: #ffffff;
                font-size: 2.5rem;
            }

            .text_input_section {
                position: relative;
            }
            
            .text_result_section {
                position: relative;
            }

            .text_section_header {
                position: absolute;
                top: 10px;
                right: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 400px;
                height: 40px;
                padding: 0 5px 0 10px;
                border: 2px solid #000000;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                background-color: #ffffff;

                button {
                    margin: 0 5px;
                }

                .header_title {
                    font-size: 1.4rem;
                }
            }
        }

        .text_option_area {
            display: flex;
            justify-content: center;
            align-items: start;
            justify-content: center;
            width: 600px;
            height: 90px;
            padding: 0 10px;
            border: 2px solid grey;
            border-radius: 10px;

            select {
                width: 100px;
                margin: 10px;
            }

            input {
                width: 100px;
                margin: 10px;
            }

            button {
                width: 100px;
            }

            .text_option_section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: calc(100% / 4);
                height: 100%;

                button {
                    width: 100%;
                    height: 100%;
                    margin: 10px;
                    border-radius: 5px;
                }
            }
        }

        .tooltip {
            
        }
    }
`

const Page = () => {
    const canvasRef:React.MutableRefObject<any> = useRef<any>(null);
    
    let startX:number = 0;
    let startY:number = 0;
    let dragging:boolean = false;
    let timer:any = null;

    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<number>(60);

    const [textMode, setTextMode] = useState<string>("I");
    const [textInput, setTextInput] = useState<string>("");
    const [textResult, setTextResult] = useState<string>("");
    const [textOption1, setTextOption1] = useState<string>("O");
    const [textOption2, setTextOption2] = useState<string>("F");
    const [textOrder, setTextOrder] = useState<string>("");
    const [textInterval, setTextInterval] = useState<number>(0);
    const [textSpecific, setTextSpecific] = useState<string>("");

    const getDistance = (x1:number, y1:number, x2:number, y2:number):number => {
        let x:number = x2 - x1;
        let y:number = y2 - y1;
    
        return Math.sqrt(x * x + y * y);
    }

    const itemDetected = (rectData:DOMRect) => {
        const container:HTMLElement|null = document.getElementById('main_container');
        const itemBoxList:HTMLCollection|undefined = container?.children;

        if(!!itemBoxList) {
            for(let i=2; i<itemBoxList.length; i++) {
                const itemBox:Element = itemBoxList[i];
                const itemTop:number = itemBox.getBoundingClientRect().top;
                const itemBottom:number  = itemBox.getBoundingClientRect().bottom;
                const itemLeft:number  = itemBox.getBoundingClientRect().left;
                const itemRight:number  = itemBox.getBoundingClientRect().right;
                const itemWidth:number  = itemBox.getBoundingClientRect().width / 2;
                const itemHeight:number  = itemBox.getBoundingClientRect().height / 2;

                if( rectData.left <= (itemLeft + itemWidth) && rectData.top <= (itemTop + itemHeight) && 
                    rectData.right >= (itemRight - itemWidth) && rectData.top <= (itemTop + itemHeight) && 
                    rectData.left <= (itemLeft + itemWidth) && rectData.bottom >= (itemBottom - itemHeight) && 
                    rectData.right >= (itemRight - itemWidth) && rectData.bottom >= (itemBottom - itemHeight) && 
                    itemBox.classList.contains('pop') === false) {
                    itemBox.classList.add('detected');
                } else {
                    itemBox.classList.remove('detected');
                }
            }
        }
    }

    const itemPop = () => {
        const container:HTMLElement|null = document.getElementById("main_container");
        const detectBox:NodeListOf<Element> = document.querySelectorAll('.item_box.detected');
        let sum:number = 0;

        if(!!detectBox) detectBox.forEach(item => sum += parseInt(item.id));

        if(sum === 10) {
            if(!!detectBox && !!container && !!canvasRef.current) {
                const ctx:CanvasRenderingContext2D = canvasRef.current.getContext("2d");
                const canvasWidth:number = canvasRef.current.getBoundingClientRect().width;
                const canvasHeight:number = canvasRef.current.getBoundingClientRect().height;
                const dpr:number = window.devicePixelRatio;

                const list:{x:number, y:number, vx:number, vy:number, gravity:number, radius:number, color:string, draw:() => void}[] = [];

                canvasRef.current.width = canvasWidth * dpr;
                canvasRef.current.height = canvasHeight * dpr;
                canvasRef.current.style.width = `${canvasWidth}px`;
                canvasRef.current.style.height = `${canvasHeight}px`;

                detectBox.forEach(item => {
                    item.classList.add('pop');
                    const itemX:number = Math.abs(item.getBoundingClientRect().x - container.getBoundingClientRect().x);
                    const itemY:number = Math.abs(item.getBoundingClientRect().y - container.getBoundingClientRect().y);

                    const ball:{x:number, y:number, vx:number, vy:number, gravity:number, radius:number, color:string, draw:() => void} = {
                        x: itemX + 15,
                        y: itemY + 15,
                        vx: Math.random() * 20 - 10,
                        vy: Math.random() * 5 - 15,
                        gravity: 1,
                        radius: 15,
                        color: "red",
            
                        draw() {
                            ctx.save();
                            ctx.beginPath();
                            ctx.strokeStyle = this.color;
                            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                            ctx.stroke();
                            ctx.closePath();
                            ctx.restore();
                        },
                    };
                    list.push(ball);            
                });

                list.forEach(item => {
                    item.draw();
                });
            
                setTimeout(() => {
                    const drawFrame = () => {
                        window.requestAnimationFrame(drawFrame);
                        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                        list.forEach(item => {
                            item.draw();
                            item.vy += item.gravity;
                            item.x += item.vx;
                            item.y += item.vy;
                        });
                    }
                    drawFrame();
                }, 100);

                const touchstone:number = detectBox.length;
                let point:number = (touchstone * 2) + 1;

                setScore((score) => (score + point));
                // switch (touchstone) {
                //     case 2 : point = 5; break;
                //     case 3 : point = 7; break;
                //     case 4 : point = 9; break;
                //     case 5 : point = 11; break;
                //     case 6 : point = 13; break;
                //     case 7 : point = 15; break;
                //     case 8 : point = 17; break;
                //     case 9 : point = 19; break;
                //     case 10 : point = 21; break;
                // }
            }
        }
    }

    const itemCreate = () => {
        const createCnt:number = 55;
        for(let i=0; i<createCnt; i++) {
            let random:number = Math.floor(Math.random() * 10);
            if(random === 0) random = 1;
            
    		const container:HTMLElement|null = document.getElementById("main_container");
            const item:HTMLDivElement = document.createElement('div');

            item.classList.add('item_box');
            item.textContent = random.toString();
            item.setAttribute('id', random.toString());

            if(!!container) container.appendChild(item);
        }
    }

    // const fnCountDown = () => { 
    //     timer = setTimeout(() => {setTime((time) => (time - 1))}, 1000);
    // }

    // useEffect(() => {
    //     if(time === 0) {clearTimeout(timer); alert('시간초과');}
    //     else {fnCountDown();}
    // }, [time])

    useEffect(() => {
        itemCreate();
        // fnCountDown();
        const container:HTMLElement|null = document.getElementById('main_container');
        const selectionArea:HTMLElement|null = document.getElementById('selection_area');

        if(!!container && !!selectionArea) {
            container.addEventListener('mousedown', function(event) {
                startX = event.pageX - container.offsetLeft;
                startY = event.pageY - container.offsetTop;
                dragging = true;
                selectionArea.style.display = 'none';
                selectionArea.style.width = '0px';
                selectionArea.style.height = '0px';
                event.preventDefault();
            });
    
            document.addEventListener('mousemove', function(event) {
                if (!dragging) return;
                const rectData:DOMRect = selectionArea.getBoundingClientRect();
                const moveX:number = event.pageX - container.offsetLeft;
                const moveY:number = event.pageY - container.offsetTop;
                const width:number = Math.abs(moveX - startX);
                const height:number = Math.abs(moveY - startY);

                selectionArea.style.display = 'block';
                selectionArea.style.width = `${width}px`;
                selectionArea.style.height = `${height}px`;
                selectionArea.style.left = `${Math.min(startX, moveX)}px`;
                selectionArea.style.top = `${Math.min(startY, moveY)}px`;

                itemDetected(rectData);
                event.preventDefault();
            });
    
            document.addEventListener('mouseup', function(event) {
                startX = 0;
                startY = 0;
                dragging = false;
                selectionArea.style.display = 'none';
                selectionArea.style.width = '0px';
                selectionArea.style.height = '0px';

                itemPop();

                const itemBox:NodeListOf<Element> = document.querySelectorAll('.item_box');
                if(!!itemBox) itemBox.forEach(item => item.classList.remove('detected'));
                event.preventDefault(); // 드래그 작업 종료
            });
        }
    }, [])

    const textConversion = () => {
        const conversionOrigin:string = textOption1 === 'G' ? textInput : textInput.replace(/ /g,"");
        const conversionOrder:string = textOrder;
        let conversionResult:string = "";

        const arr:string[] = conversionOrigin.split('');

        if(textOption1 === 'O') {
            for(let word of arr) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + word;
                } else if(textOption2 === 'B') {
                    conversionResult += word + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + word + conversionOrder;
                }
            }
        } else if(textOption1 === 'I') {
            for(let i=0; i<arr.length; i+=textInterval) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval);
                } else if(textOption2 === 'B') {
                    conversionResult += conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                }
            }
        } else if(textOption1 === 'S') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder + textSpecific);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, textSpecific + conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder + textSpecific + conversionOrder);
            }
        } else if(textOption1 === 'N') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[0-9]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'L') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[a-z]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'U') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[A-Z]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'K') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[ㄱ-힣]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'E') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/\n/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'G') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/\s/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        }

        setTextResult(conversionResult);
    }

    const textRemove = () => {
        const conversionOrigin:string = textInput.replace(/ /g,"");
        const conversionOrder:string = textOrder;
        let conversionResult:string = "";

        const arr:string[] = conversionOrigin.split('');

        if(textOption1 === 'O') {
            for(let word of arr) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + word;
                } else if(textOption2 === 'B') {
                    conversionResult += word + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + word + conversionOrder;
                }
            }
        } else if(textOption1 === 'I') {
            for(let i=0; i<arr.length; i+=textInterval) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval);
                } else if(textOption2 === 'B') {
                    conversionResult += conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                }
            }
        } else if(textOption1 === 'S') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, '');
            }
        } else if(textOption1 === 'N') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, '');
            }
        } else if(textOption1 === 'L') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, '');
            }
        } else if(textOption1 === 'U') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, '');
            }
        } else if(textOption1 === 'K') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, '');
            }
        } else if(textOption1 === 'E') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, '');
            }
        } else if(textOption1 === 'G') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, '');
            }
        }

        setTextResult(conversionResult);
    }

    const textMove = () => {
    }

    useEffect(() => {
        if(textMode === 'I') setTextOption1('O');
        else if(textMode === 'D') setTextOption1('S');
        else if(textMode === 'U') setTextOption1('S');
    }, [textMode])

    return (
        <PageStyle>
            {/* <div id="main_container" className="main_container" style={{border: "1px solid red", width:"600px", height:"300px"}}>
                <div className="score_section">
                    {score} / {time}
                </div>
                <div id="selection_area" className="selection_area"></div>
            </div>
            <canvas ref={canvasRef} style={{position:"absolute", border:"1px solid red", width:"600px", height:"300px", zIndex:-1}} >
            </canvas> */}
            <div className="text_tool_container">
                <div className="text_input_area">
                    <div className="text_input_section">
                        <div className="text_section_header">
                            <div className="header_title">
                                Enter Text
                            </div>
                        </div>
                        <textarea style={{resize : "none"}} value={textInput} onChange={(e) => setTextInput(e.target.value)}></textarea>
                    </div>
                    <FontAwesomeIcon icon={arrowIcon} className="icon" />
                    <div className="text_result_section">
                        <div className="text_section_header">
                            <div className="header_title">
                                Text Result
                            </div>
                            <div className="text_simple_area">
                                <CopyToClipboard text={textResult} onCopy={() => alert("복사되었습니다.")}>
                                    <button>결과 복사</button>
                                </CopyToClipboard>
                                <button onClick={() => setTextInput(textResult)}>입력창으로 이동</button>
                            </div>
                        </div>
                        <textarea style={{resize : "none"}} value={textResult} readOnly={true}></textarea>
                    </div>
                </div>
                <div className="text_option_area">
                    <div className="text_option_section">
                        <select onChange={(e) => setTextMode(e.target.value)}>
                            <option value="I">문자 추가</option>
                            <option value="D">문자 제거</option>
                            <option value="U">문자 수정</option>
                        </select>
                    </div>
                    <div className="text_option_section">
                        <select value={textOption1} onChange={(e) => setTextOption1(e.target.value)}>
                            {
                                textMode === 'I' ? 
                                    <>
                                        <option value="O">1문자</option>
                                        <option value="I">N문자</option>
                                    </> : <></>
                            }
                            <option value="S">특정 문자</option>
                            <option value="N">숫자</option>
                            <option value="L">영소문자</option>
                            <option value="U">영대문자</option>
                            <option value="K">한글</option>
                            <option value="E">개행</option>
                            <option value="G">공백</option>
                        </select>
                        {
                            textOption1 === "I" ? <input type="number" value={textInterval} onChange={(e) => setTextInterval(e.target.valueAsNumber)} /> :
                            textOption1 === "S" ? <input type="text" value={textSpecific} onChange={(e) => setTextSpecific(e.target.value)} /> : <input type="text" style={{opacity:0}} />
                        }
                    </div>
                    {
                        textMode === 'I' ?
                            <div className="text_option_section">
                                <select onChange={(e) => setTextOption2(e.target.value)}>
                                    <option value="F">문자 앞</option>
                                    <option value="B">문자 뒤</option>
                                    <option value="A">문자 앞뒤</option>
                                </select>
                                <input type="text" value={textOrder} onChange={(e) => setTextOrder(e.target.value)} placeholder="word" />
                            </div> : <div className="text_option_section">1</div>
                    }
                    <div className="text_option_section">
                        {
                            textMode === "I" ? <button onClick={() => textConversion()}>변환</button> : 
                            textMode === "D" ? <button onClick={() => textRemove()}>제거</button> :
                            textMode === "U" ? <button onClick={() => textRemove()}>수정</button> : <></>
                        }
                    </div>
                </div>
            </div>
        </PageStyle>
    )
}

export default Page;
