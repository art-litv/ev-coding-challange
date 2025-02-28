import { Toolbar } from "./components/Toolbar";
import { PropertiesList } from "./components/PropertiesList";

import Styled from "./PropertiesPage.styled";
import { usePropertiesList } from "./queries/properties-list";

const PropertiesPage = () => {
  const { data: properties } = usePropertiesList();

  return (
    <Styled.Page>
      <Toolbar />
      {properties && <PropertiesList properties={properties} />}
    </Styled.Page>
  );
};

export default PropertiesPage;
