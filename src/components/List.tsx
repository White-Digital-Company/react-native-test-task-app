import { Data } from "@/types/activity"
import { useCallback } from "react";
import { FlatList } from "react-native"
import { ActivityItem } from "./ActivityItem";
import { SeparatorList } from "./SeparatorList";

export const List = ({data}: {data: Data[]}) => {
    const renderItem = useCallback(({item}:{item: Data}) => {
        return (
          <ActivityItem data={item}/>
        )
    },[]);

    return (
        <FlatList 
          data={data ?? []}
          renderItem={renderItem}
          keyExtractor={(item) => (String(item.id))}
          initialNumToRender={1}
          windowSize={3}
          ItemSeparatorComponent={() => <SeparatorList space={10}/>}
        />
    )
}