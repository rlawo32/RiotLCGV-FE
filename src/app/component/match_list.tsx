'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import Image from "next/image";

import * as Style from "./match_list.style";

import MatchHistory from "./match_history";

const MatchList = () => {
    const client:any = supabase();
    const matchHistoryRef:any = useRef<any>([]);

    const [selectGameId, setSelectGameId] = useState<number>(0);
    const [lcgMatchLog, setLcgMatchLog] = useState<{
        lcg_game_id:number, lcg_game_win:number, lcg_game_date:string, lcg_game_ver:string, lcg_game_duration:number,
        team_a_name_1:string, team_a_name_2:string, team_a_name_3:string, team_a_name_4:string, team_a_name_5:string,
        team_b_name_1:string, team_b_name_2:string, team_b_name_3:string, team_b_name_4:string, team_b_name_5:string
    }[]>([]);

    const matchListBoxClick = (gameId:number, idx:number) => {
        setSelectGameId(gameId);

        if(!matchHistoryRef.current[idx].className.includes('view_active')) {
            matchHistoryRef.current[idx].className += ' view_active';
        } else {            
            matchHistoryRef.current[idx].className = matchHistoryRef.current[idx].className.replace(' view_active', '');
        }

        for(let i:number=0; i<matchHistoryRef.current.length; i++) {
            if(i !== idx) {
                matchHistoryRef.current[i].className = matchHistoryRef.current[i].className.replace(' view_active', '');
            }
        }
    }

    const matchHistoryList= ():any[] => {
        let result:any[] = []

        for(let i=0; i<lcgMatchLog.length; i++) {
            result.push(
            <Style.ListContainer key={lcgMatchLog[i].lcg_game_id} onClick={() => setSelectGameId(lcgMatchLog[i].lcg_game_id)}>
                <Style.ListBox onClick={() => matchListBoxClick(lcgMatchLog[i].lcg_game_id, i)}>
                    <div className="box_head">
                        {(lcgMatchLog[i].lcg_game_date).substring(0, 10)}
                    </div>
                    <div className="box_body">
                        <div className="box_player body_left">
                            {lcgMatchLog[i].lcg_game_win === 100 ? <Image src={"/win_image.png"} alt={"WIN"} height={70} width={70} className="item_win left_icon" /> : <div className="item_win" />} 
                            <div>
                                {lcgMatchLog[i].team_a_name_1}&nbsp;/&nbsp;
                                {lcgMatchLog[i].team_a_name_2}&nbsp;/&nbsp; 
                                {lcgMatchLog[i].team_a_name_3}&nbsp;/&nbsp; 
                                {lcgMatchLog[i].team_a_name_4}&nbsp;/&nbsp; 
                                {lcgMatchLog[i].team_a_name_5}
                            </div>                        
                        </div>
                        <div className="body_center">
                            <Image src={"/vs_image.png"} alt={"VS"} height={70} width={70} className="list_image" />
                            <div className="box_time">
                                {Math.floor(lcgMatchLog[i].lcg_game_duration / 60)}:{String(lcgMatchLog[i].lcg_game_duration % 60).padStart(2, '0')}
                            </div>
                        </div>
                        <div className="box_player body_right">
                            <div>
                                {lcgMatchLog[i].team_b_name_1}&nbsp;/&nbsp;
                                {lcgMatchLog[i].team_b_name_2}&nbsp;/&nbsp;
                                {lcgMatchLog[i].team_b_name_3}&nbsp;/&nbsp;
                                {lcgMatchLog[i].team_b_name_4}&nbsp;/&nbsp;
                                {lcgMatchLog[i].team_b_name_5}
                            </div>
                            {lcgMatchLog[i].lcg_game_win === 200 ? <Image src={"/win_image.png"} alt={"WIN"} height={70} width={70} className="box_win right_icon" />  : <div className="item_win" />} 
                        </div>
                    </div>
                    <div className="box_foot">
                        Ver. {lcgMatchLog[i].lcg_game_ver}
                    </div>
                </Style.ListBox>
                <div className="matchHistory_box" ref={(mh:any) => (matchHistoryRef.current[i] = mh)}>
                    <MatchHistory gameId={selectGameId} />    
                </div>
            </Style.ListContainer>)
        }

        return result;
    }

    useEffect(() => {
        const lcgTeamLogQuery = async():Promise<any> => {
            let {data:lcg_team_log, error} = await client
                .from("lcg_team_log")
                .select("*")

            return lcg_team_log;
        }

        lcgTeamLogQuery().then((data) => {
            setLcgMatchLog(data);
        });
    }, [])

    return (
        <Style.MatchList>
            {matchHistoryList()}
        </Style.MatchList>
    )
}

export default MatchList;
