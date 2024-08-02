import { Image, Text, TouchableOpacity, View } from 'react-native'
import { IActivity } from '../../types/activity.type'
import getIcon from '../../utils/get-icon.util'
import { IconEnum } from '../../types/icon.type'
import { text } from '../../shared/text/text'
import { TextStyles } from '../../shared/styles/text.styles'

interface IProps {
  activity: IActivity
  onPress: () => void
}
const ActivityContainer = ({ activity, onPress }: IProps) => {
  const FavIcon = getIcon(IconEnum.FAVORITE)
  const LocationIcon = getIcon(IconEnum.LOCATION)
  const StarIcon = getIcon(IconEnum.STAR)
  return (
    <TouchableOpacity onPress={onPress} className="h-fit w-full gap-1">
      <View className="bg-gray-200 w-full h-34 overflow-hidden rounded-default">
        <Image source={{ uri: activity.photoUrl }} className="w-full h-full" />
        {activity.isFav && <FavIcon className="absolute top-5 left-5" />}
      </View>
      <View className="w-full bg-alabaster rounded-default p-5 justify-between flex-row">
        <View className={'h-11 justify-between items-start'}>
          <Text className={`${TextStyles.base}`}>{activity.name}</Text>
          <View className={'flex-row gap-1'}>
            <LocationIcon />
            <Text className={`${TextStyles.xs}`}>{activity.location}</Text>
          </View>
        </View>
        <View className={'h-11 justify-between items-end'}>
          <View className={'flex-row gap-1'}>
            <StarIcon />
            <Text className={`${TextStyles.xs}`}>{activity.rating}</Text>
          </View>
          <View className={'flex-row'}>
            <Text className={'font-abel'}>{['$', activity.price]}</Text>
            <Text className={`${TextStyles.xs} text-dusty-gray`}>
              {text.perNight}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivityContainer
