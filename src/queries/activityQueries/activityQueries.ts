import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { activityQueryKeys } from './activityQueryKeys'
import { addToFavorites, getActivities } from '../../services/activitiesService'
import { Alert } from 'react-native'

export const useGetActivities = () => {
  return useQuery({
    queryKey: [activityQueryKeys.ACTIVITIES],
    queryFn: getActivities,
    refetchOnMount: false,
  })
}

export const useAddToFavoritesMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => addToFavorites(id),
    onSuccess: (message: string) => {
      queryClient.invalidateQueries({
        queryKey: [activityQueryKeys.FAVORITES],
        exact: true,
        refetchType: 'active',
      })
      Alert.alert('Success', message)
    },
    onError: (error: any) => {
      Alert.alert(
        'Error',
        error.message || 'Failed to add activity to favorites',
      )
    },
  })
}
