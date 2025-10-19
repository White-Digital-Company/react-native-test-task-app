import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import ActivityDetailsScreen from './ActivityDetailsScreen'
import { RootStackParamList } from './types/root'
import { SCREENS } from '@navigation'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.ACTIVITY_DETAILS}
        component={ActivityDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
