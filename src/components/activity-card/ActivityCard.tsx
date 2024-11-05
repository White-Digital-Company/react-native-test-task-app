import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from '../../../tw'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { IActivity } from 'src/types/activityTypes'
import { customColors, customFonts } from '../../styles/customStyles'
import StarSvg from '@assets/svgs/Star.svg'
import MapPinSvg from '@assets/svgs/MapPin.svg'
import noImage from '@assets/images/no-image.png'

interface IActivityCardProps {
  activity: IActivity
  onClick: () => void
}

export const ActivityCard = ({ activity, onClick }: IActivityCardProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={tw`w-full px-5`}>
      <Image
        source={{ uri: activity.photoUrl }}
        defaultSource={noImage}
        style={[tw`w-full h-full rounded-[20px]`, { height: hp(15) }]}
      />
      <View
        style={[
          { backgroundColor: customColors.lightGray, height: hp(10) },
          tw`w-full rounded-[20px] mt-0.5 p-5 justify-between`,
        ]}
      >
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={[tw`text-base`, customFonts.abel]}>{activity.name}</Text>
          <Text style={[tw`text-xs`, customFonts.sf]}>
            <StarSvg height={16} /> {activity.rating}
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-1`}>
            <MapPinSvg height={16} />
            <Text style={[tw`text-xs`, customFonts.sf]}>
              {activity.location}
            </Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={[tw`text-sm`, customFonts.abel]}>
              ${activity.price}
            </Text>
            <Text
              style={[
                tw`text-xs`,
                customFonts.sf,
                { color: customColors.mediumGray },
              ]}
            >
              {' '}
              / night
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
