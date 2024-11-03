import useGetActivities from '@/data/hooks/useGetActivities';
import { FC } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ActivityItem from './components/ActivityItem';

const HomeScreen: FC = () => {
  const { top } = useSafeAreaInsets();
  const { data, isLoading } = useGetActivities();

  return (
    <View style={{ paddingTop: top + 18, backgroundColor: '#ffffff' }}>
      <Text style={{ fontFamily: 'Abel-Regular', fontSize: 16, lineHeight: 20.39, textAlign: 'center' }}>
        Activities
      </Text>
      <FlatList data={data} renderItem={({ item }) => <ActivityItem activity={item} />} />
    </View>
  );
};

export default HomeScreen;
