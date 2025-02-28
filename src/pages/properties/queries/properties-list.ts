import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProperty,
  deleteProperty,
  getProperties,
} from "@/api/properties";

export const usePropertiesList = () => {
  const query = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
    retry: false,
  });
  return query;
};

export const useDeleteProperty = (id: string) => {
  const queryClient = useQueryClient();

  const query = useMutation({
    mutationKey: ["delete-property", id],
    mutationFn: deleteProperty,
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
  return query;
};

export const useCreateProperty = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["create-property"],
    mutationFn: createProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });

  return mutation;
};
