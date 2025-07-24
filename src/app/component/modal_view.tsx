'use client'

import styled from "styled-components";

import React, { useEffect, useRef, useState } from "react";
import { useUpdateMutation } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import html2canvas from "html2canvas";

import LoadingSpinner from "./loading_spinner";

const ModalViewStyle = styled('div')`
    position: absolute;
    top: 10%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        width: 400px;
        height: 750px;
    }
    width: 550px;
    height: 650px;
    padding: 15px 20px;
    border: 2px solid #3d96ff;
    border-radius: 17px;
    color: #fff;
    font-size: 1.3rem;
    line-height: 1.5rem;
    letter-spacing: .02rem;
    background-color: rgba(18, 18, 11, 0.9);
    transform: translate(-50%, -15%);
    z-index: 99;

    .summary_title {
        padding: 15px 0;
        margin-bottom: 15px;
        font-size: 2.3rem;
        font-weight: 700;
        letter-spacing: .2rem;
        text-align: center;
    }

    .summary_content {
        height: 100%;

        .content_item {
            margin-bottom: 5px;
        }
    }

    .content_title {
        margin: 20px 0 10px;
        font-size: 1.6rem;
        font-weight: 700;
        color: #FF2E2E;
    }

    .content_item {
        
    }

    .content_last {
        line-height: 1.8rem;  
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
    selectPlayer: string,
    aiSummaryVerify: string,
    aiSummaryContent: string,
    aiSummaryPrompt: {prompt:string, maxToken:number}
}

const ModalView = (props: ModalViewProps ) => {
    const supabase = useSupabaseBrowser();
    const modalRef:any = useRef<any>(null);
    const textRef:any = useRef<any>([]);
    const hasSubmittedRef:any = useRef(false);
    const captureRef = useRef<HTMLDivElement>(null);
    
    const [summaryContent, setSummaryContent] = useState<string>(props.aiSummaryContent);
    //const [summaryContent, setSummaryContent] = useState<string>("이 유저는 전반적으로 볼 때, 여러 포지션을 고르게 플레이하는 다재다능한 플레이어로 보입니다. - **플레이 스타일:** 이 유저는 지원(서포트) 포지션에서 가장 높은 승률 (58.8%)을 기록하고 있으며, 평균 어시스트가 10.1로 높은 것을 볼 때 팀원과 협력해서 플레이하는 스타일을 선호할 가능성이 높습니다. 또한, 평균 비전 점수가 42.4로 이는 상대적으로 좋은 지도 능력을 보여주는 지표입니다. - **강점:** - **지원 능력:** 서포트 포지션에서 안정적이며 높은 승률을 보이고 있습니다. - **협력 플레이:** 평균 어시스트가 높고, 여러 포지션에서 일정한 승률을 유지해 팀원에게 기여하는 능력이 뛰어납니다. - **MVP와 ACE 횟수:** 8번의 MVP와 6번의 ACE를 기록한 것으로 보아, 결정적인 순간에 영향력을 행사할 수 있는 능력도 있다고 평가할 수 있습니다. - **약점:** - **중앙(미드) 포지션:** 미드에서 2승 5패로 낮은 승률을 기록하고 있어, 이 포지션에서의 플레이 개선이 필요합니다. - **데미지 기여:** 평균 피해량(18180.7)과 DPM(606.1)이 평균적인 수준으로, 직접적인 딜링에서 강력한 모습을 보이진 않습니다. - **평가:** 이 유저는 팀 플레이에 강점을 지닌 전형적인 팀플레이어로, 특히 서포트 포지션에서 두각을 나타냅니다. 미드 포지션의 부족한 경험 또는 기술을 보완한다면 더욱 균형 잡힌 플레이어가 될 수 있습니다. 각 포지션에 맞는 플레이 스타일을 더 발전시킨다면, 전반적인 승률 향상이 기대됩니다.");
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [lengthCheck, setLengthCheck] = useState<number>(0);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

    /*
        게임시간 info - game_duration
        경기유형(스크림) info - game_type
        맵(협곡) info - game_map
        승리팀/패배팀 team - team_win
        게임버전 info - ver_main
        
        챔피언 구성(플레이어 이름, 라인 체크) main - champion_name
        오브젝트 체크(용, 바론, 낑깡, 전령, 타워, 억제기) team - total_dragon/baron/horde/herald/tower/inhibitor
        팀전체 시야 체크(전체 시야점수, 설치와드 수, 제거와드 수, 핑크와드 수) sub - vision_socre / normal_ward / destroy_ward / vision_ward
        
        퍼스트블러드 sub - first_kill
        멀티킬 sub - double_kill / triple_kill / quadra_kill / penta_kill
        
        플레이어별 KDA main - kill_count / death_count / assist_count
        딜량 main - damage_total
        받은 피해량 main - damage_taken
        MVP/ACE 여부 main - mvp_rank
        골드량 - sub - gold_total
        시야점수 - sub - vision_score 
        DPM, GPM, DPG - sub - dpm / gpm / dpg
    */

    const updateAiSummaryVerifyMutation = useUpdateMutation(
        supabase.from('lcg_player_data') as any,               
        ['lcg_summoner_puuid'],                         
        'lcg_summoner_puuid, lcg_ai_summary_verify',    
        {
            // onSuccess: () => console.log('Update successful'),
            onError: (err) => console.error(err),
        }
    )

    const updateAiSummaryContentMutation = useUpdateMutation(
        supabase.from('lcg_player_data') as any,               
        ['lcg_summoner_puuid'],                         
        'lcg_summoner_puuid, lcg_ai_summary_content',    
        {
            // onSuccess: () => console.log('Update successful'),
            onError: (err) => console.error(err),
        }
    )
    
    const aiSummaryApiCall = async () => {
        const res = await fetch('/api/openai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.aiSummaryPrompt),
        });
        
        const data = await res.json();
        if(data.status === 200) {
            setIsSuccess(true);
            setSummaryContent(data.result);
            updateAiSummaryVerifyMutation.mutate({
                'lcg_summoner_puuid': props.selectPlayer,
                'lcg_ai_summary_verify': 'Y'
            });
            updateAiSummaryContentMutation.mutate({
                'lcg_summoner_puuid': props.selectPlayer,
                'lcg_ai_summary_content': data.result
            });
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

    const handleCapture = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current);
        const dataUrl = canvas.toDataURL("image/png");
        console.log(dataUrl);
        setCapturedImage(dataUrl);
    };

    useEffect(()=>{
        if (props.isModal && !hasSubmittedRef.current) {
            if (props.aiSummaryVerify === "N") {
                hasSubmittedRef.current = true;
                aiSummaryApiCall();
            } else {
                hasSubmittedRef.current = true;
                setIsSuccess(true);
            }
        }
    }, [props.isModal])

    useEffect(()=>{
        if(isSuccess) {
            const runTyping = async () => {
                const dataArr:string[] = summaryContent.split(/[#-]/);
                setLengthCheck(dataArr.length);

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

    useEffect(() => {
        supabase
            .channel('schema-db-changes')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT', 
                    schema: 'public',
                    table: 'test',
                },
                (payload) => {
                    console.log(payload)
                    setCapturedAction(true);
                    handleCapture();
                }
            )
            .subscribe()
    }, [])
    
    return (
        <ModalViewStyle ref={modalRef}>
            <div className="summary_title" ref={captureRef}>
                유저 AI 분석&요약
            </div>
            <hr/>
            <div className="summary_content">
                {
                    isSuccess ? 
                        <>
                            {
                                summaryContent.split(/[#-]/).map((data, idx) => {
                                    return (
                                        <React.Fragment key={idx}> 
                                            {
                                                data.includes('**') ? 
                                                    <div ref={(te:any) => (textRef.current[idx] = te)} className="content_title">
                                                    </div>
                                                    :
                                                lengthCheck-1 === idx ? 
                                                    <div ref={(te:any) => (textRef.current[idx] = te)} className="content_last">
                                                    </div>
                                                    :
                                                    <div ref={(te:any) => (textRef.current[idx] = te)} className="content_item">
                                                    </div>
                                            }
                                        </React.Fragment>
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
