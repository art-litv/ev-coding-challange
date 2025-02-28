import PropertyCard, { type PropertyCardProps } from "./PropertyCard";

const HouseCard: React.FC<Omit<PropertyCardProps, "displayedData">> = ({
  property,
  ...rest
}) => {
  return (
    <PropertyCard
      displayedData={{
        rooms: property.rooms,
        plotSize: property.plotSize,
        price: property.price,
      }}
      property={property}
      {...rest}
    />
  );
};

export default HouseCard;
