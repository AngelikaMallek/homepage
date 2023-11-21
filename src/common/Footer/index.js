import { StyledFooter, WrapperDescription, Paragraph, Name, Description, Icons } from "./styled";
import { ReactComponent as GithubIcon } from './gitHub.svg';
import { ReactComponent as FbIcon } from './facebook.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstaIcon } from './instagram.svg';

const Footer = () => {
    return(
        <StyledFooter>
            <WrapperDescription>
                <Paragraph>Let’s talk!</Paragraph>
                <Name>angelika.mallek03@gmail.com</Name>
                <Description>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
                <Icons>
                    <GithubIcon />
                    <FbIcon />
                    <LinkedinIcon />
                    <InstaIcon />
                </Icons>
            </WrapperDescription>
        </StyledFooter>
    )
}

export default Footer;