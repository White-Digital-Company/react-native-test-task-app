import axios from 'axios'

export const addFavorite = async (id: number) => {
  const response = await axios.post(
    'https://test-task-server-production.up.railway.app/favorites',
    { id },
  )
  return response.data
}
