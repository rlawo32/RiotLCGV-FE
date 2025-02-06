import styled from "styled-components";

export const MainSidebar = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 300px;
    padding: 40px 10px;
    border-radius: 10px;
    background-color: rgb(49 49 60 / .7);

    .btn_icon {
        position: absolute;
        top: 10px;
        left: 25px;
        font-size: 2.5rem;
        color: white;
    }

    button {
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