import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const experiences = [
  {
    title: "MOUNTAIN ADVENTURES",
    description: "Take in the views on a guided outdoor adventure.",
    image: require("../../assets/photos/mountain-adventure.jpg"),
  },
  {
    title: "WATER EXPERIENCES",
    description: "Get out on the water and discover a new perspective.",
    image: require("../../assets/photos/kayaking.jpg"),
  },
  {
    title: "ADRENALINE ACTIVITIES",
    description: "Find your next challenge with our exciting activities.",
    image: require("../../assets/photos/ziplining.jpg"),
  },
];

export default function ExploreScreen() {
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

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Image
            source={require("../../assets/photos/background-image.jpeg")}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <View style={styles.orangeLineTop} />
            <Text style={styles.heroTitle}>EXPLORE</Text>
            <Text style={styles.heroSubtitle}>
              DISCOVER YOUR NEXT ADVENTURE
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeadingRow}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionHeading}>FIND YOUR ADVENTURE</Text>
            <View style={styles.sectionLine} />
          </View>
          <Text style={styles.intro}>
            From mountain trails to water experiences, discover outdoor
            adventures for individuals, families, and teams.
          </Text>

          {experiences.map((experience) => (
            <View key={experience.title} style={styles.experienceCard}>
              <Image
                source={experience.image}
                style={styles.experienceImage}
                resizeMode="cover"
              />
              <View style={styles.experienceText}>
                <Text style={styles.experienceTitle}>{experience.title}</Text>
                <Text style={styles.experienceDescription}>
                  {experience.description}
                </Text>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={() => router.push("/individual")}
          >
            <Text style={styles.secondaryButtonText}>VIEW PACKAGE DETAILS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={() => router.push("/privacy")}
          >
            <Text style={styles.secondaryButtonText}>PRIVACY POLICY</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => router.push("/overview")}
        >
          <Image
            source={require("../../assets/photos/home-icon.jpeg")}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <View style={styles.navItem}>
          <Image
            source={require("../../assets/photos/explore-icon.jpeg")}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navLabelActive}>Explore</Text>
          <View style={styles.activeLine} />
        </View>
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
  logo: { width: 50, height: 50 },
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
  scrollView: { flex: 1 },
  content: { paddingBottom: 24 },
  hero: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  orangeLineTop: {
    width: 40,
    height: 3,
    backgroundColor: "#d97706",
    marginBottom: 14,
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  heroSubtitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 8,
  },
  section: { paddingHorizontal: 20 },
  sectionHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 28,
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
  intro: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444444",
    textAlign: "center",
    marginBottom: 20,
  },
  experienceCard: {
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 16,
  },
  experienceImage: {
    width: "100%",
    height: 170,
  },
  experienceText: {
    padding: 16,
  },
  experienceTitle: {
    color: "#14532d",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 6,
  },
  experienceDescription: {
    color: "#444444",
    fontSize: 15,
    lineHeight: 22,
  },
  secondaryButton: {
    borderColor: "#14532d",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 12,
  },
  secondaryButtonText: {
    color: "#14532d",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    paddingVertical: 8,
    backgroundColor: "#ffffff",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  navIcon: { width: 28, height: 28, marginBottom: 4 },
  navLabel: { fontSize: 14, color: "#666666" },
  navLabelActive: {
    fontSize: 14,
    color: "#14532d",
    fontWeight: "bold",
  },
  activeLine: {
    width: 60,
    height: 3,
    backgroundColor: "#d97706",
    borderRadius: 2,
    marginTop: 4,
  },
});
