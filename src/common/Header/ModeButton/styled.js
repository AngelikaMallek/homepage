import styled, { css } from "styled-components";
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
    background-color: ${({ theme }) => theme.mode.button};
    display: flex;
    align-items: center;
    padding: 3px;
`;

export const IconWrapper = styled.span`
  background: ${({ theme }) => theme.mode.background};
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.mode.color};
`;

