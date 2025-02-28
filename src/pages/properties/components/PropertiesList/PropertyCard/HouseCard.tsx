import PropertyCard, { type PropertyCardProps } from "./PropertyCard";

const HouseCard: React.FC<PropertyCardProps> = ({ data, ...rest }) => {
  return (
    <PropertyCard
      data={{ rooms: data.rooms, plotSize: data.plotSize, price: data.price }}
      {...rest}
    />
  );
};

export default HouseCard;
