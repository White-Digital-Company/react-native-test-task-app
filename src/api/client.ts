import axios from 'axios'
import { Activity, FavoriteRequest, FavoriteResponse } from './types'
import { API_BASE_URL } from '@env'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const activitiesApi = {
  getActivities: async (): Promise<Activity[]> => {
    const { data } = await api.get<Activity[]>('/activities')
    return data
  },

  addToFavorites: async (
    request: FavoriteRequest,
  ): Promise<FavoriteResponse> => {
    const { data } = await api.post<FavoriteResponse>('/favorites', request)
    return data
  },
}
