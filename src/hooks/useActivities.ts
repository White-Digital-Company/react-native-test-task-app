import { useQuery, useMutation } from '@tanstack/react-query'
import { activitiesApi } from '@api'
import { queryClient } from '../lib/queryClient'

export const queryKeys = {
  activities: ['activities'] as const,
  activity: (id: string) => ['activity', id] as const,
}

export const useActivities = () => {
  return useQuery({
    queryKey: queryKeys.activities,
    queryFn: activitiesApi.getActivities,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnReconnect: true,
  })
}

export const useAddToFavorites = () => {
  return useMutation({
    mutationFn: activitiesApi.addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.activities })
    },
    onError: error => {
      console.error('Failed to add to favorites:', error)
    },
  })
}
