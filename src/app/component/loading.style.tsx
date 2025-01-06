import styled from "styled-components";

export const SkeletonUi = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    table {
        margin: 3px;
        color: white;
        table-layout: fixed;
        border-collapse: collapse;

        tr {
            border-bottom: 2px solid #3d96ff;
        }

        th {
            height: 30px;
            padding: 4px;
            font-size: 14px;
        }

        td {
            height: 64.8px;
            padding: 3px 2px;
        }

        .lcg_portrait {
            width: 65px;
        }

        .lcg_empty {
            width: 489px;
        }

        .skeleton_portrait {
            height: 80%;
            width: 80%;
            margin: auto;
            border-radius: 10px;
            animation: pulse 2s infinite ease-in-out;
        }

        .skeleton_content {
            height: 60%;
            width: 100%;
            margin: auto;
            border-radius: 10px;
            animation: pulse 2s infinite ease-in-out;
        }
    }

    @keyframes pulse {
        0% {
            background-color: #94a3b8;
        }

        50% {
            background-color: #cbd5e1;
        }

        100% {
            background-color: #94a3b8;
        }
    }
`