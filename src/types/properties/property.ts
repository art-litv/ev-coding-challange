export enum PropertyType {
  APARTMENT = "apartment",
  HOUSE = "house",
}

export type Property = {
  id: string;
  name: string;
  title: string;
  price: string;
  type: PropertyType;
  createdAt: string;
  address: string;
  plotSize: number;
  rooms: number;
  floor: number;
};
