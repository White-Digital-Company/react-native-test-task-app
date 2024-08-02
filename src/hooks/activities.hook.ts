/* eslint-disable unicorn/consistent-function-scoping */
// import { IActivity } from '../types/activity.type'

import { useQuery } from 'react-query'
import { QUERY_KEYS } from '../shared/consts/app-keys.const'
import { activityService } from 'services/activity/activity.service'
import { isAxiosError } from 'axios'
import { getError } from '../utils/get-error.util'

type TUseActivitiesReturn = {
  //   activities: IActivity[]
  //   activity: IActivity
  handleGetActivityById: (id: number) => void
}
export const UseActivities = (): TUseActivitiesReturn => {
  useQuery({
    queryKey: [QUERY_KEYS.ACTIVITIES],
    queryFn: () => activityService.getAllActivities(),
    onError: (error: any) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data)
      }
      getError(error)
    },
    onSuccess: () => {},
  })
  const handleGetActivityById = (id: number) => {}
  return { handleGetActivityById }
}
