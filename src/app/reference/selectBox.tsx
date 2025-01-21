'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown as arrow} from "@fortawesome/free-solid-svg-icons";

const SelectBoxStyle = styled('div')`
    position: relative;

    button {
        padding: 8px 6px 4px;
        border: none;
        border-radius: 5px;
        background: rgba(42,50,113, .38);
        color: #ffffffce;
        font-size: 13px;
        font-weight: 400;
        cursor: pointer;
    }

    .select_box {
        position: absolute;
        top: 105%;
        left: 0;
        height: 0;
        width: 80px;
        padding: 0 5px;
        border: none;
        border-radius: 5px;
        background: #100a1c;
        background-image:
            radial-gradient(50% 30% ellipse at center top, #201e40 0%, rgba(0,0,0,0) 100%),
            radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%);
        text-align: center;
        z-index: 2;
        transition: all 0.3s ease-in-out;
    }

    ul.select_list {
        height: 0;
        width: 70px;
        padding: 0;
        border: none;
        border-radius: 5px;
        overflow: auto;
        background: rgba(42,50,113, .28);
        color: #6cacc5;
        text-align: center;
        cursor: pointer;
        z-index: 3;
        user-select: none;
        list-style:none;
        transition: all 0.3s ease-in-out;
        
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: #3470888f; 
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(200, 200, 200, .1);
            border-radius: 5px;
        }
    }

    ul.select_list li {
        padding: 4px;
        font-size: 11px;
        line-height: 1.4em;
        opacity: 0.7;
    }

    .select_arrow {
        display: inline-block;
        margin-left: 7px;
        color: #FFFFFF;
        transition: all .3s linear;
    }

    .select_box.show_select {
        padding: 5px;
        height: 140px;
    }

    .select_list.show_select {
        padding: 5px 0;
        height: 130px;
    }

    ul.select_list li.rs_active {
        color: #c97874;
        font-size: 12px;
        font-weight: bold;
        opacity: 1;
    }

    .select_arrow.show_select {
        transform: rotate(180deg);
    }
`

const SelectBox = () => {
    const selectBox:any = useRef<any>();
    const selectList:any = useRef<any>();
    const selectItem:any = useRef<any>([]);
    const selectArrow:any = useRef<any>();

    const [isSelectBoxShow, setIsSelectBoxShow] = useState<boolean>(false);
    const [selectItemId, setSelectItemId] = useState<number>(0);
    const selectArr:{id:string, value:string}[] = [
        {id:"A", value:"HELLO1"}, {id:"B", value:"HELLO2"}, 
        {id:"C", value:"HELLO3"}, {id:"D", value:"HELLO4"}, 
        {id:"E", value:"HELLO5"}, {id:"F", value:"HELLO6"}, 
        {id:"G", value:"HELLO7"}, {id:"H", value:"HELLO8"}, 
        {id:"I", value:"HELLO9"}, {id:"J", value:"HELLO10"}, 
        {id:"K", value:"HELLO11"}, {id:"L", value:"HELLO12"}, 
        {id:"M", value:"HELLO13"}, {id:"N", value:"HELLO14"}, 
    ];
    
    const customSelectBox = () => {
        const result:any[] = [];

        for(let i:number=0; i<selectArr.length; i++) {
            result.push(<li key={selectArr[i].id + i} value={selectArr[i].id}
                            onClick={() => onClickSelectItem(i)}
                            ref={(li:any) => (selectItem.current[i] = li)}>
                {selectArr[i].value}</li>)
        }
        return result;
    }

    const onClickSelectItem = (idx:number) => {
        setIsSelectBoxShow(false);
        setSelectItemId(idx);

        selectItem.current[idx].className = selectItem.current[idx].className.replace('rs_active', '');
        selectItem.current[idx].className += 'rs_active';

        for(let i:number=0; i<selectItem.current.length; i++) {
            if(i !== idx) {
                selectItem.current[i].className = selectItem.current[i].className.replace('rs_active', '');
            }
        }
    }

    useEffect(() => {
        if(isSelectBoxShow) {
            selectBox.current.className += " show_select";
            selectList.current.className += " show_select";
            selectArrow.current.className += " show_select";
            
            const handleOutsideClose = (e: {target: any}) => {
                // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
                if(isSelectBoxShow && (!selectBox.current.contains(e.target))) setIsSelectBoxShow(false);
            };
            document.addEventListener('click', handleOutsideClose);
            
            return () => document.removeEventListener('click', handleOutsideClose);
        } else {
            selectBox.current.className = selectBox.current.className.replace(' show_select', '');
            selectList.current.className = selectList.current.className.replace(' show_select', '');
            selectArrow.current.className = selectArrow.current.className.replace(' show_select', '');
        }
    }, [isSelectBoxShow])

    return (
        <SelectBoxStyle>
            <button onClick={() => setIsSelectBoxShow(!isSelectBoxShow)}>
                {selectArr[selectItemId].value}
                <div className="select_arrow" ref={selectArrow}>
                    <FontAwesomeIcon icon={arrow} />
                </div>
            </button>
            <div className="select_box" ref={selectBox}>
                <ul className="select_list" ref={selectList}>
                    {customSelectBox()}
                </ul>
            </div>
        </SelectBoxStyle>
    )
}

export default SelectBox;
