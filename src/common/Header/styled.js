import styled from "styled-components";
import person from "./person.jpg";

export const StyledHeader = styled.header`

`;

export const Wrapper = styled.div`
    margin-top: 115px;
    width: 398px;
    height: 398px;
    border-radius: 50%;
    background-image: url("${person}");
    overflow: hidden;
    background-position: center top;
    background-size: cover;
`;
