import { Activity } from '@screens/types/activity'
import axios from 'axios'

const API_URL = 'https://test-task-server-production.up.railway.app'

export const getActivities = async (): Promise<Activity[]> => {
  const result = await axios.get(`${API_URL}/activities`)
  return result.data
}

export const addToFavorites = async (id: number) => {
  await axios.post(`${API_URL}/favorites`, { id })
}
