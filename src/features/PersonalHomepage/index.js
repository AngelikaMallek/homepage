import Portfolio from "./Portfolio";
import { skills, skillsToLearn } from "./skilset";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Footer from "../../common/Footer";
import HeaderPortfolio from "./HeaderPortfolio";

const PersonalHomepage = () => (
    <Container>
      <Header />
      <main>
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
      </main>
      <Footer />
    </Container>
)

export default PersonalHomepage;