import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { w } from "../layout/metrics";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  title: string;
  handlePress: () => void;
};

export const Button = ({ title, handlePress }: Props) => {
  return (
    <TouchableOpacity
      className="bg-black rounded-xl justify-center items-center"
      style={styles.button}
      onPress={handlePress}
    >
      <Text className="text-white font-abel" style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: w(56),
  },
  text: {
    fontSize: RFValue(16),
  },
});