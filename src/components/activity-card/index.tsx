import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import imgNotFound from '@assets/images/imgNotFound.png'
import Star from '@assets/icons/star.svg'
import Marker from '@assets/icons/marker.svg'
import tw from '@lib/tailwind'
import { Activity } from '@api/resources/activities/types'

interface ActivityCardProps {
  item: Activity
  onPress: () => void
}

const ActivityCard = ({ item, onPress }: ActivityCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ height: hp(30), width: '100%' }}
      onPress={onPress}
    >
      <Image
        source={{ uri: item.photoUrl }}
        style={tw`flex-1 rounded-2xl h-[${hp(18.5)}]`}
        defaultSource={imgNotFound}
      />

      <View style={tw`bg-lightGrey rounded-2xl p-5 gap-y-1.5`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-main text-base text-black`}>{item.name}</Text>
          <View style={tw`flex-row items-center gap-1`}>
            <Star width={16} height={16} />
            <Text style={tw`font-main text-xs text-black text-right`}>
              {item.rating}
            </Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between`}>
          <View style={tw`flex-row items-center gap-1`}>
            <Marker width={16} height={16} />
            <Text style={tw`font-main text-xs text-black`}>
              {item.location}
            </Text>
          </View>
          <View style={tw`flex-row items-center gap-1`}>
            <Text style={tw`font-main text-xs text-black`}>
              ${item.price}
              <Text style={tw`font-main text-xs text-right text-mediumGrey`}>
                {' '}
                / night
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ActivityCard
