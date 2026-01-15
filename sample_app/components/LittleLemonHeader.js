import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "#F4CE14", flex: 0.1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
