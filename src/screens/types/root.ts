import { StackScreenProps } from '@react-navigation/stack'
import { Activity } from 'src/api/resources/activities/types'
export type RootStackParamList = {
  Home: undefined
  Activity: { activity: Activity }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
