import { PortfolioItemStyled, Title, Description, LinkWrapper, StyledLink, Paraghaph } from "./styled";

const PortfolioItem = ({ title, description, linkDemo, linkRepo }) => (
    <PortfolioItemStyled>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <LinkWrapper>
            <Paraghaph>Demo:</Paraghaph> <StyledLink href={ linkDemo } target="_blank">https://link.demo.com</StyledLink>
            <Paraghaph>Code:</Paraghaph> <StyledLink href={ linkRepo } target="_blank">https://link.code.com</StyledLink>
        </LinkWrapper>
    </PortfolioItemStyled>
);

export default PortfolioItem;