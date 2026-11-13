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
const ORANGE = "#D97706";
const WHITE = "#FFFFFF";
const CHARCOAL = "#1F2933";
const LIGHT_BLUE = "#DEF1F5";
const BLUE = "#0077B6";

const menuItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Overview", route: "/overview" },
  { label: "Packages", route: "/Packages" },
  { label: "Fees", route: "/fees" },
  { label: "Booking", route: "/booking" },
  { label: "Explore", route: "/explore" },
  { label: "Individual", route: "/indivvidual" },
  { label: "FAQs", route: "/faqs" },
  { label: "Privacy", route: "/privacy" },
  { label: "T&Cs", route: "terms" },
  { label: "Contact", route: "contact" },
  {label:"Confirmation", route:"/confirmation"},
];

const faqItems = [
  {
    question: "What activities do you offer?",
    answer:
      "We offer adventure experiences such as hiking, kayaking, ziplining and rock climbing.",
  },
  {
    question: "How much do activities cost?",
    answer:
      "Our activities cost R1 500, while individual activities cost R750. If you book 2 activities, you receive a discount of 5%, 3 activities = 10%, more than 3 activities = 15% discount on the activity total.",
  },
  {
    question: "How do I book adventure?",
    answer:
      "Simply browse our available packages or activities, select your preferred option and complete the booking form on our website.",
  },
  {
    question: "Can I book for a group?",
    answer:
      "Yes! We welcome bookings for families,friends, schools and corporate groups.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring comfortable clothing, closed-toe shoes, drinking water, sunscreen and a hat.",
  },
  {
    question: "How can I contact Adventure Escape SA?",
    answer:
      "Call us on +27 12 345 6789",
  },
];

export default function FAQScreen() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.safeArea}>

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

      <ScrollView contentContainerStyle={styles.content}>

        {/* INTRODUCTION */}
        <View style={styles.intro}>
          <Text style={styles.title}>
            Frequently Asked Questions
          </Text>

          <Text style={styles.subtitle}>
            Have questions? Find answers to common questions below.
          </Text>
        </View>

        {/* FAQ QUESTIONS */}
        <View style={styles.faqList}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <View key={item.question} style={styles.faqCard}>
                <Pressable
                  style={styles.questionButton}
                  onPress={() => setOpenIndex(isOpen ? null : index)}
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isOpen }}
                >
                  <Text style={styles.questionText}>
                    {item.question}
                  </Text>

                  <Text style={styles.toggleIcon}>
                    {isOpen ? "−" : "+"}
                  </Text>
                </Pressable>

                {isOpen && (
                  <View style={styles.answerContainer}>
                    <Text style={styles.answerText}>
                      {item.answer}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* CONTACT SECTION */}
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>
            Still have a question?
          </Text>

          <Text style={styles.contactText}>
            Contact our team for more information.
          </Text>

          <Pressable
            style={styles.contactButton}
            onPress={() => router.push("/contact")}
          >
            <Text style={styles.contactButtonText}>
              CONTACT US
            </Text>
          </Pressable>
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

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GREEN,
    zIndex: 2,
  },

  brandSection: {
    width: 174,
    height: 60,
    backgroundColor: WHITE,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 7,
  },

  logo: {
    width: 52,
    height: 52,
  },

  brandText: {
    flex: 1,
    justifyContent: "center",
  },

  brandName: {
    color: GREEN,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },

  brandSubtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 3,
  },

  orangeLine: {
    height: 2,
    width: 13,
    backgroundColor: ORANGE,
  },

  brandSubtitle: {
    color: GREEN,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  diagonalEdge: {
    width: 0,
    height: 0,
    borderTopWidth: 60,
    borderTopColor: WHITE,
    borderRightWidth: 22,
    borderRightColor: "transparent",
  },

  menuSection: {
    flex: 1,
    height: 60,
    backgroundColor: GREEN,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 18,
  },

  menuButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  menuIcon: {
    width: 27,
    height: 27,
  },

  menu: {
    position: "absolute",
    top: 60,
    right: 0,
    width: 210,
    backgroundColor: GREEN,
    paddingVertical: 8,
    paddingHorizontal: 15,
    zIndex: 5,
    elevation: 5,
  },

  menuItem: {
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.18)",
  },

  menuText: {
    color: WHITE,
    fontSize: 14,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  intro: {
    marginBottom: 25,
  },

  title: {
    color: BLUE,
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 35,
    marginBottom: 10,
    textAlign:"center",
  },

  subtitle: {
    color: CHARCOAL,
    fontSize: 11,
    lineHeight: 23,
    textAlign:"center",
  },

  faqList: {
    gap: 12,
  },

  faqCard: {
    borderWidth: 1,
    borderColor: "#D8E2DC",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: WHITE,
  },

  questionButton: {
    minHeight: 58,
    paddingVertical: 14,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  questionText: {
    flex: 1,
    color: CHARCOAL,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 21,
  },

  toggleIcon: {
    color: ORANGE,
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 30,
  },

  answerContainer: {
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderTopColor: ORANGE,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  answerText: {
    color: CHARCOAL,
    fontSize: 14,
    lineHeight: 22,
  },

  contactCard: {
    marginTop: 28,
    padding: 20,
    borderRadius: 10,
    backgroundColor: WHITE,
    borderColor:"#D8E2DC",
    borderWidth:1,
    
  },

  contactTitle: {
    color: BLUE,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8,
    textAlign:"center",
  },

  contactText: {
    color: CHARCOAL,
    fontSize: 12,
    lineHeight: 21,
    marginBottom: 16,
    textAlign:"center",
    paddingBottom:8,
  },

  contactButton: {
    backgroundColor: ORANGE,
    borderRadius: 5,
    paddingVertical: 11,
    paddingHorizontal: 18,
  },

  contactButtonText: {
    color: CHARCOAL,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.5,
    textAlign:"center",
  },
});
