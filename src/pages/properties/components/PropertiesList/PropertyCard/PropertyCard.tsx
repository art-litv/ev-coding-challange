import type { Property } from "@/types/properties";
import { Card, type CardProps } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { DataRow } from "./DataRow";

import CloseIcon from "@/assets/icons/close.svg?react";

import Styled from "./PropertyCard.styled";

export type PropertyCardProps = {
  onDelete: (property: Property) => void;
  children?: React.ReactNode;
  displayedData: Partial<Property>;
  property: Property;
} & Omit<CardProps, "property">;

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  onDelete,
  image,
  displayedData,
  property,
}) => {
  return (
    <Card
      title={title}
      actions={
        <IconButton icon={<CloseIcon />} onClick={() => onDelete(property)} />
      }
      image={image}
    >
      <Styled.PropertyData>
        {displayedData.rooms && (
          <DataRow label="Rooms" value={displayedData.rooms} />
        )}
        {displayedData.plotSize && (
          <DataRow label="Plot Size" value={displayedData.plotSize} />
        )}
        {displayedData.floor && (
          <DataRow label="Floor" value={displayedData.floor} />
        )}
        <Styled.Divider />
        {displayedData.price && (
          <DataRow
            label="Price"
            value={
              <>
                <Styled.Price>{displayedData.price}</Styled.Price> EUR
              </>
            }
          />
        )}
      </Styled.PropertyData>
    </Card>
  );
};

export default PropertyCard;
