import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from './types/root';
import { ActivityDetails } from '../components/ActivityDetails';
import { Button } from '../components/Button';
import { ButtonBack } from '../components/ButtonBack';
import { useAddFavorite } from '../api/activities';
import { useFavorite } from '../store/favorite';
import { w } from '../layout/metrics';
import { RFValue } from 'react-native-responsive-fontsize';

export default function ActivityDetailsScreen({
  route,
}: RootStackScreenProps<'ActivityDetails'>) {
  const { data } = route.params;
  const { name, price, location, description, photoUrl, id } = data;
  const navigation = useNavigation();
  const addFavoriteMutation = useAddFavorite();
  const { addFavorite } = useFavorite();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    return () => {
      FastImage.clearMemoryCache();
    };
  }, []);

  const addToFavorite = async () => {
    try {
      await addFavoriteMutation.mutateAsync(id);
      addFavorite(id);
    } catch (err) {
      console.log(err);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white" style={styles.container}>
      <View className="absolute z-50" style={styles.backButton}>
        <ButtonBack handlePress={goBack} />
      </View>

      <View className="bg-lightGrey rounded-xl overflow-hidden justify-center items-center" style={styles.imageContainer}>
        {loading && !error && (
          <Text style={styles.text}>Loading...</Text>
        )}
        {!loading && error && (
          <Text style={styles.text}>No Image Available</Text>
        )}
        {!error && photoUrl && (
          <FastImage
            source={{ uri: photoUrl }}
            resizeMode="cover"
            style={[styles.image, { position: loading ? 'absolute' : 'relative' }]}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        )}
      </View>

      <View className="flex-1 px-5 pt-5">
        <ActivityDetails
          name={name}
          price={price}
          location={location}
          description={description}
        />
        <Button title="Add to Favorites" handlePress={addToFavorite} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: w(35),
  },
  backButton: {
    top: w(35),
    left: w(13),
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: 'Abel',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});