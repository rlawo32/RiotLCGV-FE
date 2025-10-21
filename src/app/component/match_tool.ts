
export const getWinningRateCalc = (play:number, win:number):number => {
    let result:number = 0;
    if(play === 0 || win === 0) {
        result = 0;
    } else if(play === win) {
        result = 100;
    } else {
        result = Math.round(((win * 100) / play) * 10) / 10;
    }
    return result;
}

export const getCurrentTimeCalc = (time:string):string => {
    const currentTime:Date = new Date();
    const updateTime:Date = new Date(time);
    const calculationTime:number = Math.floor((currentTime.getTime() - updateTime.getTime()) / 1000);
    let result:string = "";

    if(calculationTime < 60) {
        result = "방금 전";
    } else if(calculationTime < (60 * 60)) {
        result = Math.floor(calculationTime / 60) + "분 전";
    } else if(calculationTime < (60 * 60 * 24)) {
        result = Math.floor(calculationTime / (60 * 60)) + "시간 전";
    } else if(calculationTime < (60 * 60 * 24 * 7)) {
        result = Math.floor(calculationTime / (60 * 60 * 24)) + "일 전";
    } else {
        result = updateTime.toLocaleString();
    }
    return result;
}

export const getGameDuration = (lcg_game_duration:number):number => {
    let minute:number = Math.floor(lcg_game_duration / 60);
    const second:number = lcg_game_duration % 60;
    if(second > 30) {
        minute += 1;
    }
    const lcgGameDuration:number = minute;

    return lcgGameDuration;
}

export const getPlayerData = (lcgPlayerData:{
    lcg_winning_streak: number
    lcg_player: string
    lcg_summoner_name: string
    lcg_summoner_nickname: string
    lcg_summoner_puuid: string
}[], puuid:string, flag:string):string|undefined => {
    let result:string|undefined = "";
    if(flag === 'name') {
        result = lcgPlayerData?.find((data) => data.lcg_summoner_puuid === puuid)?.lcg_summoner_name;
    } else if(flag === 'opgg') {
        const nickname = lcgPlayerData?.find((data) => data.lcg_summoner_puuid === puuid)?.lcg_summoner_nickname;
        result = nickname?.split("#")[0] + "-" + nickname?.split("#")[1];
    } else if(flag === 'nick') {
        result = lcgPlayerData?.find((data) => data.lcg_summoner_puuid === puuid)?.lcg_summoner_nickname;
    } else if(flag === 'streak') {
        result = String(lcgPlayerData?.find((data) => data.lcg_summoner_puuid === puuid)?.lcg_winning_streak);
    }
    return result;
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
