import { WrapperImage, StyledHeader, WrapperDescription, Paragraph, Name, Description, Button } from "./styled";
import person from "./person.jpg";
import { ReactComponent as Envelope } from "./envelope.svg";
import ModeButton from "./ModeButton";
import { aboutMe } from "../aboutMe";

const Header = () => (
    <StyledHeader>
        <ModeButton />
        <WrapperImage src={person} alt="Angelika Krefta"/>
        <WrapperDescription>
            <Paragraph>THIS IS</Paragraph>
            <Name>{aboutMe.name}</Name>
            <Description>{aboutMe.description}</Description>
            <Button href={aboutMe.url} title={aboutMe.url}>
                <Envelope />
                Hire Me
            </Button>
        </WrapperDescription>
    </StyledHeader>
)

export default Header;