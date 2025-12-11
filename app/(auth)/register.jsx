import React from "react";
import { StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import PrimaryButton from "../../components/PrimaryButton";
import { Button } from "react-native-web";

const Register = () => {
  const [usernName, onChangeUsername] = React.useState("");
  const [passWord, onChangePassword] = React.useState("");
  const apiUrl = process.env.EXPO_BASE_URL;

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://10.0.1.9:5048/api/Auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernName,
          password: passWord,
          email: "somerandomshit@mail.com",
        }),
      });

      const data = await response.json();
      console.log("Response", data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register a new user</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={usernName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={passWord}
        placeholder="Password"
      />
      <PrimaryButton onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </PrimaryButton>

      <Link href="/login">Back to Login</Link>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
