import instance from "@/common/api/instance";

import { Property } from "@/types/properties";

export const getProperties = async (): Promise<Property[]> => {
  const { data } = await instance.get("/properties");
  return data;
};
