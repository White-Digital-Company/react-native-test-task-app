import { IActivity } from '@/data/models/IActivity';
import { FC } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import Star from '@/assets/svg/Star.svg';
import MapPin from '@/assets/svg/MapPin.svg';
import tw from '../../../lib/tailwind';

interface Props {
  activity: IActivity;
}

const ActivityItem: FC<Props> = ({ activity }) => {
  const { width } = Dimensions.get('window');
  return (
    <Pressable style={tw`flex justify-center items-center mb-[10]`}>
      <Image
        source={{ uri: activity.photoUrl }}
        defaultSource={require('@/assets/images/EmptyPicture.jpg')}
        style={{ width: width - 40, height: 200 }}
      />
      <View style={[tw`bg-grayBg p-[20] rounded-[20px] mt-2`, { width: width - 40 }]}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-main text-black text-[16px]`}>{activity.name}</Text>
          <View style={tw`flex-row items-center`}>
            <Star width={16} height={16} />
            <Text style={tw`font-main text-black text-xs ml-[3]`}>{activity.rating}</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <MapPin width={16} height={16} />
            <Text style={tw`font-main text-black text-xs ml-[3]`}>{activity.location}</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`font-main text-[14px] text-black leading-[17px]`}>${activity.price}</Text>
            <Text style={tw`font-main text-[12px] text-textSecondary leading-[14px]`}> / night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ActivityItem;
