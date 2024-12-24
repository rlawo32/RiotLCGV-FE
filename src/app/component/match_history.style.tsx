import styled from "styled-components";

export const MatchHistory = styled('div')`
    display: flex;
    align-items: center;
    width: 1440px;
    margin: auto;

    table {
        margin: 5px;
        border-collapse: collapse;
        background-color: indigo;

        tr {
            border: 1px solid white;
        }

        td {
            text-align: center;
        }
        
        .lcg_kda {
            font-size: 14px;
        }

        .lcg_item {
            display: flex;
            flex-wrap: wrap;
        }

        .lcg_image {
            margin: 1px;
            border-radius: 10px;
        }
        
        .item_image {
            margin: 1px;
            border-radius: 10px;
        }

        .empty_image {
            height: 25px;
            width: 25px;
            border: 1px solid black;
        }

        .champion_image {
            margin: 0 3px 0 0;
        }

        .spell_image {
            margin: 0;
        }

        .perk_image1 {
            margin-top: 4px;
        }

        .perk_image2 {
            margin: 2px 0 4px;
        }
    }
`;

export const MatchHistoryTeam = styled('table')`
    display: flex;
    flex-direction: column;
`;

export const MatchHistoryMain = styled('tr')`

    
`;