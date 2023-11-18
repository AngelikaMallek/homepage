import { Wrapper, Image, Title, Paragraph } from "./styled";
import icon from "./icon.svg";

const HeaderPortfolio = () => (
    <Wrapper>
        <Image src={icon} alt="Icon"></Image>
        <Title>Portfolio</Title>
        <Paragraph>My recent projects</Paragraph>
    </Wrapper>
);

export default HeaderPortfolio;