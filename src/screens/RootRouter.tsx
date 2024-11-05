import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { RootStackParamList } from './types/root'
import { ActivityScreen } from './activity/ActivityScreen'
import { HomeScreen } from './home/HomeScreen'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
