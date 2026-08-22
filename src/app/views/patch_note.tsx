'use client'

import DOMPurify from 'isomorphic-dompurify';
import * as Style from "./patch_note.style";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "../supabase-browser";
import { getLcgPatchNoteVersionsQuery, getLcgPatchNoteQuery } from "../queries/getLcgPatchNoteQuery";

import { LoadingSpinner } from '../component/loading_spinner.style';


const PatchNote = () => {
    const supabase = useSupabaseBrowser();

    const versionsQuery = useMemo(() => getLcgPatchNoteVersionsQuery(supabase), [supabase]);
    const { data: versions } = useQuery(versionsQuery, {});

    const [selectVersion, setSelectVersion] = useState<string>("");

    const { data: lcgPatchNote, isLoading: lcgPatchNoteLoading } = useQuery(getLcgPatchNoteQuery(supabase, selectVersion), {enabled:!!selectVersion });

    useEffect(() => {
        if (versions && versions.length > 0 && !selectVersion) {
            setSelectVersion(versions[0].lcg_patch_version); // 실제 버전 필드명에 맞게 수정
        }
    }, [versions, selectVersion]);

    const combinedHtml = lcgPatchNote?.map((row) => row.lcg_patch_html).join("") ?? "";
    const cleanHtml = DOMPurify.sanitize(combinedHtml);

    return (
        <Style.PatchNote>
            <Style.PatchNoteList>
                {versions?.map((v) => (
                    <Style.PatchNoteTab
                        key={v.lcg_patch_version}
                        $active={v.lcg_patch_version === selectVersion}
                        onClick={() => setSelectVersion(v.lcg_patch_version)}
                    >
                        {v.lcg_patch_version}
                    </Style.PatchNoteTab>
                ))}
            </Style.PatchNoteList>
            {
                lcgPatchNoteLoading ?
                    <LoadingSpinner />
                    :
                    <Style.PatchNoteView dangerouslySetInnerHTML={{ __html: cleanHtml }} />
            }
        </Style.PatchNote>
    )
}

export default PatchNote;