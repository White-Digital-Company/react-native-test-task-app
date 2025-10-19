import { t } from 'i18next'
import { TouchableOpacity, Text } from 'react-native'

type ButtonProps = {
  isAddingToFavorites: boolean
  handleAddToFavorites: () => void
  type: 'primary' | 'secondary'
  textButton: string
}

export const Button = ({
  isAddingToFavorites,
  handleAddToFavorites,
  type,
  textButton
}: ButtonProps) => {

  function background() {
    switch (type) {
      case 'primary':
        return 'bg-black'
      case 'secondary':
        return 'bg-neutral-75'
      default:
        return 'bg-black'
    }
  }

  return (
      <TouchableOpacity
        className={`${background()} rounded-full py-4 md:py-6 items-center shadow-lg ${
          isAddingToFavorites ? 'opacity-50' : ''
        }`}
        activeOpacity={0.8}
        onPress={handleAddToFavorites}
        disabled={isAddingToFavorites}
      >
        <Text className="text-white text-base md:text-xl font-semibold">
        {isAddingToFavorites
          ? t('activityDetails.adding')
          : textButton}
        </Text>
      </TouchableOpacity>
  )
}
