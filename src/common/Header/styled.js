import styled from "styled-components";
import person from "./person.jpg";

export const StyledHeader = styled.header`
    margin-top: 115px;
    display: flex;
    gap: 66px;
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: 32px;
        margin-top: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: 12px;
        margin-top: 32px;
    }
`;

export const WrapperImage = styled.img`
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    min-width: 132px;
    min-height: 132px;

    @media(max-width: ${({ theme }) => theme.breakpoints.narrow}) {
        width: 25vw;
        height: 25vw;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 20vw;
        height: 20vw;
    }
`;

export const WrapperDescription = styled.div`
    padding-top: 68px;
    max-width: 624px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-top: 0;
    }
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    display: flex;
`;
export const Name = styled.h1`
    color: ${({ theme }) => theme.sectionHeading};
    transition: color 0.3s;
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 1.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.narrow}) {
        font-size: 22px;
        letter-spacing: 1.1px;
    }
`;
export const Description = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;

    @media(max-width: ${({ theme }) => theme.breakpoints.narrow}) { 
        font-size: 17px;
        letter-spacing: 0.85px;
    }
`;
export const Button = styled.a`
    color: ${({ theme }) => theme.colors.white};
    max-width: 154px;
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.30));
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 12px;
    }
`;

