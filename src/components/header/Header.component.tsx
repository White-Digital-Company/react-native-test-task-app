import { UseNavigation } from '../../hooks/Navigation.hook'
import { View, Text, TouchableOpacity } from 'react-native'

interface IProps {
  title?: string
  isGoBack?: boolean
}

const Header = ({ title, isGoBack }: IProps) => {
  const { goBack } = UseNavigation()
  return (
    <View className="bg-green-200 h-14 w-full px-6">
      {isGoBack && (
        <TouchableOpacity onPress={goBack}>
          <Text>Go back</Text>
        </TouchableOpacity>
      )}
      {title && <Text className="mx-auto mt-auto">{title}</Text>}
    </View>
  )
}

export default Header
