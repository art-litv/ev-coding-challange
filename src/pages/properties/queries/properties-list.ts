import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/api/properties";

export const usePropertiesList = () => {
  const query = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
    retry: false,
  });
  return query;
};
