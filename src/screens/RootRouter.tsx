import {
  TransitionPresets,
  createStackNavigator
} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { RootStackParamList } from "./types/root";
import ActivityScreen from "@/screens/ActivityScreen.tsx";
import { TouchableOpacity } from "react-native";
import Arrow from "#/arrow.svg"
const Stack = createStackNavigator<RootStackParamList>();

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
        headerLeftContainerStyle:{paddingLeft:20,paddingTop:10}
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
        options={{ headerShown: true, headerTransparent: true, headerShadowVisible: false, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};
const LeftButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props} className="bg-white w-14 h-14 rounded-full items-center justify-center">
      <Arrow width={24} height={24}/>
    </TouchableOpacity>
  );
};
export default RootRouter;
