import styled from "styled-components";

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    color: ${({theme}) => theme.colors.scienceBlue};
`;

export const Span = styled.span`
    color: ${({theme}) => theme.colors.slateGray};
    padding: 0 16px;
`;