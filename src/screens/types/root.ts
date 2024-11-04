import { Activity } from '@api/resources/activities/types'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Activity: { activity: Activity }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
export type ActivityRouteProp = RootStackScreenProps<'Activity'>
