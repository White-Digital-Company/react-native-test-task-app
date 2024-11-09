import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import tw from '../../tw'

const Loading: React.FC = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <ActivityIndicator size="large" color="#00f" />

      <Text style={tw`mt-2`}>Loading</Text>
    </View>
  )
}

export default Loading
