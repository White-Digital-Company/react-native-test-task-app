import { typography } from "../theme/typography";
import { colors } from "../theme/colors";
import { Text, View, StyleSheet } from "react-native";

type Props = {
    error: string;
};

export const ErrorLoading = ({ error }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        ...typography.subtitle,
    },
});