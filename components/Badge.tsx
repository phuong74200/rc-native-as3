import { Text, TouchableNativeFeedback, View } from "react-native";

type Props = {
  children: string;
  onPress?: (data: string, active?: boolean) => void;
  active?: boolean;
};

const Badge = ({ children, onPress, active }: Props) => (
  <View className="rounded-2xl overflow-hidden">
    <TouchableNativeFeedback onPress={() => onPress?.(children, active)}>
      <View
        className="px-4 py-2 w-fit m-1"
        style={{
          backgroundColor: active ? "#3b5bdb" : "rgb(226 232 240)",
        }}
      >
        <Text
          style={{
            color: active ? "#edf2ff" : "black",
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

export default Badge;
