import { ActivitiesResponse } from 'src/api/resources/activities/types'
import { api } from '@/api/api.ts'
export const getActivities = async () => {
  const response = await api.get<ActivitiesResponse>('/activities')
  return response.data
}
export const addToFavorite = async (id: number) => {
  const response = await api.post('/favorites', { id })
  return response.data
}
