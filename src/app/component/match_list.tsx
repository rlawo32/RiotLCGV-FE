'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import Image from "next/image";

import * as Style from "./match_list.style";

const MatchList = () => {
    const client:any = supabase();

    const [testList, setTestList] = useState<{key:number, id:number, win:number, 
        time:number, date:string, ver:string, arr1:string[], arr2:string[]}[]>([{
        key: 1001,
        id: 7389173588,
        win: 200,
        time: 1412,
        date: '2024-11-28/11:28:39',
        ver: '14.24.1',
        arr1: ['광호', '성재', '승준', '지훈', '인석'],
        arr2: ['해용', '문석', '재섭', '대훈', '현석'],
    }, {
        key: 1002,
        id: 7389173588,
        win: 100,
        time: 1742,
        date: '2024-11-28/12:22:41',
        ver: '14.24.1',
        arr1: ['광호', '성재', '승준', '지훈', '인석'],
        arr2: ['해용', '문석', '재섭', '대훈', '현석'],
    }, {
        key: 1003,
        id: 7389173588,
        win: 200,
        time: 1851,
        date: '2024-11-29/10:18:38',
        ver: '14.24.1',
        arr1: ['광호', '성재', '승준', '지훈', '인석'],
        arr2: ['해용', '문석', '재섭', '대훈', '현석'],
    }, {
        key: 1004,
        id: 7389173588,
        win: 100,
        time: 1527,
        date: '2024-11-29/11:31:02',
        ver: '14.24.1',
        arr1: ['광호', '성재', '승준', '지훈', '인석'],
        arr2: ['해용', '문석', '재섭', '대훈', '현석'],
    }, {
        key: 1005,
        id: 7389173588,
        win: 100,
        time: 2006,
        date: '2024-12-01/09:07:53',
        ver: '14.24.1',
        arr1: ['광호', '성재', '승준', '지훈', '인석'],
        arr2: ['해용', '문석', '재섭', '대훈', '현석'],
    },]);
    const [selectGameId, setSelectGameId] = useState<number>();
    
    const testListActive = ():any[] => {
        let result:any[] = []

        for(let i=0; i<testList.length; i++) {
            result.push(
            <>

            <Style.ListItem key={testList[i].key} onClick={() => setSelectGameId(testList[i].id)}>
                <div className="item_head">
                    {(testList[i].date).substring(0, 10)}
                </div>
                <div className="item_body">
                    <div className="item_player body_left">
                        {testList[i].win === 100 ? <Image src={"/win_image.png"} alt={"WIN"} height={70} width={70} className="item_win left_icon" /> : <div className="item_win" />} 
                        <div>
                            {testList[i].arr1[0]} / {testList[i].arr1[1]} / {testList[i].arr1[2]} / {testList[i].arr1[3]} / {testList[i].arr1[4]}
                        </div>                        
                    </div>
                    <div className="body_center">
                        <Image src={"/vs_image.png"} alt={"VS"} height={70} width={70} className="list_image" />
                        <div className="item_time">{Math.floor(testList[i].time / 60)}:{String(testList[i].time % 60).padStart(2, '0')}</div>
                    </div>
                    <div className="item_player body_right">
                        <div>
                            {testList[i].arr2[0]} / {testList[i].arr2[1]} / {testList[i].arr2[2]} / {testList[i].arr2[3]} / {testList[i].arr2[4]}
                        </div>
                        {testList[i].win === 200 ? <Image src={"/win_image.png"} alt={"WIN"} height={70} width={70} className="item_win right_icon" />  : <div className="item_win" />} 
                    </div>
                </div>
                <div className="item_foot">
                    Ver. {testList[i].ver}
                </div>
            </Style.ListItem>
            <div><h1>HELLO</h1></div>
            </>)
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
