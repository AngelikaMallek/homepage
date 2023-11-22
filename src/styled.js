import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    .body {
        transition: background 0.3s;
        background-color: ${({theme}) => theme.background};
        font-family: "Inter", sans-serif;
    }
`;
