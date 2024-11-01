import { useMutation, useQuery } from "@tanstack/react-query";
import { addToFavorite, getActivities } from "@/api";

import { queryIds } from "@/api/types";
import { queryClient } from "../../../App.tsx";

export const getActivitiesQuery = () => {
  return useQuery({
    queryKey: [queryIds.GET_ACTIVITY],
    queryFn: getActivities,

  });
};
export const addToFavoriteMutation = ()=>{
  return useMutation({
    mutationFn: addToFavorite,
    onSuccess: async ()=>await queryClient.invalidateQueries({
      queryKey: ['queryIds.GET_ACTIVITY'],
      exact:true,
      refetchType: 'active',
    }),

  })
}
