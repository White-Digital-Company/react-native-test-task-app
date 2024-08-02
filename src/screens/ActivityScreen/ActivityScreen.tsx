import { View, Text, Image, Pressable } from 'react-native'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { ActivityRouteProp } from '@screens/types/ActivityRouteProp'

export const ActivityScreen = () => {
  const route = useRoute<ActivityRouteProp>()
  const { photoUrl, name, price, description } = route.params

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: photoUrl,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.taxes}>Included taxes and fees</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </Pressable>
    </SafeAreaView>
  )
}
