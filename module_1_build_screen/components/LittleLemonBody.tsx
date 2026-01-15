import { View, Text, ScrollView } from "react-native";

export default function LittleLemonBody() {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        paddingTop: 15,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          color: "white",
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Welcome to Little Lemon
      </Text>
      <ScrollView
        style={{
          flex: 1,
          padding: 20,
        }}
        indicatorStyle={"black"}
        horizontal={false}
      >
        <Text
          style={{
            color: "#EDEFEE",
            paddingHorizontal: 10,
            fontSize: 80,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}
