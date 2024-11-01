import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import { RootStackParamList } from './types/root'
import ActivityScreen from '@/screens/ActivityScreen.tsx'
import { LeftButton } from '@/components/navigation/left-button'

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
        headerLeft: LeftButton,
        headerLeftContainerStyle: { paddingLeft: 20, paddingTop: 10 },
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
        options={{
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  )
}
export default RootRouter
