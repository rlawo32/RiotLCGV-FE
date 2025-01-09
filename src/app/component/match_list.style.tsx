import styled from "styled-components";

export const MatchList = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 1140px;
    margin: auto;
`;

export const ListContainer = styled('div')`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .matchHistory_box {
        position: relative;
        height: 0;
        overflow: hidden;
        transition: all .4s ease;

        .box_inner {                                                                                                                  
            position: relative;
            display: flex;
            align-items: center;
            padding: 20px 2px 25px;
            z-index: 1;
            border-radius: 14px;
            background-color: #0e0e21;
            background-image: url('https://cdn.prod.website-files.com/653bd35aae06cbc1b37167a4/653bd35aae06cbc1b3716999_blog-card-featured-image-ai-x-webflow-template.png');
            background-position: 50%;
            background-size: cover;
        }

        .box_outer {
            position: absolute;
            top: 0%;
            bottom: 0%;
            left: 0%;
            right: 0%;
            border-radius: 14px;
            opacity: .4;
            background-color: rgba(255, 255, 255, .05);
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, .6) 50%, rgba(0, 0, 0, 0));
        }
    }
      
    .matchHistory_box.view_active {
        position: relative;
        display: inline-block;
        padding: 2px;
        text-decoration: none;
        height: 435px;
    }
`

export const ListBox = styled('div')`
    position: relative;
    display: inline-block;
    height: 125px;
    width: 850px;
    margin: 15px;
    padding: 1px;
    border: none;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    background-color: grey;
    // background: linear-gradient(to right, 
    /* rgba(50,10,245,0.8) 5%,  */
    /* rgba(240,240,240,0.8) 50%,  */
    /* rgba(245,10,50,0.8) 95%); */
    cursor: pointer;
    
    .box_inner {
        position: relative;
        height: 100%;
        z-index: 1;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.143em;
        background-color: #070719;
        color: white;
        box-shadow: 0 2px 8px rgba(61, 150, 255, .4), inset 0 -2px 12px rgba(58, 113, 255, .5);
    }

    .box_outer {
        height: 100%;
        position: absolute;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
        z-index: 0;
        border-radius: 10px;
        background-image: linear-gradient(#bed8ff, #3d96ff);
    }

    .box_head {
        display: flex;
        align-items: center;
        padding: 5px 0 0 7px;
        font-size: 14px;
    }

    .box_body {
        position: relative;
        top: -3px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 6px;

        .box_player {
            position: relative;
            display: flex;
            align-items: center;
            font-size: 18px;

            .box_win {
                position: absolute;
                top: -54px;
            }

            .left_icon {
                right: 85px;
            }

            .right_icon {
                left: 85px;
            }
        }

        .body_center {
            position: relative;
            top: -12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 30px;

            .box_time {
                position: absolute;
                top: 55px;
                font-size: 14px;
            }
        }
    }

    .box_foot {
        display: flex;
        align-items: center;
        justify-content: right;
        font-size: 10px;
        padding: 0 7px 0;
    }
`;