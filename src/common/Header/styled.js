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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: 12px;
        margin-top: 32px;
    }
`;

export const WrapperImage = styled.div`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    background-image: url("${person}");
    overflow: hidden;
    background-position: center top;
    background-size: cover;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 132px;
        height: 132px;
    }
`;

export const WrapperDescription = styled.div`
    padding-top: 68px;
    max-width: 624px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
        font-size: 17px;
        letter-spacing: 0.85px;
    }
`;
export const Button = styled.button`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.30));
    background-color: ${({ theme }) => theme.colors.scienceBlue};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 12px;
    }
`;

