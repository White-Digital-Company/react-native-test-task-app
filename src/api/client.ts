import { Activity, FavoriteRequest, FavoriteResponse } from './types'
import { API_BASE_URL } from '@env'

// create a fetch wrapper with timeout
const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
): Promise<Response> => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), parseInt('10000'))

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

export const activitiesApi = {
  getActivities: async (): Promise<Activity[]> => {
    try {
      const response = await fetchWithTimeout(
        `${API_BASE_URL}/activities`,
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = (await response.json()) as Activity[]
      return data
    } catch (error) {
      console.error('Error fetching activities:', error)
      throw error
    }
  },

  addToFavorites: async (
    request: FavoriteRequest,
  ): Promise<FavoriteResponse> => {
    return { message: 'Error adding to favorites' }
  },
}
