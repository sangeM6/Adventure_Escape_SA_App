import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GREEN = "#14532D";
const BLUE = "#0077B6";
const ORANGE = "#D97706";
const CHARCOAL = "#1F2933";
const WHITE = "#FFFFFF";

const terms = [
  {
    title: "1. BOOKING REQUESTS",
    description:
      "Customers must provide accurate booking and contact information. Submitting a booking request does not automatically confirm a reservation.",
  },
  {
    title: "2. PAYMENTS",
    description:
      "Payment arrangements and any applicable charges must be confirmed with Adventure Escape SA.",
  },
  {
    title: "3. CANCELLATIONS AND CHANGES",
    description:
      "Customers should contact Adventure Escape SA to request booking changes or cancellations.",
  },
  {
    title: "4. SAFETY",
    description:
      "Participants must follow the instructions provided by activity guides and comply with applicable safety requirements.",
  },
  {
    title: "5. PERSONAL INFORMATION",
    description:
      "Customer information must be handled responsibly and used for appropriate booking-related purposes.",
  },
  {
    title: "6. CONTACT INFORMATION",
    description:
      "Customers may contact Adventure Escape SA for questions about these terms and conditions.",
  },
];

export default function TermsConditions() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
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

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Terms & Conditions</Text>
          <Text style={styles.subtitle}>
            Please read these terms carefully before
            {"\n"}submitting your booking request.
          </Text>
        </View>

        {terms.map((term) => (
          <View key={term.title} style={styles.termCard}>
            <Text style={styles.termTitle}>{term.title}</Text>
            <Text style={styles.termDescription}>{term.description}</Text>
          </View>
        ))}
        <Pressable
          style={({ pressed }) => [
            styles.contactButton,
            { opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={() => router.push("/contact")}
        >
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  borderTopWidth: 75,
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

  menuButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  menuIcon: {
    width: 28,
    height: 28,
  },

  /* Dropdown Menu */
  menu: {
    backgroundColor: GREEN,
    paddingHorizontal: 18,
    paddingBottom: 10,
  },

  menuItem: {
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.15)",
  },

  menuText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "500",
  },

  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  content: {
    paddingTop: 35,
    paddingBottom: 40,
  },
  headingContainer: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 50,
  },
  heading: {
    color: GREEN,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: BLUE,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 23,
  },
 termCard: {
  backgroundColor: WHITE,
  padding: 16,
  marginBottom: 12,
  marginHorizontal:10,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: CHARCOAL,
},
 termTitle: {
  fontSize: 15,
  fontWeight: "700",
  color: CHARCOAL,
  marginBottom: 5,
},
  termDescription: {
  fontSize: 12,
  lineHeight: 17,
  color: CHARCOAL,
},
  contactButton: {
    backgroundColor: ORANGE,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal:100
  },
  contactButtonText: {
    color: CHARCOAL,
    fontSize: 16,
    fontWeight: "600",
  },
});
