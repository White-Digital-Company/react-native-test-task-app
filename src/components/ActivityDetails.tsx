import { w } from "../layout/metrics";
import { Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  name: string;
  price: number;
  location: string;
  description: string;
};

export const ActivityDetails = ({ name, price, location, description }: Props) => {
  return (
    <View className="bg-white" style={styles.container}>
      <Text className="text-black" style={styles.name}>
        {name}
      </Text>

      <View
        className="flex-row justify-between border-b border-lightGrey"
        style={styles.priceContainer}
      >
        <Text className="text-black" style={styles.price}>
          ${price}.00
        </Text>
        <Text className="text-grey" style={styles.location}>
          Included {location} and fees
        </Text>
      </View>

      <Text className="text-black" style={styles.descriptionTitle}>
        Description
      </Text>
      <Text
        numberOfLines={5}
        ellipsizeMode="tail"
        className="text-grey"
        style={styles.description}
      >
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: w(20),
    marginBottom: w(20),
  },
  name: {
    fontSize: RFValue(20),
    fontFamily: "Abel",
  },
  priceContainer: {
    marginTop: w(20),
    paddingBottom: w(20),
  },
  price: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
  },
  location: {
    fontSize: RFValue(12),
    fontFamily: "Abel",
  },
  descriptionTitle: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
    marginTop: w(20),
  },
  description: {
    fontSize: RFValue(14),
    fontFamily: "Abel",
    marginTop: w(10),
  },
});