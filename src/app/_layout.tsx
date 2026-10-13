import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Overview" }} />
      <Stack.Screen name="packages" options={{ title: "Packages" }} />
    </Stack>
  );
}
