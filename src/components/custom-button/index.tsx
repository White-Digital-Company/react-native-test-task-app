import { ActivityIndicator, Dimensions, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  text: string;
  onPress: () => void
  disabled?: boolean
  isLoading?: boolean
}
const CustomButton = ({ text, onPress, disabled, isLoading }: CustomButtonProps) => {
  const width = Dimensions.get("window").width;
  return (
    <TouchableOpacity activeOpacity={0.7}
                      className={`${disabled?"bg-gray-500":"bg-black"} px-5 py-4 absolute bottom-5 rounded-full self-center items-center justify-center`}
                      style={{
                        width: "100%",
                        maxWidth: width - 40
                      }} onPress={onPress} disabled={disabled}>
      {isLoading ? <ActivityIndicator color="white" size="small" /> :
        <Text className="text-white font-main text-base">{text}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
