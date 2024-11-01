import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useActivities } from "@/hooks/useActivities.ts";
import ActivityCard from "@/components/activity-card";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const HomeScreen = () => {
  const { activities, isActivitiesLoading, isSuccess } = useActivities();

  return (
    <View className="flex-1 bg-white">
      <View className={"p-5 pt-20"}>
        <Text className="font-main text-base text-center text-black">Activities</Text>
      </View>
      <FlatList contentContainerStyle={{ padding: 20, gap: 10 }} showsVerticalScrollIndicator={false} data={activities}
                renderItem={({ item }) => <ActivityCard item={item} />}
                keyExtractor={(item) => item.id + ""}
                ListFooterComponent={isActivitiesLoading ?
                  <ActivityIndicator color={"black"} size="large" style={{height:hp(75)}} /> : null}
                ListEmptyComponent={!isActivitiesLoading ?
                  <Text className="font-main text-base text-center text-gray-500">
                    Activities not found
                  </Text> : null} />

    </View>
  );
};

export default HomeScreen;
