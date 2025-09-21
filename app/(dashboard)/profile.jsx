import { StyleSheet, Text } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
const Profile = () => {
  return (
    <ScreenWrapper style={styles.container} safe={true}>
      <Text style={styles.title}>Profile</Text>
    </ScreenWrapper>
  );
};

export default Profile;

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
