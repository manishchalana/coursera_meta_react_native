import { View } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LittleLemonFooter from "@/components/LittleLemonFooter";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Index() {
  return (
    <View>
      <LittleLemonHeader />
      <WelcomeScreen />
      <LittleLemonFooter />
    </View>
  );
}
