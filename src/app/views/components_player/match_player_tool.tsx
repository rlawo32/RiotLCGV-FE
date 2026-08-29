'use client'

import Rank1Icon from "@/app/icons/Rank1Icon";
import Rank2Icon from "@/app/icons/Rank2Icon";
import Rank3Icon from "@/app/icons/Rank3Icon";
import RankNIcon from "@/app/icons/RankNIcon";
import TopIcon from "@/app/icons/TopIcon";
import JugIcon from "@/app/icons/JugIcon";
import MidIcon from "@/app/icons/MidIcon";
import AdcIcon from "@/app/icons/AdcIcon";
import SupIcon from "@/app/icons/SupIcon";

export const RankIcon = (rank:number) => {
    if(rank === 1) {return <Rank1Icon />;} 
    else if(rank === 2) {return <Rank2Icon />;} 
    else if(rank === 3) {return <Rank3Icon />;} 
    else {return <RankNIcon rank={rank} />;} 
}

export const LaneIcon = (lane:string, best:boolean) => {
    if(lane === 'TOP') {return <TopIcon type={best ? "L" : ""} />;} 
    else if(lane === 'JUG') {return <JugIcon type={best ? "L" : ""} />;} 
    else if(lane === 'MID') {return <MidIcon type={best ? "L" : ""} />;} 
    else if(lane === 'ADC') {return <AdcIcon type={best ? "L" : ""} />;} 
    else if(lane === 'SUP') {return <SupIcon type={best ? "L" : ""} />;} 
}

export const LaneBest = (laneArr:any[]) => {
    return [...laneArr].sort((a, b) => {
        const aGames = a.win + a.fail;
        const bGames = b.win + b.fail;

        // 1순위: 판수 많은 순
        if (aGames !== bGames) {
            return bGames - aGames;
        }

        // 2순위: 승률 높은 순
        return b.rate - a.rate;
    })[0].lane;
}

// T : Tier, D : Division
export const unrankConv = (target:string, type:string) => {
    if(target === 'NA' && type === 'T') {return "Unranked";} 
    else if(target === 'NA' && type === 'D') {return "";} 
    else if(target !== 'NA') {return target;} 
}

type PositionData = {
    lcg_position_top_count: number;
    lcg_position_top_win: number;
    lcg_position_jug_count: number;
    lcg_position_jug_win: number;
    lcg_position_mid_count: number;
    lcg_position_mid_win: number;
    lcg_position_adc_count: number;
    lcg_position_adc_win: number;
    lcg_position_sup_count: number;
    lcg_position_sup_win: number;
};
export const lineDataExtract = (selectPlayerPostion:PositionData[]) => {
    const data = selectPlayerPostion[0];

    if (!data) {
        return [];
    }

    const lanes = [
        { lane: "TOP", key: "top" },
        { lane: "JUG", key: "jug" },
        { lane: "MID", key: "mid" },
        { lane: "ADC", key: "adc" },
        { lane: "SUP", key: "sup" },
    ] as const;


    return lanes.map(({ lane, key }) => {
        const count = data[`lcg_position_${key}_count`];
        const win = data[`lcg_position_${key}_win`];
        const fail = count - win;
        const rate = count > 0 ? Number(((win / count) * 100).toFixed(1)) : 0;

        return { lane, rate, win, fail, };
    });
}