import { Fragment, useState } from "react";

import { type Property, PropertyType } from "@/types/properties";
import { type PropertyCardProps } from "./PropertyCard";
import { DeletePropertyModal } from "./DeleteProperyModal";
import ApartmentCard from "./PropertyCard/ApartmentCard";
import HouseCard from "./PropertyCard/HouseCard";

import { useDeleteProperty } from "../../queries/properties-list";
import type { ToolbarFilters } from "../Toolbar/Toolbar";

import Styled from "./PropertiesList.styled";

type PropertiesListProps = {
  properties: Property[];
  filters: ToolbarFilters;
};

const PropertiesList = ({ properties, filters }: PropertiesListProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const { mutate: deleteProperty } = useDeleteProperty(
    selectedProperty?.id || ""
  );

  const filteredAndSortedProperties = [...properties]
    .filter(
      (property) =>
        (filters.type === "all" || property.type === filters.type) &&
        (filters.search === "" ||
          property.title?.toLowerCase().includes(filters.search.toLowerCase()))
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return filters.priceSort === "desc" ? priceB - priceA : priceA - priceB;
    });

  return (
    <Styled.List>
      {filteredAndSortedProperties.map((property) => {
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
      {!filteredAndSortedProperties.length && "No properties found"}
    </Styled.List>
  );
};

export default PropertiesList;
