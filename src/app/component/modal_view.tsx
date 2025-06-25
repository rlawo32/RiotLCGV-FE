'use client'

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ModalViewStyle = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border: 1px solid red;
`

const ModalView = (props:{ isModal: boolean, setIsModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const modalRef:any = useRef<any>();
    
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {

        const res = await fetch('/api/openai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: `다음은 LOL 유저의 데이터입니다 : \n\n
                ${JSON.stringify({
                    tier : 'GOLD 2',
                    winRate : '31W/28L (52.5%)',
                    avgKda : '2.96 (avgKill 6.2 / avgDeath 5.5 / avgAssist 10.1)',
                    avgVision : 42.4,
                    avgDamage : 18180.7,
                    avgTakenDamage : 30714.8,
                    countMvp : 8,
                    countAce : 6,
                    positionWinRate : {
                        top : '7W/7L (50%)',
                        jug : '9W/9L (50%)',
                        mid : '2W/5L (28.6%)',
                        adc : '2W/1L (66.7%)',
                        sup : '10W/7L (58.8%)',
                    },
                    additionalData : {
                        dpm : 606.1,
                        gpm : 371.3,
                        dpg : 1.5,         
                    }
                })}
                \n\n이 유저의 플레이 스타일, 강점, 약점을 요약해주고 평가해줘`,
                maxToken: 700,
            }),
        });

        
        const data = await res.json();
        console.log(data);
        setResponse(data.result);
    };

    useEffect(()=>{
        if(props.isModal) {
            handleSubmit();
        }
    }, [props.isModal])

    useEffect(()=>{
        const handleClickOutside = (e:MouseEvent)=> {
            if(modalRef.current && !modalRef.current.contains(e.target)) {
                props.setIsModal(false);
            }
        }
        window.addEventListener('mousedown',handleClickOutside)

        return()=>{
            window.removeEventListener('mousedown',handleClickOutside)
        }
    })
    
    return (
        <ModalViewStyle ref={modalRef}>
            {response}
        </ModalViewStyle>
    )
}

export default ModalView;
