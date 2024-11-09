import axios from 'axios'

export const fetchActivities = async () => {
  const response = await axios.get(
    'https://test-task-server-production.up.railway.app/activities',
  )

  return response.data
}
