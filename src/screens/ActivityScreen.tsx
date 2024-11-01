import { Image, ScrollView, Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '@/components/custom-button'

import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@/screens/types/root.ts'
import tw from '@/lib/tailwind'
import { useAddToFavoriteMutation } from '@/api/resources/activities/queries'

type ActivityRouteProp = RouteProp<RootStackParamList, 'Activity'>
const ActivityScreen = () => {
  const route = useRoute<ActivityRouteProp>()
  const activity = route.params.activity
  const {
    mutate: addToFavorite,
    isPending: isFavoriteLoading,
    isSuccess,
  } = useAddToFavoriteMutation()

  return (
    <View style={tw`flex-1 bg-white`}>
      <Image
        source={{ uri: activity.photoUrl }}
        style={{
          width: '100%',
          height: hp(50),
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <ScrollView style={tw`px-5`} showsVerticalScrollIndicator={false}>
        <View style={tw`pb-20`}>
          <View style={tw`border-b border-mainBorder flex-auto py-5 gap-y-5`}>
            <Text style={tw`font-main text-2xl text-black`}>
              {activity.name}
            </Text>
            <View style={tw`flex-row items-center gap-1 justify-between`}>
              <Text style={tw`font-main text-base text-black`}>
                ${activity.price}
              </Text>
              <Text style={tw`font-main text-xs text-right text-mainGrey`}>
                Included taxes and fees
              </Text>
            </View>
          </View>
          <View style={tw`border-b border-mainBorder flex-auto py-5 gap-y-2.5`}>
            <Text style={tw`font-main text-base text-black`}>Description</Text>
            <Text style={tw`font-main text-xs text-left text-mainGrey`}>
              {activity.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <CustomButton
        text={isSuccess ? 'Added to favorites' : 'Add to favorites'}
        onPress={() => addToFavorite(activity.id)}
        isLoading={isFavoriteLoading}
        disabled={isFavoriteLoading || isSuccess}
      />
    </View>
  )
}

export default ActivityScreen
