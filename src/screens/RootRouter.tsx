import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import { RootStackParamList } from './types/root'
import { Header } from '../components/Header'
import ActivityDetailsScreen from './ActivityDetailsScreen'

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
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Header title='Activities'/>
          ),
          headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="ActivityDetails"
        component={ActivityDetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
