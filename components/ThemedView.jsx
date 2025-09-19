import { View } from "react-native";
import { Colors } from "../constants/colors";

const ThemedView = ({ style, ...props }) => {
  const theme = Colors.appTheme;
  return (
    <View
      style={[
        {
          backgroundColor: theme.backgroundColor,
        },
        style,
      ]}
      {...props}
    ></View>
  );
};

export default ThemedView;
