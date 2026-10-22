import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Header() {
  return (
    <View style={styles.headerBar}>
      <View style={styles.headerLogoGroup}>
        <Image
          source={require("../../assets/photos/logo.jpeg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.logoTextWrapper}>
          <View style={styles.line} />
          <View style={styles.brandStack}>
            <Text style={styles.adventureText}>ADVENTURE</Text>
            <Text style={styles.escapeText}>ESCAPE</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </TouchableOpacity>
    </View>
  );
}

function BottomNav({ activeTab }: { activeTab: "home" | "explore" }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("/overview")}
      >
        <Image
          source={require("../../assets/photos/home-icon.jpeg")}
          style={styles.navIconImage}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.navLabel,
            activeTab === "home" && styles.navLabelActive,
          ]}
        >
          Home
        </Text>
        {activeTab === "home" && <View style={styles.activeLine} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("/explore")}
      >
        <Image
          source={require("../../assets/photos/explore-icon.jpeg")}
          style={styles.navIconImage}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.navLabel,
            activeTab === "explore" && styles.navLabelActive,
          ]}
        >
          Explore
        </Text>
        {activeTab === "explore" && <View style={styles.activeLine} />}
      </TouchableOpacity>
    </View>
  );
}

export default function IndividualScreen() {
  return (
    <View style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.heroContainer}>
          <Image
            source={require("../../assets/photos/background-image.jpeg")}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>ULTIMATE ADVENTURE DAY</Text>
            <Text style={styles.heroPrice}>R1 500 per person</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.headingRow}>
            <View style={styles.headingLine} />
            <Text style={styles.sectionTitle}>PACKAGE OVERVIEW</Text>
            <View style={styles.headingLine} />
          </View>

          <Text style={styles.overviewText}>
            Our flagship, experience everything you need in one incredible day.
          </Text>

          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <Text style={styles.colHeadingGreen}>WHAT&apos;S INCLUDED</Text>
              <Text style={styles.bullet}> Professional guide</Text>
              <Text style={styles.bullet}> All permits & fees</Text>
              <Text style={styles.bullet}> Refreshments & lunch</Text>
              <Text style={styles.bullet}> Water throughout</Text>
              <Text style={styles.bullet}> First-aid support</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.colHeadingBlue}>WHAT TO BRING</Text>
              <Text style={styles.bullet}> Hiking shoes</Text>
              <Text style={styles.bullet}> Hat & sunscreen</Text>
              <Text style={styles.bullet}> Water bottle</Text>
              <Text style={styles.bullet}> Warm jacket</Text>
              <Text style={styles.bullet}> Camera</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>BOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => router.push("/explore")}
          >
            <Text style={styles.btnSecondaryText}>BACK TO EXPLORE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNav activeTab="explore" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  headerBar: {
    flexDirection: "row",
    backgroundColor: "#14532D",
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLogoGroup: { flexDirection: "row", alignItems: "center", gap: 12 },
  logo: { width: 50, height: 50 },
  logoTextWrapper: { flexDirection: "row", alignItems: "center", gap: 8 },
  line: { width: 24, height: 2, backgroundColor: "#d97706" },
  brandStack: { justifyContent: "center", alignItems: "center" },
  adventureText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  escapeText: {
    fontSize: 18,
    color: "#0077b6",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  menuButton: {
    gap: 5,
    alignItems: "flex-end",
  },
  menuLine: {
    width: 36,
    height: 2,
    backgroundColor: "#d97706",
  },
  scrollView: { flex: 1 },
  heroContainer: { width: "100%", height: 220 },
  heroImage: { width: "100%", height: "100%" },
  heroOverlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  heroTitle: { color: "#FFFFFF", fontSize: 28, fontWeight: "bold" },
  heroPrice: { color: "#FFFFFF", fontSize: 18, marginTop: 4 },
  sectionContainer: { padding: 20 },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    gap: 15,
  },
  headingLine: {
    height: 2,
    backgroundColor: "#14532D",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14532D",
    textTransform: "uppercase",
  },
  overviewText: {
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
    fontSize: 16,
  },
  twoColumn: { flexDirection: "row", gap: 20, marginBottom: 30 },
  column: { flex: 1 },
  colHeadingGreen: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#14532D",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  colHeadingBlue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0077b6",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  bullet: { fontSize: 15, marginBottom: 8, color: "#444" },
  btnPrimary: {
    backgroundColor: "#d97706",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  btnPrimaryText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 18 },
  btnSecondary: {
    borderColor: "#14532D",
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  btnSecondaryText: { color: "#14532D", fontWeight: "bold", fontSize: 16 },
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  navItem: { flex: 1, alignItems: "center" },
  navIconImage: { width: 32, height: 32, marginBottom: 4 },
  navLabel: { fontSize: 14, color: "#666" },
  navLabelActive: { color: "#000000", fontWeight: "600" },
  activeLine: {
    width: 60,
    height: 3,
    backgroundColor: "#d97706",
    borderRadius: 2,
    marginTop: 4,
  },
});
