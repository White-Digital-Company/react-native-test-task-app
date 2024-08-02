import { StackScreenProps } from '@react-navigation/stack'
import { Activity } from './activity'

export type RootStackParamList = {
  Home: undefined
  Activity: Activity
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
