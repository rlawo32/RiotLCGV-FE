'use client';

import { useRef, useState } from "react";
import useSupabaseBrowser from "../supabase-browser";
import Image from "next/image";

import * as Style from "./match_list.style";

import MatchHistory from "./match_history";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgMatchLogQuery } from "../queries/getLcgMatchLogQuery";

const MatchList = () => {
    const supabase = useSupabaseBrowser();
    const matchHistoryRef:any = useRef<any>([]);

    const [selectGameId, setSelectGameId] = useState<number>(0);
    const [selectIdx, setSelectIdx] = useState<number>(-1);

    const { data: lcgMatchLog, isLoading, isError, error } = useQuery(getLcgMatchLogQuery(supabase));

    if (isLoading) {
        return <div>Loading...</div>
    }
    
    if (isError || !lcgMatchLog) {
        return <div>Error</div>
    }

    const matchListBoxClick = (gameId:number, idx:number) => {
        setSelectGameId(gameId);
        setSelectIdx(idx);

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
        const result:any[] = []

        for(let i=0; i<lcgMatchLog.length; i++) {
            result.push()
        }

        return result;
    }

    return (
        <Style.MatchList>
            {lcgMatchLog?.map((lcgLog, idx) => {
                return (
                    <Style.ListContainer key={lcgLog.lcg_game_id} onClick={() => {setSelectGameId(lcgLog.lcg_game_id)}}>
                        <Style.ListBox onClick={() => matchListBoxClick(lcgLog.lcg_game_id, idx)}>
                            <div className="box_inner">
                                <div className="box_head">
                                    {(lcgLog.lcg_game_date).substring(0, 10)}
                                </div>
                                <div className="box_body">
                                    <div className="box_player body_left">
                                        {lcgLog.lcg_game_win === 100 ? <Image src={"/win_image.png"} alt={"WIN"} height={70} width={70} className="box_win left_icon" /> : <div className="item_win" />} 
                                        <div>
                                            {lcgLog.team_a_name_1}&nbsp;/&nbsp;
                                            {lcgLog.team_a_name_2}&nbsp;/&nbsp; 
                                            {lcgLog.team_a_name_3}&nbsp;/&nbsp; 
                                            {lcgLog.team_a_name_4}&nbsp;/&nbsp; 
                                            {lcgLog.team_a_name_5}
                                        </div>                        
                                    </div>
                                    <div className="body_center">
                                        <Image src={"/vs_image.png"} alt={"VS"} height={70} width={70} className="list_image" />
                                        <div className="box_time">
                                            {Math.floor(lcgLog.lcg_game_duration / 60)}:{String(lcgLog.lcg_game_duration % 60).padStart(2, '0')}
                                        </div>
                                    </div>
                                    <div className="box_player body_right">
                                        <div>
                                            {lcgLog.team_b_name_1}&nbsp;/&nbsp;
                                            {lcgLog.team_b_name_2}&nbsp;/&nbsp;
                                            {lcgLog.team_b_name_3}&nbsp;/&nbsp;
                                            {lcgLog.team_b_name_4}&nbsp;/&nbsp;
                                            {lcgLog.team_b_name_5}
                                        </div>
                                        {lcgLog.lcg_game_win === 200 ? <Image src={"/win_image.png"} alt={"WIN"} height={70} width={70} className="box_win right_icon" /> : <div className="item_win" />} 
                                    </div>
                                </div>
                                <div className="box_foot">
                                    Ver. {lcgLog.lcg_game_ver}
                                </div>
                            </div>
                            <div className="box_outer" />
                        </Style.ListBox>
                        <div className="matchHistory_box" ref={(mh:any) => (matchHistoryRef.current[idx] = mh)}>
                            <div className="box_inner">
                                {selectIdx === idx && <MatchHistory gameId={selectGameId} />}    
                            </div>
                            <div className="box_outer" />
                        </div>
                </Style.ListContainer>
                )
            })}
        </Style.MatchList>
    )
}

export default MatchList;
