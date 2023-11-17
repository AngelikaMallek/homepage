import { PortfolioItemStyled } from "./PortfolioItem/styled";
import icon from "./icon.svg";
import { Wrapper, Image, Title, Paragraph, PortfolioWrapper } from "./styled"

const Portfolio = () => (
    <>
        <Wrapper>
            <Image src={icon} alt="Icon"></Image>
            <Title>Portfolio</Title>
            <Paragraph>My recent projects</Paragraph>
        </Wrapper>
        <PortfolioWrapper>
            <PortfolioItemStyled />
            <PortfolioItemStyled />
            <PortfolioItemStyled />
            <PortfolioItemStyled />
        </PortfolioWrapper>
    </>
);

export default Portfolio;