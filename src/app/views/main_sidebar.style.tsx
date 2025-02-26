import styled from "styled-components";

export const MainSidebar = styled('div')`
    @media (max-width: 1280px) {
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        width: 768px;
        padding: 10px;
        margin: 5px auto 25px;
        border: 1px solid #FF4438;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 300px;
    padding: 40px 10px;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);

    .btn_icon {
        @media (max-width: 1280px) {
            top: 5px;
            left: 15px;
            font-size: 2.3rem;
        }
        @media (max-width: 1024px) {
            top: 6px;
            left: 10px;
            font-size: 1.5rem;
        }
        position: absolute;
        top: 10px;
        left: 25px;
        font-size: 2.5rem;
        color: white;
    }

    button {
        @media (max-width: 1280px) {
            padding: 5px 15px 10px 55px;
            margin: 0 4px;
            font-size: 1.5rem;
        }
        @media (max-width: 1024px) {
            padding: 5px 10px 7px 35px;
            margin: 2px;
            font-size: 1.2rem;
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