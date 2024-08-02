import { View, Text, Image, Pressable } from 'react-native'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { ActivityRouteProp } from '@screens/types/ActivityRouteProp'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToFavorites } from '../../api'

export const ActivityScreen = () => {
  const route = useRoute<ActivityRouteProp>()
  const queryClient = useQueryClient()
  const { photoUrl, name, price, description, id } = route.params

  const addMutation = useMutation({
    mutationFn: addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] })
    },
  })

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
      <Pressable
        onPress={() => {
          addMutation.mutate(id)
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </Pressable>
    </SafeAreaView>
  )
}
