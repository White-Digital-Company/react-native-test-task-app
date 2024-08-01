import { IconEnum } from '../types/icon.type'
import ButtonLoader from '../../assets/icons/button-loader.svg'
import ArrowLeft from '../../assets/icons/arrow-left-line.svg'

const getIcon = (type?: IconEnum) => {
  switch (type) {
    case IconEnum.BACK_ARROW: {
      return ArrowLeft
    }
    case IconEnum.BUTTON_LOADER: {
      return ButtonLoader
    }
    default: {
      return ArrowLeft
    }
  }
}

export default getIcon
