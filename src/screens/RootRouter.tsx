import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { RootStackParamList, StackScreen } from './types/root';
import ActivityDetailsScreen from './ActivityDetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName={StackScreen.HOME}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen name={StackScreen.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={StackScreen.DETAILS} component={ActivityDetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootRouter;
