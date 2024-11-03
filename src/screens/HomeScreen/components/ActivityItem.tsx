import { IActivity } from '@/data/models/IActivity';
import { FC } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Star from '@/assets/svg/Star.svg';

interface Props {
  activity: IActivity;
}

const ActivityItem: FC<Props> = ({ activity }) => {
  const { width } = Dimensions.get('window');
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
      <Image source={{ uri: activity.photoUrl }} style={{ width: width - 40, height: 139, borderRadius: 20 }} />
      <View style={{ backgroundColor: '#F7F7F7', padding: 20, borderRadius: 20, width: width - 40 }}>
        <Text>{activity.name}</Text>
        <Star width={16} height={16} />
        <Text>{activity.rating}</Text>
        <Text>{activity.location}</Text>
        <Text>{activity.price}</Text>
      </View>
    </View>
  );
};

export default ActivityItem;
