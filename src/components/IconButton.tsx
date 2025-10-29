import { Pressable } from 'react-native'
import ArrowIcon from '../../assets/svg/Arrow.svg'
import { useNavigation } from '@react-navigation/native'

export const IconButton = () => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      className="bg-white rounded-full w-12 h-12 items-center justify-center shadow-lg"
    >
      <ArrowIcon width={24} height={24} />
    </Pressable>
  )
}
