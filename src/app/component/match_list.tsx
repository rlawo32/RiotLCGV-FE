'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import Image from "next/image";

import * as Style from "./match_list.style";

const MatchList = () => {
    const client:any = supabase();

    const [testList, setTestList] = useState<{key:number, title:string, content:string, arr1:string[], arr2:string[]}[]>([{
        key: 1001,
        title: 'test1',
        content: 'content1',
        arr1: ['a1', 'b1', 'c1', 'd1', 'e1'],
        arr2: ['a2', 'b2', 'c2', 'd2', 'e2'],
    }, {
        key: 1002,
        title: 'test2',
        content: 'content2',
        arr1: ['f1', 'g1', 'h1', 'i1', 'j1'],
        arr2: ['f2', 'g2', 'h2', 'i2', 'j2'],
    }, {
        key: 1003,
        title: 'test3',
        content: 'content3',
        arr1: ['k1', 'l1', 'n1', 'm1', 'o1'],
        arr2: ['k2', 'l2', 'n2', 'm2', 'o2'],
    }, {
        key: 1004,
        title: 'test4',
        content: 'content4',
        arr1: ['p1', 'q1', 'r1', 's1', 't1'],
        arr2: ['p2', 'q2', 'r2', 's2', 't2'],
    }, {
        key: 1005,
        title: 'test5',
        content: 'content5',
        arr1: ['u1', 'v1', 'w1', 'x1', 'y1'],
        arr2: ['u2', 'v2', 'w2', 'x2', 'y2'],
    },]);
    
    const testListActive = ():any[] => {
        let result:any[] = []

        for(let i=0; i<testList.length; i++) {
            result.push(<Style.ListItem key={testList[i].key} className="list_item">
                <div>
                    {testList[i].arr1[0]}
                </div>
                <Image src={"/vs_image.png"} alt={"VS"} height={60} width={60} className="list_image" />
                <div>
                    {testList[i].arr2[0]}
                </div>
            </Style.ListItem>)
        }

        return result;
    }

    return (
        <Style.MatchList>
            {testListActive()}
        </Style.MatchList>
    )
}

export default MatchList;
