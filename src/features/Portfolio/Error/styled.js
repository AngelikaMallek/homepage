import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`;

export const Image = styled.img`
    width: 48px;
    height: 48px;
`;

export const Paragraph = styled.h3`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    text-align: center;
`;

export const Button = styled.div`
    display: inline-flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid var(--semi-grey, rgba(209, 213, 218, 0.10));
    background: ${({ theme }) => theme.colors.scienceBlue};
    color: ${({ theme }) => theme.colors.white};;
`;