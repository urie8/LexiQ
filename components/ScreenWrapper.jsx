import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ style, safe = false, ...props }) => {
  if (!safe)
    return (
      <View style={[{ backgroundColor: "#84caf9ff" }, style]} {...props} />
    );

  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={[
          {
            backgroundColor: "#84caf9ff",
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
          style,
        ]}
        {...props}
      />
    </>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
