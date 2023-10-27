import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

const PADDING_BOTTOM = 20;
const PADDING_HORIZONTAL = 60;
const SLIDER_WIDTH = 30;

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = (totalWidth - PADDING_HORIZONTAL * 2) / state.routes.length;
  const [translateValue] = useState(new Animated.Value(0));

  return (
    <BlurView
      className="h-12"
      style={{
        borderRadius: 10,
        position: "absolute",
        left: PADDING_HORIZONTAL,
        right: PADDING_HORIZONTAL,
        bottom: PADDING_BOTTOM,
        overflow: "hidden",
      }}
      intensity={120}
    >
      <View>
        <Animated.View
          style={[
            {
              height: 5,
              position: "absolute",
              top: 0,
              left: tabWidth / 2 - SLIDER_WIDTH / 2,
              backgroundColor: "#4c6ef5",
              borderRadius: 10,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              width: SLIDER_WIDTH,
            },
            {
              transform: [{ translateX: translateValue }],
              width: SLIDER_WIDTH,
            },
          ]}
        />
        <View className="flex flex-row items-center justify-around h-full">
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const { options } = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);

                Animated.spring(translateValue, {
                  toValue: index * tabWidth,
                  velocity: 10,
                  useNativeDriver: true,
                }).start();
              }
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                key={index}
              >
                <Feather
                  name={label.toString() as keyof typeof Feather.glyphMap}
                  size={24}
                  color={isFocused ? "#4c6ef5" : "black"}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </BlurView>
  );
};

export default CustomTabBar;
