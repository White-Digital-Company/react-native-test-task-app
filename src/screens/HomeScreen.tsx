import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useActivities } from '../hooks/useActivities'
import ActivitiesItem from '../component/ActivitiesItem'
import Error from '../component/Error'
import Loading from '../component/Loading'

import { Activities } from './../screens/types/activities'

import tw from '../../tw'

const handleActivitiesItem = (item: Activities) => {
  console.log('here item', item)
}

const HomeScreen: React.FC = () => {
  const { data, error, isLoading } = useActivities()

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
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleActivitiesItem(item)}>
            <ActivitiesItem activitiesData={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
