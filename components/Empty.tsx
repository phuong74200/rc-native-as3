import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function Empty() {
  return (
    <View className="w-full h-[25%] flex items-center justify-center">
      <FontAwesome5 name="dropbox" size={48} color="#4263eb" />
      <Text style={styles.message}>You have no bookmarked blogs.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    marginTop: 16,
    fontSize: 16,
    color: "#999",
  },
});
