import { PortfolioItemStyled, Title, Description, LinkWrapper, StyledLink, Paraghaph } from "./styled";

const PortfolioItem = ({ title, description, linkDemo, linkRepo }) => (
    <PortfolioItemStyled>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <LinkWrapper>
            {linkDemo ? 
                <><Paraghaph>Demo:</Paraghaph> <StyledLink href={ linkDemo } target="_blank">{ linkDemo }</StyledLink></>
            : ""}
            {linkRepo ? 
                <><Paraghaph>Code:</Paraghaph> <StyledLink href={ linkRepo } target="_blank">{ linkRepo }</StyledLink></>
            : ""}
        </LinkWrapper>
    </PortfolioItemStyled>
);

export default PortfolioItem;