import { api } from './api'
import { activitiesApiPaths } from './apiConstants'

export const getActivities = async () => {
  try {
    const response = await api.get(activitiesApiPaths.ACTIVITIES)
    return response.data
  } catch (error) {
    console.error('Failed to get activities:', error)
    throw error
  }
}

export const addToFavorites = async (id: number) => {
  try {
    const response = await api.post(activitiesApiPaths.FAVORITES, { id })
    return response.data.message
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      throw new Error(error.response.data.error || 'Bad request')
    } else {
      throw new Error(error)
    }
  }
}
