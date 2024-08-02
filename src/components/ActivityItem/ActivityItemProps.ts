import { PressableProps } from 'react-native/types'

export interface ActivityItemProps extends PressableProps {
  itemId: number
  photoUrl: string
  name: string
  location: string
  price: number
  rating: number
  isFavorite: boolean
}
