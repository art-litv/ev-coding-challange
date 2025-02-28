import { PropertyCard } from "./PropertyCard";
import { Property } from "@/types/properties";

import Styled from "./PropertiesList.styled";

type PropertiesListProps = {
  properties: Property[];
};

const PropertiesList = ({ properties }: PropertiesListProps) => {
  return (
    <Styled.List>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          image="src/assets/images/property.png"
          onDelete={() => {}}
          data={property}
        />
      ))}
    </Styled.List>
  );
};

export default PropertiesList;
