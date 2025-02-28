import instance from "@/common/api/instance";

import { Property } from "@/types/properties";

export const getProperties = async (): Promise<Property[]> => {
  const { data } = await instance.get("/properties");
  return data;
};

export const deleteProperty = async (id: string): Promise<void> => {
  await instance.delete(`/properties/${id}`);
};

export type CreatePropertyPayload = {
  createdAt: string;
  name: string;
  address: string;
  price: string;
  title: string;
  id: string;
};

export const createProperty = async (
  payload: CreatePropertyPayload
): Promise<Property> => {
  const { data } = await instance.post("/properties", payload);
  return data;
};
