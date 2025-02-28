import type { Property } from "@/types/properties";
import { Card, type CardProps } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { DataRow } from "./DataRow";

import CloseIcon from "@/assets/icons/close.svg?react";

import Styled from "./PropertyCard.styled";

export type PropertyCardProps = {
  onDelete: () => void;
  children?: React.ReactNode;
  data: Partial<Property>;
} & CardProps;

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  onDelete,
  image,
  data,
}) => {
  return (
    <Card
      title={title}
      actions={<IconButton icon={<CloseIcon />} onClick={onDelete} />}
      image={image}
    >
      <Styled.PropertyData>
        {data.rooms && <DataRow label="Rooms" value={data.rooms} />}
        {data.plotSize && <DataRow label="Plot Size" value={data.plotSize} />}
        <Styled.Divider />
        {data.price && (
          <DataRow
            label="Price"
            value={
              <>
                <Styled.Price>{data.price}</Styled.Price> EUR
              </>
            }
          />
        )}
      </Styled.PropertyData>
    </Card>
  );
};

export default PropertyCard;
