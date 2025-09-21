import { FavoriteIcon } from "../assets/icons";
import { colors } from "../theme/colors";
import { View, StyleSheet } from "react-native";

export const Favorite = () => {
    return (
        <View style={styles.container}>
            <FavoriteIcon />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 28,
        height: 28,
        borderRadius: 28,
        backgroundColor: colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
});