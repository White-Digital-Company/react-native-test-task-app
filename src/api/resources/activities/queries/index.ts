import { useMutation, useQuery } from '@tanstack/react-query'
import {
  addToFavorite,
  getActivities,
} from '@/api/resources/activities/actions.ts'

import { queryClient } from '../../../../../App.tsx'
import { queryIds } from '@/api/resources/activities/constants.ts'

export const useActivitiesQuery = () => {
  return useQuery({
    queryKey: [queryIds.GET_ACTIVITY],
    queryFn: getActivities,
  })
}
export const useAddToFavoriteMutation = () => {
  return useMutation({
    mutationFn: addToFavorite,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['queryIds.GET_ACTIVITY'],
        exact: true,
        refetchType: 'active',
      }),
  })
}
