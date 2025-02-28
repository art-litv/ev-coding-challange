import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import GlobalStyle from "@/common/styles/globalStyle";
import theme from "@/common/styles/theme";

type ProvidersProps = {} & React.PropsWithChildren;

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
