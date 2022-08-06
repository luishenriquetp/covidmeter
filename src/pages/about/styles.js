import styled from "styled-components";
import HealthTeam from "../../assets/healthteam.png";
import Support from "../../assets/support.png";

export const Container = styled.div``;

export const SectionLeft = styled.div`
    display: block;
    margin: 0 auto;
    width: 80%;
    background: url(${HealthTeam}) top right no-repeat;
    background-size: 500px;
    @media (max-width: 1000px) {
        background: none;
    }
`;

export const IntroductionLeft = styled.div`
img{
image-rendering: -webkit-optimize-contrast;
}
        margin 25px 0;
        font-family: "Spectral", serif;
        padding: 7% 0;
        margin-right: 50%;
        @media (max-width: 1000px) {
            display: block;
            margin: 0 auto;
        }
        div.title-underline {
        width:20%;
        border-top: 2px solid #ef6160;
        }
        img {
            display:none;
            @media (max-width:1000px) {
                display:block;
                margin:0 auto;
            }
        }
        
`;
export const SectionRight = styled.div`
    display: block;
    margin: 0 auto;
    width: 80%;
    background: url(${Support}) top left no-repeat;
    background-size: 500px;
    @media (max-width: 1000px) {
        background: none;
    }
`;

export const IntroductionRight = styled.div`

        margin 25px 0;
        font-family: "Spectral", serif;
        padding: 7% 0;
        margin-left: 50%;
        @media (max-width: 1000px) {
            display: block;
            margin: 0 auto;
        }

    div.title-underline-right {
        width:20%;
        border-top: 2px solid #ef6160;
        float:right;
        @media (max-width:1000px) {
            float:left;
        }
    }

    img {
        display:none;
        @media (max-width:1000px) {
            display:block;
            margin:0 auto;
        }
    }
    
    h1,
    p {

        text-align: right;
        @media (max-width: 1000px) {
            text-align: left;
        }
    }
`;
