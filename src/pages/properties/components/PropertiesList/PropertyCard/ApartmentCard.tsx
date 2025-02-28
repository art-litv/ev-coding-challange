import PropertyCard, { type PropertyCardProps } from "./PropertyCard";

const ApartmentCard: React.FC<PropertyCardProps> = ({ data, ...rest }) => {
  return (
    <PropertyCard
      data={{ rooms: data.rooms, floor: data.floor, price: data.price }}
      {...rest}
    />
  );
};

export default ApartmentCard;
