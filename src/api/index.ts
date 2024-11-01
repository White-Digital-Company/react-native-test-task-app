import { useAxios } from "@/api/useAxios";
import { ActivitiesResponse } from "@/api/types";

const axios=useAxios()
export const getActivities=async () => {
  const response = await axios.get<ActivitiesResponse>('/activities')
  return response?.data
}
export const addToFavorite=async (id:string) => {
  const response = await axios.post('/favorites',{id})
  return response?.data
}
