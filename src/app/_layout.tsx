import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="overview" options={{ title: "Overview" }} />
      <Stack.Screen name="packages" options={{ title: "Packages" }} />
      <Stack.Screen name="fees" options={{ title: "Fees" }} />
      <Stack.Screen name="individual" options={{ title: "Package Details" }} />
      <Stack.Screen name="privacy" options={{ title: "Privacy Policy" }} />
      <Stack.Screen name="confirmation" options={{ title: "Thank You" }} />
    </Stack>
  );
}
