import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { IActivity } from 'src/types/activityTypes'
import StarSvg from '@assets/svgs/Star.svg'
import MapPinSvg from '@assets/svgs/MapPin.svg'
import noImage from '@assets/images/no-image.png'
import { tw } from '@tools/tw'

interface IActivityCardProps {
  activity: IActivity
  onPress: () => void
}

export const ActivityCard = ({ activity, onPress }: IActivityCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`w-full px-5`}>
      <Image
        source={{ uri: activity.photoUrl }}
        defaultSource={noImage}
        style={tw.style('w-full h-full rounded-[20px]', { height: hp(15) })}
      />
      <View
        style={tw.style(
          `w-full bg-lightGray rounded-[20px] mt-0.5 p-5 justify-between`,
          { height: hp(10) },
        )}
      >
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-base font-abel`}>{activity.name}</Text>
          <Text style={tw`text-xs font-sf`}>
            <StarSvg height={16} /> {activity.rating}
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-1`}>
            <MapPinSvg height={16} />
            <Text style={tw`text-xs font-sf`}>{activity.location}</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-sm font-abel`}>${activity.price}</Text>
            <Text style={tw`text-xs font-sf text-mediumGray`}> / night</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
