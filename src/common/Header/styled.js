import styled from "styled-components";
import person from "./person.jpg";

export const StyledHeader = styled.header`
    margin-top: 115px;
    display: flex;
    gap: 66px;
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
`;

