import { View, Text, Image, Pressable } from 'react-native'
import { styles } from './styles'
import { Images } from '../../assets'
import { ActivityItemProps } from './ActivityItemProps'

export const ActivityItem = ({
  photoUrl,
  name,
  location,
  price,
  rating,
  isFavorite,
  ...props
}: ActivityItemProps) => {
  return (
    <Pressable {...props}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: photoUrl,
          }}
        />
        {isFavorite && (
          <Image style={styles.favoriteImage} source={Images.favorite} />
        )}

        <View style={styles.contentContainer}>
          <View style={[styles.row, styles.content]}>
            <Text>{name}</Text>
            <View style={styles.row}>
              <Image style={styles.logo} source={Images.starImage} />
              <Text>{rating}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.content]}>
            <View style={styles.row}>
              <Image style={styles.logo} source={Images.pinImage} />
              <Text>{location}</Text>
            </View>
            <Text>${price}/ night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
