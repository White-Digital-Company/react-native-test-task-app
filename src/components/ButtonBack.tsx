import { colors } from "../theme/colors";
import { ArrowLeftIcon } from "../assets/icons";
import { TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    handlePress: () => void;
};

export const ButtonBack = ({ handlePress }: Props) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <ArrowLeftIcon />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.white,
        width: 56,
        height: 56,
        borderRadius: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
});