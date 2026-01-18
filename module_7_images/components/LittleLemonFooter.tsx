import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LittleLemonFooter() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "yellow",
        alignItems: "center",
        paddingBottom: insets.bottom,
        paddingTop: 2,
      }}
    >
      <Text>© 2024 Little Lemon. All rights reserved.</Text>
    </View>
  );
}
