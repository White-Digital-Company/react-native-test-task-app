import useGetActivities from 'data/hooks/useGetActivities';
import { FC } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ActivityItem from './components/ActivityItem';
import tw from 'lib/tailwind';

const HomeScreen: FC = () => {
  const { top } = useSafeAreaInsets();
  const { data, isLoading } = useGetActivities();

  return (
    <View style={{ paddingTop: top + 18, backgroundColor: '#ffffff', flex: 1 }}>
      <Text
        style={{ fontFamily: 'Abel-Regular', fontSize: 16, lineHeight: 20.39, textAlign: 'center', marginBottom: 36 }}
      >
        Activities
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <ActivityItem activity={item} />}
          contentContainerStyle={tw`pb-[32]`}
        />
      )}
    </View>
  );
};

export default HomeScreen;
