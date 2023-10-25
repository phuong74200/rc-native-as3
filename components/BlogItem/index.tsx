import { router } from "expo-router";
import {
  Image,
  Text,
  TouchableNativeFeedback,
  View
} from "react-native";
import { Blog } from "@/domains/Blog";
import { styles } from "./style";

export default function BlogItem({ domain }: { domain: Blog }) {
  const handlePress = () => {
    router.push({
      pathname: "/blog/[id]/",
      params: {
        id: domain.id,
      },
    });
  };

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View className="flex flex-row gap-4 px-8 py-8">
        <View className="flex-1">
          <Text className="whitespace-pre-wrap font-bold">{domain.title}</Text>
          <Text className="text-gray-700 opacity-50 mt-2">
            by {domain.createdBy.name}
          </Text>
        </View>
        <View className="w-[128px] h-[96px] relative">
          <View
            className="w-[128px] h-[96px] absolute -top-6 -right-8 bg-white"
            style={styles.shadow}
          >
            <Image
              blurRadius={256}
              source={{
                uri: domain.image,
              }}
              className="w-[128px] h-[96px]"
            />
          </View>

          <View
            className="w-[128px] h-[96px] absolute top-0 left-0 bg-white"
            style={styles.shadow}
          >
            <Image
              source={{
                uri: domain.image,
              }}
              className="w-[128px] h-[96px]"
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
