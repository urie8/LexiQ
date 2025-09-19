import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Mylists = () => {
  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Mylists</Text>

      <Link href="/">Home</Link>
    </View>
  );
};

export default Mylists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    height: 200,
    width: 200,
  },
});
