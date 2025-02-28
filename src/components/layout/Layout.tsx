import Styled from "./Layout.styled";

import Logo from "@/assets/images/logo.svg?react";

type LayoutProps = {} & React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled.Layout>
      <Styled.Sidebar>
        <Logo />
      </Styled.Sidebar>
      <Styled.Content>
        <Styled.Header />
        {children}
      </Styled.Content>
    </Styled.Layout>
  );
};

export default Layout;
