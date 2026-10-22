import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OverviewScreen() {
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
            <Text style={styles.heroTitle}>overview</Text>
            <Text style={styles.heroSubtitle}>
              DISCOVER WHAT MAKES ADVENTURE ESCAPE SA DIFFERENT
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.sectionHeadingRow}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionHeading}>WHY CHOOSE US</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <Image
                source={require("../../assets/photos/experienced-guides.jpeg")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureText}>EXPERIENCED GUIDES</Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={require("../../assets/photos/quality-services-icon.png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureText}>QUALITY SERVICES</Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={require("../../assets/photos/local-expertise-icon.png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureText}>LOCAL EXPERTISE</Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={require("../../assets/photos/custom-packages-icon.png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureText}>CUSTOM PACKAGES</Text>
            </View>
          </View>

          <View style={styles.sectionHeadingRow}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionHeading}>WHO CAN JOIN</Text>
            <View style={styles.sectionLine} />
          </View>

          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image
                source={require("../../assets/photos/individuals-overview.png")}
                style={styles.gridImage}
                resizeMode="cover"
              />
              <Text style={styles.gridLabel}>INDIVIDUALS</Text>
            </View>
            <View style={styles.gridItem}>
              <Image
                source={require("../../assets/photos/family-overview.png")}
                style={styles.gridImage}
                resizeMode="cover"
              />
              <Text style={styles.gridLabel}>FAMILIES</Text>
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image
                source={require("../../assets/photos/school-mates-overview.png")}
                style={styles.gridImage}
                resizeMode="cover"
              />
              <Text style={styles.gridLabel}>SCHOOLS</Text>
            </View>
            <View style={styles.gridItem}>
              <Image
                source={require("../../assets/photos/corporate-for-overview.png")}
                style={styles.gridImage}
                resizeMode="cover"
              />
              <Text style={styles.gridLabel}>CORPORATES</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.viewPackagesBtn}
            activeOpacity={0.7}
            onPress={() => router.push("/packages")}
          >
            <Text style={styles.viewPackagesText}>VIEW PACKAGES &gt;</Text>
          </TouchableOpacity>
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
    height: 280,
    position: "relative",
  },
  heroBg: {
    width: "100%",
    height: "100%",
  },
  heroContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(20, 83, 45, 0.5)",
    padding: 20,
  },
  orangeLineTop: {
    width: 50,
    height: 3,
    backgroundColor: "#d97706",
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d97706",
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: 14,
    color: "#ffffff",
    fontStyle: "italic",
  },

  content: { padding: 20, paddingBottom: 100 },

  sectionHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    gap: 15,
  },
  sectionLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#14532d",
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14532d",
    textTransform: "uppercase",
  },

  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureItem: {
    width: "48%",
    alignItems: "center",
    marginBottom: 24,
  },
  featureIcon: { width: 60, height: 60, marginBottom: 12 },
  featureText: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
    fontWeight: "500",
  },

  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  gridItem: { width: "48%" },
  gridImage: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },

  viewPackagesBtn: {
    backgroundColor: "#14532d",
    borderRadius: 50,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  viewPackagesText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
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
  orangeLineUnderHome: {
    width: 50,
    height: 3,
    backgroundColor: "#d97706",
    marginTop: 4,
    borderRadius: 2,
  },
  navItem: { alignItems: "center" },
  navIcon: { width: 28, height: 28, marginBottom: 4 },
  navLabel: { fontSize: 12, color: "#333" },
});
