import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivitiesList } from '../components'
import { Text } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 10, backgroundColor: '#fff' }}
    >
      <Text>Activities</Text>
      <ActivitiesList />
    </SafeAreaView>
  )
}

export default HomeScreen
