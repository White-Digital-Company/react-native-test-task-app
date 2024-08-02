import { useQuery } from 'react-query'
import { QUERY_KEYS } from '../shared/consts/app-keys.const'
import { activityService } from '../services/activity/activity.service'
import { isAxiosError } from 'axios'
import { getError } from '../utils/get-error.util'
import { useActivityStore } from '../store/activities.store'
import { IActivity } from '../types/activity.type'

type TUseActivitiesReturn = {
  activities: IActivity[]
  activity?: IActivity
  handleGetActivityById: (id: number) => void
}
export const UseActivities = (): TUseActivitiesReturn => {
  const { activity, activities, setActivities, setActivity } =
    useActivityStore()
  useQuery({
    queryKey: [QUERY_KEYS.ACTIVITIES],
    queryFn: () => activityService.getAllActivities(),
    onError: (error: any) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data)
      }
      getError(error)
    },
    onSuccess: data => {
      setActivities(
        data.map(activityEl => {
          return { ...activityEl, isFav: Boolean(activityEl.isFav) }
        }),
      )
    },
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  const handleGetActivityById = (id: number) => {
    setActivity(activities.find(activityEl => activityEl.id === id))
  }
  return { handleGetActivityById, activity, activities }
}
