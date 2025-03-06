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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;

    .drag-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none; /* 드래그 중 텍스트 선택 방지 */
        height: 100vh;
        width: 100%;
    }

    .selection-area {
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
    }
`

const Page = () => {

    const [rect, setRect] = useState<{
        r1:{x:number, y:number},
        r2:{x:number, y:number},
        r3:{x:number, y:number},
        r4:{x:number, y:number}
    }>();
    
    let startX:number = 0;
    let startY:number = 0;
    let dragging:boolean = false;

    const getDistance = (x1:number, y1:number, x2:number, y2:number):number => {
        let x:number = x2 - x1;
        let y:number = y2 - y1;
    
        return Math.sqrt(x * x + y * y);
    }

    const itemDetected = (rectData:DOMRect) => {
        const container = document.getElementById('drag-container');

        const itemBoxList = container?.children;

        if(!!itemBoxList) {
            for(let i=1; i<itemBoxList.length; i++) {
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
                    rectData.right >= (itemRight - itemWidth) && rectData.bottom >= (itemBottm - itemHeight) ) {
                    itemBox.classList.add('detected');
                } else {
                    itemBox.classList.remove('detected');
                }
            }
        }
    }

    const itemPop = () => {
        const detectBox = document.querySelectorAll('.detected');
        let sum:number = 0;
        if(!!detectBox) detectBox.forEach(item => sum += parseInt(item.id));

        if(sum === 10) {
            if(!!detectBox) detectBox.forEach(item => item.classList.add('pop'));
        }
    }

    useEffect(() => {
        const container = document.getElementById('drag-container');
        const selectionArea = document.getElementById('selection-area');

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

                setRect({
                    r1:{x:rectData.left, y:rectData.top}, 
                    r2:{x:rectData.right, y:rectData.top}, 
                    r3:{x:rectData.left, y:rectData.bottom}, 
                    r4:{x:rectData.right, y:rectData.bottom}
                });
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

    return (
        <PageStyle>
            <div id="drag-container" className="drag-container">
                <div id="selection-area" className="selection-area"></div>
                <div id={"9"} className="item_box">9</div>
                <div id={"1"} className="item_box">1</div>
                <div id={"5"} className="item_box">5</div>
                <div id={"5"} className="item_box">5</div>
                <div id={"4"} className="item_box">4</div>
            </div>
        </PageStyle>
    )
}

export default Page;
