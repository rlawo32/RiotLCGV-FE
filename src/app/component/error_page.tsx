'use client'

import { useEffect, useRef } from "react";

const ErrorPage = (props : {errorCode:string, errorMessage:string}) => {
    const testRef:any = useRef<any>([]);

    const test = (n:number, t:number) => {
        const str = testRef.current[n].innerHTML.toString();
        let i = 0;
        testRef.current[n].innerHTML = "";

        setTimeout(function() {
            let se = setInterval(function() {
                i++;
                testRef.current[n].innerHTML = str.slice(0, i) + "|";
                if (i == str.length) {
                    clearInterval(se);
                    testRef.current[n].innerHTML = str;
                }
            }, 10);
        }, t);
    }

    useEffect(() => {
        test(0, 0);
        test(1, 600);
    }, [])

    return (
        <div>
            <p>HTTP: 404</p>
            <div ref={(te:any) => (testRef.current[0] = te)}>{props.errorCode}</div>
            <div ref={(te:any) => (testRef.current[1] = te)}>{props.errorMessage}</div>
        </div>
    )
}

export default ErrorPage;