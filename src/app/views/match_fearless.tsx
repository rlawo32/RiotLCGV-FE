'use client'

import * as Style from "./match_fearless.style";

import { useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgMatchLogLatestQuery } from "../queries/getLcgMatchLogQuery";
import { getLcgMatchInfoQuery } from "../queries/getLcgMatchInfoQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getLcgMatchMainFearlessQuery } from "../queries/getLcgMatchMainQuery";

const MatchFearless = () => {

    const supabase = useSupabaseBrowser();
    let gameId:number = 0;
    let date:string = "";
    let gameSet:string = "";
    // let imageUrl:string = ""; // R2
    let imageUrl1:string = ""; // ddragon
    let imageUrl2:string = ""; // ddragon

    const { data: lcgMatchLog } = useQuery(getLcgMatchLogLatestQuery(supabase));
    if(!!lcgMatchLog) {
        gameId = lcgMatchLog[0].lcg_game_id;
        const calcDay = new Date(new Date().getTime() - 4 * 60 * 60 * 1000);
        gameSet = (calcDay.getMonth()+1) + "/" + calcDay.getDate();
        // gameSet = "9/21";
        date = lcgMatchLog[0].lcg_game_date.split("/")[0];
    } 

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {enabled:!!lcgMatchLog});
    const { data: lcgMatchMain } = useQuery(getLcgMatchMainFearlessQuery(supabase, gameSet), {enabled:!!lcgMatchEtc});

    if(!!lcgMatchEtc && !!lcgMatchMain) {
        gameSet = lcgMatchMain[0].lcg_game_set;
        imageUrl1 = lcgMatchEtc[0].lcg_main_image;
        imageUrl2 = lcgMatchEtc[0].lcg_sub_image;
        // imageUrl = lcgMatchEtc[0].lcg_r2_image;
    }

    return (
        
        <Style.MatchFearless>
            {
                lcgMatchLog && lcgMatchMain ?
                    <>
                        <div className="fearless_date">
                            {date}
                        </div>
                        <div className="fearless_list">
                            {
                                lcgMatchMain.map((gameSet, idx1) => {
                                    return (
                                        <div className="fearless_box" key={idx1}>
                                            {
                                                String(idx1).includes("0") ?
                                                    <>
                                                        <div className="game_set">
                                                            {Number(gameSet.lcg_game_set.split("_")[1])} 세트
                                                        </div>
                                                        <div className="champion_list">
                                                            {
                                                                lcgMatchMain.filter((item) => item.lcg_game_set === gameSet.lcg_game_set)
                                                                            .sort((a, b) => a.lcg_line_order - b.lcg_line_order)
                                                                            .map((fearless, idx2) => {
                                                                    return (
                                                                        <div className="champion_item" key={idx2}>
                                                                            <img src={imageUrl1 + "champion/" + fearless.lcg_champion_name + ".png"} 
                                                                                alt={"champion"} className="champion_img" />
                                                                            {
                                                                                idx2 === 4 ? <div>/</div> : <></>
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </>
                                                    :
                                                    <></>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    :
                    <></>
            }
        </Style.MatchFearless>
    )
}

export default MatchFearless;
