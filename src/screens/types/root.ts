import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
