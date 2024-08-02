import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivitiesList } from '../../components'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../types/HomeScreenNavigationProp'
import { Activity } from '@screens/types/activity'
import { styles } from './style'

const data = [
  {
    id: 1,
    photoUrl:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/15/09/istock-483629308.jpg',
    name: 'Hiking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mauris varius, rutrum quam eu, rutrum justo. Quisque fermentum malesuada suscipit. Sed varius dictum ante vel mollis',
    location: 'Berlin',
    price: 50,
    rating: 4.5,
  },
  {
    id: 2,
    photoUrl:
      'https://laketahoewatertrail.org/wp-content/uploads/2020/10/Alexys-and-Alma-Chimney-Beach-1024x683.jpg',
    name: 'Kayaking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mauris varius, rutrum quam eu, rutrum justo. Quisque fermentum malesuada suscipit. Sed varius dictum ante vel mollis',
    location: 'Milan',
    price: 30,
    rating: 4.8,
  },
  {
    id: 3,
    photoUrl:
      'https://hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/healthu-images/education-stories/2023/12/2023-12-29-ski-full.png',
    name: 'Skiing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mauris varius, rutrum quam eu, rutrum justo. Quisque fermentum malesuada suscipit. Sed varius dictum ante vel mollis',
    location: 'Warsaw',
    price: 40,
    rating: 3.8,
  },
]

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const navigateToDetails = (item: Activity) => {
    navigation.navigate('Activity', item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Activities</Text>
      <ActivitiesList items={data} onPress={navigateToDetails} />
    </SafeAreaView>
  )
}
