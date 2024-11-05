import useGetActivities from 'data/hooks/useGetActivities';
import { FC } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ActivityItem from './components/ActivityItem';
import tw from 'lib/tailwind';

const HomeScreen: FC = () => {
  const { top } = useSafeAreaInsets();
  const { data, isLoading, refetch, isRefetching } = useGetActivities();

  return (
    <View style={[tw`flex-1 bg-white`, { paddingTop: top + 18 }]}>
      <Text style={tw`font-main text-[16px] text-black leading-[20px] mb-[36px] text-center`}>Activities</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <ActivityItem activity={item} />}
          contentContainerStyle={tw`pb-[32]`}
          refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
