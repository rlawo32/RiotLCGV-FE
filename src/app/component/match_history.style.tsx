import styled from "styled-components";

export const MatchHistory = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    table {
        margin: 5px;
        border-collapse: collapse;
        table-layout: fixed
        background-color: indigo;

        tr {
            border-bottom: 1px solid #3d96ff;
        }

        td {
            padding: 3px 2px;
            text-align: center;
        }

        th {
            padding: 4px;
            font-size: 14px;
        }

        .lcg_common {
            font-size: 11px;
        }

        .lcg_champion {
            position: relative;
        }

        .lcg_level {
            position: absolute;
            bottom: 12px;
            left: 3px;
            padding: 2px 4px 2px 2px;
            font-size: 10px;
            background-color: black;
            border-radius: 50%;
        }

        .lcg_summoner_name {
            width: 60px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
        }

        .lcg_ward {

            .lcg_ward_count {
                margin-top: 3px;
            }
        }

        .lcg_item {
            display: flex;
            flex-wrap: wrap;
        }

        .lcg_image {
            margin: 1px 0;
            border-radius: 10px;
        }
        
        .item_image {
            margin: 2px;
            border-radius: 10px;
        }

        .empty_image {
            height: 24px;
            width: 24px;
            border: 1px solid grey;
        }

        .champion_image {
            margin: 0 3px 0 0;
        }

        .spell_image {
            margin: 0;
        }

        .perk_image1 {
            margin-top: 2px;
        }

        .perk_image2 {
            margin: 2px 0 5px;
        }

        .lcg_minute_cs {
            margin: 2px 0;
            font-size: 10px;        
        }
    }
`;

export const MatchHistoryTeam = styled('table')`
    display: flex;
    flex-direction: column;
`;

export const MatchHistoryMain = styled('tr')`

    
`;