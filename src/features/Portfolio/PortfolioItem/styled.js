import styled from "styled-components";

export const PortfolioItemStyled = styled.div`
    max-width: 592px;
    height: 322px;
    border-radius: 4px;
    border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.30));
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    background-color: ${({ theme }) => theme.colors.white};
`;