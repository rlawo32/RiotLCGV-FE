'use client';

import * as Style from "./match_list.style";

import { useRef, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgMatchLogQuery } from "../queries/getLcgMatchLogQuery";
import useSupabaseBrowser from "../supabase-browser";

import LoadingSpinner from "../component/loading_spinner";
import MatchHistory from "./match_history";

import TeamBlueIcon from "../icons/TeamBlueIcon";
import TeamRedIcon from "../icons/TeamRedIcon";

const MatchList = () => {
    const supabase = useSupabaseBrowser();
    const matchListRef:any = useRef<any>([]);
    const matchHistoryRef:any = useRef<any>([]);

    const [selectGameId, setSelectGameId] = useState<number>(0);
    const [selectIdx, setSelectIdx] = useState<number>(-1);

    const { data: lcgMatchLog, isLoading, isError } = useQuery(getLcgMatchLogQuery(supabase));

    if (isLoading) {
        return <LoadingSpinner />
    }
    
    if (isError || !lcgMatchLog) {
        return <div>Error</div>
    }

    const matchListBoxClick = (gameId:number, idx:number) => {
        setSelectGameId(gameId);
        setSelectIdx(idx);

        if(!matchListRef.current[idx].className.includes('viewList_active')) {
            matchListRef.current[idx].className += ' viewList_active';
            matchHistoryRef.current[idx].className += ' view_active';
        } else {            
            matchListRef.current[idx].className = matchListRef.current[idx].className.replace(' viewList_active', '');
            matchHistoryRef.current[idx].className = matchHistoryRef.current[idx].className.replace(' view_active', '');
        }

        for(let i:number=0; i<matchListRef.current.length; i++) {
            if(i !== idx) {
                matchListRef.current[i].className = matchListRef.current[i].className.replace(' viewList_active', '');
                matchHistoryRef.current[i].className = matchHistoryRef.current[i].className.replace(' view_active', '');
            }
        }
    }

    return (
        <Style.MatchList>
            {lcgMatchLog?.map((lcgLog, idx) => {
                return (
                    <Style.ListContainer key={lcgLog.lcg_game_id}>
                        <Style.ListBox onClick={() => matchListBoxClick(lcgLog.lcg_game_id, idx)} ref={(ml:any) => (matchListRef.current[idx] = ml)}>
                            <div className="box_head">
                                {(lcgLog.lcg_game_date).substring(2, 4)}. {(lcgLog.lcg_game_date).substring(5, 7)}. {(lcgLog.lcg_game_date).substring(8, 10)}.
                                <div className="box_ver">
                                    Ver. {lcgLog.lcg_game_ver}
                                </div>
                            </div>
                            <div className="box_body">
                                <div className="box_player body_left">
                                    <div className="player">
                                        {lcgLog.team_a_name_1}&nbsp;-&nbsp;
                                        {lcgLog.team_a_name_2}&nbsp;-&nbsp; 
                                        {lcgLog.team_a_name_3}&nbsp;-&nbsp; 
                                        {lcgLog.team_a_name_4}&nbsp;-&nbsp; 
                                        {lcgLog.team_a_name_5}
                                    </div>            
                                    <TeamBlueIcon />            
                                </div>
                                <div className="body_center">
                                    <div className="box_vs">
                                        <strong>VS</strong>
                                    </div>
                                </div>
                                <div className="box_player body_right">
                                    <TeamRedIcon />
                                    <div className="player">
                                        {lcgLog.team_b_name_1}&nbsp;-&nbsp;
                                        {lcgLog.team_b_name_2}&nbsp;-&nbsp;
                                        {lcgLog.team_b_name_3}&nbsp;-&nbsp;
                                        {lcgLog.team_b_name_4}&nbsp;-&nbsp;
                                        {lcgLog.team_b_name_5}
                                    </div>
                                </div>
                            </div>
                            <div className="box_foot">
                                Ver. {lcgLog.lcg_game_ver}
                            </div>
                        </Style.ListBox>
                        <div className="matchHistory_box" ref={(mh:any) => (matchHistoryRef.current[idx] = mh)}>
                            {selectIdx === idx && <MatchHistory gameId={selectGameId} />}  
                        </div>
                </Style.ListContainer>
                )
            })}
        </Style.MatchList>
    )
}

export default MatchList;
