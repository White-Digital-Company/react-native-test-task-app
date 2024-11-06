import { api } from '@api/api'
import { activitiesApiPaths } from './constants'

export const getActivities = async () => {
  const response = await api.get(activitiesApiPaths.ACTIVITIES)
  return response.data
}

export const addToFavorites = async (id: number) => {
  const response = await api.post(activitiesApiPaths.FAVORITES, { id })
  return response.data.message
}
