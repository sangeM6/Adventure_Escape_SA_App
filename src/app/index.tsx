import { JosefinSans_400Regular_Italic } from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";
import { Href, useRouter } from "expo-router";
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

const GREEN = "#14532D";
const ORANGE = "#D97706";
const WHITE = "#FFFFFF";
const CHARCOAL = "#1F2933";
const BLUE = "#0077B6";
const LIGHT_BLUE = "#DEF1F5";

 const menuItems = [
    { label: "Home", route: "/" },
    { label: "Explore", route: "/explore" },
    { label: "Fees", route: "/fees" },
    { label: "Booking", route: "/booking" },
    { label: "Overview", route: "/overview" },
    { label: "Packages", route: "/packages" },
    { label: "About Us", route: "/about" },
    { label: "Contact", route: "/contact" },
    { label: "Terms & Conditions", route: "/terms" },
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
  const [fontsLoaded] = useFonts({
    JosefinItalic: JosefinSans_400Regular_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* Navigation Bar */}
             <View style={styles.header}>
               {/* White Logo Section */}
               <View style={styles.brandSection}>
                 <Image
                   source={require("../../assets/images/logo.jpg")}
                   style={styles.logo}
                   resizeMode="contain"
                 />
     
                 <View style={styles.brandText}>
                   <Text style={styles.brandName}>ADVENTURE</Text>
     
                   <View style={styles.brandSubtitleRow}>
                     <View style={styles.orangeLine} />
                     <Text style={styles.brandSubtitle}>ESCAPE</Text>
                     <View style={styles.orangeLine} />
                   </View>
                 </View>
               </View>
     
               {/* Diagonal White Edge */}
               <View style={styles.diagonalEdge} />
     
               {/* Green Menu Section */}
               <View style={styles.menuSection}>
                 <Pressable
                   style={styles.menuButton}
                   onPress={() => setMenuOpen(!menuOpen)}
                   accessibilityRole="button"
                   accessibilityLabel={
                     menuOpen ? "Close navigation menu" : "Open navigation menu"
                   }
                 >
                   <Image
                     source={require("../../assets/images/menu.png")}
                     style={styles.menuIcon}
                     resizeMode="contain"
                   />
                 </Pressable>
               </View>
             </View>
     
             {/* Navigation Dropdown */}
             {menuOpen && (
               <View style={styles.menu}>
                 {menuItems.map((item) => (
                   <Pressable
                     key={item.label}
                     style={styles.menuItem}
                     onPress={() => {
                       setMenuOpen(false);
                       router.push(item.route as any);
                     }}
                   >
                     <Text style={styles.menuText}>{item.label}</Text>
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

            <View style={styles.heroOrangeLine} />

            <Text style={styles.heroDescription}>
              Adventure Escape SA offers exciting outdoor adventures throughout
              the Western Cape.
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

          <Text style={styles.activitiesSubtitle}>CHOOSE YOUR ADVENTURE</Text>

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
    minHeight: 300,
    justifyContent: "center",
    overflow: "hidden",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 22,
    paddingVertical: 25,
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
    fontSize: 28,
    fontWeight: "900",
    marginTop: 5,
    fontFamily: "JosefinItalic",
    fontStyle: "italic"
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
    borderColor: CHARCOAL,
    borderWidth: 0.2,
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
  heroOrangeLine:{
    width: 135,
    height: 2,
    backgroundColor: ORANGE,
    marginTop: 5,
    marginBottom: 16,
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
   /* Navigation Bar */
 header: {
  width: "100%",
  height: 60,
  flexDirection: "row",
  alignItems: "stretch",
  backgroundColor: GREEN,
},

  brandSection: {
  width: 174,
  flexShrink: 0,
  backgroundColor: WHITE,
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: 12,
  gap: 8,
  zIndex: 1,
},

  logo: {
    width: 52,
    height: 52,
  },

  brandText: {
    justifyContent: "center",
  },

  brandName: {
    color: GREEN,
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
  },

  brandSubtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: 3,
    fontSize: 14,
    
  },

brandSubtitle: {
  color: BLUE,
  fontSize: 14,
  fontWeight: "800",
  letterSpacing: 2,
},

  orangeLine: {
    width: 15,
    height: 2,
    backgroundColor: ORANGE,
  },

 diagonalEdge: {
  width: 0,
  height: 0,
  borderTopWidth: 60,
  borderTopColor: WHITE,
  borderRightWidth: 15,
  borderRightColor: "transparent",
  position: "absolute",
  left: 174,
  top: 0,
  zIndex: 2,
},

  menuSection: {
    flex: 1,
    backgroundColor: GREEN,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 15,
  },



  /* Dropdown Menu */
  menu: {
    backgroundColor: GREEN,
    paddingHorizontal: 18,
    paddingBottom: 10,
  },

 

  menuText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "500",
  },

 
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },



  brandAdventure: {
    color: ORANGE,
    fontSize: 14,
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
    fontSize: 14,
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
