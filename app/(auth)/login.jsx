import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import PrimaryButton from "../../components/PrimaryButton";

const Login = () => {
  const handleSubmit = () => {
    console.log("login form submitted");
  };

  return (
    <View style={styles.container}>
      <Text>Login:</Text>
      <Link href="/register">Register</Link>
      <PrimaryButton onPress={handleSubmit}>
        <Text>Login</Text>
      </PrimaryButton>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
