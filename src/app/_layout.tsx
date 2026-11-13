
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const GREEN = "#14532D";
const GREY = "#64748B";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GREEN,
        tabBarInactiveTintColor: GREY,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E7EB",
          height: 65,
          paddingTop: 6,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 9,
        },
        tabBarItemStyle: {
          flex: 1,
          minWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="fees"
        options={{
          title: "Fees",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="overview"
        options={{
          title: "Overview",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="packages"
        options={{
          title: "Packages",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={typeof color === "number" ? GREEN : color ?? GREEN} />
          ),
        }}
      />

      {/* Keep these extra pages out of the bottom navigation */}
      <Tabs.Screen
        name="individual"
        options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="privacy"
        options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="confirmation"
        options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
      />
    </Tabs>
  );
}


