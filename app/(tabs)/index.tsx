import BlogItem from "@/components/BlogItem";
import Filter from "@/components/Filter";
import useBlogs from "@/services/useBlogs";
import { tags } from "@/utils/randomTag";
import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const { blogs } = useBlogs();

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogItem domain={item} />}
        ListHeaderComponent={<Filter tags={tags} />}
      />
    </SafeAreaView>
  );
}
