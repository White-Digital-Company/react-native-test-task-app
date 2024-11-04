import { Text, View } from 'react-native'
import { useActivities } from '@api/resources/activities/useActivities.ts'
import tw from '@lib/tailwind'
import ActivityList from '@components/activity-list'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const { activities, isActivitiesLoading } = useActivities()
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-5 pt-20`}>
        <Text style={tw`font-main text-base text-center text-black`}>
          Activities
        </Text>
      </View>
      <ActivityList
        isLoading={isActivitiesLoading}
        data={activities}
        navigation={navigation}
      />
    </View>
  )
}

export default HomeScreen
