import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RootStackScreenProps } from './types/root';
import { ActivityDetails } from '../components/ActivityDetails';
import { Button } from '../components/Button';
import { ButtonBack } from '../components/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { useAddFavorite } from '../api/activities';
import { useFavorite } from '../store/favorite';
import { typography } from '../theme/typography';

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
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <ButtonBack handlePress={goBack} />
        </View>

        <View style={styles.imageContainer}>
          {loading && !error && <Text style={typography.subtitle}>Loading...</Text>}
          {!loading && error && <Text style={typography.subtitle}>No Image Available</Text>}
          {!error && photoUrl && !loading && (
            <FastImage
              source={{ uri: photoUrl }}
              resizeMode="cover"
              style={styles.image}
              onError={() => {
                setError(true);
                setLoading(false);
              }}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
            />
          )}
        </View>

        <View style={styles.detailsContainer}>
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
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 34
  },
  backButtonContainer: {
    position: 'absolute',
    top: 35,
    left: 13,
    zIndex: 100,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
