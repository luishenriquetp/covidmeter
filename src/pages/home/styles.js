import styled from "styled-components";
import img from "../../assets/doctors.svg";

export const Container = styled.div``;

export const Section = styled.div`
    display: block;
    margin: 0 auto;
    width: 80%;
    background: url(${img}) top right no-repeat;
    @media (max-width: 1000px) {
        background: none;
    }
`;

export const Introduction = styled.div`
    display: block;
    font-family: "Spectral", serif;
    padding: 7% 0;
    margin-right: 50%;
    @media (max-width: 1000px) {
        display: block;
        margin: 0 auto;
    }
    div.title-underline {
        width: 20%;
        border-top: 2px solid #ef6160;
    }
`;
