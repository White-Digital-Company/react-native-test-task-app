import { Alert } from 'react-native'

export const onError = (error: any) => {
  const message =
    error?.response?.data?.error?.message ??
    error?.message ??
    'Unknown error occurred'

  Alert.alert('Error', message)
}
