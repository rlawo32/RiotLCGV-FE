'use client';

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
const PageStyle = styled('div')<{$load:boolean}>`
    position: relative;
    font-size: 1.5rem;
    line-height: 150%;
    color: white;
    font-weight: 400;

    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(45deg, #123ecf, #6e1dca, #0000ff);
        background-size: 400%;
        width: 100%;
        height: 100%;
        z-index: -1;
        animation: steam 60s linear infinite;
    }

    &::after {
        filter: blur(60px) drop-shadow(0 0 10px #123ecf);
    }

    .main_container {
        display: flex;
        justify-content: space-between;
        height: 100%;
        padding: 15px;
        background: #070719;
        z-index: 1;
    }

    height: 100vh;
    width: 1280px;
    @media (max-width: 1280px) {
        width: 1024px;
    }
    @media (max-width: 1024px) {
        height: 100%;
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 480px;
    }
    @media (max-width: 480px) {
        width: 320px;
    }
    margin: 0 auto;

    .section {
        border-left: 2px solid black;
        border-right: 2px solid black;
    }

    .main_sidebar {
        position: relative;
        display: flex;
        flex-direction: column;
        height: fit-content;
        width: 300px;
        padding: 40px 10px;
        border-radius: 10px;
        background-color: rgb(49 49 60 / .7);

        .btn_icon {
            position: absolute;
            top: 10px;
            left: 25px;
            font-size: 3rem;
            color: white;
        }

        button {
            position: relative;
            padding: 15px 15px 10px 75px;
            margin: 4px 0;
            border: none;
            border-radius: 10px;
            background: none;
            text-align: left;
            font-size: 2rem;
            font-weight: 400;
            color: white;
            cursor: pointer;
            z-index: 3;

            &:hover {
                background-color: #313150;
                transition: .2s ease-in-out;
            }

            &:not(:hover) {
                transition: .2s ease-in-out;
            }
        }

        .select_active {
            background-color: #313150;
        }
    }

    .main_content {
        height: 100%;
        width: 500px;
        margin: auto;
        border-radius: 10px;
        background-color: rgb(49 49 60 / .7);
    }

    @keyframes steam {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
`

const Page = () => {
    const btnRef:any = useRef<any>([]);

    const [content, setContent] = useState<string>("");
    const [load, setLoad] = useState<boolean>(false);
    const rankData:{pid:string, tier:string, point:number, division:string, win:number, loss:number}[] = [];

    const [isSelectBoxShow, setIsSelectBoxShow] = useState<boolean>(false);
    const [selectView, setSelectView] = useState<number>(0);
    const selectArr:{id:string, value:string, box:{pid:string}}[] = [ // gameData
        {id:"A", value:"HELLO1", box:{pid:"test1"}}, {id:"B", value:"HELLO2", box:{pid:"test2"}}, 
        {id:"C", value:"HELLO3", box:{pid:"test3"}}, {id:"D", value:"HELLO4", box:{pid:"test4"}}, 
        {id:"E", value:"HELLO5", box:{pid:"test5"}}, {id:"F", value:"HELLO6", box:{pid:"test6"}}, 
        {id:"G", value:"HELLO7", box:{pid:"test7"}}, {id:"H", value:"HELLO8", box:{pid:"test8"}}, 
        {id:"I", value:"HELLO9", box:{pid:"test9"}}, {id:"J", value:"HELLO10", box:{pid:"test10"}}, 
        {id:"K", value:"HELLO11", box:{pid:"test11"}}, {id:"L", value:"HELLO12", box:{pid:"test12"}}, 
        {id:"M", value:"HELLO13", box:{pid:"test13"}}, {id:"N", value:"HELLO14", box:{pid:"test14"}}, 
    ];
    
    const extractionFunc = () => {
        for(let i=0; i<selectArr.length; i++) {
        }
        console.log(rankData);
    }

    const btnClick = (idx:number) => {
        setSelectView(idx);

        if(!btnRef.current[idx].className.includes('select_active')) {
            btnRef.current[idx].className += ' select_active';
        } else {            
            btnRef.current[idx].className = btnRef.current[idx].className.replace(' select_active', '');
        }

        for(let i:number=0; i<btnRef.current.length; i++) {
            if(i !== idx) {
                btnRef.current[i].className = btnRef.current[i].className.replace(' select_active', '');
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {setContent("HELLO")}, 1000);
        setTimeout(() => {setLoad(true)}, 3000);
        extractionFunc();
        btnRef.current[selectView].className += ' select_active';
    }, [])
// 플레이어, 내전 전적, 최근 게임, 스코어 랭킹,
    return (
        <PageStyle $load={load}>
            <div className="main_container">
                <div className="section main_sidebar">
                    <button onClick={() => btnClick(0)} ref={(btn:any) => (btnRef.current[0] = btn)}>
                        <FontAwesomeIcon icon={add} className="btn_icon"/>
                        플레이어
                    </button>
                    <button onClick={() => btnClick(1)} ref={(btn:any) => (btnRef.current[1] = btn)}>
                        <FontAwesomeIcon icon={anchor} className="btn_icon"/>
                        내전 전적
                    </button>
                    <button onClick={() => btnClick(2)} ref={(btn:any) => (btnRef.current[2] = btn)}>
                        <FontAwesomeIcon icon={vcard} className="btn_icon"/>
                        최근 게임
                    </button>
                    <button onClick={() => btnClick(3)} ref={(btn:any) => (btnRef.current[3] = btn)}>
                        <FontAwesomeIcon icon={bacon} className="btn_icon"/>
                        스코어 랭킹
                    </button>
                </div>
                <div className="section main_content">
                    {
                        selectView === 0 ? <div>HELLO1</div> :
                        selectView === 1 ? <div>HELLO2</div> :
                        selectView === 2 ? <div>HELLO3</div> : <></>
                    }
                </div>
            </div>
        </PageStyle>
    )
}

export default Page;
