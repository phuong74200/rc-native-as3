import { styles } from "@/app/blog/[id]/style";
import Bookmark from "@/components/Bookmark";
import CustomMarkDown from "@/components/CustomMarkDown";
import TagList from "@/components/TagList";
import UserSection from "@/components/UserSection";
import useBlog from "@/services/useBlog";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BlogDetailScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const { blog } = useBlog(id);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView className="bg-white">
        <View
          style={styles.header}
          className="z-10 p-4 flex flex-row items-center justify-between"
        >
          <View className="h-8 w-8 overflow-hidden rounded-[28px]">
            <TouchableNativeFeedback onPress={navigation.goBack}>
              <View className="h-8 w-8 flex justify-center items-center">
                <MaterialCommunityIcons
                  name="backburger"
                  size={20}
                  color="#272727"
                />
              </View>
            </TouchableNativeFeedback>
          </View>

          <View className="flex flex-row items-center">
            <Text className="text-lg font-bold text-white">Discover</Text>
            <LinearGradient
              colors={["#fff", "transparent"]}
              className="ml-2 mt-[6px] w-12 h-1 rounded-lg"
              start={[0, 1]}
              end={[1, 0]}
            />
          </View>
        </View>
        <View className="w-full flex justify-center items-center relative">
          <View
            className="w-[80%] bg-white aspect-[11/9] -top-16 -right-10"
            style={styles.shadow}
          >
            {blog?.image && (
              <Image
                source={{
                  uri:
                    blog?.image ??
                    "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734",
                }}
                className="w-full h-full"
                blurRadius={512}
              />
            )}
          </View>
          <View className="w-[80%] absolute bg-white" style={styles.shadow}>
            {blog?.image && (
              <Image
                source={{
                  uri:
                    blog?.image ??
                    "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734",
                }}
                className="w-[100%] aspect-[11/9]"
                style={styles.image}
              />
            )}
          </View>
        </View>

        <TagList
          className="flex flex-wrap flex-row my-8 items-center justify-center"
          tags={blog?.tags || []}
        />

        <View className="px-[10%] mb-8">
          <Text className="font-bold text-2xl">{blog?.title}</Text>

          <View className="flex flex-row my-4 items-center justify-between border-gray-300 border-[1px] border-r-0 border-l-0 py-4">
            <UserSection user={blog?.createdBy} />
            <Bookmark blog={blog} />
          </View>

          <CustomMarkDown>{blog?.content || ""}</CustomMarkDown>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
