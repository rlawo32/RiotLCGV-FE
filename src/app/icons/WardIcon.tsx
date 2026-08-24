
const WardIcon = (props : {type:string}) => {

    const customWidth:string = props.type === 'P' ? "28" : "38";
    const customHeight:string = props.type === 'P' ? "28" : "38";
    const customMainColor:string = props.type === 'P' ? "#FF4FA3" : props.type === 'N' ? "#35C759" : "#9CA3AF";
    const customSubColor:string = props.type === 'P' ? "#515163" : "#6E5A2F";

    return (
        props.type === 'V' ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="#38BDF8" width="38" height="38" viewBox="0 0 26 26">
                <path stroke="#9CA3AF"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3.5 13s3.5-7.5 9.5-7.5 9.5 7.5 9.5 7.5-3.5 7.5-9.5 7.5-9.5-7.5-9.5-7.5Z"/>
                <circle stroke="#0F172A" strokeWidth="1.8" cx="13" cy="13" r="3.2"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill={customMainColor} width="38" height="38" viewBox="0 0 26 26">
                <path d="M9.5 4.833 10.257 4h3.486l.757.833v.834l-1.667 2.5h-1.666L9.5 5.667zm0 12.696 1.667-7.696h1.666L14.5 
                17.53v.804L12.833 20h-1.666L9.5 18.333zM3.667 9h2.5l-.834 1.667 2.5 2.5L9.5 9 7 6.5H2zm14.166 0h2.5L22 
                6.5h-5L14.5 9l1.667 4.167 2.5-2.5z" clipRule="evenodd"></path>
                {
                    props.type === 'D' ?
                        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M16 2L24 10" />
                            <path d="M24 2L16 10" />
                        </g> : <></>
                }
            </svg>
    )
}

export default WardIcon;
