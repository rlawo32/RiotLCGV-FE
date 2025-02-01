import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgMatchInfoQuery } from "../queries/getLcgMatchInfoQuery";

export const lcgMatchInfoData = (gameId:number):{
    lcg_game_duration: number
    lcg_game_id: number
    lcg_max_damage_taken: number
    lcg_max_damage_total: number
    lcg_ver_cdn: string
    lcg_ver_lang: string
    lcg_ver_main: string
}[]|undefined|null|boolean => {
    const supabase = useSupabaseBrowser();
    const { data: lcgMatchInfo, isLoading: dataLoading, isError: dataError, error: errorMsg } = useQuery(getLcgMatchInfoQuery(supabase, gameId), {});

    if(!dataLoading) {
        console.log('InfoData Loading...');
    } else if (dataError) {
        console.log(errorMsg);
    } 
    return lcgMatchInfo;
}

export const gameDuration = (lcg_game_duration:number):number => {
    let minute:number = Math.floor(lcg_game_duration / 60);
    const second:number = lcg_game_duration % 60;
    if(second > 30) {
        minute += 1;
    }
    const lcgGameDuration:number = minute;

    return lcgGameDuration;
}

export const imgUrl = (lcgMatchInfo:{
    lcg_game_duration: number
    lcg_game_id: number
    lcg_max_damage_taken: number
    lcg_max_damage_total: number
    lcg_ver_cdn: string
    lcg_ver_lang: string
    lcg_ver_main: string
}, type:string):string => {
    let imageUrl:string = "";

    const lcgVerCdn = lcgMatchInfo.lcg_ver_cdn;
    const lcgVerMain = lcgMatchInfo.lcg_ver_main;

    if(type === 'A') {
        imageUrl = lcgVerCdn + "/" + lcgVerMain + "/img/";
    } else {
        imageUrl = lcgVerCdn + "/img/";
    }

    return imageUrl;
}

export const duplicationRank = (ea:number):number => {
    let size:number = 0;
    if(ea === 1) {
        size = 100;
    } else if(ea === 2) {
        size = 75;
    } else if(ea ===3) {
        size = 50;
    } else {
        size = 40;
    }
    return size;
}