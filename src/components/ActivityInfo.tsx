import { Text, View, StyleSheet } from "react-native";
import { LocationIcon, StarIcon } from "../assets/icons";
import { w } from "../layout/metrics";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  name: string;
  rating: number;
  price: number;
};

export const ActivityInfo = ({ name, rating, price }: Props) => {
  return (
    <View className="bg-lightGrey rounded-[16px]" style={styles.container}>
      <View className="flex-row justify-between w-full">
        <Text style={styles.name}>{name}</Text>
        <View className="flex-row">
          <StarIcon />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>

      <View className="flex-row justify-between w-full" style={styles.bottomRow}>
        <View className="flex-row">
          <LocationIcon />
          <Text style={styles.locationText}>Location</Text>
        </View>
        <Text style={styles.priceText}>
          ${price}.00 /{" "}
          <Text className="text-grey" style={styles.nightText}>night</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: w(20),
  },
  name: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
  },
  rating: {
    fontSize: RFValue(12),
    fontFamily: "Abel",
    marginLeft: w(2),
  },
  bottomRow: {
    marginTop: w(12),
  },
  locationText: {
    fontSize: RFValue(12),
    fontFamily: "Abel",
    marginLeft: w(6),
  },
  priceText: {
    fontSize: RFValue(14),
    fontFamily: "Abel",
  },
  nightText: {
    fontSize: RFValue(12),
    fontFamily: "Abel",
  },
});