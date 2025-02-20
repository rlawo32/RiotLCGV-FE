
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