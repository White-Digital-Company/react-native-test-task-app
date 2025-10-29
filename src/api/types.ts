export type Activity = {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

export type FavoriteRequest = {
  id: number
}

export type FavoriteResponse = {
  message: string
}

export type ApiError = {
  error: string
}
