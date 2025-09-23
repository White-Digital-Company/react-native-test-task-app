import { Text, View, StyleSheet } from "react-native";
import { w } from "../layout/metrics";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  title: string;
};

export const Loading = ({ title }: Props) => {
  return (
    <View className="bg-white justify-center items-center" style={styles.container}>
      <Text className="text-black" style={styles.text}>
        {title}...
      </Text>
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