'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// global root font-size: 62.5%
const PageStyle = styled('div')<{$load:boolean}>`
    position: relative;
    font-size: 1.5rem;
    color: white;

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

    useEffect(() => {
        setTimeout(() => {setContent("HELLO")}, 1000);
        setTimeout(() => {setLoad(true)}, 3000);
    }, [])

    return (
        <PageStyle $load={load}>
            <div className="main_container">
                <div className="section main_head">
                    <div className="skeleton" />
                    {content}
                </div>
                <div className="section main_body">
                    2
                </div>
            </div>
        </PageStyle>
    )
}

export default Page;
