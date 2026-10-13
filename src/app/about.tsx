import { router } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AboutUsScreen() {
  return (
    <View style={styles.safeArea}>
      <View style={styles.headerBar}>
        <View style={styles.headerLogoGroup}>
          <Image
            source={require("../../assets/photos/logo.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.logoTextWrapper}>
            <View style={styles.line} />
            <View style={styles.logoTextGroup}>
              <Text style={styles.adventureText}>ADVENTURE</Text>
              <Text style={styles.escapeText}>ESCAPE</Text>
            </View>
            <View style={styles.line} />
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
          <View style={styles.heroOverlay}>
            <View style={styles.orangeLine} />
            <Text style={styles.heroTitle}>ABOUT US</Text>
            <Text style={styles.heroSubtitle}>Get to know us</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.sectionHeadingRow}>
            <View style={styles.greenLine} />
            <Text style={styles.sectionHeading}>OUR STORY</Text>
            <View style={styles.greenLine} />
          </View>
          <Text style={styles.storyText}>
            Adventure Escape SA connects people to nature through safe,
            unforgettable outdoor experiences in South Africa's most beautiful
            landscapes.
          </Text>

          <View style={styles.missionVisionRow}>
            <View style={styles.missionBox}>
              <Text style={styles.missionTitle}>OUR MISSION</Text>
              <Text style={styles.missionQuote}>
                "Inspire, guide, create lasting memories"
              </Text>
              <Text style={styles.missionPoint}>• Safe guided adventures</Text>
              <Text style={styles.missionPoint}>
                • Support nature & local communities
              </Text>
              <Text style={styles.missionPoint}>• Adventure for everyone</Text>
            </View>
            <View style={styles.visionBox}>
              <Text style={styles.visionTitle}>OUR VISION</Text>
              <Text style={styles.visionText}>
                South Africa's most loved adventure brand
              </Text>
              <Text style={styles.visionTagline}>
                memories that last forever
              </Text>
            </View>
          </View>

          <View style={styles.sectionHeadingRow}>
            <View style={styles.greenLine} />
            <Text style={styles.sectionHeading}>OUR VALUES</Text>
            <View style={styles.greenLine} />
          </View>

          <View style={styles.valuesGrid}>
            <View style={styles.valueCard}>
              <Image
                source={require("../../assets/photos/quality-services-icon.png")}
                style={styles.valueIcon}
                resizeMode="contain"
              />
              <Text style={styles.valueText}>safety</Text>
            </View>
            <View style={styles.valueCard}>
              <Image
                source={require("../../assets/photos/nature-icon.jpg")}
                style={styles.valueIcon}
                resizeMode="contain"
              />
              <Text style={styles.valueText}>nature</Text>
            </View>
            <View style={styles.valueCard}>
              <Image
                source={require("../../assets/photos/sustainability-icon.jpg")}
                style={styles.valueIcon}
                resizeMode="contain"
              />
              <Text style={styles.valueText}>sustainability</Text>
            </View>
            <View style={styles.valueCard}>
              <Image
                source={require("../../assets/photos/excellence-icon.jpeg")}
                style={styles.valueIcon}
                resizeMode="contain"
              />
              <Text style={styles.valueText}>excellence</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.overviewBtn}
            activeOpacity={0.7}
            onPress={() => router.push("/overview")}
          >
            <Text style={styles.overviewBtnText}>VIEW OVERVIEW &gt;</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItemWrapper}>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Image
              source={require("../../assets/photos/home-icon.jpeg")}
              style={styles.navIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.orangeLineUnderHome} />
        </View>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/packages")}
          activeOpacity={0.7}
        >
          <Image
            source={require("../../assets/photos/explore-icon.jpeg")}
            style={styles.navIcon}
            resizeMode="contain"
          />
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
    paddingVertical: 12,
    backgroundColor: "#14532d",
  },
  headerLogoGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: { width: 40, height: 40 },
  logoTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  line: {
    width: 18,
    height: 2,
    backgroundColor: "#d97706",
  },
  logoTextGroup: {
    flexDirection: "row",
    gap: 6,
  },
  adventureText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  escapeText: {
    color: "#0077b6",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  menuLines: { gap: 4, alignItems: "flex-end" },
  menuLine: { width: 32, height: 2, backgroundColor: "#d97706" },
  container: { flex: 1 },
  hero: { height: 200, position: "relative" },
  heroBg: { width: "100%", height: "100%" },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  orangeLine: {
    width: 40,
    height: 3,
    backgroundColor: "#d97706",
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  heroSubtitle: { fontSize: 14, color: "#ffffff", opacity: 0.9 },
  content: { padding: 20, paddingBottom: 80 },
  sectionHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 10,
  },
  greenLine: { flex: 1, height: 1, backgroundColor: "#14532d" },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#14532d",
    textTransform: "uppercase",
  },
  storyText: {
    fontSize: 14,
    color: "#333333",
    lineHeight: 20,
    marginBottom: 25,
  },
  missionVisionRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 25,
  },
  missionBox: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    padding: 15,
    borderRadius: 4,
  },
  missionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#14532d",
    marginBottom: 8,
  },
  missionQuote: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#14532d",
    marginBottom: 10,
  },
  missionPoint: { fontSize: 11, color: "#333", marginBottom: 4 },
  visionBox: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    padding: 15,
    borderRadius: 4,
  },
  visionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 8,
  },
  visionText: { fontSize: 12, color: "#333", marginBottom: 6 },
  visionTagline: { fontSize: 11, color: "#0077b6", fontStyle: "italic" },
  valuesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 25,
  },
  valueCard: {
    width: "48%",
    backgroundColor: "#e8e8e8",
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  valueIcon: { width: 32, height: 32 },
  valueText: { fontSize: 13, color: "#333", textTransform: "lowercase" },
  overviewBtn: {
    backgroundColor: "#14532d",
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  overviewBtnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#14532d",
  },
  navItemWrapper: { alignItems: "center" },
  navItem: { alignItems: "center" },
  orangeLineUnderHome: {
    width: 40,
    height: 3,
    backgroundColor: "#d97706",
    marginTop: 6,
    borderRadius: 2,
  },
  navIcon: { width: 28, height: 28 },
});
