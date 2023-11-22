import styled from "styled-components";

export const Wrapper = styled.div`
    width: 159;
    height: 26px;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.paragraph};
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const Button = styled.button`
    width: 48px;
    height: 26px;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.slateGray};
    background-color: ${({ theme }) => theme.colors.mercury};
`;
