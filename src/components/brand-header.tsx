import { Href, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const GREEN = "#14532D";
const BLUE = "#0077B6";
const ORANGE = "#D97706";
const WHITE = "#FFFFFF";

export const NAV_MENU_ITEMS: { label: string; route: Href }[] = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Overview", route: "/overview" },
  { label: "Packages", route: "/packages" },
  { label: "Fees", route: "/fees" },
  { label: "Booking", route: "/booking" },
  { label: "Explore", route: "/explore" },
  { label: "Individual", route: "/individual" },
  { label: "FAQs", route: "/privacy" },
  { label: "Privacy", route: "/privacy" },
  { label: "Terms", route: "/terms" },
  { label: "Contact", route: "/contact" },
  { label: "Confirmation", route: "/confirmation" },
];

type BrandHeaderProps = {
  menuOpen?: boolean;
  onMenuPress?: () => void;
};

export function BrandHeader({
  menuOpen = false,
  onMenuPress,
}: BrandHeaderProps) {
  const router = useRouter();
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const isMenuOpen = onMenuPress ? menuOpen : internalMenuOpen;

  const menuIcon = (
    <Image
      source={require("../../assets/images/menu.png")}
      style={styles.menuIcon}
      resizeMode="contain"
    />
  );

  return (
    <>
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
        {onMenuPress ? (
          <Pressable
            style={styles.menuButton}
            onPress={onMenuPress}
            accessibilityRole="button"
            accessibilityLabel={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            accessibilityState={{ expanded: isMenuOpen }}
          >
            {menuIcon}
          </Pressable>
        ) : (
          <Pressable
            style={styles.menuButton}
            onPress={() => setInternalMenuOpen((open) => !open)}
            accessibilityRole="button"
            accessibilityLabel={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            accessibilityState={{ expanded: isMenuOpen }}
          >
            {menuIcon}
          </Pressable>
        )}
      </View>
      </View>
      {!onMenuPress && internalMenuOpen && (
        <View style={styles.dropdown}>
          {NAV_MENU_ITEMS.map((item) => (
            <Pressable
              key={item.label}
              style={styles.dropdownItem}
              onPress={() => {
                setInternalMenuOpen(false);
                router.navigate(item.route);
              }}
              accessibilityRole="link"
            >
              <Text style={styles.dropdownText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  dropdown: {
    backgroundColor: GREEN,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  dropdownItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.2)",
  },
  dropdownText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "500",
  },
});
