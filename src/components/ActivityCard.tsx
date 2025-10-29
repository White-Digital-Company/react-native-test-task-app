import { View, Text, Image, TouchableOpacity } from 'react-native'
import StarIcon from '../../assets/svg/Star.svg'
import MapPinIcon from '../../assets/svg/MapPin.svg'

type ActivityCardProps = {
  imageUrl: string
  title: string
  location: string
  rating: number
  price: number
  onPress?: () => void
}

export const ActivityCard = ({
  imageUrl,
  title,
  location,
  rating,
  price,
  onPress,
}: ActivityCardProps) => {
  return (
    <TouchableOpacity
      className="bg-white overflow-hidden mx-2 my-3 shadow-lg flex-1 md:flex-[0.5] md:max-w-[50%]"
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View className="relative w-full h-[139px] md:h-[200px] bg-Neutral-10">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-[139px] md:h-[200px] rounded-3xl"
          resizeMode="cover"
        />
      </View>

      <View className="p-5 md:p-7 rounded-3xl h-[85px] md:h-[120px] mt-2 bg-Neutral-10">
        <View className="flex-row justify-between items-start h-full">
          <View className="flex-1 mr-3 flex flex-col justify-between h-full">
            <Text className="text-base md:text-2xl font-abel font-normal">
              {title}
            </Text>
            <View className="flex-row items-center">
              <MapPinIcon width={16} height={16} />
              <Text
                className="text-xs md:text-lg text-Neutral-100 ml-1 font-sf-pro"
                numberOfLines={1}
              >
                {location}
              </Text>
            </View>
          </View>
          <View className="flex-1 h-full flex flex-col justify-between">
            <View className="flex-row justify-end items-center">
              <StarIcon width={16} height={16} />
              <Text className="text-xs md:text-lg font-semibold text-black ml-1 font-sf-pro">
                {rating.toFixed(1)}
              </Text>
            </View>

            <View className="flex-row justify-end items-baseline">
              <Text className="text-sm md:text-xl text-black font-sf-pro">
                ${price.toFixed(2)}
              </Text>
              <Text className="text-xs md:text-lg text-Neutral-75 ml-1 font-sf-pro">
                / night
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
