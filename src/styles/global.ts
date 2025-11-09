import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow: hidden;
    }

    body {
        height: 100vh;
        
        font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;

        background: ${({ theme }) => theme.colors.background.primary};
        color: ${({ theme }) => theme.colors.text.primary};
    }

    #root {
        height: 100vh;
        overflow-y: auto;
    }

    header {
        z-index: 2;
    }
`;
