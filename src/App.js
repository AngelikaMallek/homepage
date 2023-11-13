import { skills, skillsToLearn } from "./skilset";
import Container from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";

function App() {
  return (
    <Container>
      <Header />
      <Section 
        title="My skillset includes 🛠️" 
        body={skills} 
      />
      <Section
        title="What I want to learn next 🚀"
        body={skillsToLearn}
      />
    </Container>
  );
}

export default App;
