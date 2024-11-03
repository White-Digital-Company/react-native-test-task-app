import { IActivity } from '@/data/models/IActivity';
import { FC } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import Star from '@/assets/svg/Star.svg';
import MapPin from '@/assets/svg/MapPin.svg';
import tw from 'twrnc';

interface Props {
  activity: IActivity;
}

const ActivityItem: FC<Props> = ({ activity }) => {
  const { width } = Dimensions.get('window');
  return (
    <Pressable style={tw`flex justify-center items-center mb-[10]`}>
      <Image source={{ uri: activity.photoUrl }} style={[tw`rounded-3xl`, { width: width - 40, height: 139 }]} />
      <View style={[tw`bg-grayBg p-20 rounded-3xl mt-2`, { width: width - 40 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Abel-Regular', fontSize: 16, lineHeight: 15 }}>{activity.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Star width={16} height={16} />
            <Text style={{ fontFamily: 'Abel-Regular', fontSize: 12, lineHeight: 16, marginLeft: 3 }}>
              {activity.rating}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MapPin width={16} height={16} />
            <Text style={{ fontFamily: 'Abel-Regular', fontSize: 12, lineHeight: 16, marginLeft: 3 }}>
              {activity.location}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Abel-Regular', fontSize: 14, lineHeight: 17 }}>${activity.price}</Text>
            <Text style={{ fontFamily: 'Abel-Regular', fontSize: 12, lineHeight: 14 }}> / night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ActivityItem;
