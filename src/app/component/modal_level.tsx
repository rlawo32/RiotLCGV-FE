"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, DragEvent } from "react";
import { getPlayerDisplayName, movePersonToLevel, resetPeople, type ModalLevelPlayer } from "@/app/component/modal_level_logic";
import type { TierInfo } from "@/app/types";

import styled from "styled-components";

const ModalLevelStyle = styled('div')`
    position: absolute;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    border: 1px solid #FF4438;
    border-radius: 12px;
    background: #0a0e16;
    color: #e7e9ee;
    z-index: 1000;

    .btn_control.btn_reset {
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 6px 10px;
    }

    .btn_control {
        border: 1px solid #1e2430;
        background: #11151f;
        color: #ffffff;
        padding: 6px 25px;
        margin: 0 4px;
        border-radius: 7px;
        font-size: 12.5px;
        cursor: pointer;

        &:hover {
            color: #e7e9ee;
            border-color: #3d96ff;
        }
    }

    .level_title {
        font-size: 2.2rem;
        font-weight: 600;
        margin: 0 0 9px;
        letter-spacing: 0.2px;
    }

    .level_desc {
        margin: 0 0 24px;
        color: #6b7688;
        font-size: 13px;
    }

    .level_board {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 820px;
    }

    .level_section {
        display: flex;
        align-items: center;
        gap: 16px;
        background: #11151f;
        border: 1px solid #1e2430;
        border-left: 3px solid #3b82f6;
        border-radius: 8px;
        min-height: 98px;
        padding: 10px 16px;
        transition: background 0.15s, border-color 0.15s;
    }

    .level_section.dragover {
        background: #161c29;
        border-color: #3b82f6;
    }

    .level_label {
        flex: 0 0 96px;
        font-weight: 600;
        font-size: 1.8rem;
        color: #3b82f6;
        letter-spacing: 0.2px;
    }

    .level_drop {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        min-height: 28px;
    }

    .level_box {
        padding: 7px 24px;
        background: #1a2030;
        border: 1px solid #2a3242;
        border-radius: 6px;
        font-size: 1.3rem;
        color: #e7e9ee;
        cursor: grab;
        user-select: none;

        &:hover {
            border-color: #3d96ff;
        }

        &:active {
            cursor: grabbing;
        }
    }

    .button_section {
        max-width: 620px;
        margin-top: 18px;
    }
`;

interface ModalLevelProps {  
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    initialData: ModalLevelPlayer[],
    updatePlayerRanking: (updatePlayer: {puuid:string, lv:number, nm:string}[]) => void
}

const ModalLevel = (props: ModalLevelProps) => {
    const modalRef:any = useRef<any>(null);
    const tiers: TierInfo[] = [
        { level: 5, name: "다이아몬드", color: "#576bce" },
        { level: 4, name: "에메랄드", color: "#248858" },
        { level: 3, name: "플래티넘", color: "#4e9996" },
        { level: 2, name: "골드", color: "#cd8837" },
        { level: 1, name: "실버", color: "#80989d" },
    ];
                           
    const [people, setPeople] = useState<ModalLevelPlayer[]>(props.initialData);
    const [dragOverLevel, setDragOverLevel] = useState<number | null>(null);

    const handleDrop = useCallback((level: number) => (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOverLevel(null);
        try {
            const name = e.dataTransfer.getData("text/plain");
            if (!name) return;
            setPeople((prev) => movePersonToLevel(prev, name, level));
        } catch (err) {
            console.error("드래그 드랍 처리 중 오류:", err);
        }
    }, []);

    const handleDragStart = (name: string) => (e: DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", name);
    };

    const handleReset = () => setPeople(resetPeople(props.initialData));
    
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
        <ModalLevelStyle ref={modalRef}>
            <h1 className="level_title">밸런스 설정</h1>
            <p className="level_desc">
                플레이어 이름을 드래그해서 티어를 지정하세요.
            </p>
            
            <button type="button" onClick={handleReset} className="btn_control btn_reset">
                초기화
            </button>

            <div className="level_board">
                {tiers.map((data) => (
                    <div
                        key={data.level}
                        className={`level_section ${dragOverLevel === data.level ? "dragover" : ""}`}
                        style={{ borderColor: data.color, borderLeft: `3px solid ${data.color}` } as CSSProperties}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDragOverLevel(data.level);
                        }}
                        onDragLeave={() => setDragOverLevel(null)}
                        onDrop={handleDrop(data.level)}
                    >
                        <div className="level_label" style={{ color: data.color } as CSSProperties}>{data.name}</div>
                        <div className="level_drop">
                            {people.filter((p) => p.lv === data.level).map((p) => {
                                const displayName = getPlayerDisplayName(p);
                                return (
                                    <div
                                        key={`${displayName}-${p.puuid}`}
                                        className="level_box"
                                        draggable
                                        onDragStart={handleDragStart(displayName)}
                                    >
                                        {displayName}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="button_section">
                <button type="button" onClick={() => {props.setIsModal(false); props.updatePlayerRanking(people);}} className="btn_control">
                    저장
                </button>
                <button type="button" onClick={() => props.setIsModal(false)} className="btn_control">
                    닫기
                </button>
            </div>
        </ModalLevelStyle>
    );
}

export default ModalLevel;