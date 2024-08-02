import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivitiesList } from '../../components'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../types/HomeScreenNavigationProp'
import { Activity } from '@screens/types/activity'
import { styles } from './style'
import { useQuery } from '@tanstack/react-query'
import { getActivities } from '../../api'

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const query = useQuery({
    queryKey: ['activities'],
    queryFn: getActivities,
  })

  const navigateToDetails = (item: Activity) => {
    navigation.navigate('Activity', item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Activities</Text>
      {query.data && (
        <ActivitiesList items={query.data} onPress={navigateToDetails} />
      )}
    </SafeAreaView>
  )
}
