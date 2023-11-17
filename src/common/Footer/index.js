import { StyledFooter, WrapperDescription, Paragraph, Name, Description, Icons, Image } from "./styled";
import github from "./gitHub.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";

const Footer = () => {
    return(
        <StyledFooter>
            <WrapperDescription>
                <Paragraph>Let’s talk!</Paragraph>
                <Name>angelika.mallek03@gmail.com</Name>
                <Description>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
                <Icons>
                    <Image src={github} alt="Social Media Icon"></Image>
                    <Image src={facebook} alt="Social Media Icon"></Image>
                    <Image src={linkedin} alt="Social Media Icon"></Image>
                    <Image src={instagram} alt="Social Media Icon"></Image>
                </Icons>
            </WrapperDescription>
        </StyledFooter>
    )
}

export default Footer;