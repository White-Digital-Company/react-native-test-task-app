import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import tw from '@/lib/tailwind'

interface CustomButtonProps {
  text: string
  onPress: () => void
  disabled?: boolean
  isLoading?: boolean
}

const CustomButton = ({
  text,
  onPress,
  disabled,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`${
        disabled ? 'bg-gray-500' : 'bg-black'
      } px-5 py-4 absolute bottom-5 rounded-full self-center items-center justify-center w-[95%] mx-5 `}
      onPress={onPress}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text style={tw`text-white font-main text-base`}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton
