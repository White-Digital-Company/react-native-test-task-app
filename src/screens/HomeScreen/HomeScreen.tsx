import { UseActivities } from '../../hooks/activities.hook'
import Header from '../../components/header/Header.component'
import { UseNavigation } from '../../hooks/Navigation.hook'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const { goToActivity } = UseNavigation()
  const { activities } = UseActivities()
  return (
    <SafeAreaView className="flex-1 items-center flex-col bg-red-300 px-6">
      <Header title="Activities" />
      <View className="flex-1 justify-center items-center">
        <Text>Hello, developer!</Text>
        <TouchableOpacity onPress={goToActivity}>
          <Text>Go to Activity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
