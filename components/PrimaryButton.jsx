import { StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/colors";

const PrimaryButton = ({ style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.appTheme.btnColor,
    padding: 15,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});
