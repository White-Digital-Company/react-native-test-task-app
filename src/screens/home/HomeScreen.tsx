import React from 'react'
import { FlatList, View } from 'react-native'
import { useGetActivities } from '@api/resources/activities/useActivities'
import { ActivityCard } from '@components/activity-card/ActivityCard'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '@screens/types/root'
import { tw } from '@tools/tw'

export const HomeScreen = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'HomeScreen'>['navigation']>()
  const { data } = useGetActivities()

  return (
    <View style={tw`flex-1 pb-3`}>
      <FlatList
        data={data}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ActivityCard
              activity={item}
              onPress={() =>
                navigation.navigate('ActivityScreen', { activity: item })
              }
            />
          )
        }}
      />
    </View>
  )
}
