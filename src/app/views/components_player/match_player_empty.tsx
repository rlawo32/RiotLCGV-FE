'use client'

import styled, { keyframes } from "styled-components";

const MatchPlayerEmptyStyle = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 50vh;
`;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: none; }
`;

const Inner = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    color: #ffffff;
    animation: ${fadeIn} 0.45s cubic-bezier(0.2, 0.7, 0.3, 1) both;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const EmptyIcon = styled('svg')`
    width: 88px;
    height: 88px;
    display: block;
`;

const Message = styled('p')`
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #a1a1aa;
`;

const MatchPlayerEmpty = () => {

    return (
        <MatchPlayerEmptyStyle>
            <Inner role="status" aria-live="polite">
                <EmptyIcon
                    viewBox="0 0 96 96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                >
                    <circle cx="48" cy="48" r="43" strokeWidth="1" strokeOpacity="0.08" />
                    <circle cx="48" cy="48" r="33" strokeWidth="1" strokeOpacity="0.14" />

                    <rect
                        x="19"
                        y="27"
                        width="58"
                        height="45"
                        rx="11"
                        strokeWidth="2.5"
                        strokeOpacity="0.55"
                    />

                    <path
                        d="M19 58h12.5l4.5 7h24l4.5-7H77"
                        strokeWidth="2.5"
                        strokeOpacity="0.55"
                    />

                    <path
                        d="M31 39h34"
                        strokeWidth="2.5"
                        strokeOpacity="0.3"
                        strokeDasharray="0.5 6"
                    />
                    <path
                        d="M38 48h20"
                        strokeWidth="2.5"
                        strokeOpacity="0.3"
                        strokeDasharray="0.5 6"
                    />

                    <circle cx="80" cy="26" r="1.6" fill="currentColor" stroke="none" fillOpacity="0.2" />
                    <circle cx="87" cy="43" r="1.1" fill="currentColor" stroke="none" fillOpacity="0.14" />
                    <circle cx="12" cy="60" r="1.4" fill="currentColor" stroke="none" fillOpacity="0.16" />
                </EmptyIcon>

                <Message>결과가 없습니다.</Message>
            </Inner>
        </MatchPlayerEmptyStyle>
    )
}

export default MatchPlayerEmpty;