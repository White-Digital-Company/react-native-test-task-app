import { useQuery } from '@tanstack/react-query'
import { getActivities } from './actions'
import { activitiesApiPaths } from './constants'
import { onError } from '@api/utils/errorHandler'

export const useGetActivities = () => {
  const { data, isError, error } = useQuery({
    queryKey: [activitiesApiPaths.ACTIVITIES],
    queryFn: getActivities,
  })

  isError && onError(error)
  return { data }
}
