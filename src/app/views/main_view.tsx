'use client'

import * as Style from "./main_view.style";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import MatchList from "./match_list";
import MatchRanking from "../ranking/match_ranking";
import MatchLatestHistory from "./match_latest_history";
import MainSidebar from "./main_sidebar";
import MatchShuffle from "./match_shuffle";
import MatchPlayer from "./match_player";
import PatchNote from "./patch_note";
import MatchPlayerV2 from "./match_player_v2";
import MainHeader from "./main_header";

const MainView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const viewPlayerParam = searchParams.get('player');
    const viewShuffleParam = searchParams.get('shuffle');
    
    const getInitialView = () => {
        if (viewPlayerParam !== null) return 3;
        if (viewShuffleParam !== null) return 4;
        return 0;
    };

    const [selectView, setSelectView] = useState<number>(getInitialView);

    const changeViewHandler = (select:number) => {
        setSelectView(select);
        router.replace(pathname, { scroll: false });
    }

    /*
    useEffect(() => {
        if (viewPlayerParam !== null) {
            setSelectView(3);
        }
        if (viewShuffleParam !== null) {
            setSelectView(4);
        }
    }, [viewPlayerParam, viewShuffleParam]);
    */

    return (
        <Style.MainView>
            <div className="main_container">
                {/* <MainSidebar selectView={selectView} changeView={changeViewHandler} /> */}
                <MainHeader selectView={selectView} changeView={changeViewHandler} />
                {
                    // <ErrorPageRes errorCode={""} errorMessage={""} />
                    selectView === 0 ? <MatchLatestHistory /> :
                    selectView === 1 ? <MatchList /> :
                    selectView === 2 ? <MatchRanking /> : 
                    selectView === 3 ? <MatchPlayerV2 directPlayer={viewPlayerParam} /> : 
                    selectView === 4 ? <PatchNote /> : 
                    selectView === 5 ? <MatchShuffle /> : <></>
                }
            </div>
        </Style.MainView>
    )
}

export default MainView;
