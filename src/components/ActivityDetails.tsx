import { typography } from "../theme/typography";
import { colors } from "../theme/colors";
import { Text, View, StyleSheet } from "react-native";

type Props = {
  name: string;
  price: number;
  location: string;
  description: string;
};

export const ActivityDetails = ({ name, price, location, description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={typography.title}>{name}</Text>

      <View style={styles.priceRow}>
        <Text style={typography.subtitle}>${price}.00</Text>
        <Text style={[typography.small, styles.includedText]}>
          Included {location} and fees
        </Text>
      </View>

      <Text style={[typography.subtitle, styles.descriptionTitle]}>Description</Text>
      <Text
        numberOfLines={5}
        ellipsizeMode="tail"
        style={[typography.regular, styles.descriptionText]}
      >
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginBottom: "auto",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  includedText: {
    color: colors.grey,
  },
  descriptionTitle: {
    marginTop: 20,
  },
  descriptionText: {
    marginTop: 10,
    color: colors.grey,
  },
});
