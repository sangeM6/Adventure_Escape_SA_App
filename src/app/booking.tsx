
import { useLocalSearchParams,Href, useRouter } from "expo-router";
import { useState } from "react";
import {SafeAreaView} from "react-native-safe-area-context"
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GREEN = "#14532D";
const ORANGE = "#F4A261";
const WHITE = "#FFFFFF";
const CHARCOAL = "#1F2933";
const BLUE = "#0077B6";

const menuItems = [
  { title: "Home", route: "/" as Href },
  { title: "About", route: "/about" as Href },
  { title: "Overview", route: "/overview" as Href },
  { title: "Packages", route: "/packages" as Href },
  { title: "Fees", route: "/fees" as Href },
  { title: "Contact", route: "/contact" as Href },
];



const times = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
];

export default function BookingScreen() {
  const router = useRouter();
  const {
  selections,
  subtotal: subtotalParam,
  discount: discountParam,
  total: totalParam,
  name,
  phone,
  email,
} = useLocalSearchParams<{
  selections?: string | string[];
  subtotal?: string | string[];
  discount?: string | string[];
  total?: string | string[];
  name?: string | string[];
  phone?: string | string[];
  email?: string | string[];
}>();

const selectionData = Array.isArray(selections)
  ? selections[0]
  : selections;

const selectedItems = selectionData
  ? JSON.parse(selectionData)
  : [];

const subtotal = Number(
  Array.isArray(subtotalParam) ? subtotalParam[0] : subtotalParam
) || 0;

const discount = Number(
  Array.isArray(discountParam) ? discountParam[0] : discountParam
) || 0;

const total = Number(
  Array.isArray(totalParam) ? totalParam[0] : totalParam
) || 0;

  const [menuOpen, setMenuOpen] = useState(false);
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState(0);
  const [preferredTime, setPreferredTime] = useState("");
  const [showTimes, setShowTimes] = useState(false);
  const [requests, setRequests] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);




function submitBooking() {
  if (selectedItems.length === 0) {
    Alert.alert(
      "No Selections",
      "Please select a package or activity first."
    );
    return;
  }

  if (date.trim() === "") {
    Alert.alert("Missing Date", "Please enter your preferred date.");
    return;
  }

  if (participants < 1) {
    Alert.alert(
      "Missing Participants",
      "Please select at least one participant."
    );
    return;
  }

  if (preferredTime === "") {
    Alert.alert("Missing Time", "Please select a preferred time.");
    return;
  }

  if (!agreed) {
    Alert.alert(
      "Terms and Conditions",
      "Please agree to the Terms and Conditions."
    );
    return;
  }

  setSubmitted(true);
}


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
        {/* Booking Summary */}
        <Text style={styles.mainHeading}>YOUR BOOKING SUMMARY</Text>

        <View style={styles.summaryCard}>
          {selectedItems.map((item: {
            id: string;
            title: string;
            price: number;
            quantity: number;
            }, index: number) => (
            <View key={item.id}>
              {index > 0 && <View style={styles.adventureDivider} />}
              <Text style={styles.adventureHeading}>
                {`Experience ${index + 1}`}
              </Text>
              <Text style={styles.adventureName}>{item.title}</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Price</Text>
                <Text style={styles.summaryValue}>
                  R {item.price.toLocaleString("en-ZA")}
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Quantity</Text>
                <Text style={styles.summaryValue}>{item.quantity}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total Amount</Text>
                <Text style={styles.summaryValue}>
                  R {(item.price * item.quantity).toLocaleString("en-ZA")}
                </Text>
              </View>
            </View>
        ))}

          <View style={styles.totalDivider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalHeading}>TOTAL</Text>
            <Text style={styles.totalAmount}>
              R {total.toLocaleString("en-ZA")}
            </Text>
          </View>
        </View>

        {/* Booking Details */}
        <Text style={styles.sectionHeading}>BOOKING DETAILS</Text>

        <Text style={styles.label}>Preferred Date</Text>
        <TextInput
          style={styles.input}
          placeholder="DD / MM / YYYY"
          placeholderTextColor="#777777"
          value={date}
          onChangeText={setDate}
          keyboardType="numbers-and-punctuation"
          maxLength={14}
        />

        <Text style={styles.label}>Number of Participants</Text>
        <View style={styles.counter}>
          <Pressable
            style={styles.counterButton}
            onPress={() =>
              setParticipants(Math.max(0, participants - 1))
            }
            accessibilityLabel="Decrease participants"
          >
            <Text style={styles.counterSymbolMinus}>−</Text>
          </Pressable>

          <Text style={styles.counterNumber}>{participants}</Text>

          <Pressable
            style={styles.counterButton}
            onPress={() => setParticipants(participants + 1)}
            accessibilityLabel="Increase participants"
          >
            <Text style={styles.counterSymbolPlus}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.label}>Preferred Time</Text>
        <Pressable
          style={styles.dropdown}
          onPress={() => setShowTimes(!showTimes)}
        >
          <Text
            style={[
              styles.dropdownText,
              !preferredTime && styles.placeholder,
            ]}
          >
            {preferredTime || "Select a preferred time"}
          </Text>
          <Text style={styles.dropdownArrow}>
            {showTimes ? "▲" : "▼"}
          </Text>
        </Pressable>

        {showTimes && (
          <View style={styles.timeOptions}>
            {times.map((time) => (
              <Pressable
                key={time}
                style={styles.timeOption}
                onPress={() => {
                  setPreferredTime(time);
                  setShowTimes(false);
                }}
              >
                <Text style={styles.timeText}>{time}</Text>
              </Pressable>
            ))}
          </View>
        )}

        <Text style={styles.label}>Special Requests (Optional)</Text>
        <TextInput
          style={styles.requestInput}
          placeholder="Enter any special requests..."
          placeholderTextColor="#777777"
          value={requests}
          onChangeText={setRequests}
          multiline
          textAlignVertical="top"
        />

        {/* Terms and Conditions */}
        <Pressable
          style={styles.checkboxRow}
          onPress={() => setAgreed(!agreed)}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: agreed }}
        >
          <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
            {agreed && <Text style={styles.checkmark}>✓</Text>}
          </View>

          <Text style={styles.termsText}>
            I agree to the Terms and Conditions
          </Text>
        </Pressable>

        <Pressable
          style={styles.termsLink}
          onPress={() => router.push("/terms" as Href)}
        >
          <Text style={styles.termsLinkText}>
            Read Terms and Conditions
          </Text>
          <Text style={styles.termsArrow}>→</Text>
        </Pressable>

        {/* Submit */}
        <Pressable
          style={styles.submitButton}
          onPress={submitBooking}
        >
          <Text style={styles.submitButtonText}>
            Submit Booking Request
          </Text>
        </Pressable>
      </ScrollView>

      {/* Success Popup */}
      <Modal
        visible={submitted}
        transparent
        animationType="fade"
        onRequestClose={() => setSubmitted(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.successCard}>
            <View style={styles.successCircle}>
              <Text style={styles.successCheck}>✓</Text>
            </View>

            <Text style={styles.successHeading}>
              Booking Request Submitted
            </Text>

            <Text style={styles.successMessage}>
              Your booking request has been submitted successfully!
            </Text>

            <Pressable
              style={styles.successButton}
              onPress={() => setSubmitted(false)}
            >
              <Text style={styles.successButtonText}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 115,
    height: 52,
  },
  brandText: {
    marginLeft: 6,
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: ORANGE,
    marginHorizontal: 4,
  },
  brandEscape: {
    color: "#0077B6",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.5,
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
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 40,
  },
  mainHeading: {
    color: GREEN,
    fontSize: 23,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
  },
  summaryCard: {
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 7,
    padding: 17,
  },
  adventureHeading: {
    color: GREEN,
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 7,
  },
  adventureName: {
    color: CHARCOAL,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
  },
  summaryLabel: {
    color: CHARCOAL,
    fontSize: 14,
  },
  summaryValue: {
    color: CHARCOAL,
    fontSize: 14,
    fontWeight: "600",
  },
  adventureDivider: {
    height: 1,
    backgroundColor: CHARCOAL,
    marginHorizontal: 12,
    marginVertical: 17,
  },
  totalDivider: {
    height: 1,
    backgroundColor: CHARCOAL,
    marginTop: 8,
    marginBottom: 15,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalHeading: {
    color: GREEN,
    fontSize: 17,
    fontWeight: "800",
  },
  totalAmount: {
    color: GREEN,
    fontSize: 18,
    fontWeight: "800",
  },
  sectionHeading: {
    color: GREEN,
    fontSize: 21,
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 12,
  },
  label: {
    color: GREEN,
    fontSize: 15,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 9,
  },
  input: {
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 13,
    color: CHARCOAL,
    fontSize: 15,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    overflow: "hidden",
    paddingHorizontal:12,
    height:48,
    width:"100%"
  },
  counterButton: {
    width: 48,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: WHITE,
  },
  counterSymbolPlus: {
    color: GREEN,
    fontSize: 25,
    fontWeight: "600",
    alignSelf:"flex-end"
  },
  counterSymbolMinus:{
    color:GREEN,
    fontSize:25,
    fontWeight: "600",
    alignSelf:"flex-start"
  },
  counterNumber: {
    width: 55,
    textAlign: "center",
    alignSelf:"center",
    color: CHARCOAL,
    fontSize: 17,
    fontWeight: "600",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    color: CHARCOAL,
    fontSize: 15,
  },
  placeholder: {
    color: "#777777",
  },
  dropdownArrow: {
    color: GREEN,
    fontSize: 13,
  },
  timeOptions: {
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    marginTop: 5,
    overflow: "hidden",
  },
  timeOption: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  timeText: {
    color: CHARCOAL,
    fontSize: 15,
  },
  requestInput: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: CHARCOAL,
    borderRadius: 5,
    padding: 12,
    color: CHARCOAL,
    fontSize: 15,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: GREEN,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: GREEN,
  },
  checkmark: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "800",
  },
  termsText: {
    color: CHARCOAL,
    fontSize: 14,
    flex: 1,
  },
  termsLink: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 23,
  },
  termsLinkText: {
    color: GREEN,
    fontSize: 14,
    fontWeight: "700",
  },
  termsArrow: {
    color: GREEN,
    fontSize: 23,
    marginLeft: 9,
  },
  submitButton: {
    backgroundColor: ORANGE,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  submitButtonText: {
    color: CHARCOAL,
    fontSize: 15,
    fontWeight: "700",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  successCard: {
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
  },
  successCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#E5F3E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  successCheck: {
    color: GREEN,
    fontSize: 38,
    fontWeight: "800",
  },
  successHeading: {
    color: GREEN,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  successMessage: {
    color: CHARCOAL,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
  },
  successButton: {
    backgroundColor: ORANGE,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginTop: 22,
  },
  successButtonText: {
    color: CHARCOAL,
    fontWeight: "700",
    fontSize: 15,
  },
});
