import { Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <View className="mb-2">
      <Text className="text-black" style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
  },
});
