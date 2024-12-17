'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";

// import * as Styled from "./page.style";

const MatchList = () => {
    const client:any = supabase();

    const [locationData, setLocationData] = useState<string>("");
    
    useEffect(() => {
        const lcgMatchMain = async():Promise<any> => {
            let {data:lcg_match_main, error} = await client
                .from("lcg_match_main")
                .select("*")
                .eq("lcg_game_id", 7389173588)

            return lcg_match_main;
        }

        lcgMatchMain().then((data) => {
            console.log(data);
        });
    }, [])

    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default MatchList;
