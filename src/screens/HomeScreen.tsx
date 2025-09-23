import { useActivities } from '../api/activities';
import { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Loading } from '../components/Loading';
import { ErrorLoading } from '../components/Error';
import { List } from '../components/List';
import { w } from '../layout/metrics';


const HomeScreen = () => {
  const { data, isLoading, isError, error } = useActivities();

  useEffect(() => {
    return () => {
      FastImage.clearMemoryCache();
    };
  }, []);

  if (isLoading) return <Loading title="Loading" />;
  if (isError) return <ErrorLoading error={error.message} />;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1" style={styles.container}>
        <List data={data ?? []} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
     paddingHorizontal: w(20)
  }
})

export default HomeScreen;