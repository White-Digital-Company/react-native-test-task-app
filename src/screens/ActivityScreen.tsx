import { Image, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomButton from "@/components/custom-button";
import { addToFavoriteMutation } from "@/api/queries";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import imgNotFound from "#/imgNotFound.png";

const ActivityScreen = ({ route }: any) => {
  const { activity } = route.params;
  const { mutate: addToFavorite, isPending: isFavoriteLoading, isSuccess } = addToFavoriteMutation();
  const getImg = useCallback(async () => {
    return await fetch(activity.photoUrl);
  }, []);
  const { isLoading, isError } = useQuery({ queryKey: [`fetchImg${activity.id}`], queryFn: getImg, retry: 2 });
  return (
    <View className="flex-1 bg-white">
      <SkeletonPlaceholder enabled={isLoading}>
        <Image source={isError ? imgNotFound : { uri: activity.photoUrl }}
               style={{ width: "100%", height: hp(50), borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} />
      </SkeletonPlaceholder>
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <View className="pb-20">
          <View className="border-b border-[#F5F5F5] flex-auto py-5" style={{ gap: 20 }}>
            <Text className="font-main text-2xl text-black">{activity.name}</Text>
            <View className="flex-row items-center gap-1 justify-between">
              <Text className="font-main text-base text-black">${activity.price}</Text>
              <Text className="font-main text-xs text-right text-[#979797]">Included taxes and fees</Text>
            </View>
          </View>
          <View className="border-b border-[#F5F5F5] flex-auto py-5" style={{ gap: 10 }}>
            <Text className="font-main text-base text-black">Description</Text>
            <Text className="font-main text-xs text-left text-[#979797]">{activity.description}</Text>
          </View>
        </View>

      </ScrollView>
      <CustomButton text={isSuccess ? "Added to favorites" : "Add to favorites"}
                    onPress={() => addToFavorite(activity.id)} isLoading={isFavoriteLoading}
                    disabled={isFavoriteLoading || isSuccess} />
    </View>
  );
};

export default ActivityScreen;
