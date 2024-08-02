import { UseActivities } from '../../hooks/activities.hook'
import Header from '../../components/header/Header.component'
import { UseNavigation } from '../../hooks/Navigation.hook'
import { FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ActivityContainer from '../../components/activity-container/activity-container.component'

const HomeScreen = () => {
  const { goToActivity } = UseNavigation()
  const { activities, handleGetActivityById } = UseActivities()
  return (
    <SafeAreaView className="flex-1 items-center flex-col px-6">
      <Header title="Activities" />
      <View className="flex-1 justify-center items-center w-full">
        <FlatList
          className="flex-1 w-full"
          data={activities}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => {
            return (
              <ActivityContainer
                activity={item}
                onPress={() => {
                  goToActivity(item.id)
                  handleGetActivityById(item.id)
                }}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
