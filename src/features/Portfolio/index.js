import PortfolioItem from "./PortfolioItem";
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
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </PortfolioWrapper>
    </>
);

export default Portfolio;