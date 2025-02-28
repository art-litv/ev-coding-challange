import { Toolbar } from "./components/Toolbar";
import { PropertiesList } from "./components/PropertiesList";
import { usePropertiesList } from "./queries/properties-list";
import { useState } from "react";
import type { ToolbarFilters } from "./components/Toolbar/Toolbar";
import Styled from "./PropertiesPage.styled";

export const PropertiesPage = () => {
  const { data: properties = [] } = usePropertiesList();
  const [filters, setFilters] = useState<ToolbarFilters>({
    type: "all",
    priceSort: "desc",
    search: "",
  });

  return (
    <Styled.Page>
      <Toolbar onFiltersChange={setFilters} filters={filters} />
      {properties && (
        <PropertiesList properties={properties} filters={filters} />
      )}
    </Styled.Page>
  );
};

export default PropertiesPage;
