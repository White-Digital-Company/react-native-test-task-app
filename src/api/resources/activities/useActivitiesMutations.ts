import { useMutation, useQueryClient } from '@tanstack/react-query'
import { activitiesApiPaths } from './constants'
import { addToFavorites } from '@api/resources/activities/actions'
import { Alert } from 'react-native'

export const useAddToFavoritesMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => addToFavorites(id),
    onSuccess: (message: string) => {
      queryClient.invalidateQueries({
        queryKey: [activitiesApiPaths.FAVORITES],
        exact: true,
        refetchType: 'active',
      })
      Alert.alert('Success', message)
    },
  })
}
