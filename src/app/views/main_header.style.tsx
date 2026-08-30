import styled from "styled-components";

export const MainHeader = styled('div')`
    @media (max-width: 480px) {
        height: 42px;
    }
    position: relative;
    width: 100%;
    max-width: 1024px;
    height: 52px;
    padding: 4px 16px;
    margin: 10px auto;
    border-bottom: 1px solid rgba(98, 101, 245, 0.22);
    background: linear-gradient(
            180deg,
            rgba(18, 15, 30, 0.98) 0%,
            rgba(10, 8, 18, 0.98) 100%);
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: 10%;
        bottom: -1px;
        width: 80%;
        height: 1px;
        background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(98, 101, 245, 0.15) 10%,
                rgba(98, 101, 245, 0.8) 50%,
                rgba(98, 101, 245, 0.15) 90%,
                transparent 100%);
        box-shadow: 0 0 6px rgba(98, 101, 245, 0.8),
                    0 0 14px rgba(98, 101, 245, 0.5),
                    0 0 30px rgba(98, 101, 245, 0.25);
    }

    .header_glow {
        position: absolute;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);
        width: 60%;
        height: 40px;
        background: radial-gradient(
                ellipse,
                rgba(98, 101, 245, 0.35) 0%,
                rgba(98, 101, 245, 0.12) 35%,
                transparent 70%);
        filter: blur(18px);
        pointer-events: none;
    }

    .header_container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`;

export const HeaderItem = styled('button')<{$selected:boolean}>`
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
    @media (max-width: 480px) {
        height: 36px;
        padding: 0 4px;
        font-size: .9rem;
    }
    flex: 1 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 46px;
    min-width: 35px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 2px;
    border: none;
    background: transparent;
    font-size: 1.4rem;
    color: ${({ $selected }) => $selected ? "rgba(123, 125, 255, 0.75)" : "rgba(220, 220, 235, 0.85)"};
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease, text-shadow 0.2s ease;
    text-shadow: ${({ $selected }) => $selected ? "0 0 8px rgba(98, 101, 245, 0.45)" : "none"};
    
    &:hover {
        color: rgba(138, 140, 255, 0.9);
    }

    &::after { 
        content: ""; 
        position: absolute; 
        left: 18%; 
        bottom: 0; 
        width: 64%; 
        height: 2px; 
        border-radius: 10px; 
        opacity: ${({ $selected }) => ($selected ? 1 : 0)};
         background: linear-gradient( 90deg, transparent, 
                    #6265F5 25%, #B5B6FF 50%, 
                    #6265F5 75%, transparent ); 
        box-shadow: 0 0 6px rgba(98, 101, 245, 1), 
                    0 0 15px rgba(98, 101, 245, 0.7), 
                    0 0 30px rgba(98, 101, 245, 0.3); 
        transition: opacity 0.2s ease, 
        box-shadow 0.2s ease; 
    }
`;