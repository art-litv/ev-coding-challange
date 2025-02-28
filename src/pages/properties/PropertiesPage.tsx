import { Toolbar } from "./components/Toolbar";
import { PropertiesList } from "./components/PropertiesList";

import Styled from "./PropertiesPage.styled";

const PropertiesPage = () => {
  return (
    <Styled.Page>
      <Toolbar />
      <PropertiesList />
    </Styled.Page>
  );
};

export default PropertiesPage;
