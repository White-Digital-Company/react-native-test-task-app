import { w } from "../layout/metrics"
import { View } from "react-native"

export const SeparatorList = ({space}: {space: number}) => {
    return (
        <View style={{height: w(space)}}></View>
    )
}