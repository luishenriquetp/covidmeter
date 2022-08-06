import * as S from "./styles";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Gradient from "../../components/Gradient";

const Home = () => {
    return (
        <S.Container>
            <Navbar />
            <Gradient />
            <S.Section>
                <S.Introduction>
                    <h1>Meet the CovidMeter</h1>
                    <div className="title-underline"></div>
                    <br />
                    <p>
                        Stay up to date with speed and transparency. O
                        CovidMeter is a tool that shows you in real-time the
                        number of cases and deaths related to COVID-19 pandemic
                        around the world.
                    </p>
                </S.Introduction>
                <Search />
            </S.Section>
        </S.Container>
    );
};
export default Home;
