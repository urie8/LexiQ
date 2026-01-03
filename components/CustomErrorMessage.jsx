import { StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import PrimaryButton from "./PrimaryButton";
import { View, Text } from "react-native";
import React from "react";

const CustomErrorMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CustomAlert</Text>
      <PrimaryButton style={styles.btn}>
        <Text style={styles.text}>OK</Text>
      </PrimaryButton>
    </View>
  );
};

export default CustomErrorMessage;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,

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
});
