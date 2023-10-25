import { styles } from "@/app/blog/[id]/style";
import CustomMarkDown from "@/components/CustomMarkDown";
import useBlog from "@/services/useBlog";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Markdown from "@ronradtke/react-native-markdown-display";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function BlogDetailScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const { blog } = useBlog(id);

  return (
    <ScrollView className="bg-white">
      <View style={styles.header} className="z-10 p-4">
        <FontAwesome5 name="chevron-left" size={24} color="black" />
      </View>
      <View className="w-full flex justify-center items-center relative">
        <View
          className="w-[80%] bg-white aspect-[11/9] -top-16 -right-10"
          style={styles.shadow}
        >
          <Image
            source={{
              uri: blog?.image,
            }}
            className="w-full h-full"
            blurRadius={512}
          />
        </View>
        <View className="w-[80%] absolute bg-white" style={styles.shadow}>
          <Image
            source={{
              uri: blog?.image,
            }}
            className="w-[100%] aspect-[11/9]"
            style={styles.image}
          />
        </View>
      </View>

      <View className="px-[10%] my-8">
        <Text className="font-bold text-lg">{blog?.title}</Text>

        <View className="flex flex-row my-4 items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <View className="h-8 w-8 rounded-[28px] overflow-hidden">
              <Image
                source={{
                  uri: blog?.createdBy.avatar,
                }}
                className="w-full h-full"
              />
            </View>
            <Text className="text-gray-700 opacity-80">
              {blog?.createdBy.name}
            </Text>
          </View>

          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>

        <CustomMarkDown>{blog?.content || ""}</CustomMarkDown>
      </View>
    </ScrollView>
  );
}
