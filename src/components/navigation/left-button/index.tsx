import { TouchableOpacity } from 'react-native'
import Arrow from '#/icons/arrow.svg'
import tw from '@/lib/tailwind'
import { HeaderBackButtonProps } from '@react-navigation/elements'
export const LeftButton = (props: HeaderBackButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={tw`bg-white w-14 h-14 rounded-full items-center justify-center`}
    >
      <Arrow width={24} height={24} />
    </TouchableOpacity>
  )
}
