import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import GlobalStyle from "@/common/styles/globalStyle";
import theme from "@/common/styles/theme";

const queryClient = new QueryClient();

type ProvidersProps = {} & React.PropsWithChildren;

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
