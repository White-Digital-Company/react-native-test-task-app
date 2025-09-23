import { Data } from '@/types/activity';
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  ActivityDetails: { data: Data };
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
