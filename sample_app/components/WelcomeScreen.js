import { View, Text } from "react-native";

// export default function WelcomeScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         padding: 20,
//         backgroundColor: "#04341cff",
//         alignContent: "center",
//       }}
//     >
//       <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
//         Welcome to Little Lemon!
//       </Text>
//       <Text style={{ color: "white", margin: 10, textAlign: "center" }}>
//         Little Lemon is a charming neighborhood bistro that serves simple food
//         and classic cocktails in a lively but casual environment. We would love
//         to hear more about your experience with us!
//       </Text>
//     </View>
//   );
// }

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#495E57", padding: 20 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "#EDEFEE",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: "#EDEFEE",
          textAlign: "center",
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
}
