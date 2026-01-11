import { View, Text, StyleSheet, FlatList } from "react-native";
import PrimaryButton from "./PrimaryButton";

const CustomErrorMessage = ({ errors, displayError }) => {
  return (
    <View style={displayError ? styles.container : styles.dontDisplay}>
      <Text style={styles.text}>There was a problem</Text>
      <FlatList
        scrollEnabled={false}
        data={errors}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomErrorMessage;

const styles = StyleSheet.create({
  container: {
    maxHeight: 125,
    height: "auto",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff0000ff",
  },
  text: {
    fontWeight: "bold",
  },
  btn: {
    marginTop: "auto",
  },
  dontDisplay: {
    display: "none",
  },
});
