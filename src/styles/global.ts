import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        /* background-color: ${({ theme }) => theme.colors.darkCharcoal}; */
        /* color: ${({ theme }) => theme.colors.text}; */
    }
`;
