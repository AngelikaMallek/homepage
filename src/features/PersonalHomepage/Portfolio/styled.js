import styled from "styled-components";

export const PortfolioWrapper = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: auto;
        grid-gap: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-gap: 16px;
    }
`;

