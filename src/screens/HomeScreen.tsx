import React from 'react'
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import { useActivities } from '@hooks/useActivities'
import ActivitiesItem from '@component/ActivitiesItem'
import Error from '@component/Error'
import Loading from '@component/Loading'

import { Activities } from '../data/types/activities'

import tw from '../../tw'

import { RootStackParamList } from '../screens/types/root'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<RootStackParamList>
}

const handleActivitiesItem = (activities: Activities, navigation: any) => {
  navigation.navigate('Favorites', { activities })
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { data, error, isLoading, isRefetching, refetch } = useActivities()

  if (error) {
    return <Error message={error.message} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView>
      <Text
        style={tw`text-center text-fz16 leading-lh20 mb-[37.5px] mt-[18.5px]`}
      >
        Activities
      </Text>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleActivitiesItem(item, navigation)}
          >
            <ActivitiesItem activitiesData={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
