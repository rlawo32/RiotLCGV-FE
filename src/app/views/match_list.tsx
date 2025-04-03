'use client';

import * as Style from "./match_list.style";
import * as MainStyle from "./main_view.style"

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getLcgMatchLogQuery, getLcgMatchLogPagingQuery, getLcgMatchLogTotalQuery } from "../queries/getLcgMatchLogQuery";
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
    const [load, setLoad] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const { data: totalData } = useQuery(getLcgMatchLogTotalQuery(supabase));
    const { data: lcgMatchLog, isLoading: loading, isError: dataError, error: errorMsg } = useQuery(getLcgMatchLogPagingQuery(supabase, page));
    
    useEffect(() => {
        let loadTime:number = 0;
        if(!loading) {
            loadTime += 1000;
        } else if (dataError) {
            console.log(errorMsg);
        } else {
            loadTime = 0;
        }
        setTimeout(() => {setLoad(true)}, loadTime);
    }, [lcgMatchLog])

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

    const pagination = ():any[] => {
        const result:any[] = [];

        if(!!totalData) {
            const totalPage:number = Math.ceil(totalData.length / 10);
            for(let i:number=1; i<=totalPage; i++) {
                result.push(<button onClick={() => setPage(i)} key={"btn_" + i} className="page_btn">{i}</button>)
            }
        }

        return result;
    }

    return (
        <Style.MatchList>
            {
                !load ? <LoadingSpinner /> : 
                    <>
                        <Style.ListContainer>
                            {lcgMatchLog?.map((lcgLog, idx) => {
                                return (
                                    <Style.ListItem key={lcgLog.lcg_game_id}>
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
                                </Style.ListItem>
                                )
                            })}
                        </Style.ListContainer>
                        <MainStyle.Pagination>
                            {pagination()}
                        </MainStyle.Pagination>
                    </>
            }
        </Style.MatchList>
    )
}

export default MatchList;
