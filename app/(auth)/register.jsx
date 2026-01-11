import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import PrimaryButton from "../../components/PrimaryButton";
import CustomErrorMessage from "../../components/CustomErrorMessage";

const Register = () => {
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [showErrorMessages, setShowErrorMessages] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [disableRegisterButton, setDisableRegisterButton] =
    React.useState(false);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setDisableRegisterButton(true);
      const response = await fetch(`${apiUrl}/Auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      if (data.succeeded == false) {
        setErrorMessages(data.errors);
        setShowErrorMessages(true);
      }
      console.log("Response", data);
      setLoading(false);
      setDisableRegisterButton(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
      setDisableRegisterButton(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? -50 : 0}
      style={styles.container}
    >
      <CustomErrorMessage
        errors={errorMessages}
        displayError={showErrorMessages}
      />
      <Text style={styles.title}>Create account</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <PrimaryButton
        onPress={handleSubmit}
        style={styles.button}
        setDisabled={disableRegisterButton}
      >
        {!loading && <Text style={styles.buttonText}>Register</Text>}
        {loading && <ActivityIndicator />}
      </PrimaryButton>

      <Link href="/login">Back to Login</Link>
    </KeyboardAvoidingView>
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
    margin: 7,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 200,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
