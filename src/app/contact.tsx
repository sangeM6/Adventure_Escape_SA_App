import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, type Href } from "expo-router";

const GREEN = "#14532D";
const ORANGE = "#F4A261";
const WHITE = "#FFFFFF";
const CHARCOAL = "#1F2933";
const BLUE = "#0077B6";

const menuItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Overview", route: "/overview" },
  { label: "Packages", route: "/packages" },
  { label: "Fees", route: "/fees" },
  { label: "Contact", route: "/contact" },
] as const;

const packages = [
  "Ultimate Adventure Day",
  "Family Explorer Package",
  "Mountain Adventure Package",
  "Corporate Team Challenge",
];

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] =
    useState("Select a Package");
  const [showPackages, setShowPackages] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const onSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      Alert.alert("Missing Information", "Please complete all the fields.");
      return;
    }

    if (selectedPackage === "Select a Package") {
      Alert.alert("Select a Package", "Please select an adventure package.");
      return;
    }

    Alert.alert(
      "Message Submitted",
      "Thank you for contacting Adventure Escape SA!"
    );

    setName("");
    setEmail("");
    setPhone("");
    setSelectedPackage("Select a Package");
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.header}>
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

        <View style={styles.diagonalEdge} />

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
                router.push(item.route as Href);
              }}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <ScrollView contentContainerStyle={styles.content}>
        {/* Hero Section */}
        <ImageBackground
          source={require("../../assets/images/hero.png")}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>GET IN TOUCH</Text>

            <Text style={styles.heroSubtitle}>Contact Us</Text>

            <Text style={styles.heroDescription}>
              Plan your best Western Cape journey. Request a custom quote
              from our coordinators or visit us in Cape Town.
            </Text>
          </View>
        </ImageBackground>

        {/* Contact Information */}
        <View style={styles.contactInfoSection}>
          <Text style={styles.contactInfoTitle}>
            Contact Information
          </Text>

          <View style={styles.contactInfoRow}>
            {/* Phone */}
            <View style={styles.contactInfoItem}>
              <Image
                source={require("../../assets/images/phone-call.png")}
                style={styles.contactInfoIcon}
                resizeMode="contain"
              />

              <Text style={styles.contactInfoText}>
                +27 12 345 6789
              </Text>
            </View>

            {/* Email */}
            <View style={styles.contactInfoItem}>
              <Image
                source={require("../../assets/images/email.png")}
                style={styles.contactInfoIcon}
                resizeMode="contain"
              />

              <Text style={styles.contactInfoText}>
                info@adventureescapesa.co.za
              </Text>
            </View>

            {/* Location */}
            <View style={styles.contactInfoItem}>
              <Image
                source={require("../../assets/images/location.png")}
                style={styles.contactInfoIcon}
                resizeMode="contain"
              />

              <Text style={styles.contactInfoText}>
                Cape Town, Western Cape
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.contactFormSection}>
          <Text style={styles.formLabel}>Your Name</Text>

          <TextInput
            style={styles.formInput}
            placeholder="Enter your name"
            placeholderTextColor={CHARCOAL}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.formLabel}>Email Address</Text>

          <TextInput
            style={styles.formInput}
            placeholder="Enter your email address"
            placeholderTextColor={CHARCOAL}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.formLabel}>Phone Number</Text>

          <TextInput
            style={styles.formInput}
            placeholder="Enter your phone number"
            placeholderTextColor={CHARCOAL}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          {/* Package Dropdown */}
          <Text style={styles.formLabel}>Package</Text>

          <Pressable
            style={styles.packageSelector}
            onPress={() => setShowPackages(!showPackages)}
          >
            <Text style={styles.packageText}>
              {selectedPackage}
            </Text>

            <Text style={styles.packageArrow}>˯</Text>
          </Pressable>

          {showPackages && (
            <View style={styles.packageOptions}>
              {packages.map((item) => (
                <Pressable
                  key={item}
                  style={styles.packageOption}
                  onPress={() => {
                    setSelectedPackage(item);
                    setShowPackages(false);
                  }}
                >
                  <Text style={styles.packageText}>{item}</Text>
                </Pressable>
              ))}
            </View>
          )}

          {/* Message */}
          <Text style={styles.formLabel}>Message</Text>

          <TextInput
            style={[styles.formInput, styles.messageInput]}
            placeholder="Write your message here..."
            placeholderTextColor={CHARCOAL}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />

          {/* Submit Button */}
          <Pressable
            style={styles.submitButton}
            onPress={onSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  content: {
    paddingBottom: 30,
  },

  /* Navigation Bar */
  header: {
    height: 85,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: GREEN,
  },

  brandSection: {
    width: 150,
    backgroundColor: WHITE,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 6,
    zIndex: 1,
  },

  logo: {
    width: 38,
    height: 38,
  },

  brandText: {
    justifyContent: "center",
  },

  brandName: {
    color: GREEN,
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  brandSubtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    marginTop: 2,
  },

  brandSubtitle: {
    color: BLUE,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
  },

  orangeLine: {
    width: 10,
    height: 2,
    backgroundColor: ORANGE,
  },

  diagonalEdge: {
    width: 15,
    backgroundColor: WHITE,
    transform: [{ skewX: "-12deg" }],
    marginLeft: -5,
    marginRight: -10,
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

  /* Navigation Dropdown */
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

  /* Hero Section */
  hero: {
    width: "100%",
    minHeight: 220,
    justifyContent: "center",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  heroTitle: {
    color: WHITE,
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },

  heroSubtitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 6,
  },

  heroDescription: {
    color: WHITE,
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 19,
  },

  /* Contact Information */
  contactInfoSection: {
    backgroundColor: GREEN,
    marginHorizontal: 16,
    marginTop: 18,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  contactInfoTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
  },

  contactInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  contactInfoItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minWidth: 0,
  },

  contactInfoIcon: {
    width: 20,
    height: 20,
  },

  contactInfoText: {
    color: WHITE,
    fontSize: 10,
    fontWeight: "500",
    flexShrink: 1,
  },

  /* Contact Form */
  contactFormSection: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 25,
    padding: 16,
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 8,
    backgroundColor: WHITE,
  },

  formLabel: {
    color: CHARCOAL,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },

  formInput: {
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: CHARCOAL,
    fontSize: 14,
    marginBottom: 15,
    backgroundColor: WHITE,
  },

  messageInput: {
    height: 100,
  },

  /* Package Dropdown */
  packageSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    backgroundColor: WHITE,
  },

  packageText: {
    color: CHARCOAL,
    fontSize: 13,
    flexShrink: 1,
  },

  packageArrow: {
    color: CHARCOAL,
    fontSize: 20,
    marginLeft: 8,
  },

  packageOptions: {
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 15,
    backgroundColor: WHITE,
  },

  packageOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: CHARCOAL,
  },

  /* Submit Button */
  submitButton: {
    backgroundColor: "#D97706",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },

  submitButtonText: {
    color: CHARCOAL,
    fontSize: 16,
    fontWeight: "700",
  },
});