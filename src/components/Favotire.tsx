import { FavoriteIcon } from "../assets/icons";
import { w } from "../layout/metrics";
import { View, StyleSheet } from "react-native";

export const Favorite = () => {
  return (
    <View className="bg-yellow rounded-full items-center justify-center" style={styles.container}>
      <FavoriteIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w(28),
    height: w(28),
  },
});
