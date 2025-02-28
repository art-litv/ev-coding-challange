import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";

type PropertyCardProps = {
  title: React.ReactNode;
  onDelete: () => void;
  image?: string;
};

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
