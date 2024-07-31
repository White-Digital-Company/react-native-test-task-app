import { RouterKeys } from '../../router/keys'
import { navigationRef } from '../../router/root-navigation'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center flex-col gap-3 bg-white">
      <Text>Hello, developer!</Text>
      <TouchableOpacity
        onPress={() => {
          navigationRef.navigate(RouterKeys.ACTIVITY)
        }}
      >
        <Text>Go to Activity</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen
