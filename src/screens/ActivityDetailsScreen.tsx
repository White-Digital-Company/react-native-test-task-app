import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native'
import ArrowIcon from '../../assets/svg/Arrow.svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { RootStackScreenProps } from './types/root'
import { useAddToFavorites } from '@hooks'
import { FavoriteResponse } from '@api'
import { Button } from '@components/Button'

type ActivityDetailsRouteProp = RootStackScreenProps<'ActivityDetails'>['route']

const ActivityDetailsScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const route = useRoute<ActivityDetailsRouteProp>()
  const { activity } = route.params

  const addToFavoritesMutation = useAddToFavorites()

  const handleAddToFavorites = () => {
    addToFavoritesMutation.mutate(
      { id: activity.id },
      {
        onSuccess: (response: FavoriteResponse) => {
          Alert.alert(t('activityDetails.successTitle'), response.message, [
            { text: t('activityDetails.ok') },
          ])
        },
        onError: (error: Error) => {
          Alert.alert(
            t('activityDetails.errorTitle'),
            t('activityDetails.errorMessage'),
            [{ text: t('activityDetails.ok') }],
          )
          console.error('Error adding to favorites:', error)
        },
      },
    )
  }

  return (
    <View className="flex-1 bg-white">
      <View className="relative">
        <Image
          source={{
            uri: activity.photoUrl,
          }}
          className="w-full h-[450px] md:h-[600px] rounded-b-3xl"
          resizeMode="cover"
        />
        <Pressable
          onPress={() => navigation.goBack()}
          className="absolute top-12 left-4 bg-white rounded-full w-12 h-12 items-center justify-center shadow-lg"
        >
          <ArrowIcon width={24} height={24} />
        </Pressable>
      </View>

      <ScrollView className="flex-1 px-5 pt-5">
        <Text className="text-2xl md:text-4xl font-abel text-black mb-5">
          {activity.name}
        </Text>

        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-base md:text-2xl font-abel text-black">
            ${activity.price.toFixed(2)}
          </Text>
          <Text className="text-xs md:text-xl text-Neutral-75 font-sf-pro">
            {t('activityDetails.priceSubtext')}
          </Text>
        </View>

        <View className="mb-5 bg-Neutral-15 rounded-3xl h-[1px] w-full"></View>

        <View className="mb-8">
          <Text className="text-base md:text-2xl font-abel text-black mb-3">
            {t('activityDetails.descriptionTitle')}
          </Text>
          <Text className="text-sm md:text-xl text-Neutral-75 font-sf-pro leading-6">
            {activity.description}
          </Text>
        </View>

        <View className="mb-5 bg-Neutral-15 rounded-3xl h-[1px] w-full"></View>

      </ScrollView>

      <View className="px-5 pb-6">
        <Button 
          type='primary' 
          isAddingToFavorites={addToFavoritesMutation.isPending}
          handleAddToFavorites={handleAddToFavorites}
          textButton={t('activityDetails.addToFavorites')}
        />
      </View>
    </View>
  )
}

export default ActivityDetailsScreen
