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
    color: black;

    span {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const ModalView = (props:{ isModal: boolean, setIsModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const modalRef:any = useRef<any>();
    const textRef:any = useRef<any>([]);
    
    const [response, setResponse] = useState<string>("이 유저는 전반적으로 볼 때, 여러 포지션을 고르게 플레이하는 다재다능한 플레이어로 보입니다. - **플레이 스타일:** 이 유저는 지원(서포트) 포지션에서 가장 높은 승률 (58.8%)을 기록하고 있으며, 평균 어시스트가 10.1로 높은 것을 볼 때 팀원과 협력해서 플레이하는 스타일을 선호할 가능성이 높습니다. 또한, 평균 비전 점수가 42.4로 이는 상대적으로 좋은 지도 능력을 보여주는 지표입니다. - **강점:** - **지원 능력:** 서포트 포지션에서 안정적이며 높은 승률을 보이고 있습니다. - **협력 플레이:** 평균 어시스트가 높고, 여러 포지션에서 일정한 승률을 유지해 팀원에게 기여하는 능력이 뛰어납니다. - **MVP와 ACE 횟수:** 8번의 MVP와 6번의 ACE를 기록한 것으로 보아, 결정적인 순간에 영향력을 행사할 수 있는 능력도 있다고 평가할 수 있습니다. - **약점:** - **중앙(미드) 포지션:** 미드에서 2승 5패로 낮은 승률을 기록하고 있어, 이 포지션에서의 플레이 개선이 필요합니다. - **데미지 기여:** 평균 피해량(18180.7)과 DPM(606.1)이 평균적인 수준으로, 직접적인 딜링에서 강력한 모습을 보이진 않습니다. - **평가:** 이 유저는 팀 플레이에 강점을 지닌 전형적인 팀플레이어로, 특히 서포트 포지션에서 두각을 나타냅니다. 미드 포지션의 부족한 경험 또는 기술을 보완한다면 더욱 균형 잡힌 플레이어가 될 수 있습니다. 각 포지션에 맞는 플레이 스타일을 더 발전시킨다면, 전반적인 승률 향상이 기대됩니다.|");
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleSubmit = async () => {

        const res = await fetch('/api/openai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: `다음은 LOL 유저의 데이터입니다 : \n\n
                ${JSON.stringify({
                    tier : `GOLD 2`,
                    winRate : `31W/28L (52.5%)`,
                    avgKda : `2.96 (avgKill 6.2 / avgDeath 5.5 / avgAssist 10.1)`,
                    avgVision : 42.4,
                    avgDamage : 18180.7,
                    avgTakenDamage : 30714.8,
                    countMvp : 8,
                    countAce : 6,
                    positionWinRate : {
                        top : `7W/7L (50%)`,
                        jug : `9W/9L (50%)`,
                        mid : `2W/5L (28.6%)`,
                        adc : `2W/1L (66.7%)`,
                        sup : `10W/7L (58.8%)`,
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
        if(data.status === 200) {
            setIsSuccess(true);
            setResponse(data.result);
        }
    };

    const typing = (n:number, t:number) => {
        const str = textRef.current[n].innerHTML.toString();
        let i = 0;
        textRef.current[n].innerHTML = "";

        setTimeout(function() {
            setInterval(function() {
                if (i === str.length+1) {
                    return;
                }
                if (n === 0) {
                    textRef.current[n].innerHTML = str.slice(0, i) + '<span>|</span>';
                } else {
                    textRef.current[n].innerHTML = str.slice(0, i);
                }
                i++;
            }, 10);
        }, t);
    }

    useEffect(()=>{
        if(props.isModal) {
            // handleSubmit();
        }
    }, [props.isModal])

    useEffect(()=>{
        if(isSuccess) {
            typing(0, 30);
        }
    }, [isSuccess])

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
            <div ref={(te:any) => (textRef.current[0] = te)}>{response}</div>
        </ModalViewStyle>
    )
}

export default ModalView;
