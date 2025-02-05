'use client'

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub as github} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const GithubStyle = styled('div')`
    position: absolute;
    top: 10px;
    left: 10px;
    height: 25px;
    width: 25px;
    border-radius: 15px;

    .icon_github {
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