import * as React from "react";
import { View, Text } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LittleLemonHeader() {
  const insets = useSafeAreaInsets();
  return (
    //
    <View
      style={{
        marginTop: insets.top,
        backgroundColor: "yellow",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
        Little Lemon
      </Text>
    </View>
  );
}
