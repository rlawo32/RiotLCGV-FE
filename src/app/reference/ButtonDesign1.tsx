
import styled from "styled-components";

const ButtonDesign1Css = styled('div')`
    position: relative;
    display: inline-block;
    padding: 1px;
    border-radius: 6px;
    cursor: pointer;

    .inner {
        position: relative;
        padding: 12px 24px;
        z-index: 1;
        border-radius: 6px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.143em;
        background-color: #070719;
        color: white;
        box-shadow: 0 2px 8px rgba(61, 150, 255, .4), inset 0 -2px 12px rgba(58, 113, 255, .5);
    }

    .outer {
        position: absolute;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
        z-index: 0;
        border-radius: 6px;
        background-image: linear-gradient(#bed8ff, #3d96ff);
    }
`

const ButtonDesign1 = () => {

    return (
        <ButtonDesign1Css>
            <div className="inner">
                HELLO
            </div>
            <div className="outer" />
        </ButtonDesign1Css>
    )
}

export default ButtonDesign1;
