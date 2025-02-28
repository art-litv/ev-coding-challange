import { Card, type CardProps } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";

import CloseIcon from "@/assets/icons/close.svg?react";

type PropertyCardProps = {
  onDelete: () => void;
} & CardProps;

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  onDelete,
  image,
}) => {
  return (
    <Card
      title={title}
      actions={<IconButton icon={<CloseIcon />} onClick={onDelete} />}
      image={image}
    />
  );
};

export default PropertyCard;
