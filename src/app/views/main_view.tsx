'use client'

import * as Style from "./main_view.style";

import MatchList from "./match_list";
import MatchRanking from "../ranking/match_ranking";
import MatchLatestHistory from "./match_latest_history";
import MainSidebar from "./main_sidebar";
import { useState } from "react";
import ErrorPageRes from "../component/error_page";

const MainView = () => {

    const [selectView, setSelectView] = useState<number>(0);

    const changeViewHandler = (select:number) => {
        setSelectView(select);
    }

    return (
        <Style.MainView>
            <div className="main_container">
                <MainSidebar changeView={changeViewHandler} />
                {
                    // <ErrorPageRes errorCode={""} errorMessage={""} />
                    selectView === 0 ? <MatchLatestHistory /> :
                    selectView === 1 ? <MatchList /> :
                    selectView === 2 ? <MatchRanking /> : 
                    selectView === 3 ? <h1>개발중...</h1> : <></>
                }
            </div>
        </Style.MainView>
    )
}

export default MainView;