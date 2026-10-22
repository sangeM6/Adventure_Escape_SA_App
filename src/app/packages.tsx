import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const packages = [
  {
    id: 1,
    title: "ULTIMATE ADVENTURE DAY",
    price: "R1500",
    image: require("../../assets/photos/ultimate-adventure-day.jpg"),
  },
  {
    id: 2,
    title: "FAMILY EXPLORER PKG",
    price: "R1500",
    image: require("../../assets/photos/family-hiking.jpg"),
  },
  {
    id: 3,
    title: "MOUNTAIN ADVENTURE PKG",
    price: "R1500",
    image: require("../../assets/photos/mountain-adventure.jpg"),
  },
  {
    id: 4,
    title: "CORPORATE TEAM CHALLENGE",
    price: "R1500",
    image: require("../../assets/photos/team-hiking.jpg"),
  },
];

const activities = [
  {
    id: 1,
    title: "ZIPLINING ADVENTURE",
    price: "R750",
    image: require("../../assets/photos/ziplining.jpg"),
  },
  {
    id: 2,
    title: "ROCK CLIMBING",
    price: "R750",
    image: require("../../assets/photos/rock-climbing.jpg"),
  },
  {
    id: 3,
    title: "KAYAKING EXPERIENCE",
    price: "R750",
    image: require("../../assets/photos/kayaking.jpg"),
  },
];

type SelectionType = "package" | "activity";

type SelectedAdventure = {
  id: string;
  name: string;
  price: string;
};

export default function PackagesScreen() {
  const [selectedAdventures, setSelectedAdventures] = useState<
    SelectedAdventure[]
  >([]);
  const [isFeesPressed, setIsFeesPressed] = useState(false);

  function toggleAdventureSelection(
    type: SelectionType,
    id: number,
    name: string,
    price: string,
  ) {
    const selectionId = `${type}-${id}`;

    if (selectedAdventures.some((adventure) => adventure.id === selectionId)) {
      setSelectedAdventures((current) =>
        current.filter((adventure) => adventure.id !== selectionId),
      );
      return;
    }

    if (selectedAdventures.length >= 2) {
      Alert.alert("Selection limit", "Maximum 2 adventures allowed");
      return;
    }

    setSelectedAdventures((current) => [
      ...current,
      { id: selectionId, name, price },
    ]);
  }

  function continueToFees() {
    if (selectedAdventures.length === 0) {
      Alert.alert("Selection required", "Please select at least one adventure");
      return;
    }

    setIsFeesPressed(true);
    router.push({
      pathname: "./fees",
      params: {
        selections: JSON.stringify(selectedAdventures),
      },
    });
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../assets/photos/logo.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.brandRow}>
            <View style={styles.orangeLineSide} />
            <View style={styles.brandStack}>
              <Text style={styles.brandAdventure}>ADVENTURE</Text>
              <Text style={styles.brandEscape}>ESCAPE</Text>
            </View>
            <View style={styles.orangeLineSide} />
          </View>
        </View>
        <View style={styles.menuLines}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={require("../../assets/photos/background-image.jpeg")}
            style={styles.heroBg}
            resizeMode="cover"
          />
          <View style={styles.heroContent}>
            <View style={styles.orangeLineTop} />
            <Text style={styles.heroTitle}>ADVENTURE</Text>
            <Text style={styles.heroTitle}>PACKAGES</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.packagesGrid}>
            {packages.map((pkg) => {
              const isSelected = selectedAdventures.some(
                (adventure) => adventure.id === `package-${pkg.id}`,
              );

              return (
                <View key={pkg.id} style={styles.card}>
                  <Image
                    source={pkg.image}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.cardTitle}>{pkg.title}</Text>
                  <Text style={styles.cardPrice}>{pkg.price}</Text>
                  <TouchableOpacity
                    style={[
                      styles.selectBtn,
                      isSelected && styles.selectBtnSelected,
                    ]}
                    activeOpacity={0.8}
                    onPress={() =>
                      toggleAdventureSelection(
                        "package",
                        pkg.id,
                        pkg.title,
                        pkg.price,
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.selectText,
                        isSelected && styles.selectTextSelected,
                      ]}
                    >
                      {isSelected ? "SELECTED" : "SELECT >"}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.activitiesHeading}>INDIVIDUAL ACTIVITIES</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.activitiesGrid}>
            {activities.map((act) => {
              const isSelected = selectedAdventures.some(
                (adventure) => adventure.id === `activity-${act.id}`,
              );

              return (
                <View key={act.id} style={styles.card}>
                  <Image
                    source={act.image}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.cardTitle}>{act.title}</Text>
                  <Text style={styles.cardPrice}>{act.price}</Text>
                  <TouchableOpacity
                    style={[
                      styles.selectBtn,
                      isSelected && styles.selectBtnSelected,
                    ]}
                    activeOpacity={0.8}
                    onPress={() =>
                      toggleAdventureSelection(
                        "activity",
                        act.id,
                        act.title,
                        act.price,
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.selectText,
                        isSelected && styles.selectTextSelected,
                      ]}
                    >
                      {isSelected ? "SELECTED" : "SELECT >"}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View style={styles.discountBox}>
            <Image
              source={require("../../assets/photos/background-image.jpeg")}
              style={styles.discountBg}
              resizeMode="cover"
            />
            <View style={styles.discountOverlay}>
              <Text style={styles.discountTextWhite}>
                MULTIPLE BOOKING DISCOUNT
              </Text>
              <Text style={styles.discountTextOrange}>- 10% OFF</Text>
              <TouchableOpacity
                style={[styles.feesBtn, isFeesPressed && styles.feesBtnPressed]}
                activeOpacity={0.8}
                onPress={continueToFees}
              >
                <Text
                  style={[
                    styles.feesText,
                    isFeesPressed && styles.feesTextPressed,
                  ]}
                >
                  {isFeesPressed ? "PROCEEDING TO FEES" : "CONTINUE TO FEES >"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItemWrapper}>
          <TouchableOpacity style={styles.navItemHome} activeOpacity={0.7}>
            <Image
              source={require("../../assets/photos/home-icon.jpeg")}
              style={styles.navIcon}
              resizeMode="contain"
            />
            <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>
          <View style={styles.orangeLineUnderHome} />
        </View>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => router.push("/explore")}
        >
          <Image
            source={require("../../assets/photos/explore-icon.jpeg")}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },

  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#14532d",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 50,
    height: 50,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  orangeLineSide: {
    width: 24,
    height: 2,
    backgroundColor: "#d97706",
  },
  brandStack: {
    justifyContent: "center",
    alignItems: "center",
  },
  brandAdventure: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1.5,
  },
  brandEscape: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0077b6",
    letterSpacing: 1.5,
  },
  menuLines: {
    gap: 5,
    alignItems: "flex-end",
  },
  menuLine: {
    width: 36,
    height: 2,
    backgroundColor: "#d97706",
  },

  container: { flex: 1 },

  hero: {
    height: 340,
    position: "relative",
  },
  heroBg: {
    width: "100%",
    height: "100%",
  },
  heroContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 35,
    paddingHorizontal: 30,
    alignItems: "flex-start",
  },
  orangeLineTop: {
    width: 50,
    height: 3,
    backgroundColor: "#d97706",
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 3,
    textTransform: "uppercase",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  content: { padding: 15, paddingBottom: 100 },

  packagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  activitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: 100 },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
    padding: 10,
    paddingBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#d97706",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  selectBtn: {
    backgroundColor: "#14532d",
    margin: 10,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  selectBtnSelected: {
    backgroundColor: "#d97706",
    transform: [{ scale: 0.98 }],
  },
  selectText: { color: "#ffffff", fontSize: 14, fontWeight: "bold" },
  selectTextSelected: {
    color: "#ffffff",
    fontWeight: "700",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  divider: { flex: 1, height: 1, backgroundColor: "#14532d" },
  activitiesHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#14532d",
    paddingHorizontal: 15,
    textTransform: "uppercase",
  },

  discountBox: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 30,
    height: 150,
  },
  discountBg: { width: "100%", height: "100%" },
  discountOverlay: {
    position: "absolute",
    backgroundColor: "rgba(20, 83, 45, 0.7)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  discountTextWhite: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  discountTextOrange: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d97706",
    marginTop: 4,
    marginBottom: 15,
    textAlign: "center",
  },
  feesBtn: {
    backgroundColor: "#14532d",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  feesBtnPressed: {
    backgroundColor: "#d97706",
    transform: [{ scale: 0.98 }],
  },
  feesText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  feesTextPressed: {
    color: "#fff7ed",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItemWrapper: { alignItems: "center" },
  navItemHome: { alignItems: "center" },
  navItem: { alignItems: "center" },
  orangeLineUnderHome: {
    width: 50,
    height: 3,
    backgroundColor: "#d97706",
    marginTop: 4,
    borderRadius: 2,
  },
  navIcon: { width: 28, height: 28, marginBottom: 4 },
  navLabel: { fontSize: 12, color: "#333" },
});
