import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/book.png";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Home</Text>
      <Text>Dogwater</Text>
    </View>
  );
};

export default Home;

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
