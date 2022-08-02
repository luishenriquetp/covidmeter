import * as S from "./styles";
import HealthTeam from "../../assets/healthteam.png";
import Support from "../../assets/support.png";

const About = () => {
    return (
        <S.Container>
            <S.SectionLeft>
                <S.IntroductionLeft>
                    <h1>Our Purpose</h1>
                    <div className="title-underline"></div>
                    <br />
                    <p>
                    Inform in a clear and simplified way the number of COVID-19 cases around the world. A simple search for the name of any country is enough to access accurate information on contagion and mortality.
                    </p>
                    <img src={HealthTeam} alt="Covidômetro" width="250" />
                </S.IntroductionLeft>
            </S.SectionLeft>
            <S.SectionRight>
                <S.IntroductionRight>
                    <h1>Who made CovidMeter possible?</h1>
                    <div className="title-underline-right"></div>
                    <br />
                    <p>
                     CovidMeter uses the free API from <a href="https://covid19api.com/">Kyle Redelinghuys</a>, which in turn accesses information from the <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a>. Thanks for both.
                    </p>
                    <img src={Support} alt="Covidômetro" width="250" />
                </S.IntroductionRight>
            </S.SectionRight>
        </S.Container>
    );
};
export default About;
