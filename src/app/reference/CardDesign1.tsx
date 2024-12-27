import styled from "styled-components";

const CardDesign1Css = styled('div')`
    position: relative;
    display: inline-block;
    padding: 1px;
    text-decoration: none;

    .inner {    
        position: relative;
        padding: 106px 40px;
        z-index: 1;
        border-radius: 8px;
        background-color: #0e0e21;
        background-image: url('https://cdn.prod.website-files.com/653bd35aae06cbc1b37167a4/653bd35aae06cbc1b3716999_blog-card-featured-image-ai-x-webflow-template.png');
        background-position: 50%;
        background-size: cover;
    }

    .outer {
        position: absolute;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
        border-radius: 8px;
        opacity: .4;
        background-color: rgba(255, 255, 255, .05);
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, .6) 50%, rgba(0, 0, 0, 0));
    }
`

const CardDesign1 = () => {

    return (
        <CardDesign1Css>
            <div className="inner">
                HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO
            </div>
            <div className="outer" />
        </CardDesign1Css>
    )
}

export default CardDesign1;
