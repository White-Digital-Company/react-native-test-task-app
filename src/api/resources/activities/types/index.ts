export interface Activity {
  id: number
  description: string
  location: string
  name: string
  photoUrl: string
  price: number
  rating: number
}

export type ActivitiesResponse = Activity[]
