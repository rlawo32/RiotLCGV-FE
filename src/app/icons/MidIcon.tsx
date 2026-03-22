
const MidIcon = (props : {type:string}) => {

    const customWidth:string = props.type === 'P' ? "28" : "38";
    const customHeight:string = props.type === 'P' ? "28" : "38";
    const customMainColor:string = props.type === 'P' ? "#54C8E8" : "#C1A371";
    const customSubColor:string = props.type === 'P' ? "#515163" : "#6E5A2F";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={customMainColor} width={customWidth} height={customHeight} viewBox="0 0 26 26">
            <path fill={customSubColor} fillRule="evenodd" d="m11 7 4-4H3v12l4-4V7zM13 17l-4 4h12V9l-4 4v4z" clipRule="evenodd"></path>
            <path fill={customMainColor} fillRule="evenodd" d="M18 3h3v3L6 21H3v-3z" clipRule="evenodd"></path>
        </svg>
    )
}

export default MidIcon;
