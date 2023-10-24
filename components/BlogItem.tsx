import { Blog } from "../domains/Blog";
import { Text, View, Image, StyleSheet } from "react-native";
import useAsync from "../hooks/useAsync";

export default function BlogItem({ domain }: { domain: Blog }) {
  return (
    <View className="flex flex-row gap-4 px-8">
      <View className="flex-1">
        <Text className="whitespace-pre-wrap">{domain.title}</Text>
        <Text className="text-red-700">{domain.image}</Text>
      </View>
      <View className="w-[100px] h-[100px] relative">
        <Image
          blurRadius={256}
          source={{
            uri: domain.image,
          }}
          className="w-[100px] h-[100px] absolute -top-4 -right-4"
        />
        <Image
          source={{
            uri: domain.image,
          }}
          className="w-[100px] h-[100px] absolute top-0 left-0"
          style={{
            borderColor: '#fff',
            borderWidth: 4,
          }}
        />
      </View>
    </View>
  );
}
