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

export default function ConfirmationScreen() {
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
            <Text style={styles.heroTitle}>THANK YOU!</Text>
            <Text style={styles.heroSubtitle}>
              Your enquiry has been received.
            </Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.headingRow}>
            <View style={styles.headingLine} />
            <Text style={styles.sectionTitle}>WHAT HAPPENS NEXT?</Text>
            <View style={styles.headingLine} />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoItem}>
              We review your details within 24 hours
            </Text>
            <Text style={styles.infoItem}>Confirmation email will be sent</Text>
            <Text style={styles.infoItem}>
              We confirm your date or suggest alternatives
            </Text>
          </View>

          <TouchableOpacity style={styles.btnHome} accessibilityRole="button">
            <Text style={styles.btnHomeText}>RETURN HOME</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNav activeTab="home" />
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
    left: 0,
    right: 0,
    padding: 20,
    alignItems: "center",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroSubtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 8,
  },
  sectionContainer: { padding: 20 },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
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
  },
  infoBox: {
    backgroundColor: "#f5f5f5",
    padding: 22,
    borderRadius: 10,
    marginBottom: 35,
  },
  infoItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: "#333",
  },
  btnHome: {
    backgroundColor: "#14532D",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  btnHomeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
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
