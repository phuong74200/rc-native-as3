import BlogItem from "@/components/BlogItem";
import { Empty } from "@/components/Empty";
import Filter from "@/components/Filter";
import useGetBlogs from "@/services/blog";
import { tags } from "@/utils/randomTag";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const { query } = useGetBlogs();

  const bookmarked = query({ bookmarked: true, tags: ["1"] });

  console.log(bookmarked)

  if (!bookmarked || bookmarked.length <= 0)
    return (
      <SafeAreaView>
        <StatusBar />
        <Filter tags={tags} />
        <Empty />
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={bookmarked}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogItem domain={item} />}
        ListHeaderComponent={<Filter tags={tags} />}
      />
    </SafeAreaView>
  );
}
