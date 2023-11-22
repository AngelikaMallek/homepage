import { StyledFooter, WrapperDescription, Paragraph, Name, Description, Icons, Link } from "./styled";
import { socials } from "./socialIcons";

const Footer = () => {
    return(
        <StyledFooter>
            <WrapperDescription>
                <Paragraph>Let’s talk!</Paragraph>
                <Name>angelika.mallek03@gmail.com</Name>
                <Description>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</Description>
                <Icons>
                    {socials.map(({name, url, Icon}) => (
                        <Link href={url} title={name}>
                            <Icon />
                        </Link>
                    ))} 
                </Icons>
            </WrapperDescription>
        </StyledFooter>
    )
}

export default Footer;