import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function LittleLemonBody() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const revertLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Little Lemon</Text>
      {isLoggedIn ? (
        <View style={styles.isLoggedInContainer}>
          <Text style={styles.isLoggedInText}>User is logged in!</Text>
          <Pressable onPress={revertLogIn}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Go to login Screen</Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.feedbackText}>Please login here</Text>
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
          <Pressable onPress={revertLogIn}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </Pressable>
        </View>
      )}
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
  loginButton: {
    marginTop: 20,
    alignItems: "center",
  },
  loginButtonText: {
    textAlign: "center",
    backgroundColor: "yellow",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  isLoggedInContainer: {
    alignItems: "center",
  },
  isLoggedInText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
