import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import FavoritesScreen from './FavoritesScreen'
import { RootStackParamList } from './types/root'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: '#FFFFFF' },
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
