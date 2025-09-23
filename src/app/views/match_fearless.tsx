'use client'

import * as Style from "./match_fearless.style";

import { useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgMatchLogLatestQuery } from "../queries/getLcgMatchLogQuery";
import { getLcgMatchInfoQuery } from "../queries/getLcgMatchInfoQuery";
import { getLcgMatchEtcQuery } from "../queries/getLcgMatchEtcQuery";
import { getLcgMatchMainQuery } from "../queries/getLcgMatchMainQuery";

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
        date = lcgMatchLog[0].lcg_game_date.split("/")[0];
    } 

    const { data: lcgMatchEtc } = useQuery(getLcgMatchEtcQuery(supabase), {enabled:!!lcgMatchLog});
    const { data: lcgMatchMain } = useQuery(getLcgMatchMainQuery(supabase, gameId), {enabled:!!lcgMatchEtc});

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
                    <div>
                        <div>
                            {date}
                        </div>
                        <div>
                            {
                                lcgMatchMain.map((lcgMain, idx) => {
                                    return (
                                        <div>
                                            {
                                                String(idx).includes("0") ?
                                                    <div>
                                                        {Number(lcgMain.lcg_game_set.split("_")[1])} 세트
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                            <div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <></>
            }
        </Style.MatchFearless>
    )
}

export default MatchFearless;