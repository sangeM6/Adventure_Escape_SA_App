import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, useRouter } from "expo-router";

const GREEN = "#14532D";
const ORANGE = "#F4A261";
const WHITE = "#FFFFFF";
const CHARCOAL = "#1F2933";
const BLUE = "#0077B6";
const LIGHT_BLUE = "#DEF1F5";

const menuItems = [
  { title: "Home", route: "/" as Href },
  { title: "About", route: "/about" as Href },
  { title: "Overview", route: "/overview" as Href },
  { title: "Packages", route: "/packages" as Href },
  { title: "Fees", route: "/fees" as Href },
  { title: "Contact", route: "/contact" as Href },
];

const features = [
  {
    icon: require("../../assets/images/hiking-icon.png"),
    title: "Adventure",
    description: "Exciting outdoor experiences.",
  },
  {
    icon: require("../../assets/images/canoeing.png"),
    title: "Explore",
    description: "Discover beautiful destinations.",
  },
  {
    icon: require("../../assets/images/bouldering.png"),
    title: "Safety",
    description: "Enjoy adventures with guidance.",
  },
  {
    icon: require("../../assets/images/wave (1).png"),
    title: "Memories",
    description: "Create unforgettable moments.",
  },
];
const natureHighlights = [
  {
    title: "NATURE",
    description: "Discover the beauty of the Western Cape.",
  },
  {
    title: "ADVENTURE",
    description: "Find exciting experiences in the great outdoors.",
  },
  {
    title: "DISCOVER",
    description: "Make unforgettable memories along the way.",
  },
];

const activities = [
  {
    title: "Hiking Tours",
    image: require("../../assets/images/hiking.jpg"),
    icon: require("../../assets/images/hiking (2).png"),
  },
  {
    title: "Kayaking",
    image: require("../../assets/images/kayaking.jpg"),
    icon: require("../../assets/images/canoeing.png"),
  },
  {
    title: "Ziplining",
    image: require("../../assets/images/ziplining.jpg"),
    icon: require("../../assets/images/zipline (1).png"),
  },
  {
    title: "Rock Climbing",
    image: require("../../assets/images/climbing.jpg"),
    icon: require("../../assets/images/bouldering.png"),
  },
  {
    title: "Beach Adventures",
    image: require("../../assets/images/penguins.jpg"),
    icon: require("../../assets/images/wave (1).png"),
  },
];

const reasons = [
  {
    title: "Beautiful Destinations",
    description:
      "Explore amazing outdoor destinations throughout the Western Cape.",
  },
  {
    title: "Exciting Activities",
    description:
      "Choose from a range of exciting adventures for different interests.",
  },
  {
    title: "Memorable Experiences",
    description:
      "Create special memories with friends, family, and colleagues.",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* Navigation */}
      <View style={styles.navbar}>
               <Pressable
          onPress={() => router.push("/" as Href)}
          accessibilityRole="button"
        >
          <View style={styles.brandContainer}>
            <Image
              source={require("../../assets/images/logo.jpg")}
              style={styles.logo}
              resizeMode="contain"
            />

            <View style={styles.brandText}>
              <Text style={styles.brandAdventure}>ADVENTURE</Text>

              <View style={styles.brandEscapeRow}>
                <View style={styles.brandLine} />
                <Text style={styles.brandEscape}>ESCAPE SA</Text>
                <View style={styles.brandLine} />
              </View>
            </View>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.menuButton}
          accessibilityRole="button"
          accessibilityLabel="Toggle navigation menu"
        >
          <Image
            source={require("../../assets/images/menu.png")}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      {menuOpen && (
        <View style={styles.menuDropdown}>
          {menuItems.map((item) => (
            <Pressable
              key={item.title}
              style={styles.menuItem}
              onPress={() => {
                setMenuOpen(false);
                router.push(item.route);
              }}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <ImageBackground
          source={require("../../assets/images/hero.png")}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>EXPLORE. DISCOVER.</Text>

            <Text style={styles.heroSubtitle}>EXPERIENCE</Text>

            <View style={styles.orangeLine} />

            <Text style={styles.heroDescription}>
              Adventure Escape SA offers exciting outdoor adventures
              throughout the Western Cape.
            </Text>

            <Pressable
              style={styles.primaryButton}
              onPress={() => router.push("/packages" as Href)}
              accessibilityRole="button"
            >
              <Text style={styles.primaryButtonText}>Explore Packages</Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => router.push("/contact" as Href)}
              accessibilityRole="button"
            >
              <Text style={styles.secondaryButtonText}>Get a Quotation</Text>
            </Pressable>
          </View>
        </ImageBackground>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionHeading}>YOUR NEXT ADVENTURE</Text>

          <Text style={styles.sectionSubtitle}>
            Discover what makes us special
          </Text>

          <View style={styles.featuresGrid}>
            {features.map((feature) => (
              <View style={styles.featureCard} key={feature.title}>
                <Image
                  source={feature.icon}
                  style={styles.featureIcon}
                  resizeMode="contain"
                />

                <Text style={styles.featureTitle}>{feature.title}</Text>

                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Our Activities Section */}
        <View style={styles.activitiesSection}>
          <Text style={styles.activitiesHeading}>OUR ACTIVITIES</Text>

          <Text style={styles.activitiesSubtitle}>
            CHOOSE YOUR ADVENTURE
          </Text>

          <View style={styles.activitiesUnderline} />

          <View style={styles.activitiesGrid}>
            {activities.map((activity) => (
              <View style={styles.activityCard} key={activity.title}>
                <Image
                  source={activity.image}
                  style={styles.activityImage}
                  resizeMode="cover"
                />

                <View style={styles.activityIconContainer}>
                  <Image
                    source={activity.icon}
                    style={styles.activityIcon}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.activityTitle}>{activity.title}</Text>
              </View>
            ))}
          </View>

         
        </View>

      

      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: WHITE,
  },

  navbar: {
    height: 70,
    backgroundColor: GREEN,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  logo: {
    width: 115,
    height: 52,
  },

  menuButton: {
    padding: 8,
  },

  menuIcon: {
    width: 30,
    height: 30,
  },

  menuDropdown: {
    backgroundColor: GREEN,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },

  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.2)",
  },

  menuItemText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "500",
  },

  content: {
    flexGrow: 1,
    backgroundColor: WHITE,
  },

  /* Hero */
  hero: {
    minHeight: 410,
    justifyContent: "center",
    overflow: "hidden",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    minHeight: 410,
    backgroundColor: "rgba(0,0,0,0.48)",
    paddingHorizontal: 22,
    paddingVertical: 45,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  heroTitle: {
    color: WHITE,
    fontSize: 29,
    fontWeight: "800",
    letterSpacing: 1,
  },

  heroSubtitle: {
    color: ORANGE,
    fontSize: 27,
    fontWeight: "800",
    marginTop: 5,
  },

  orangeLine: {
    width: 65,
    height: 4,
    backgroundColor: ORANGE,
    marginTop: 15,
    marginBottom: 16,
  },

  heroDescription: {
    color: WHITE,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 24,
    maxWidth: 330,
  },

  primaryButton: {
    backgroundColor: ORANGE,
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 12,
    minWidth: 180,
  },

  primaryButtonText: {
    color: CHARCOAL,
    fontSize: 15,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "transparent",
    borderColor: WHITE,
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 5,
    alignItems: "center",
    minWidth: 180,
  },

  secondaryButtonText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "700",
  },

  /* Features */
  featuresSection: {
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },

  sectionHeading: {
    color: GREEN,
    fontSize: 23,
    fontWeight: "800",
    textAlign: "center",
  },

  sectionSubtitle: {
    color: CHARCOAL,
    fontSize: 14,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 22,
  },

  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  featureCard: {
    width: "48%",
    backgroundColor: "#F7F9F8",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },

  featureIcon: {
    width: 38,
    height: 38,
    marginBottom: 9,
  },

  featureTitle: {
    color: GREEN,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },

  featureDescription: {
    color: CHARCOAL,
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
    marginTop: 6,
  },

  /* Activities */
  activitiesSection: {
    backgroundColor: LIGHT_BLUE,
    paddingHorizontal: 12,
    paddingVertical: 30,
  },

  activitiesHeading: {
    color: GREEN,
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
  },

  activitiesSubtitle: {
    color: CHARCOAL,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 7,
    letterSpacing: 1,
  },

  activitiesUnderline: {
    width: 65,
    height: 4,
    backgroundColor: ORANGE,
    alignSelf: "center",
    marginTop: 13,
    marginBottom: 24,
  },

  activitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  activityCard: {
    width: "31.5%",
    backgroundColor: WHITE,
    borderRadius: 7,
    alignItems: "center",
    marginBottom: 28,
    minHeight: 135,
    overflow: "visible",
  },

  activityImage: {
    width: "100%",
    height: 82,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  activityIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -19,
  },

  activityIcon: {
    width: 26,
    height: 26,
  },

  activityTitle: {
    color: CHARCOAL,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 3,
    paddingTop: 6,
    paddingBottom: 10,
  },

  activitiesButton: {
    backgroundColor: ORANGE,
    alignSelf: "center",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 2,
  },

  activitiesButtonText: {
    color: CHARCOAL,
    fontWeight: "700",
    fontSize: 14,
  },

  /* Why Choose Us */
  whyChooseUsSection: {
    backgroundColor: WHITE,
    paddingHorizontal: 18,
    paddingVertical: 30,
  },

  whyChooseUsHeading: {
    color: GREEN,
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
  },

  whyChooseUsUnderline: {
    width: 60,
    height: 4,
    backgroundColor: ORANGE,
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 22,
  },

  whyChooseUsCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F9F8",
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },

  reasonNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  reasonNumberText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "800",
  },

  reasonTextContainer: {
    flex: 1,
  },

  whyChooseUsCardTitle: {
    color: GREEN,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },

  whyChooseUsCardText: {
    color: CHARCOAL,
    fontSize: 12,
    lineHeight: 18,
  },

  whyChooseUsButton: {
    backgroundColor: GREEN,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 12,
  },

  whyChooseUsButtonText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: "700",
  },

  /* Footer */
  footer: {
    backgroundColor: GREEN,
    paddingHorizontal: 18,
    paddingVertical: 25,
    alignItems: "center",
  },

  footerLogo: {
    width: 100,
    height: 55,
    marginBottom: 8,
  },

  footerTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },

  footerDescription: {
    color: WHITE,
    fontSize: 13,
    marginTop: 6,
  },

  footerLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 18,
  },

  footerLink: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  footerLinkText: {
    color: WHITE,
    fontSize: 12,
    fontWeight: "600",
  },

  footerDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.3)",
    marginTop: 15,
    marginBottom: 14,
  },

  footerCopyright: {
    color: WHITE,
    fontSize: 10,
    textAlign: "center",
  },
    brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  brandText: {
    marginLeft: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  brandAdventure: {
    color: "#F4A261",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "center",
  },

  brandEscapeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },

  brandLine: {
    width: 9,
    height: 2,
    backgroundColor: "#F4A261",
    marginHorizontal: 4,
  },

  brandEscape: {
    color: "#0077B6",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
    textAlign: "center",
  },
    /* Nature Highlights */
  natureHighlightsSection: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 24,
    paddingHorizontal: 8,
    alignItems: "stretch",
  },

  natureHighlight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },

  natureDivider: {
    width: 1,
    backgroundColor: "#14532D",
    opacity: 0.35,
    marginHorizontal: 5,
  },

  natureHighlightContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 3,
  },

  natureIcon: {
    width: 36,
    height: 36,
    marginBottom: 8,
  },

  natureTitle: {
    color: "#14532D",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },

  natureDescription: {
    color: "#1F2933",
    fontSize: 10,
    lineHeight: 14,
    textAlign: "center",
  },
});
