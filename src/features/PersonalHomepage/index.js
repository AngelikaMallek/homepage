import Portfolio from "./Portfolio";
import { skills, skillsToLearn } from "./skilset";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Footer from "../../common/Footer";
import HeaderPortfolio from "./HeaderPortfolio";
import { MainStyled } from "./styled";

const PersonalHomepage = () => (
    <Container>
      <Header />
      <MainStyled>
        <Section 
          title="My skillset includes 🛠️" 
          body={skills} 
        />
        <Section
          title="What I want to learn next 🚀"
          body={skillsToLearn}
        />
        <section>
          <HeaderPortfolio />
          <Portfolio />
        </section>
      </MainStyled>
      <Footer />
    </Container>
)

export default PersonalHomepage;