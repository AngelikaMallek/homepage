import { WrapperImage, StyledHeader, WrapperDescription, Paragraph, Name, Description, Button } from "./styled";
import envelope from "./envelope.svg";

const Header = () => {
    return(
        <StyledHeader>
            <WrapperImage />
            <WrapperDescription>
                <Paragraph>THIS IS</Paragraph>
                <Name>Angelika Mallek</Name>
                <Description>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Description>
                <Button>
                    <img src={envelope} alt="EnvelopeIcon"></img>
                    Hire Me
                </Button>
            </WrapperDescription>
        </StyledHeader>
    )
}

export default Header;