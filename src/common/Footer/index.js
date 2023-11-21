import { StyledFooter, WrapperDescription, Paragraph, Name, Description, Icons, Github, Facebook, Linkedin, Instagram } from "./styled";

const Footer = () => {
    return(
        <StyledFooter>
            <WrapperDescription>
                <Paragraph>Let’s talk!</Paragraph>
                <Name>angelika.mallek03@gmail.com</Name>
                <Description>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
                <Icons>
                    <Github />
                    <Facebook />
                    <Linkedin />
                    <Instagram />
                </Icons>
            </WrapperDescription>
        </StyledFooter>
    )
}

export default Footer;