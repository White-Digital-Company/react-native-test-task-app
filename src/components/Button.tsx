import { typography } from "../theme/typography";
import { colors } from "../theme/colors";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    title: string; 
    handlePress: () => void;
};

export const Button = ({ title, handlePress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 56,
        backgroundColor: colors.black,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        ...typography.subtitle,
        color: colors.white,
    },
});
