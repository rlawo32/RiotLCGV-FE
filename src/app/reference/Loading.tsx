'use client';

import React from "react";
import styled from "styled-components";

const SkeletonUi = styled('div')`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    max-width: 400px;
    height: 155px;
    margin: 20px;
    border-radius: 10px;
    background-color: #e2e8f0;
    box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);

    .skeleton-title {
        width: 150px;
        height: 12px;
        animation: pulse 2s infinite ease-in-out;
    }

    .card-text,
    .skeleton-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 250px;
        margin-left: 10px;
    }

    .card-img,
    .skeleton-img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        animation: pulse 2s infinite ease-in-out;
    }

    .card-description,
    .skeleton-description {
        margin: 10px 0;
    }

    .card-link,
    .skeleton-link {
        margin-top: 20px;
        width: 75px;
        height: 12px;
        animation: pulse 2s infinite ease-in-out;
    }

    .card-skills,
    .skeleton-skills {
        display: flex;
        justify-content: space-between;
    }

    .skeleton-description span:nth-child(1) {
        display: block;
        width: 210px;
        height: 10px;
        animation: pulse 2s infinite ease-in-out;
    }

    .skeleton-description span:nth-child(2) {
        display: block;
        width: 150px;
        height: 10px;
        animation: pulse 2s infinite ease-in-out;
        margin-top: 5px;
    }

    .skeleton-skills .skill {
        width: 65px;
        height: 12px;
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
`

const Loading = () => {
    return (
        <SkeletonUi>
            <div className="skeleton-img"></div>
            <div className="skeleton-text">
                <h2 className="skeleton-title"></h2>
                <p className="skeleton-description">
                    <span></span>
                    <span></span>
                </p>
                <ul className="skeleton-skills">
                    <li className="skill"></li>
                    <li className="skill"></li>
                    <li className="skill"></li>
                </ul>
                <a href="#" className="skeleton-link"></a>
            </div>
        </SkeletonUi>
    )
}

export default Loading;
