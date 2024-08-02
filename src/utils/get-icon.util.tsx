import { IconEnum } from '../types/icon.type'
import ButtonLoader from '../../assets/icons/button-loader.svg'
import ArrowLeft from '../../assets/icons/arrow-left-line.svg'
import Favorite from '../../assets/icons/tag.svg'
import Location from '../../assets/icons/MapPin.svg'
import Star from '../../assets/icons/Star.svg'

const getIcon = (type?: IconEnum) => {
  switch (type) {
    case IconEnum.BACK_ARROW: {
      return ArrowLeft
    }
    case IconEnum.BUTTON_LOADER: {
      return ButtonLoader
    }
    case IconEnum.FAVORITE: {
      return Favorite
    }
    case IconEnum.LOCATION: {
      return Location
    }
    case IconEnum.STAR: {
      return Star
    }
    default: {
      return ArrowLeft
    }
  }
}

export default getIcon
