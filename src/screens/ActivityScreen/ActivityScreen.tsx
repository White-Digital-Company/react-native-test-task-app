import { Text, View } from 'react-native'
import Header from '../../components/header/Header.component'
import { SafeAreaView } from 'react-native-safe-area-context'
import { text } from '../../shared/text/text'
import DefaultButton from '../../components/button/default-button.component'

const ActivityScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center flex-col bg-blue-200 px-6">
      <Header isGoBack />
      <View className="flex-1 items-center justify-center w-full">
        <Text>ActivityScreen</Text>
      </View>
      <DefaultButton onPress={() => {}}>
        <Text className="text-white font-normal text-base font-[abel]">
          {text.addToFav}
        </Text>
      </DefaultButton>
    </SafeAreaView>
  )
}

export default ActivityScreen
