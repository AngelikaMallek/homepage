import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoading = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 12px solid ${({ theme }) => theme.colors.iron};
    border-right: 12px solid ${({ theme }) => theme.colors.scienceBlue};;
    margin: 48px;
    animation: ${rotation} 3s linear infinite;
`;

export const Paraghaph = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;
`;