'use client';

import styled from "styled-components";

import React, { useEffect, useRef, useState } from "react";

const PageStyle = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin: auto;

    .score_section {
        width: 100%;
        color: #ffffff;
        text-align: center;
        font-size: 2rem;
    }

    .test_view {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        width: 50%;
        border: 2px solid red;
        overflow: hidden;
    }

    .main_container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        user-select: none; /* 드래그 중 텍스트 선택 방지 */
        height: 100vh;
        width: 100%;
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
        color: red;
        z-index: -1;
    }

    .item_box.detected {
        height: 30px;
        width: 30px;
        margin: 10px;
        border: 1px solid blue;
        z-index: -1;
    }

    .item_box.pop {
        height: 30px;
        width: 30px;
        margin: 10px;
        border: 1px solid green;
        color: green;
        z-index: -1;
        transition: opacity 1s;
        opacity: 0;
    }

    .test_box.pop {
        position: relative;
        animation: bombLeftOut 3s ease;
        transition: transform 1s;
        
    }

    @keyframes bombLeftOut {
        0% {
            transform: translateX(0px) translateY(0px);
            /* transform-origin: 0 0;
            transform: rotate(0deg); */
        }
        50% {
            transform: translateX(-50px) translateY(-50px);
            /* opacity: 1;
            transform-origin: -100% 900%;
            transform: rotate(-160deg); */
        }
        /* 75% {
            opacity: 1;
            transform-origin: -100% 50%;
            transform: rotate(-160deg);
            filter: blur(0px);
        } */
        100% {
            transform: translateX(-100px) translateY(100px);
            /* opacity: 0;
            transform-origin: -100% 900%;
            transform: rotate(-160deg); */
        }
    }
`

const Page = () => {
    
    let startX:number = 0;
    let startY:number = 0;
    let dragging:boolean = false;
    let timer:any = null;

    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<number>(60);
    const [x, setX] = useState<number>(100);
    const [y, setY] = useState<number>(100);

    const getDistance = (x1:number, y1:number, x2:number, y2:number):number => {
        let x:number = x2 - x1;
        let y:number = y2 - y1;
    
        return Math.sqrt(x * x + y * y);
    }

    const itemDetected = (rectData:DOMRect) => {
        const container = document.getElementById('main_container');

        const itemBoxList = container?.children;

        if(!!itemBoxList) {
            for(let i=2; i<itemBoxList.length; i++) {
                const itemBox = itemBoxList[i];
                const itemTop = itemBox.getBoundingClientRect().top;
                const itemBottm = itemBox.getBoundingClientRect().bottom;
                const itemLeft = itemBox.getBoundingClientRect().left;
                const itemRight = itemBox.getBoundingClientRect().right;
                const itemWidth = itemBox.getBoundingClientRect().width / 2;
                const itemHeight = itemBox.getBoundingClientRect().height / 2;

                if( rectData.left <= (itemLeft + itemWidth) && rectData.top <= (itemTop + itemHeight) && 
                    rectData.right >= (itemRight - itemWidth) && rectData.top <= (itemTop + itemHeight) && 
                    rectData.left <= (itemLeft + itemWidth) && rectData.bottom >= (itemBottm - itemHeight) && 
                    rectData.right >= (itemRight - itemWidth) && rectData.bottom >= (itemBottm - itemHeight) && 
                    itemBox.classList.contains('pop') === false) {
                    itemBox.classList.add('detected');
                } else {
                    itemBox.classList.remove('detected');
                }
            }
        }
    }

    const itemPop = () => {
        const detectBox = document.querySelectorAll('.item_box.detected');
        let sum:number = 0;
        if(!!detectBox) detectBox.forEach(item => sum += parseInt(item.id));

        if(sum === 10) {
            if(!!detectBox) {
                detectBox.forEach(item => item.classList.add('pop')); 
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
        for(let i=0; i<300; i++) {
            let random:number = Math.floor(Math.random() * 10);
            if(random === 0) random = 1;
            
    		const container = document.getElementById("main_container");
            const item = document.createElement('div');
            item.classList.add('item_box');
            item.textContent = random.toString();
            item.setAttribute('id', random.toString());

            if(!!container) container.appendChild(item);
        }
    }

    const fnCountDown = () => { 
        timer = setTimeout(() => {setTime((time) => (time - 1))}, 1000);
    }

    useEffect(() => {
        if(time === 0) {clearTimeout(timer); alert('시간초과');}
        else {fnCountDown();}
    }, [time])

    const canvas = useRef<any>(null);

    useEffect(() => {
        itemCreate();
        // fnCountDown();
        const container = document.getElementById('main_container');
        const selectionArea = document.getElementById('selection_area');

        if(!!container && !!selectionArea) {
            container.addEventListener('mousedown', function(event) {
                startX = event.pageX;
                startY = event.pageY;
                dragging = true;
                selectionArea.style.display = 'none';
                selectionArea.style.width = '0px';
                selectionArea.style.height = '0px';
                event.preventDefault(); // 기본 드래그 동작 방지
            });
    
            document.addEventListener('mousemove', function(event) {
                if (!dragging) return;
                const moveX = event.pageX;
                const moveY = event.pageY;
                const width = Math.abs(moveX - startX);
                const height = Math.abs(moveY - startY);
                selectionArea.style.display = 'block';
                selectionArea.style.width = `${width}px`;
                selectionArea.style.height = `${height}px`;
                selectionArea.style.left = `${Math.min(startX, moveX)}px`;
                selectionArea.style.top = `${Math.min(startY, moveY)}px`;

                const rectData = selectionArea.getBoundingClientRect();

                itemDetected(rectData);
                event.preventDefault();
            });
    
            document.addEventListener('mouseup', function(event) {
                dragging = false;
                startX = 0;
                startY = 0;
                selectionArea.style.display = 'none';
                selectionArea.style.width = '0px';
                selectionArea.style.height = '0px';

                itemPop();
                const itemBox = document.querySelectorAll('.item_box');
                if(!!itemBox) itemBox.forEach(item => item.classList.remove('detected'));
                // 여기서 선택 영역을 완료합니다
                event.preventDefault(); // 드래그 작업 종료
            });
        }
    }, [])

    const testClick = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const vx:number = Math.random() * 4;
        const vy:number = -10;
        let laf:any;
        if(!!canvas.current) {
            const ctx = canvas.current.getContext("2d");
            
            const ball = {
                x: (e.clientX - ctx.canvas.offsetLeft) / 2,
                y: (e.clientY - ctx.canvas.offsetTop) / 2,
                vx: vx,
                vy: vy,
                gravity: 0.3,
                radius: 25,
                color: "blue",
    
                draw() {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                  ctx.closePath();
                  ctx.fillStyle = this.color;
                  ctx.fill();
                },
            };

            const draw = () => {
                ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
                ball.draw();
                ball.vy += ball.gravity;
                ball.x += ball.vx;
                ball.y += ball.vy;
                laf = window.requestAnimationFrame(draw);
            }

            canvas.current.addEventListener("click", () => {
                laf = window.requestAnimationFrame(draw);
            });
        }
    }

    return (
        <PageStyle>
            {/* <div id="main_container" className="main_container">
                <div className="score_section">
                    {score} / {time}
                </div>
                <div id="selection_area" className="selection_area"></div>
            </div> */}
            <canvas ref={canvas} style={{border: "1px solid red", width:"600px", height:"300px"}} onClick={(e) => testClick(e)}></canvas>
            {/* <div className="test_view">
                <div id="test_box" className="test_box" onClick={() => testClick()}>HELLO</div>
            </div> */}
        </PageStyle>
    )
}

export default Page;
