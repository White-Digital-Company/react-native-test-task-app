import { useActivitiesQuery } from '@/api/resources/activities/queries'

export const useActivities = () => {
  const {
    data: activities,
    isLoading: isActivitiesLoading,
    isSuccess,
  } = useActivitiesQuery()
  return { activities, isActivitiesLoading, isSuccess }
}
