import { Image, ScrollView, Text, View } from 'react-native'
import Header from '../../components/header/Header.component'
import { SafeAreaView } from 'react-native-safe-area-context'
import { text } from '../../shared/text/text'
import DefaultButton from '../../components/button/default-button.component'
import { TextStyles } from '../../shared/styles/text.styles'
import { UseActivities } from '../../hooks/activities.hook'
import { UseFavorites } from '../../hooks/favorites.hook'

const ActivityScreen = () => {
  const { activity } = UseActivities()
  const { handleFavorite, isFavLoading } = UseFavorites()
  return (
    activity && (
      <SafeAreaView className="flex-1 flex-col px-6">
        <Header isGoBack />
        <View className="w-screen h-[54%] rounded-bl-default rounded-br-default absolute z-0 overflow-hidden bg-slate-200">
          <Image
            source={{ uri: activity?.photoUrl }}
            className="w-full h-full"
          />
        </View>
        <ScrollView className="flex-1 mt-[340px] ">
          <View className=" w-full mb-4 items-center justify-center h-fit ">
            <View className="w-full flex-1 gap-y-6">
              <View className="flex-col gap-y-6 w-full pb-6 border-b border-wild-sand">
                <Text className={`${TextStyles.xxl}`}>{activity?.name}</Text>
                <View className="flex-row justify-between w-full items-center ">
                  <Text className={`${TextStyles.base}`}>
                    {['$', activity.price]}
                  </Text>
                  <Text className={`${TextStyles.xs} text-dusty-gray`}>
                    {text.includeTaxes}
                  </Text>
                </View>
              </View>
              <View className="flex-col gap-y-6 w-full pb-6 border-b border-wild-sand ">
                <Text className={`${TextStyles.base}`}>{text.description}</Text>
                <Text className={`${TextStyles.sm} text-silver-chalice`}>
                  {activity.description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <DefaultButton
          onPress={() => {
            handleFavorite(activity.id)
          }}
          isLoading={isFavLoading}
        >
          <Text className={`${TextStyles.base} text-white`}>
            {activity.isFav ? text.removeFromFav : text.addToFav}
          </Text>
        </DefaultButton>
      </SafeAreaView>
    )
  )
}

export default ActivityScreen
