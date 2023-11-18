import { Wrapper, Image, Paragraph, Description, Button } from "./styled";
import icon from "./icon.svg";

const Error = () => (
    <Wrapper>
        <Image src={icon} alt="Icon"></Image>
        <Paragraph>Ooops! Something went wrong... </Paragraph>
        <Description>Sorry, failed to load Github projects. <br /> You can check them directly on Github.</Description>
        <Button>Go to Github</Button>
    </Wrapper>
)

export default Error;