import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { ActivityCard } from '@components/ActivityCard'
import { RootStackParamList } from './types/root'
import { Activity } from '@api'
import { useActivities } from '@hooks'
import { SCREENS } from '@navigation'
import { SafeAreaView } from 'react-native-safe-area-context'

type NavigationProp = StackNavigationProp<RootStackParamList>

export const HomeScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<NavigationProp>()
  const {
    data: activities = [],
    isLoading: loading,
    error,
    refetch,
  } = useActivities()

  const screenWidth = Dimensions.get('window').width
  const isTablet = screenWidth >= 768
  const numColumns = isTablet ? 2 : 1

  const handleActivityPress = (activity: Activity) => {
    navigation.navigate(SCREENS.ACTIVITY_DETAILS, { activity })
  }

  const renderHeader = () => (
    <View className="px-6 pt-4 pb-5">
      <Text className="text-base text-center font-abel text-black mb-2">
        {t('activities.title')}
      </Text>
    </View>
  )

  const renderEmpty = () => {
    if (loading) {
      return (
        <View className="items-center justify-center py-10">
          <ActivityIndicator size="large" color="#000000" />
          <Text className="mt-4 text-gray-600">{t('activities.loading')}</Text>
        </View>
      )
    }

    if (error) {
      return (
        <View className="items-center justify-center py-10 px-6">
          <Text className="text-lg text-red-500 text-center mb-4">
            {t('activities.error')}
          </Text>
          <Text
            className="text-base text-blue-500 underline"
            onPress={() => refetch()}
          >
            {t('activities.retry')}
          </Text>
        </View>
      )
    }

    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <ActivityCard
            imageUrl={item.photoUrl}
            title={item.name}
            location={item.location}
            rating={item.rating}
            price={item.price}
            onPress={() => handleActivityPress(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        columnWrapperStyle={
          isTablet ? { justifyContent: 'space-between' } : undefined
        }
      />
    </SafeAreaView>
  )
}
