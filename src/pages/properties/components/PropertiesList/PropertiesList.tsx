import { Fragment, useState } from "react";

import { type Property, PropertyType } from "@/types/properties";
import { type PropertyCardProps } from "./PropertyCard";
import { DeletePropertyModal } from "./DeleteProperyModal";
import ApartmentCard from "./PropertyCard/ApartmentCard";
import HouseCard from "./PropertyCard/HouseCard";

import { useDeleteProperty } from "../../queries/properties-list";

import Styled from "./PropertiesList.styled";

type PropertiesListProps = {
  properties: Property[];
};

const PropertiesList = ({ properties }: PropertiesListProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const { mutate: deleteProperty } = useDeleteProperty(
    selectedProperty?.id || ""
  );

  return (
    <Styled.List>
      {properties.map((property) => {
        const cardProps: Omit<PropertyCardProps, "displayedData"> = {
          title: property.title,
          image: "src/assets/images/property.png",
          property: property,
          onDelete: (property: Property) => {
            setIsDeleteModalOpen(true);
            setSelectedProperty(property as Property);
          },
        };

        return (
          <Fragment key={property.id}>
            {property.type === PropertyType.APARTMENT && (
              <ApartmentCard {...cardProps} />
            )}
            {property.type === PropertyType.HOUSE && (
              <HouseCard {...cardProps} />
            )}
          </Fragment>
        );
      })}
      <DeletePropertyModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          deleteProperty(selectedProperty?.id as string);
          setIsDeleteModalOpen(false);
        }}
        propertyTitle={selectedProperty?.title as string}
        propertyId={selectedProperty?.id as string}
      />
    </Styled.List>
  );
};

export default PropertiesList;
