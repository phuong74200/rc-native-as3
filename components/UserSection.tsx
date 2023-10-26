import { User } from "@/domains/User";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";

export default function UserSection({
  user,
}: {
  user: User | undefined | null;
}) {
  return (
    <View className="flex flex-row items-center gap-2">
      <View className="h-8 w-8 rounded-[28px] overflow-hidden">
        {user?.avatar && (
          <Image
            source={{
              uri: user.avatar,
            }}
            className="w-full h-full"
          />
        )}
      </View>
      <Text className="text-gray-700 opacity-80">{user?.name}</Text>
    </View>
  );
}
