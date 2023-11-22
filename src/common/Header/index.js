import { WrapperImage, StyledHeader, WrapperDescription, Paragraph, Name, Description, Button } from "./styled";
import { ReactComponent as Envelope } from "./envelope.svg";
import ModeButton from "./ModeButton";
import { aboutMe } from "../aboutMe";

const Header = () => {
    return(
        <StyledHeader>
            <ModeButton />
            <WrapperImage />
            <WrapperDescription>
                <Paragraph>THIS IS</Paragraph>
                <Name>{aboutMe.name}</Name>
                <Description>{aboutMe.description}</Description>
                <Button href={aboutMe.url}>
                    <Envelope />
                    Hire Me
                </Button>
            </WrapperDescription>
        </StyledHeader>
    )
}

export default Header;