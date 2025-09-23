import { TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeftIcon } from "../assets/icons";
import { w } from "../layout/metrics";

type Props = {
  handlePress: () => void;
};

export const ButtonBack = ({ handlePress }: Props) => {
  return (
    <TouchableOpacity
      className="bg-white justify-center items-center"
      style={styles.button}
      onPress={handlePress}
    >
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: w(56),
    height: w(56),
    borderRadius: w(56),
  },
});