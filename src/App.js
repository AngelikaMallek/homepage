import Container from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";

function App() {
  return (
    <Container>
      <Header />
      <Section
        title={"My skillset includes"}
        body={
          <ul>
            <li>Semantic & accessible HTML</li>
            <li>Semantic & accessible HTML</li>
            <li>Semantic & accessible HTML</li>
            <li>Semantic & accessible HTML</li>
            <li>Semantic & accessible HTML</li>
            <li>Semantic & accessible HTML</li>
          </ul>}
        />
        <Section
        title={"What I want to learn next"}
        body={
          <ul>
            <li>React Context</li>
            <li>React Context</li>
            <li>React Context</li>
            <li>React Context</li>
            <li>React Context</li>
            <li>React Context</li>
          </ul>}
        />
    </Container>
  );
}

export default App;
