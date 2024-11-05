import React from 'react'
import { Header } from '@components/header/Header'
import { Platform, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetActivities } from '../../queries/activityQueries/activityQueries'
import tw from '../../../tw'
import { ActivityCard } from '@components/activity-card/ActivityCard'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '@screens/types/root'

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const { data } = useGetActivities()

  return (
    <SafeAreaView style={tw`flex-1 ${Platform.OS === 'android' ? 'pb-3' : ''}`}>
      <Header title="Activities" />
      <FlatList
        data={data}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ActivityCard
              activity={item}
              onClick={() =>
                navigation.navigate('ActivityScreen', { activity: item })
              }
            />
          )
        }}
      />
    </SafeAreaView>
  )
}
