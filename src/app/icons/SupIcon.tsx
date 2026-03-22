
const SupIcon = (props : {type:string}) => {

    const customWidth:string = props.type === 'P' ? "28" : "38";
    const customHeight:string = props.type === 'P' ? "28" : "38";
    const customMainColor:string = props.type === 'P' ? "#54C8E8" : "#C1A371";
    const customSubColor:string = props.type === 'P' ? "#515163" : "#6E5A2F";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={customMainColor} width={customWidth} height={customHeight} viewBox="0 0 26 26">
            <path d="M9.5 4.833 10.257 4h3.486l.757.833v.834l-1.667 2.5h-1.666L9.5 5.667zm0 12.696 1.667-7.696h1.666L14.5 
            17.53v.804L12.833 20h-1.666L9.5 18.333zM3.667 9h2.5l-.834 1.667 2.5 2.5L9.5 9 7 6.5H2zm14.166 0h2.5L22 
            6.5h-5L14.5 9l1.667 4.167 2.5-2.5z" clipRule="evenodd"></path>
            </svg>
    )
}

export default SupIcon;
