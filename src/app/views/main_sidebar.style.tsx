import styled from "styled-components";

export const MainSidebar = styled('div')`
    @media (max-width: 1024px) {
        width: 100%;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 768px;
    padding: 10px 15px;
    margin: 5px auto 25px;
    border: 1px solid #FF4438;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);

    .sidebar_container {
        // mobile_view
        @media (max-width: 480px) {
            justify-content: flex-start;
        }
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: fit-content;
    }

    .btn_icon {
        @media (max-width: 1024px) {
            top: 0;
            font-size: 1.5rem;
        }
        @media (max-width: 768px) {
            width: 20px;
            font-size: 1.2rem;
        }
        // mobile_view
        @media (max-width: 480px) {
            font-size: .9rem;
        }
        position: relative;
        top: 1px;
        left: -7px;
        margin: 0;
        width: 30px;
        color: white;
        font-size: 1.8rem;
    }

    button {
        @media (max-width: 1024px) {
            padding: 5px 10px 5px 20px;
            margin: 2px 7px;
            font-size: 1.2rem;
        }
        @media (max-width: 768px) {
            padding: 5px 7px 5px 10px;
            margin: 2px 3px;
            font-size: 1rem;
        }
        // mobile_view
        @media (max-width: 480px) {
            justify-content: center;
            width: calc(calc(100% / 2) - 8px);
            padding: 5px;
            margin: 2px 3px;
            font-size: .9rem;
            text-align: center;
        }
        display: flex;
        align-items: center;
        position: relative;
        padding: 5px 15px 5px 25px;
        margin: 0 5px;
        border: none;
        border-radius: 10px;
        background: none;
        text-align: left;
        font-size: 1.5rem;
        font-weight: 400;
        color: white;
        cursor: pointer;
        z-index: 3;

        &:hover {
            background-color: rgb(89 89 100 / 1);
            transition: .2s ease-in-out;
        }

        &:not(:hover) {
            transition: .2s ease-in-out;
        }
    }

    .select_active {
        background-color: rgb(89 89 100 / 1);
    }
`