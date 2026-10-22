import { useEffect,useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams,useRouter } from "expo-router";

const GREEN = "#14532D";
const ORANGE = "#F4A261";
const WHITE = "#FFFFFF";
const CHARCOAL = "#1F2933";
const BLUE = "#0077B6";

type SelectedItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export default function Fees() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Overview", route: "/overview" },
  { label: "Packages", route: "/packages" },
  { label: "Fees", route: "/fees" },
  { label: "Contact", route: "/contact" },
] as const;

const { selections } = useLocalSearchParams<{
  selections?: string | string[];
}>();

const selectionData = Array.isArray(selections)
  ? selections[0]
  : selections;

const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

useEffect(() => {
  if (!selectionData) {
    setSelectedItems([]);
    return;
  }

  try {
    const parsed = JSON.parse(selectionData);

    if (Array.isArray(parsed)) {
      setSelectedItems(
        parsed.map((item) => ({
          id: String(item.id),
          title: String(item.title),
          price: Number(item.price),
          quantity: Math.max(1, Number(item.quantity) || 1),
        }))
      );
    } else {
      setSelectedItems([]);
    }
  } catch {
    setSelectedItems([]);
  }
}, [selectionData]);

const hasSelections = selectedItems.length > 0;

const selectedActivityCount = selectedItems.filter((item) =>
  item.id.startsWith("activity-")
).length;

const discountRate = selectedActivityCount > 1 ? 0.1 : 0;

const subtotal = selectedItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const discount = subtotal * discountRate;
const total = subtotal - discount;

function changeQuantity(id: string, change: number) {
  setSelectedItems((current) =>
    current.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + change),
          }
        : item
    )
  );
}

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  

  function formatPrice(amount: number) {
    return "R" + amount.toLocaleString("en-ZA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }


function submitBooking() {
  if (!hasSelections) {
    Alert.alert(
      "No Selections",
      "Please select a package or activity first."
    );
    return;
  }

  if (
    name.trim() === "" ||
    phone.trim() === "" ||
    email.trim() === ""
  ) {
    Alert.alert(
      "Missing Details",
      "Please complete all your details."
    );
    return;
  }

  router.push({
    pathname: "/booking",
    params: {
      selections: JSON.stringify(selectedItems),
      subtotal: String(subtotal),
      discount: String(discount),
      total: String(total),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
    },
  });
}


  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
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
            {/*Diagonal White Edge*/}
            <View style={styles.diagonalEdge} />
            {/* Green Menu Section */}
            <View style={styles.menuSection}>
              <Pressable
                style={styles.menuButton}
                onPress={() => setMenuOpen(!menuOpen)}
                accessibilityRole="button"
                accessibilityLabel={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
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
                  router.push(item.route);
                 }}>
                  <Text style={styles.menuText}>{item.label}</Text>
                </Pressable>
              ))}
           </View>
         )}

          <View style={styles.content}>
           <Text style={styles.pageTitle}>Your Selections</Text>
            <View style={styles.card}>
              <View style={styles.tableHeader}>
                <Text style={[styles.columnTitle, styles.experienceColumn]}>Experience</Text>
                <Text style={[styles.columnTitle, styles.priceColumn]}>Price</Text>
                <Text style={[styles.columnTitle, styles.quantityColumn]}>Quantity</Text>
                <Text style={[styles.columnTitle, styles.totalColumn]}>Total</Text>
              </View>
              {!hasSelections ? (
                <Text style={styles.noSelections}>No selections yet. Please select a package or activity first.</Text>
                ) : (selectedItems.map((item) => (
                <View style={styles.experienceRow} key={item.id}>
                  <Text style={[styles.experienceName, styles.experienceColumn]}>{item.title}</Text>
                  <Text style={[styles.cellText, styles.priceColumn]}>{formatPrice(item.price)}</Text>
                  <View style={[styles.quantityControls, styles.quantityColumn]}>
                    <Text style={styles.quantityButton} onPress={() => changeQuantity(item.id, -1)}>−</Text>
                    <Text style={styles.quantityNumber}>{item.quantity}</Text>
                    <Text style={styles.quantityButton} onPress={() => changeQuantity(item.id, 1)}>+</Text>
                  </View>
                  <Text style={[styles.cellText, styles.totalColumn]}>{formatPrice(item.price * item.quantity)}</Text>
                </View>
              ))
             )}

          {/* DIVIDER */}
          <View style={styles.divider} />

          {/* ORDER SUMMARY */}
          <Text style={styles.summaryTitle}>Order Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>{formatPrice(subtotal)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Discount</Text>
              <Text style={styles.summaryValue}>{discountRate > 0? "10%" : "0%"}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={[styles.summaryLabel, styles.blueText]}>
                Discount Amount
              </Text>
              <Text style={[styles.summaryValue, styles.blueText]}>
                -{formatPrice(discount)}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.finalTotalLabel}>Total</Text>
              <Text style={styles.finalTotalValue}>
                {formatPrice(total)}
              </Text>
            </View>
          </View>

          {/* YOUR DETAILS */}
          <Text style={styles.pageTitle}>Your Details</Text>

          <View style={styles.card}>
            <Text style={styles.inputLabel}>Your name:</Text>
            <TextInput
              style={[styles.input, !hasSelections && styles.disabledInput]}
              placeholder="Enter your full name"
              placeholderTextColor="#777777"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.inputLabel}>Phone number:</Text>
            <TextInput
              style={[styles.input, !hasSelections && styles.disabledInput]}
              placeholder="Enter your phone number"
              placeholderTextColor="#777777"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <Text style={styles.inputLabel}>Email address:</Text>
            <TextInput
              style={[styles.input, !hasSelections && styles.disabledInput]}
              placeholder="Enter your email address"
              placeholderTextColor="#777777"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text
              style={[styles.submitButton, !hasSelections && styles.disabledSubmitButton]}
              onPress={submitBooking}
            >
              Submit Booking Request
            </Text>
          </View>
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

  /* Navigation Bar */
  header: {
    height: 85,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: GREEN,
  },

  brandSection: {
    // flex: 1,
    width: 174,
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
  },

  brandSubtitle: {
    color: BLUE,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
  },

  orangeLine: {
    width: 15,
    height: 2,
    backgroundColor: ORANGE,
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

  content: {
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 35,
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: GREEN,
    marginBottom: 18,
    marginTop: 10,
  },

  card: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 10,
    padding: 12,
    marginBottom: 28,
    elevation: 3,
  },

  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GREEN,
    paddingVertical: 12,
    paddingHorizontal: 3,
    borderRadius: 5,
  },

  columnTitle: {
    color: WHITE,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  experienceColumn: {
    flex: 2.1,
  },

  priceColumn: {
    flex: 1.5,
    textAlign: "center",
  },

  quantityColumn: {
    flex: 2,
  },

  totalColumn: {
    flex: 1.6,
    textAlign: "center",
  },

  experienceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  experienceName: {
    color: CHARCOAL,
    fontSize: 11,
    fontWeight: "600",
  },

  cellText: {
    color: CHARCOAL,
    fontSize: 10,
    textAlign: "center",
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  quantityButton: {
    backgroundColor: ORANGE,
    color: CHARCOAL,
    fontSize: 17,
    fontWeight: "bold",
    width: 23,
    height: 27,
    textAlign: "center",
    textAlignVertical: "center",
    overflow: "hidden",
    borderRadius: 4,
  },

  quantityNumber: {
    color: CHARCOAL,
    fontSize: 12,
    fontWeight: "bold",
    minWidth: 13,
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#D6D6D6",
    marginVertical: 18,
  },

  summaryTitle: {
    color: GREEN,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
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

  blueText: {
    color: BLUE,
  },

  finalTotalLabel: {
    color: GREEN,
    fontSize: 17,
    fontWeight: "bold",
  },

  finalTotalValue: {
    color: GREEN,
    fontSize: 20,
    fontWeight: "bold",
  },

  inputLabel: {
    color: CHARCOAL,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: CHARCOAL,
    backgroundColor: WHITE,
  },

  submitButton: {
    backgroundColor: ORANGE,
    color: CHARCOAL,
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 7,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 25,
    overflow: "hidden",
  },
  noSelections: {
  color: CHARCOAL,
  fontSize: 13,
  textAlign: "center",
  paddingVertical: 25,
},

disabledInput: {
  opacity: 0.45,
  backgroundColor: "#EEEEEE",
},

disabledSubmitButton: {
  opacity: 0.45,
},

});