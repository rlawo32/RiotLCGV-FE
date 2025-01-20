'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const GithubStyle = styled('div')`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    border-radius: 15px;
    background-color: #B7B7C9;
`

const MoveGithub = () => {

    return (
        <GithubStyle>
            <Link href={"https://github.com/rlawo32/RiotLCGV-FE"} target="_blank">  
                <Image src={"/img/github.png"} alt={"GITHUB"} height={25} width={50} className="move_github" />
            </Link>
        </GithubStyle>
    )
}

export default MoveGithub;