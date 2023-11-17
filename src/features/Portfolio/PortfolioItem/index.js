import { PortfolioItemStyled, Title, Description, LinkWrapper, StyledLink, Paraghaph } from "./styled";

const PortfolioItem = () => (
    <PortfolioItemStyled>
        <Title>Movies Browser</Title>
        <Description>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Description>
        <LinkWrapper>
            <Paraghaph>Demo:</Paraghaph> <StyledLink href="https://angelikamallek.github.io/to-do-list-react/#/zadania">https://link.demo.com</StyledLink>
            <Paraghaph>Code:</Paraghaph> <StyledLink href="https://github.com/AngelikaMallek/to-do-list-react">https://link.code.com</StyledLink>
        </LinkWrapper>
    </PortfolioItemStyled>
);

export default PortfolioItem;