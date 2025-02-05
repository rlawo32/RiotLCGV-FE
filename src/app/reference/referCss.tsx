'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
        filter: blur(30px) drop-shadow(0 0 5px #123ecf);
    }

    .main_container {
        height: 100%;
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
        position: relative;
        height: 50%;
        border-left: 2px solid black;
        border-right: 2px solid black;
    }

    .main_body {
        @media (max-width: 1024px) {
            flex-direction: column;

            .head_left .aggregate {
                justify-content: left;
                flex-direction: row;
            }
        }
        display: flex;
        justify-content: center;
        align-items: center;

        .aggregate {
            display: flex;
            align-items: center;
        }

        .object {
            display: flex;
            align-items: center;
        }

        .head_left {.aggregate {
            @media (max-width: 1024px) {
                justify-content: left;
                flex-direction: row-reverse;
            }
            justify-content: right;
            flex-direction: row;}
            .object {
                @media (max-width: 1024px) {
                    justify-content: left;
                    flex-direction: row;
                }
                justify-content: right;
                flex-direction: row-reverse;
            }}

        .head_right {.aggregate {
            justify-content: left;
            flex-direction: row-reverse;}
            .object {
                justify-content: left;
                flex-direction: row;
            }}

        table {
            border: 1px solid red;
            margin: 3px;
        }
    }

    .skeleton {
        display: ${({$load}) => $load ? "none" : "block"};
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 100px;
        border-radius: 10px;
        animation: pulse 2s infinite ease-in-out;
    }

    @keyframes pulse {
        0% {
            background-color: #94a3b8;
        }

        50% {
            background-color: #cbd5e1;
        }

        100% {
            background-color: #94a3b8;
        }
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

    const [content, setContent] = useState<string>("");
    const [load, setLoad] = useState<boolean>(false);
    const rankData:{pid:string, tier:string, point:number, division:string, win:number, loss:number}[] = [];

    const [isSelectBoxShow, setIsSelectBoxShow] = useState<boolean>(false);
    const [selectItemId, setSelectItemId] = useState<number>(0);
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

    useEffect(() => {
        setTimeout(() => {setContent("HELLO")}, 1000);
        setTimeout(() => {setLoad(true)}, 3000);
        extractionFunc();
    }, [])

    return (
        <PageStyle $load={load}>
            <div className="main_container">
                <div className="section main_head">

                </div>
                <div className="section main_body">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={8} className="head head_left">    
                                    <div className="aggregate">
                                        <div className="object">
                                            <div>
                                                child1
                                            </div>
                                            <div>
                                                child2
                                            </div>
                                        </div>
                                        <div>head1</div>
                                        <div>head2</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>qwt1</td>
                                <td>qwt2</td>
                                <td>qwt3</td>
                                <td>qwt4</td>
                                <td>qwt5</td>
                                <td>qwt6</td>
                                <td>qwt7</td>
                                <td>qwt8</td>
                            </tr>
                            <tr>
                                <td>zxe1</td>
                                <td>zxe2</td>
                                <td>zxe3</td>
                                <td>zxe4</td>
                                <td>zxe5</td>
                                <td>zxe6</td>
                                <td>zxe7</td>
                                <td>zxe8</td>
                            </tr>
                            <tr>
                                <td>asf1</td>
                                <td>asf2</td>
                                <td>asf3</td>
                                <td>asf4</td>
                                <td>asf5</td>
                                <td>asf6</td>
                                <td>asf7</td>
                                <td>asf8</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={8} className="head head_right">    
                                    <div className="aggregate">
                                        <div className="object">
                                            <div>
                                                child1
                                            </div>
                                            <div>
                                                child2
                                            </div>
                                        </div>
                                        <div>head1</div>
                                        <div>head2</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>qwt1</td>
                                <td>qwt2</td>
                                <td>qwt3</td>
                                <td>qwt4</td>
                                <td>qwt5</td>
                                <td>qwt6</td>
                                <td>qwt7</td>
                                <td>qwt8</td>
                            </tr>
                            <tr>
                                <td>zxe1</td>
                                <td>zxe2</td>
                                <td>zxe3</td>
                                <td>zxe4</td>
                                <td>zxe5</td>
                                <td>zxe6</td>
                                <td>zxe7</td>
                                <td>zxe8</td>
                            </tr>
                            <tr>
                                <td>asf1</td>
                                <td>asf2</td>
                                <td>asf3</td>
                                <td>asf4</td>
                                <td>asf5</td>
                                <td>asf6</td>
                                <td>asf7</td>
                                <td>asf8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </PageStyle>
    )
}

export default Page;
