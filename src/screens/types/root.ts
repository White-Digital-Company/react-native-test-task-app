import { StackScreenProps } from '@react-navigation/stack'
import { IActivity } from 'src/types/activityTypes'

export type RootStackParamList = {
  HomeScreen: undefined
  ActivityScreen: { activity: IActivity }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

export type HomeScreenNavigationProp =
  RootStackScreenProps<'HomeScreen'>['navigation']

export type ActivityScreenNavigationProp =
  RootStackScreenProps<'ActivityScreen'>['navigation']
