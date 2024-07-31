import { Text, View } from 'react-native'
import Header from '../../components/header/Header.component'
import { SafeAreaView } from 'react-native-safe-area-context'

const ActivityScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center flex-col bg-blue-200">
      <Header isGoBack />
      <View className="flex-1 items-center justify-center">
        <Text>ActivityScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ActivityScreen
