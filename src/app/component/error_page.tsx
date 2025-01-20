'use client'

import { memo, useEffect, useRef } from "react";
import styled from "styled-components";

const ErrorPageStyle = styled('div')`
    color: white;

    span {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const ErrorPage = (props : {errorCode:string, errorMessage:string}) => {
    const testRef:any = useRef<any>([]);

    const test = (n:number, t:number) => {
        const str = testRef.current[n].innerHTML.toString();
        let i = 0;
        testRef.current[n].innerHTML = "";

        setTimeout(function() {
            setInterval(function() {
                if (i === str.length+1) {
                    return;
                }
                testRef.current[n].innerHTML = str.slice(0, i) + '<span>|</span>';
                i++;
            }, 10);
        }, t);
    }

    useEffect(() => {
        test(0, 10);
        test(1, 20);
        test(2, 30);
    }, [props])

    return (
        <ErrorPageStyle>
            <p>HTTP: 404</p>
            <div ref={(te:any) => (testRef.current[0] = te)}>{props.errorCode}</div>
            <div ref={(te:any) => (testRef.current[1] = te)}>{props.errorMessage}</div>
            <div ref={(te:any) => (testRef.current[2] = te)}>else if we_screwed_up alert "We're really sorry about that." window. location</div>
        </ErrorPageStyle>
    )
}

const ErrorPageRes = memo(ErrorPage);

export default ErrorPage;
