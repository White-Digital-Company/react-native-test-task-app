import ActivityCard from '@/components/activity-card'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import tw from '@/lib/tailwind'
import { Activity } from 'src/api/resources/activities/types'
import { RootStackScreenProps } from '@/screens/types/root.ts'
interface ActivityListProps {
  data: Activity[] | undefined
  isLoading: boolean
  navigation: RootStackScreenProps<'Home'>['navigation']
}
const ActivityList = ({ data, isLoading, navigation }: ActivityListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ padding: 20, gap: 10 }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <ActivityCard
          item={item}
          onPress={() => navigation.navigate('Activity', { activity: item })}
        />
      )}
      keyExtractor={item => `${item.id}`}
      ListFooterComponent={
        isLoading ? (
          <ActivityIndicator
            color={'black'}
            size="large"
            style={{ height: hp(75) }}
          />
        ) : null
      }
      ListEmptyComponent={
        isLoading ? null : (
          <Text style={tw`font-main text-base text-center text-gray-500`}>
            Activities not found
          </Text>
        )
      }
    />
  )
}

export default ActivityList
