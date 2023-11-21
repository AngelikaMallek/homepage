import { Wrapper, Image, Paragraph, Description, Button } from "./styled";
import { ReactComponent as Icon } from './icon.svg';

const Error = () => (
    <Wrapper>
        <Icon />
        <Paragraph>Ooops! Something went wrong... </Paragraph>
        <Description>Sorry, failed to load Github projects. <br /> You can check them directly on Github.</Description>
        <a href="https://github.com/AngelikaMallek"><Button>Go to Github</Button></a>
    </Wrapper>
)

export default Error;