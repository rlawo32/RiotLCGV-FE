'use client'

import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown as arrow} from "@fortawesome/free-solid-svg-icons";

const SelectBoxStyle = styled('div')`
    position: relative;

    button {
        @media (max-width: 768px) {
            width: 120px;
            padding: 4px 10px;
            font-size: 1rem;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 135px;
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
        background-color: rgb(255 68 56 / 1);
        color: rgb(255 255 255 / 1);
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
    }

    .select_box {
        @media (max-width: 768px) {
            width: 120px;
        }
        position: absolute;
        top: 105%;
        left: 0;
        height: 0;
        width: 135px;
        padding: 0 5px;
        border: none;
        border-radius: 5px;
        background-color: rgb(28 28 31 / 1);
        text-align: center;
        z-index: 2;
        transition: all 0.3s ease-in-out;
    }

    ul.select_list {
        @media (max-width: 768px) {
            width: 110px;
        }
        height: 0;
        width: 125px;
        padding: 0;
        border: none;
        border-radius: 5px;
        overflow: auto;
        background-color: rgb(40 40 48 / 1);
        /* background-color: rgb(49 49 60 / 1); */
        color: rgb(255 255 255 / 1);
        text-align: center;
        cursor: pointer;
        z-index: 3;
        user-select: none;
        list-style:none;
        word-break: keep-all;
        transition: all 0.3s ease-in-out;
        
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(255 255 255 / 1);
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(200, 200, 200, .1);
            border-radius: 5px;
        }
    }

    ul.select_list li {
        @media (max-width: 768px) {
            font-size: 1rem;
            line-height: 1.2em;
        }
        padding: 4px;
        font-size: 1.3rem;
        line-height: 1.4em;
        opacity: 0.7;
    }

    .select_arrow {
        display: inline-block;
        margin-left: 7px;
        color: rgb(255 255 255 / 1);
        font-weight: 700;
        transition: all .3s linear;
    }

    .select_box.show_select {
        padding: 5px;
        height: 210px;
    }

    .select_list.show_select {
        padding: 5px 0;
        height: 200px;
    }

    ul.select_list li.rs_active {
        @media (max-width: 768px) {
            font-size: 1.1rem;
        }
        color: rgb(255 68 56 / 1);
        font-size: 1.4rem;
        font-weight: 700;
        opacity: 1;
    }

    .select_arrow.show_select {
        transform: rotate(180deg);
    }
`

const SelectBox = (props : {rankSelect:{key:string, name:string}[], rankSelectIdx:number, setRankSelectIdx:any}) => {
    const selectBox:any = useRef<any>(null);
    const selectList:any = useRef<any>(null);
    const selectItem:any = useRef<any>([]);
    const selectArrow:any = useRef<any>(null);

    const [isSelectBoxShow, setIsSelectBoxShow] = useState<boolean>(false);
    
        
    const customSelectBox = () => {
        const result:any[] = [];

        for(let i:number=0; i<props.rankSelect.length; i++) {
            result.push(<li key={props.rankSelect[i].key + i} value={props.rankSelect[i].key}
                            onClick={() => onClickSelectItem(i)}
                            ref={(li:any) => (selectItem.current[i] = li)}>
                {props.rankSelect[i].name}</li>)
        }
        return result;
    }

    const onClickSelectItem = (idx:number) => {
        setIsSelectBoxShow(false);
        props.setRankSelectIdx(idx);

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
                {props.rankSelect[props.rankSelectIdx].name}
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