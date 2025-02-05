'use client'

import * as Style from "./main_view.style";

import MatchList from "./match_list";
import MatchRanking from "../ranking/match_ranking";
import MatchLatestHistory from "./match_latest_history";
import MainSidebar from "./main_sidebar";

const MainView = () => {

    return (
        <Style.MainView>
            <div className="main_container">
                <MainSidebar />
                <MatchLatestHistory />
            </div>
        </Style.MainView>
    )
}

export default MainView;