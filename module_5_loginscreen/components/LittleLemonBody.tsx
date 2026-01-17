import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function LittleLemonBody() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Little Lemon</Text>
      <Text style={styles.feedbackText}>Please add your feedback here</Text>
      <TextInput
        placeholder="Enter your email here"
        style={styles.emailAndPasswordInput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Enter your password here"
        style={styles.emailAndPasswordInput}
        value={password}
        onChangeText={setPassword}
        keyboardType="default"
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    paddingTop: 15,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  feedbackText: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
  nameInput: {
    marginTop: 20,
    marginHorizontal: 20,
    color: "black",
    backgroundColor: "yellow",
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
  },
  emailAndPasswordInput: {
    marginTop: 20,
    marginHorizontal: 20,
    color: "black",
    backgroundColor: "yellow",
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
  },
});
