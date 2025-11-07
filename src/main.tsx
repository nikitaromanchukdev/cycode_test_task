import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  :root {
    --smoky-black: #100C08;
    --dark-charcoal: #333333;
    --outer-space: #2D383A
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
