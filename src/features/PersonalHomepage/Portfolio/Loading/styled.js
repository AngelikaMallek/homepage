import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 48px;
`;

const rotation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoading = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 12px solid ${({ theme }) => theme.loader};
    transition: color 0.3s;
    border-right: 12px solid ${({ theme }) => theme.colors.scienceBlue};
    animation: ${rotation} 3s linear infinite;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100px;
        height: 100px;
        border: 9px solid ${({ theme }) => theme.loader};
        border-right: 9px solid ${({ theme }) => theme.colors.scienceBlue};
    }
`;

export const Paraghaph = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 15px;
    }
`;