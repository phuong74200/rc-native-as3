import { Text, TouchableNativeFeedback, View } from "react-native";

const Badge = ({ children }: { children: string }) => (
  <View className="rounded-2xl overflow-hidden">
    <TouchableNativeFeedback>
      <View className="bg-slate-200 px-4 py-2 w-fit m-1">
        <Text>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

export default Badge;
