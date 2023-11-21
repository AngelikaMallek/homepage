import { WrapperImage, StyledHeader, WrapperDescription, Paragraph, Name, Description, Button } from "./styled";
import { ReactComponent as Envelope } from "./envelope.svg";
import ModeButton from "./ModeButton";

const Header = () => {
    return(
        <StyledHeader>
            <ModeButton />
            <WrapperImage />
            <WrapperDescription>
                <Paragraph>THIS IS</Paragraph>
                <Name>Angelika Mallek</Name>
                <Description>👨🏻‍💻  I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.</Description>
                <Button>
                    <Envelope />
                    Hire Me
                </Button>
            </WrapperDescription>
        </StyledHeader>
    )
}

export default Header;