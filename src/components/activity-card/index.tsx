import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import imgNotFound from "#/imgNotFound.png";
import { Activity } from "@/api/types";
import Star from "#/star.svg";
import Marker from "#/marker.svg";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

type ActivityCardProps = {
  item: Activity
}
const ActivityCard = ({ item }: ActivityCardProps) => {
  const navigation = useNavigation();
  const getImg = useCallback(async () => {
    return await fetch(item.photoUrl);
  }, []);
  const { isLoading, isError } = useQuery({ queryKey: [`fetchImg${item.id}`], queryFn: getImg, retry: 2 });

  return (
    <TouchableOpacity activeOpacity={0.7} style={{ height: hp(30), width: "100%" }}
                      onPress={() => navigation.navigate("Activity", { activity: item })}>

      <SkeletonPlaceholder borderRadius={20} enabled={isLoading}>
        <Image source={isError ? imgNotFound : { uri: item.photoUrl }} className="flex-1 rounded-2xl"
               defaultSource={imgNotFound}
               style={{ width: "100%", height: hp(18.5) }} />
      </SkeletonPlaceholder>
      <View className="bg-[#F7F7F7] rounded-2xl p-5" style={{ gap: 6 }}>
        <View className={"flex-row justify-between items-center"}>
          <Text className="font-main text-base text-black">{item.name}</Text>
          <View className="flex-row items-center gap-1">
            <Star width={16} height={16} />
            <Text className="font-main text-xs text-black text-right">{item.rating}</Text>
          </View>
        </View>
        <View className={"flex-row justify-between"}>
          <View className="flex-row items-center gap-1">
            <Marker width={16} height={16} />
            <Text className="font-main text-xs text-black">{item.location}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="font-main text-xm text-black">${item.price}
              <Text className="font-main text-xs text-right text-[#979797]"> / night</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActivityCard;
