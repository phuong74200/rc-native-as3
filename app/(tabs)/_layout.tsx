import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  TouchableNativeFeedback,
  View,
  useColorScheme,
} from "react-native";

import Colors from "@/constants/Colors";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import CustomTabBar from "@/components/CustomTabBar";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "bookmark",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
