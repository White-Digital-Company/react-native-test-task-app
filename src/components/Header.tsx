import { typography } from "../theme/typography"
import { Text, View } from "react-native"

type Props = {
    title: string
}

export const Header = ({title}: Props) => {
    return (
        <View>
            <Text style={typography.subtitle}>{title}</Text>
        </View>
    )
}