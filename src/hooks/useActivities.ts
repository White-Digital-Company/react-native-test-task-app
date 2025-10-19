import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { activitiesApi } from '@api'

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
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: activitiesApi.addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.activities })
    },
    onError: (error) => {
      console.error('Failed to add to favorites:', error)
    },
  })
}
