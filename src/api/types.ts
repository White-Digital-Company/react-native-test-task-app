export interface Activity {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

export interface FavoriteRequest {
  id: number
}

export interface FavoriteResponse {
  message: string
}

export interface ApiError {
  error: string
}
