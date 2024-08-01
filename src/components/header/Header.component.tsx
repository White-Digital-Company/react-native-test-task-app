import getIcon from '../../utils/get-icon.util'
import DefaultButton from '../../components/button/default-button.component'
import { UseNavigation } from '../../hooks/Navigation.hook'
import { View, Text } from 'react-native'
import { IconEnum } from '../../types/icon.type'

interface IProps {
  title?: string
  isGoBack?: boolean
}

const Header = ({ title, isGoBack }: IProps) => {
  const { goBack } = UseNavigation()
  const BackArrow = getIcon(IconEnum.BACK_ARROW)
  return (
    <View className="h-16 w-full flex">
      {isGoBack && (
        <DefaultButton
          onPress={goBack}
          styleClassName="bg-white w-16 h-16 rounded-full items-center justify-center"
        >
          <BackArrow />
        </DefaultButton>
      )}
      {title && <Text className="m-auto">{title}</Text>}
    </View>
  )
}

export default Header
