import styled from "styled-components";

export const MatchHistory = styled('div')`
    display: flex;
    align-items: center;
    width: 1440px;
    margin: auto;

    table {

        td {
            text-align: center;
        }

        .lcg_item {
            display: flex;
            flex-wrap: wrap;
        }
        
        .lcg_image {
            margin: 1px;
            border-radius: 10px;
        }

        .empty_image {
            height: 30px;
            width: 30px;
            border: 1px solid black;
        }

        .champion_image {
            margin: 0 3px 0 0;
        }

        .spell_image {
            margin: 0;
        }

        .perk_image {
            margin: 0 0 4px 0;
        }
    }
`;

export const MatchHistoryTeam = styled('table')`
    display: flex;
    flex-direction: column;
`;

export const MatchHistoryMain = styled('tr')`

    
`;