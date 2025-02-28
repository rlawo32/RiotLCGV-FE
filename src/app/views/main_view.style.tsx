import styled from "styled-components";

export const MainView = styled('div')`
    position: relative;
    // Main_Height
    @media (max-height: 910px) {
        height: 100%;
    }
    // Main_Height

    // Main_Width
    @media (max-width: 1440px) {
        width: 1280px;
    }
    @media (max-width: 1280px) {
        width: 1024px;
    }
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 480px;
    }
    // mobile_view
    @media (max-width: 480px) {
        width: 320px;
    }
    width: 1440px;
    // Main_Width

    margin: 0 auto;
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
        border-radius: 7px;
        z-index: -1;
        animation: steam 60s linear infinite;
    }

    &::after {
        filter: blur(30px) drop-shadow(0 0 5px #123ecf);
    }

    .main_container {
        display: flex;
        justify-content: space-between;
        @media (max-width: 1280px) {
            flex-direction: column;
        }
        @media (max-width: 768px) {
            padding: 25px 10px;
        }
        height: 100%;
        padding: 25px 40px;
        border-radius: 7px;
        background: #0d0d25;
        z-index: 1;
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