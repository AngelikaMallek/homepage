import styled from "styled-components";

export const StyledSection = styled.div`
    max-width: 1216px;
    background-color: ${({theme}) => theme.colors.white};
    padding: 32px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);

`;

export const Heading = styled.h2`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: ${({theme}) => theme.colors.mineShaft};
    padding-bottom: 15px;
    padding-top: 0;
    margin-top: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.littleGrey};;
`;

export const Body = styled.div`
`;
