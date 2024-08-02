import { ActivityItem } from '../ActivityItem/ActivityItem'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { ActivityListProps } from './ActivityListProps'

export const ActivitiesList = (props: ActivityListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id + ''}
        renderItem={({ item }) => (
          <ActivityItem
            itemId={item.id}
            location={item.location}
            name={item.name}
            photoUrl={item.photoUrl}
            price={item.price}
            rating={item.price}
            onPress={() => {
              props.onPress(item)
            }}
          />
        )}
      />
    </View>
  )
}
