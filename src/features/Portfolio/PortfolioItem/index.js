import { PortfolioItemStyled, Title, Description, LinkWrapper, StyledLink, Paraghaph } from "./styled";

const PortfolioItem = ({ title, description, linkDemo, linkRepo }) => (
    <PortfolioItemStyled>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <LinkWrapper>
            <Paraghaph>Demo:</Paraghaph> <StyledLink href={ linkDemo }>https://link.demo.com</StyledLink>
            <Paraghaph>Code:</Paraghaph> <StyledLink href={ linkRepo }>https://link.code.com</StyledLink>
        </LinkWrapper>
    </PortfolioItemStyled>
);

export default PortfolioItem;