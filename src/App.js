import Container from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";
import List from "./features/List";

function App() {
  return (
    <Container>
      <Header />
      <Section
        title={"My skillset includes 🛠️"}
        body={<List />}
        />
        <Section
        title={"What I want to learn next 🚀"}
        body={<List />}
        />
    </Container>
  );
}

export default App;
