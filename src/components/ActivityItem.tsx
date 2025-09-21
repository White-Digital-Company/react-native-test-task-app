import { Data } from "@/types/activity";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { ActivityInfo } from "./ActivityInfo";
import { memo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/screens/types/root";
import { Favorite } from "./Favotire";
import { useFavorite } from "../store/favorite";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

type Props = {
  data: Data;
};

type ActivityInfoNavProp = StackNavigationProp<RootStackParamList, "Home">;

const _ActivityItem = ({ data }: Props) => {
  const { name, rating, price, id, photoUrl } = data;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigation = useNavigation<ActivityInfoNavProp>();
  
  const { favorite } = useFavorite();
  const isFavorite = favorite.find(item => item === id);

  const navigateToActivityInfo = () => {
    navigation.navigate("ActivityDetails", { data });
  };

  return (
    <TouchableOpacity onPress={navigateToActivityInfo}>
      {isFavorite && (
        <View style={styles.favoriteWrapper}>
          <Favorite />
        </View>
      )}

      {loading && !error && (
        <View style={styles.loadingWrapper}>
          <Text style={typography.subtitle}>Loading...</Text>
        </View>
      )}

      {error && (
        <View style={styles.errorWrapper}>
          <Text style={typography.subtitle}>No Image Available</Text>
        </View>
      )}

      {!error && (
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

      <ActivityInfo name={name} rating={rating} price={price} />
    </TouchableOpacity>
  );
};

export const ActivityItem = memo(_ActivityItem);

const styles = StyleSheet.create({
  favoriteWrapper: {
    position: "absolute",
    zIndex: 100,
    left: 20,
    top: 20,
  },
  loadingWrapper: {
    height: 224,
    width: "100%",
    backgroundColor: colors.lightGrey,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  errorWrapper: {
    height: 139,
    width: "100%",
    backgroundColor: colors.lightGrey,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 139,
    borderRadius: 16,
  },
});