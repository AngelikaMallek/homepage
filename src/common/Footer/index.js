import { StyledFooter, WrapperDescription, Paragraph, Name, Description, Icons, Link } from "./styled";
import { socials } from "./socialIcons";
import { aboutMe } from "../aboutMe";

const Footer = () => {
    return(
        <StyledFooter>
            <WrapperDescription>
                <Paragraph>Let’s talk!</Paragraph>
                <Name href={aboutMe.url} title={aboutMe.url}>{aboutMe.mail}</Name>
                <Description>{aboutMe.footerDescription}</Description>
                <Icons>
                    {socials.map(({name, url, Icon}) => (
                        <Link href={url} title={name} target="_blank" key={name}>
                            <Icon />
                        </Link>
                    ))} 
                </Icons>
            </WrapperDescription>
        </StyledFooter>
    )
}

export default Footer;