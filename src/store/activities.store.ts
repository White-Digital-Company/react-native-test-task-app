import { createWithEqualityFn } from 'zustand/traditional'

import { IActivity } from 'types/activity.type'

interface IActivityStore {
  activities: Array<IActivity>
  activity?: IActivity
  setActivities: (value?: Array<IActivity>) => void
  setActivity: (value?: IActivity) => void
}

export const useActivityStore = createWithEqualityFn<IActivityStore>(set => {
  return {
    activities: [],
    activity: undefined,
    setActivities: (value?: Array<IActivity>) => {
      set(() => {
        return {
          activities: value ?? [],
        }
      })
    },
    setActivity: (value?: IActivity) => {
      set(() => {
        return {
          activity: value,
        }
      })
    },
  }
})
