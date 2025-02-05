import styled from "styled-components";

export const MainView = styled('div')`
    position: relative;
    height: 100vh;
    width: 1440px;
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
        z-index: -1;
        animation: steam 60s linear infinite;
    }

    &::after {
        filter: blur(30px) drop-shadow(0 0 5px #123ecf);
    }

    .main_container {
        display: flex;
        justify-content: space-between;
        height: 100%;
        padding: 30px 20px;
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