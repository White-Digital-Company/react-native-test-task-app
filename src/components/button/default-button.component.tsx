import ButtonLoader from '../../components/loader/button-loader.component'
import { TouchableOpacity, View } from 'react-native'

type ButtonProps = {
  onPress: () => void
  disabled?: boolean
  styleClassName?: string
  children: JSX.Element | JSX.Element[]
  isLoading?: boolean
}

const DefaultButton = ({
  onPress,
  disabled,
  styleClassName,
  children,
  isLoading,
}: ButtonProps) => {
  return (
    <>
      {isLoading ? (
        <View
          className={
            styleClassName ??
            'w-full bg-black flex align-center justify-center h-14 rounded-full'
          }
        >
          <ButtonLoader />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (!disabled) {
              onPress()
            }
          }}
          className={
            styleClassName ??
            'w-full bg-black flex items-center justify-center h-14 rounded-full'
          }
        >
          {children}
        </TouchableOpacity>
      )}
    </>
  )
}

export default DefaultButton
