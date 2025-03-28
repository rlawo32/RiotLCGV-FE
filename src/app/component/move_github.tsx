'use client'

import styled from "styled-components";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub as github} from "@fortawesome/free-brands-svg-icons";

const GithubStyle = styled('div')`
    // mobile_view
    @media (max-width: 700px) {
        top: 5px;
        left: 5px;
        height: 15px;
        width: 15px;
    }
    position: absolute;
    top: 10px;
    left: 10px;
    height: 25px;
    width: 25px;
    border-radius: 15px;

    .icon_github {
        // mobile_view
        @media (max-width: 700px) {
            height: 15px;
            width: 15px;
        }
        height: 25px;
        width: 25px;
    }
`

const MoveGithub = () => {

    return (
        <GithubStyle>
            <Link href={"https://github.com/rlawo32/RiotLCGV-FE"} target="_blank">  
                <FontAwesomeIcon icon={github} className="icon_github" />
            </Link>
        </GithubStyle>
    )
}

export default MoveGithub;