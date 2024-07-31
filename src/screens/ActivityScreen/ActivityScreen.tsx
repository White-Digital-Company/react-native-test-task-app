import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { navigationRef } from '../../router/root-navigation'

const ActivityScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center flex-col gap-3 bg-blue-200">
      <Text>ActivityScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigationRef.goBack()
        }}
      >
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ActivityScreen
