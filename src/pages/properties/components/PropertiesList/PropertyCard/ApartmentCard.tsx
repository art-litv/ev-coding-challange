import PropertyCard, { type PropertyCardProps } from "./PropertyCard";

const ApartmentCard: React.FC<Omit<PropertyCardProps, "displayedData">> = ({
  property,
  ...rest
}) => {
  return (
    <PropertyCard
      displayedData={{
        rooms: property.rooms,
        floor: property.floor,
        price: property.price,
      }}
      property={property}
      {...rest}
    />
  );
};

export default ApartmentCard;
