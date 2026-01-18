import { View } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LittleLemonBody from "@/components/LittleLemonBody";
import LittleLemonFooter from "@/components/LittleLemonFooter";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "yellow",
      }}
    >
      <LittleLemonHeader />
      <LittleLemonBody />
      <LittleLemonFooter />
    </View>
  );
}
