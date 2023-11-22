import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

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
    transition: color 0.3s;
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
    display: flex;
    align-items: center;
    padding: 0;
`;

export const SunLight = styled(SunIcon)`
    background-color: ${({ theme }) => theme.colors.slateGray};
    padding: 3px;
    margin: 3px;
    border-radius: 50%;
    color: white;
`;

export const SunDark = styled(SunIcon)`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3px;
    margin: 3px;
    margin-left: 22px;
    border-radius: 50%;
    color: black;
`;
