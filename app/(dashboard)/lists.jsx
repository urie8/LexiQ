import { StyleSheet, Text, View } from "react-native";

const Lists = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lists</Text>
    </View>
  );
};

export default Lists;

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
});
