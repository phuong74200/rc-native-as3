
import { FlatList } from "react-native-gesture-handler";
import BlogItem from "@/components/BlogItem";
import { View } from "@/components/Themed";
import useBlogs from "@/services/useBlogs";

export default function TabOneScreen() {
  const { blogs } = useBlogs();

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
    <View>
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogItem domain={item} />}
      />
    </View>
  );
}
