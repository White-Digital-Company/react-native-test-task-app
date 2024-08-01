import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { IconEnum } from '../../types/icon.type'
import getIcon from '../../utils/get-icon.util'

interface IProps {
  width?: number
  height?: number
}
const ButtonLoader = ({ width, height }: IProps) => {
  const rotation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    )
    rotate.start()
    return () => {
      rotate.stop()
    }
  }, [])

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  const Loader = getIcon(IconEnum.BUTTON_LOADER)

  return (
    <Animated.View
      className="justify-start self-center"
      style={[{ transform: [{ rotate: spin }] }]}
    >
      {width && height ? <Loader width={width} height={height} /> : <Loader />}
    </Animated.View>
  )
}

export default ButtonLoader
