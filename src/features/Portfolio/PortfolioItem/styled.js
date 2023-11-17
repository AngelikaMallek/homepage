import styled from "styled-components";

export const PortfolioItemStyled = styled.div`
    max-width: 592px;
    height: 322px;
    border-radius: 4px;
    border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.30));
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 56px;
`;

export const Title = styled.h3`
    color: ${({theme}) => theme.colors.scienceBlue};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    padding: 0;
    margin: 0;
`;

export const Description= styled.p`
    color: ${({theme}) => theme.colors.slateGray};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    padding: 0;
    margin: 24px 0;
`;

export const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
`;


export const StyledLink = styled.a`
    color: ${({theme}) => theme.colors.scienceBlue};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
`;

export const Paraghaph = styled.p`
    color: ${({theme}) => theme.colors.slateGray};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    margin: 0;
    padding: 0;
`;
