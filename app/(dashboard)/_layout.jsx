import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 90 },
        tabBarActiveTintColor: "#269ecdff",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color="#269ecdff"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: "My lists",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              size={24}
              name={focused ? "list-box" : "list-box-outline"}
              color="#269ecdff"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "create" : "create-outline"}
              color="#269ecdff"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
