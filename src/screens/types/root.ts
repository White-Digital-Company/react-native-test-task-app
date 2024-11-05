import { StackScreenProps } from '@react-navigation/stack';
import { IActivity } from 'data/models/IActivity';

export enum StackScreen {
  HOME = 'Home',
  DETAILS = 'Details',
}

export type RootStackParamList = {
  Home: undefined;
  Details: {
    activity: IActivity;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;
