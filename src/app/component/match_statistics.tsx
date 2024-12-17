'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";

// import * as Styled from "./page.style";

const MatchStatistics = () => {
    const client:any = supabase();

    const [locationData, setLocationData] = useState<string>("");
    
    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default MatchStatistics;
