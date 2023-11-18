import { Wrapper, Image, Paragraph, Description, Button } from "./styled";
import icon from "./icon.svg";

const Error = () => (
    <Wrapper>
        <Image src={icon} alt="Icon"></Image>
        <Paragraph>Ooops! Something went wrong... </Paragraph>
        <Description>Sorry, failed to load Github projects. <br /> You can check them directly on Github.</Description>
        <a href="https://github.com/AngelikaMallek"><Button>Go to Github</Button></a>
    </Wrapper>
)

export default Error;