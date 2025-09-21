import { useActivities } from '../api/activities';
import { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Loading } from '../components/Loading';
import { ErrorLoading } from '../components/Error';
import { List } from '../components/List';
import { colors } from '../theme/colors';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <List data={data ?? []} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});