import { Text, View, StyleSheet } from "react-native";
import { LocationIcon, StarIcon } from "../assets/icons";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

type Props = {
  name: string;
  rating: number;
  price: number;
};

export const ActivityInfo = ({ name, rating, price }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={typography.subtitle}>{name}</Text>
        <View style={styles.ratingRow}>
          <StarIcon />
          <Text style={[typography.small, styles.ratingText]}>{rating}</Text>
        </View>
      </View>

      <View style={styles.footerRow}>
        <View style={styles.locationRow}>
          <LocationIcon />
          <Text style={[typography.small, styles.locationText]}>Location</Text>
        </View>
        <Text style={typography.regular}>
          ${price}.00 /{" "}
          <Text style={[typography.small, styles.nightText]}>night</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 85,
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.lightGrey,
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingRow: {
    flexDirection: "row",
  },
  ratingText: {
    marginLeft: 2,
  },
  footerRow: {
    width: "100%",
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationRow: {
    flexDirection: "row",
  },
  locationText: {
    marginLeft: 6,
  },
  nightText: {
    color: colors.grey,
  },
});