import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, StackScreen } from 'screens/types/root';
import tw from 'lib/tailwind';
import { FC } from 'react';
import { Image, Pressable, View, Text, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import BackArrow from 'assets/svg/BackArrow.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Divider from 'components/Divider';
import useAddToFavorites from 'data/hooks/useAddToFavorites';

const ActivityDetailsScreen: FC = () => {
  const {
    params: { activity },
  } = useRoute<RouteProp<RootStackParamList, StackScreen.DETAILS>>();
  const { goBack } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { top, bottom } = useSafeAreaInsets();
  const { addToFavorites, isSuccess, isPending } = useAddToFavorites();

  return (
    <View style={tw`flex-1 bg-white`}>
      <Pressable
        onPress={goBack}
        style={[
          tw`absolute left-[13px] z-10 w-[56px] h-[56px] rounded-100 bg-white flex items-center justify-center`,
          { top: top ?? 35 },
        ]}
      >
        <BackArrow />
      </Pressable>
      <Image
        source={{ uri: activity.photoUrl }}
        style={tw`w-full h-[450px] rounded-b-[20px] mb-[20px]`}
        defaultSource={require('assets/images/EmptyPicture.jpg')}
      />
      <View style={tw`px-[20px] flex-1`}>
        <Text style={tw`font-main text-[24px] text-black leading-[30px] mb-[20px]`}>{activity.name}</Text>
        <View style={tw`flex-row justify-between items-center mb-[20px]`}>
          <Text style={tw`font-main text-[24px] text-black leading-[30px]`}>${activity.price}</Text>
          <Text style={tw`font-main text-[12px] text-textSecondary leading-[14px]`}>Included taxes and fees</Text>
        </View>
        <Divider />
        <Text style={tw`font-main text-[16px] text-black leading-[20px] mt-[20px]`}>Description</Text>
        <Text style={tw`font-main text-[14px] text-textSecondary leading-[17px] mt-[10px] mb-[20px]`}>
          {activity.description}
        </Text>
        <Divider />
      </View>
      <Pressable
        style={[
          tw`bg-black h-[56px] rounded-[100px] absolute left-[20px] right-[20px] flex items-center justify-center`,
          { bottom: bottom ?? 20 },
        ]}
        onPress={() => addToFavorites(activity.id)}
      >
        {isPending ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={tw`font-main text-[16px] text-white leading-[20px]`}>
            {isSuccess ? 'Added to Favorites' : 'Add to Favorites'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default ActivityDetailsScreen;
