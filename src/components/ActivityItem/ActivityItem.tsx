import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Images } from '../../assets'

export const ActivityItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/15/09/istock-483629308.jpg',
        }}
      />
      <View style={styles.contentContainer}>
        <View style={[styles.row, styles.content]}>
          <Text>Activity Name</Text>
          <View style={styles.row}>
            <Image style={styles.logo} source={Images.starImage} />
            <Text>4.7</Text>
          </View>
        </View>
        <View style={[styles.row, styles.content]}>
          <View style={styles.row}>
            <Image style={styles.logo} source={Images.pinImage} />
            <Text>Location</Text>
          </View>
          <Text>$123.00/ night</Text>
        </View>
      </View>
    </View>
  )
}
