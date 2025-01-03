'use client'

import { memo, useEffect, useRef } from "react";

const ErrorPage = (props : {errorCode:string, errorMessage:string}) => {
    const testRef:any = useRef<any>([]);

    const test = (n:number, t:number) => {
        const str = testRef.current[n].innerHTML.toString();
        let i = 0;
        testRef.current[n].innerHTML = "";

        setTimeout(function() {
            const se = setInterval(function() {
                i++;
                testRef.current[n].innerHTML = str.slice(0, i) + "|";
            }, 10);
            if (i == str.length) {
                clearInterval(se);
                testRef.current[n].innerHTML = str;
            }
        }, t);
    }

    useEffect(() => {
        if(props.errorCode.length > 0) {
            test(0, 0);
            test(1, 600);
        }
    }, [props])

    return (
        <div>
            <p>HTTP: 404</p>
            <div ref={(te:any) => (testRef.current[0] = te)}>{props.errorCode}</div>
            <div ref={(te:any) => (testRef.current[1] = te)}>{props.errorMessage}</div>
        </div>
    )
}

export default ErrorPage;
