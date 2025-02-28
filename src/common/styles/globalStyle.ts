import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", sans-serif;
    font-size: ${({ theme }) => theme.size.text.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export default GlobalStyle;
