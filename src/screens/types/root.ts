import { StackScreenProps } from '@react-navigation/stack'
import { Activity } from '@api/types'
import { SCREENS } from '@navigation'

export type RootStackParamList = {
  [SCREENS.HOME]: undefined
  [SCREENS.ACTIVITY_DETAILS]: {
    activity: Activity
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
