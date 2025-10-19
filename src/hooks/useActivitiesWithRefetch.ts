import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import { activitiesApi } from '@api'
import { queryKeys } from './useActivities'

export const useActivitiesWithRefetch = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: queryKeys.activities,
    queryFn: activitiesApi.getActivities,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && query.data) {
        queryClient.invalidateQueries({ queryKey: queryKeys.activities })
      }
    }

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    )
    return () => subscription?.remove()
  }, [queryClient, query.data])

  return query
}

export const usePrefetchActivities = () => {
  const queryClient = useQueryClient()

  const prefetchActivities = () => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.activities,
      queryFn: activitiesApi.getActivities,
      staleTime: 1000 * 60 * 5,
    })
  }

  return { prefetchActivities }
}
