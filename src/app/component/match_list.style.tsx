import styled from "styled-components";

export const MatchList = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    margin: auto;
`;

export const ListItem = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 850px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to right, 
    rgba(50,10,245,0.8) 15%, 
    rgba(20,20,20,0.8) 50%, 
    rgba(245,10,50,0.8) 85%);
`;