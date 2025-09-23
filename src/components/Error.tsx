import { Text, View, StyleSheet } from "react-native";
import { w } from "../layout/metrics";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  error: string;
};

export const ErrorLoading = ({ error }: Props) => {
  return (
    <View className="bg-white justify-center items-center" style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
  },
});