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
import { w } from "../layout/metrics";
import { RFValue } from "react-native-responsive-fontsize";

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
      <View className="relative w-full">
        {isFavorite && (
          <View className="absolute z-50 left-5 top-5">
            <Favorite />
          </View>
        )}

        <View className="w-full rounded-[16px] bg-lightGrey justify-center items-center" style={styles.imageContainer}>
          {loading && !error && (
            <Text style={styles.loadingText}>Loading...</Text>
          )}
          {error && (
            <Text style={styles.loadingText}>No Image Available</Text>
          )}
          {!error && (
            <FastImage
              source={{ uri: photoUrl }}
              resizeMode="cover"
              className="w-full rounded-[20px]"
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
      </View>
      <ActivityInfo name={name} rating={rating} price={price} />
    </TouchableOpacity>
  );
};

export const ActivityItem = memo(_ActivityItem);

const styles = StyleSheet.create({
  imageContainer: {
    height: w(139),
  },
  loadingText: {
    fontSize: RFValue(12),
  },
  image: {
    height: w(139),
    position: "absolute",
    top: 0,
    left: 0,
  },
});