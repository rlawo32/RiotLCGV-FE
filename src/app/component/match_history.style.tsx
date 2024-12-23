import styled from "styled-components";

export const MatchHistory = styled('div')`
    display: flex;
    align-items: center;
    width: 1000px;
    margin: auto;
`;

export const MatchHistoryTeam = styled('div')`
    display: flex;
    flex-direction: column;
    
`;

export const MatchHistoryMain = styled('div')`
    display: flex;
    flex-wrap: wrap;
    height: 87px;
    width: 500px;
    margin: 10px;

    .lcg_image {
        margin: 2px;
        border-radius: 10px;
    }

    .perk_image {
    
    }

    .item_image {
    }

    .empty_image {
        height: 40px;
        width: 40px;
        border: 1px solid black;
    }

    .lcg_champion {
        display: flex;
        align-items: center;
        justify-contents: center;
    }
    
    .lcg_spell {
        display: flex;   
        flex-direction: column;
    }

    .lcg_perk {
        display: flex;
        flex-direction: column;
    }

    .lcg_kda {
        display: flex;
        align-items: center;
        margin: 0 20px;
        font-size: 20px;
        font-weight: bold;
    }
    
    .lcg_item {
        display: flex;
        flex-wrap: wrap;

        .item_main {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 134px;
        }

        .item_sub {
            display: flex;
            align-items: center;
        }
    }
`;