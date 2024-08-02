import { ActivityItem } from '../ActivityItem/ActivityItem'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

export const ActivitiesList = () => {
  return (
    <View style={styles.container}>
        <FlatList data={[1, 2, 3]} renderItem={() => <ActivityItem />} />
    </View>
  )
}
