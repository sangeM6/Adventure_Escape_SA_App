import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type SelectedAdventure = {
  id: string;
  name: string;
  price: string;
};

function readSelections(value: string | undefined): SelectedAdventure[] | null {
  if (!value) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(value);
    if (
      !Array.isArray(parsed) ||
      !parsed.every(
        (selection): selection is SelectedAdventure =>
          typeof selection === "object" &&
          selection !== null &&
          "id" in selection &&
          typeof selection.id === "string" &&
          "name" in selection &&
          typeof selection.name === "string" &&
          "price" in selection &&
          typeof selection.price === "string",
      )
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export default function FeesScreen() {
  const { selections } = useLocalSearchParams<{ selections?: string }>();
  const selectedAdventures = readSelections(selections);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>FEES</Text>
      {selectedAdventures ? (
        selectedAdventures.map((adventure) => (
          <View key={adventure.id} style={styles.adventureRow}>
            <Text style={styles.adventureName}>{adventure.name}</Text>
            <Text style={styles.adventurePrice}>{adventure.price}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.message}>
          Unable to load the selected adventures. Please return and try again.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heading: {
    marginBottom: 20,
    color: "#14532d",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  adventureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  adventureName: {
    flex: 1,
    paddingRight: 12,
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  adventurePrice: {
    color: "#d97706",
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
});
