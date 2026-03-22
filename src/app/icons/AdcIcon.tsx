
const AdcIcon = (props : {type:string}) => {

    const customWidth:string = props.type === 'P' ? "28" : "38";
    const customHeight:string = props.type === 'P' ? "28" : "38";
    const customMainColor:string = props.type === 'P' ? "#54C8E8" : "#C1A371";
    const customSubColor:string = props.type === 'P' ? "#515163" : "#6E5A2F";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={customMainColor} width={customWidth} height={customHeight} viewBox="0 0 26 26">
            <path fill={customSubColor} fillRule="evenodd" d="M19 3H3v16l4-4V7h8z" clipRule="evenodd"></path>
            <path fill={customMainColor} fillRule="evenodd" d="M5 21h16V5l-4 4v8H9z" clipRule="evenodd"></path>
            <path fill={customSubColor} d="M10 10h4v4h-4z"></path>
        </svg>
    )
}

export default AdcIcon;
