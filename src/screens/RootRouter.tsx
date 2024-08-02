import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { HomeScreen } from './HomeScreen/HomeScreen'
import { RootStackParamList } from './types/root'
import { ActivityScreen } from './ActivityScreen/ActivityScreen'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
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
        name="Activity"
        component={ActivityScreen}
        options={{ headerTransparent: true, headerTitle: () => null }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
