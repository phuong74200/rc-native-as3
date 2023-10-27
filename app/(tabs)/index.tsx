import BlogItem from "@/components/BlogItem";
import Filter from "@/components/Filter";
import useGetBlogs from "@/services/blog";
import { tags } from "@/utils/randomTag";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const { data } = useGetBlogs();

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogItem domain={item} />}
        ListHeaderComponent={<Filter tags={tags} />}
      />
    </SafeAreaView>
  );
}
