import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import tw from '../../../tw'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import {
  ActivityScreenNavigationProp,
  RootStackParamList,
} from '@screens/types/root'
import noImage from '@assets/images/no-image2.jpg'
import { CTButton } from '@components/button/CTButton'
import BackArrowSvg from '@assets/svgs/ArrowBack.svg'
import { useAddToFavoritesMutation } from '../../../src/queries/activityQueries/activityQueries'

type ActivityScreenRouteProp = RouteProp<RootStackParamList, 'ActivityScreen'>

export const ActivityScreen = () => {
  const navigation = useNavigation<ActivityScreenNavigationProp>()
  const route = useRoute<ActivityScreenRouteProp>()
  const { activity } = route.params
  const { mutate, isPending } = useAddToFavoritesMutation()

  return (
    activity && (
      <View style={tw`flex-1 gap-5 pb-5`}>
        <CTButton
          onClick={() => navigation.goBack()}
          propStyles="bg-white absolute top-12 left-3 z-2 h-14 w-14"
          children={<BackArrowSvg />}
        />
        <Image
          source={{ uri: activity.photoUrl }}
          defaultSource={noImage}
          style={tw.style('w-full', {
            height: hp(50),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          })}
        />
        <View style={tw`flex-1 justify-between px-5`}>
          <ScrollView
            contentContainerStyle={tw`gap-5`}
            showsVerticalScrollIndicator={false}
          >
            <Text style={tw`text-2xl font-abel`}>{activity.name}</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-base font-abel`}>${activity.price}</Text>
              <Text style={tw`text-xs font-sf text-mediumGray`}>
                Included taxes and fees
              </Text>
            </View>
            <View
              style={tw.style('w-full border-secondTypeGray', {
                borderTopWidth: 1,
              })}
            />
            <View style={tw`gap-2.5`}>
              <Text style={tw`text-base font-abel`}>Description</Text>
              <Text style={tw`text-sm font-sf text-mediumGray`}>
                {activity.description}
              </Text>
            </View>
          </ScrollView>
          <CTButton
            text="Add to Favorites"
            onClick={() => mutate(activity.id)}
            loading={isPending}
          />
        </View>
      </View>
    )
  )
}
