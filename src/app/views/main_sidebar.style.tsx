import styled from "styled-components";

export const MainSidebar = styled('div')`
    @media (max-width: 1280px) {
        width: 768px;
        padding: 10px 0;
        margin: 5px auto 25px;
        border: 1px solid #FF4438;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    // mobile_view
    @media (max-width: 500px) {
        width: 350px;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 300px;
    padding: 40px 10px;
    border: 1px solid #887d7d;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);

    .sidebar_container {
        @media (max-width: 1280px) {
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
        }
        // mobile_view
        @media (max-width: 500px) {
            justify-content: flex-start;
            width: 75%;
        }
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
    }

    .btn_icon {
        @media (max-width: 1280px) {
            position: relative;
            top: 1px;
            left: -7px;
            font-size: 1.8rem;
        }
        @media (max-width: 1024px) {
            top: 0;
            font-size: 1.5rem;
        }
        @media (max-width: 768px) {
            font-size: 1rem;
        }
        // mobile_view
        @media (max-width: 500px) {
            font-size: .9rem;
        }
        position: absolute;
        top: 10px;
        left: 25px;
        font-size: 2.5rem;
        color: white;
    }

    button {
        @media (max-width: 1280px) {
            padding: 5px 15px 5px 25px;
            margin: 0 5px;
            font-size: 1.5rem;
        }
        @media (max-width: 1024px) {
            padding: 5px 10px 5px 20px;
            margin: 2px 7px;
            font-size: 1.2rem;
        }
        @media (max-width: 768px) {
            padding: 5px 7px 5px 15px;
            margin: 2px 3px;
            font-size: 1rem;
        }
        // mobile_view
        @media (max-width: 500px) {
            width: calc(92% / 3);
            padding: 5px;
            margin: 2px 3px;
            font-size: .9rem;
            text-align: center;
        }
        position: relative;
        padding: 15px 15px 10px 75px;
        margin: 4px 0;
        border: none;
        border-radius: 10px;
        background: none;
        text-align: left;
        font-size: 1.7rem;
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