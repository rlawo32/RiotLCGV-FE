'use client'

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "./loading_spinner";

const ModalViewStyle = styled('div')`
    position: absolute;
    top: 15%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 550px;
    height: 600px;
    padding: 15px 20px;
    border: 2px solid #3d96ff;
    border-radius: 17px;
    color: #fff;
    font-size: 1.3rem;
    line-height: 1.5rem;
    background-color: rgba(18, 18, 11, 0.9);
    transform: translate(-50%, -15%);
    z-index: 99;

    .summary_title {
        padding: 20px 0 10px;
        margin-bottom: 15px;
        font-size: 2.3rem;
        font-weight: 700;
        text-align: center;
    }

    .summary_content {
        height: 100%;

        .content_item {
            margin-bottom: 5px;
        }
    }

    button {
        padding: 5px 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background-color: #3d96ff;
        }
    }

    hr {
        width: 99%;
        margin-bottom: 10px;
        border: 1px solid #3d96ff;
    }

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

interface ModalViewProps {  
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    aiSummaryVerify: string,
    aiSummaryContent: string,
    aiSummaryPrompt: {prompt:string, maxToken:number}
}

const ModalView = (props: ModalViewProps ) => {
    const modalRef:any = useRef<any>(null);
    const textRef:any = useRef<any>([]);
    const hasSubmittedRef:any = useRef(false);
    
    const [summaryContent, setSummaryContent] = useState<string>(props.aiSummaryContent);
    //const [summaryContent, setSummaryContent] = useState<string>("이 유저는 전반적으로 볼 때, 여러 포지션을 고르게 플레이하는 다재다능한 플레이어로 보입니다. - **플레이 스타일:** 이 유저는 지원(서포트) 포지션에서 가장 높은 승률 (58.8%)을 기록하고 있으며, 평균 어시스트가 10.1로 높은 것을 볼 때 팀원과 협력해서 플레이하는 스타일을 선호할 가능성이 높습니다. 또한, 평균 비전 점수가 42.4로 이는 상대적으로 좋은 지도 능력을 보여주는 지표입니다. - **강점:** - **지원 능력:** 서포트 포지션에서 안정적이며 높은 승률을 보이고 있습니다. - **협력 플레이:** 평균 어시스트가 높고, 여러 포지션에서 일정한 승률을 유지해 팀원에게 기여하는 능력이 뛰어납니다. - **MVP와 ACE 횟수:** 8번의 MVP와 6번의 ACE를 기록한 것으로 보아, 결정적인 순간에 영향력을 행사할 수 있는 능력도 있다고 평가할 수 있습니다. - **약점:** - **중앙(미드) 포지션:** 미드에서 2승 5패로 낮은 승률을 기록하고 있어, 이 포지션에서의 플레이 개선이 필요합니다. - **데미지 기여:** 평균 피해량(18180.7)과 DPM(606.1)이 평균적인 수준으로, 직접적인 딜링에서 강력한 모습을 보이진 않습니다. - **평가:** 이 유저는 팀 플레이에 강점을 지닌 전형적인 팀플레이어로, 특히 서포트 포지션에서 두각을 나타냅니다. 미드 포지션의 부족한 경험 또는 기술을 보완한다면 더욱 균형 잡힌 플레이어가 될 수 있습니다. 각 포지션에 맞는 플레이 스타일을 더 발전시킨다면, 전반적인 승률 향상이 기대됩니다.");
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [hasSubmitted, setHasSubmitted] = useState(false); // 중복 호출 방지

    const handleSubmit = async () => {

        const res = await fetch('/api/openai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.aiSummaryPrompt),
        });
        
        const data = await res.json();
        console.log(data);
        if(data.status === 200) {
            setIsSuccess(true);
            setSummaryContent(data.result);
        }
    };

    const typing = (text:string, el:HTMLElement):Promise<void> => {
        return new Promise((resolve) => {
            let i: number = 0;
            el.innerHTML = "";

            const interval = setInterval(() => {
                if (i === text.length + 1) {
                    clearInterval(interval);
                    resolve(); // 완료 알림
                    return;
                }
                el.innerHTML = text.slice(0, i);
                i++;
            }, 10);
        });
    }

    useEffect(()=>{
        if(props.isModal && !hasSubmittedRef.current) {
            if(props.aiSummaryVerify === 'N') {
                handleSubmit();
                hasSubmittedRef.current= true;
            } else {
                setIsSuccess(true);
            }
        }
    }, [props.isModal])

    useEffect(()=>{
        if(isSuccess) {
            const runTyping = async () => {
                const dataArr:string[] = summaryContent
                    .replaceAll("점:**", "점**")
                    .replaceAll(":**", ":")
                    .split("-");

                for (let i:number=0; i<dataArr.length; i++) {
                    const el:HTMLElement = textRef.current[i];
                    const text:string = dataArr[i];
                    if(i === dataArr.length-1) {
                        await typing(text+"<span>|</span>", el);
                    } else {
                        await typing(text, el);
                    }
                }
            }
            runTyping();
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
            <div className="summary_title">
                유저 AI 요약
            </div>
            <hr/>
            <div className="summary_content">
                {
                    isSuccess ? 
                        <>
                            {
                                summaryContent.replaceAll("점:**", "점**").replaceAll(":**", ":").split("-").map((data, idx) => {
                                    return (
                                        <div ref={(te:any) => (textRef.current[idx] = te)} key={idx} className="content_item">
                                        </div>
                                    )
                                })
                            }
                        </> 
                        : 
                        <>
                            <LoadingSpinner />
                        </>
                }
            </div>
            <button onClick={() => props.setIsModal(false)}>
                닫기
            </button>
        </ModalViewStyle>
    )
}

export default ModalView;
