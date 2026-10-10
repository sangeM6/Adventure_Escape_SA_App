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

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
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

      {/* Home Page Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <ImageBackground
            source={require("../../assets/images/hero.png")}
            style={styles.hero}
            imageStyle={styles.heroImage}
          >
            <View>
              <Text style={styles.heroTitle}>EXPLORE. DISCOVER.</Text>
              <Text style={styles.heroSubtitle}>EXPERIENCE</Text>
              <Text style={styles.heroDescription}>
                Adventure Escape SA offers exciting outdoor {"\n"}
                adventures throughout the Western Cape.
              </Text>

              <Pressable style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Explore Packages</Text>
              </Pressable>

              <Pressable style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Get a Quotation</Text>
              </Pressable>
            </View>
          </ImageBackground>
          {/* Features Section */}
          <View style={styles.featuresSection}>
            {/* Feature 1 */}
            <View style={styles.feature}>
              <Image
                source={require("../../assets/images/mountain (2).png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />

              <Text style={styles.natureTitle}>NATURE</Text>

              <Text style={styles.natureDescription}>
                {" "}
                Experience the beauty of the great outdoors.
              </Text>
            </View>
            <View style={styles.featureDivider} />

            {/* Feature 2 */}
            <View style={styles.feature}>
              <Image
                source={require("../../assets/images/wave.png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.adventureTitle}>ADVENTURE</Text>
              <Text style={styles.adventureDescription}>
                Thrilling activities for every adventure.
              </Text>
            </View>
            <View style={styles.featureDivider} />
            {/* Feature 3 */}
            <View style={styles.feature}>
              <Image
                source={require("../../assets/images/multiple-users-silhouette (1).png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.groupsTitle}>GROUPS</Text>
              <Text style={styles.groupsDescription}>
                Perfect for schools, corporate & families.
              </Text>
            </View>
            <View style={styles.featureDivider} />

            {/* Feature 4 */}
            <View style={styles.feature}>
              <Image
                source={require("../../assets/images/security.png")}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.reliableTitle}>SAFE & RELIABLE</Text>

              <Text style={styles.reliableDescription}>
                Your safety is our top priority.
              </Text>
            </View>
          </View>
          <View style={styles.activitiesSection}>
          <Text style={styles.activitiesHeading}>OUR ACTIVITIES</Text>
  <Text style={styles.activitiesSubtitle}>
    CHOOSE YOUR ADVENTURE
  </Text>

  <View style={styles.activitiesUnderline} />

  <View style={styles.activitiesGrid}>
    <View style={styles.activityCard}>
      <Image
        source={require("../../assets/images/hiking.jpg")}
        style={styles.activityImage}
        resizeMode="cover"
      />

      <View style={styles.activityIcon}>
        <Image
          source={require("../../assets/images/hiking-icon.png")}
          style={styles.activityIconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.activityTitle}>HIKING</Text>
    </View>

    <View style={styles.activityCard}>
      <Image
        source={require("../../assets/images/kayaking.jpg")}
        style={styles.activityImage}
        resizeMode="cover"
      />

      <View style={styles.activityIcon}>
        <Image
          source={require("../../assets/images/canoeing.png")}
          style={styles.activityIconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.activityTitle}>KAYAKING</Text>
    </View>

    <View style={styles.activityCard}>
      <Image
        source={require("../../assets/images/ziplining.jpg")}
        style={styles.activityImage}
        resizeMode="cover"
      />

      <View style={styles.activityIcon}>
        <Image
          source={require("../../assets/images/zipline (1).png")}
          style={styles.activityIconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.activityTitle}>ZIPLINING</Text>
    </View>

    <View style={styles.activityCard}>
      <Image
        source={require("../../assets/images/climbing.jpg")}
        style={styles.activityImage}
        resizeMode="cover"
      />

      <View style={styles.activityIcon}>
        <Image
          source={require("../../assets/images/bouldering.png")}
          style={styles.activityIconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.activityTitle}>ROCK CLIMBING</Text>
    </View>

    <View style={styles.activityCard}>
      <Image
        source={require("../../assets/images/penguins.jpg")}
        style={styles.activityImage}
        resizeMode="cover"
      />

      <View style={styles.activityIcon}>
        <Image
          source={require("../../assets/images/wave.png")}
          style={styles.activityIconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.activityTitle}>BEACH</Text>
    </View>
  </View>
</View>
</View>
              {/* Why Choose Us Section */}
        <View style={styles.whyChooseUsSection}>
          {/* Introduction */}
          <View style={styles.whyChooseUsIntro}>
            <Text style={styles.whyChooseUsHeading}>
              WHY CHOOSE US?
            </Text>

            <Text style={styles.whyChooseUsIntroText}>
              We create unforgettable experiences that connect people with
              nature while ensuring safety, fun and lasting memories.
            </Text>
          </View>

          {/* Orange Divider */}
          <View style={styles.whyChooseUsDivider} />

          {/* Four Benefits */}
          <View style={styles.whyChooseUsBenefits}>
            {/* Experienced Guides */}
            <View style={styles.whyChooseUsBenefit}>
              <Image
                source={require("../../assets/images/multiple-users-silhouette.png")}
                style={styles.whyChooseUsIcon}
                resizeMode="contain"
              />

              <Text style={styles.whyChooseUsCardTitle}>
                EXPERIENCED GUIDES
              </Text>

              <Text style={styles.whyChooseUsCardText}>
                Trained professionals passionate about the outdoors.
              </Text>
            </View>

            {/* Quality Service */}
            <View style={styles.whyChooseUsBenefit}>
              <Image
                source={require("../../assets/images/medal.png")}
                style={styles.whyChooseUsIcon}
                resizeMode="contain"
              />

              <Text style={styles.whyChooseUsCardTitle}>
                QUALITY SERVICE
              </Text>

              <Text style={styles.whyChooseUsCardText}>
                We deliver the best adventure experiences for every client.
              </Text>
            </View>

            {/* Local Expertise */}
            <View style={styles.whyChooseUsBenefit}>
              <Image
                source={require("../../assets/images/location.png")}
                style={styles.whyChooseUsIcon}
                resizeMode="contain"
              />

              <Text style={styles.whyChooseUsCardTitle}>
                LOCAL EXPERTISE
              </Text>

              <Text style={styles.whyChooseUsCardText}>
                We know the Western Cape like no one else.
              </Text>
            </View>

            {/* Custom Packages */}
            <View style={styles.whyChooseUsBenefit}>
              <Text style={styles.whyChooseUsHeart}>♥</Text>

              <Text style={styles.whyChooseUsCardTitle}>
                CUSTOM PACKAGES
              </Text>

              <Text style={styles.whyChooseUsCardText}>
                Tailored experiences for your group’s unique needs.
              </Text>
            </View>
          </View>
        </View>

      {/* Footer */}
<View style={styles.footer}>
  {/* Brand Column */}
  <View style={styles.footerBrandColumn}>
    <View style={styles.footerBrandRow}>
      <Image
        source={require("../../assets/images/logo.jpg")}
        style={styles.footerLogo}
        resizeMode="contain"
      />

      <View style={styles.footerBrandTextBlock}>
        <Text style={styles.footerBrandName}>
          ADVENTURE
        </Text>

        <View style={styles.footerBrandSubtitleRow}>
          <View style={styles.footerOrangeLine} />

          <Text style={styles.footerBrandSubtitle}>
            ESCAPE SA
          </Text>

          <View style={styles.footerOrangeLine} />
        </View>
      </View>
    </View>

    <Text style={styles.footerTagline}>
      Explore. Discover. Experience.
    </Text>
  </View>

  {/* Divider */}
  <View style={styles.footerVerticalDivider} />

  {/* Quick Links */}
  <View style={styles.footerLinksColumn}>
    <Text style={styles.footerHeading}>
      QUICK LINKS
    </Text>

    {menuItems.map((item) => (
      <Pressable
        key={item.label}
        style={styles.footerLinkButton}
        onPress={() => router.push(item.route as Href)}
      >
        <Text style={styles.footerLink}>
          {item.label}
        </Text>
      </Pressable>
    ))}
  </View>

  {/* Divider */}
  <View style={styles.footerVerticalDivider} />

  {/* Contact Us */}
  <View style={styles.footerContactColumn}>
    <Text style={styles.footerHeading}>
      CONTACT US
    </Text>

    <View style={styles.footerContactRow}>
      <Image
        source={require("../../assets/images/phone-call.png")}
        style={styles.footerContactIcon}
        resizeMode="contain"
      />

      <Text style={styles.footerText}>
        +27 12 345 6789
      </Text>
    </View>

    <View style={styles.footerContactRow}>
      <Image
        source={require("../../assets/images/email.png")}
        style={styles.footerContactIcon}
        resizeMode="contain"
      />

      <Text style={styles.footerText}>
        info@adventureescapesa.co.za
      </Text>
    </View>

    <View style={styles.footerContactRow}>
      <Image
        source={require("../../assets/images/location.png")}
        style={styles.footerContactIcon}
        resizeMode="contain"
      />

      <Text style={styles.footerText}>
        Western Cape, South Africa
      </Text>
    </View>
  </View>

  {/* Copyright */}
  <View style={styles.footerBottom}>
    <View style={styles.footerDivider} />

    <Text style={styles.footerCopyright}>
      © Adventure Escape SA. All rights reserved.
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
  width: 150,
  backgroundColor: WHITE,
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: 6,
  // gap: 4,
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

  /* Home Page */
  content: {
    flexGrow: 1,
    padding: 0,
  },

  // hero: {
  //   // flex: 1,
  //   height: 320,
  //   width: "100%",
  //   overflow: "hidden",
  // },

  eyebrow: {
    color: ORANGE,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 12,
  },

  heroTitle: {
    color: WHITE,
    fontSize: 20,

    fontWeight: "900",
    marginBottom: 14,
    alignSelf: "flex-end",
    width: "55%",
    paddingHorizontal: 16,
    paddingTop: 60,
  },

  heroDescription: {
    color: WHITE,
    fontSize: 12,
    lineHeight: 24,
    marginBottom: 24,
    alignSelf: "flex-end",
  },

  primaryButton: {
    backgroundColor: ORANGE,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },

  primaryButtonText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "700",
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: WHITE,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "700",
  },
  diagonalEdge: {
  position: "absolute",
  left: 148,
  top: 0,
  width: 32,
  height: 85,
  backgroundColor: WHITE,
  transform: [{ skewX: "-18deg" }],
  zIndex: 2,
},
  heroImage: {
    resizeMode: "cover",
  },

  heroSubtitle: {
    color: ORANGE,
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "flex-end",
    paddingHorizontal: 80,
  },
  /* Features Section */
  featuresSection: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 8,
    backgroundColor: WHITE,
  },

  feature: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  featureIcon: {
    width: 32,
    height: 31,
    marginBottom: 10,
  },

  natureTitle: {
    color: GREEN,
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
    height: 28,
    textAlignVertical: "center",
  
  },

  natureDescription: {
    color: CHARCOAL,
    fontSize: 10,
    textAlign: "center",
  },
  adventureTitle: {
    color: BLUE,
    fontSize: 10,
    textAlign: "center",
    height: 28,
    fontWeight: "800",
    textAlignVertical: "center",
    marginBottom: 6,
  },
  adventureDescription: {
    color: CHARCOAL,
    fontSize: 10,
    textAlign: "center",
  },
  groupsTitle: {
    color: ORANGE,
    fontSize: 10,
    textAlign: "center",
    height: 28,
    fontWeight: "800",
    textAlignVertical: "center",
    marginBottom: 6,    
  },
  groupsDescription: {
    color:CHARCOAL,
    fontSize:10,
    textAlign:'center',

  },
  reliableTitle: {
    color:GREEN,
    fontSize:10,
    textAlign:'center',
    height: 28,
    fontWeight: "800",
    textAlignVertical: "center",
    marginBottom: 6,
  },
  reliableDescription: {
    color:CHARCOAL,
    fontSize:10,
    textAlign:'center',
  },


  featureDivider: {
    width: 1,
    backgroundColor: CHARCOAL,
    marginVertical: 3,
  },

activitiesHeading: {
  color: "#14532D",
  fontSize: 14,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 10,
},

activitiesSubtitle: {
  color: "#1F2933",
  fontSize: 18,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 12,
},

activitiesUnderline: {
  width: 100,
  height: 4,
  backgroundColor: "#F4A261",
  alignSelf: "center",
  marginBottom: 30,
},

activitiesGrid: {
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},

activityCard: {
  width: "31.5%",
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  marginBottom: 20,
  borderRadius: 6,
  elevation: 3,
  shadowColor: "#000000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.12,
  shadowRadius: 4,
},
activityImage: {
  width: "100%",
  height: 100,
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
},

activityIcon: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -21,
  zIndex: 1,
},
activityIconImage: {
  width: 24,
  height: 24,
},

activityTitle: {
  color: "#14532D",
  fontSize: 9,
  fontWeight: "800",
  textAlign: "center",
  marginTop: 10,
  marginBottom: 18,
  paddingHorizontal: 2,
},
/* Why Choose Us Section */
whyChooseUsSection: {
  backgroundColor: WHITE,
  paddingVertical: 30,
  paddingHorizontal: 16,
  alignItems: "center",
},

whyChooseUsHeading: {
  color: GREEN,
  fontSize: 14,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 10,
},

whyChooseUsSubtitle: {
  color: CHARCOAL,
  fontSize: 17,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 12,
},

whyChooseUsUnderline: {
  width: 80,
  height: 4,
  backgroundColor: ORANGE,
  marginBottom: 22,
},

whyChooseUsCards: {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 12,
},

whyChooseUsCard: {
  flex: 1,
  backgroundColor: WHITE,
  alignItems: "center",
  paddingVertical: 18,
  paddingHorizontal: 10,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#DEF1F5",
  elevation: 2,
  shadowColor: "#000000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
},

whyChooseUsIcon: {
  width: 42,
  height: 42,
  marginBottom: 12,
},

whyChooseUsCardTitle: {
  color: GREEN,
  fontSize: 11,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 8,
},

whyChooseUsCardText: {
  color: CHARCOAL,
  fontSize: 11,
  lineHeight: 16,
  textAlign: "center",
},
  /* Footer */
  footer: {
    backgroundColor: GREEN,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 18,
  },

  footerColumn: {
    width: "22%",
    marginBottom: 25,
  },

 footerBrandRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,

},

footerLogo: {
  width: 30,
  height: 30,
  backgroundColor: WHITE,
  marginRight: 5,

},
footerBrandTextBlock: {
  flex: 1,
  alignItems: "flex-start",

},

 footerBrandName: {
  color: WHITE,
  fontSize: 10,
  fontWeight: "800",
  lineHeight: 12,

},

  footerTagline: {
    color: WHITE,
    fontSize: 10,
    lineHeight: 15,
  },

  footerHeading: {
    color: WHITE,
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 14,
  },

  footerLinkButton: {
    marginBottom: 9,
  },

  footerLink: {
    color: WHITE,
    fontSize: 10,
    lineHeight: 15,
  },


footerBrandSubtitleRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  alignSelf: "flex-start",

},

  footerVerticalDivider: {
    width: 1,
    minHeight: 130,
    backgroundColor: WHITE,
    opacity: 0.7,
    marginHorizontal: 3,
  },

  footerContactRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
    gap: 6,
  },

  footerContactIcon: {
    width: 15,
    height: 15,
    marginTop: 1,
  },

  footerText: {
    color: WHITE,
    fontSize: 9,
    lineHeight: 14,
    flexShrink: 1,
  },

  newsletterForm: {
    marginTop: 12,
    gap: 8,
  },

  newsletterInputBox: {
    minHeight: 35,
    backgroundColor: WHITE,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: "center",
  },

  newsletterPlaceholder: {
    color: "#666666",
    fontSize: 9,
  },

  newsletterButton: {
    backgroundColor: ORANGE,
    minHeight: 35,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  newsletterButtonText: {
    color: CHARCOAL,
    fontSize: 10,
    fontWeight: "800",
  },

  footerBottom: {
    width: "100%",
    marginTop: 2,
  },

  footerDivider: {
    width: "100%",
    height: 1,
    backgroundColor: WHITE,
    opacity: 0.7,
    marginBottom: 12,
  },

  footerCopyright: {
    color: WHITE,
    fontSize: 9,
    textAlign: "center",
    lineHeight: 14,
  },
  /* Why Choose Us Section */
whyChooseUsSection: {
  width: "100%",
  backgroundColor: WHITE,
  paddingHorizontal: 10,
  paddingVertical: 14,
  flexDirection: "row",
  alignItems: "center",
},

whyChooseUsIntro: {
  width: "25%",
  paddingRight: 5,
},

whyChooseUsHeading: {
  color: GREEN,
  fontSize: 10,
  fontWeight: "800",
  textAlign: "left",
  marginBottom: 8,
},

whyChooseUsIntroText: {
  color: CHARCOAL,
  fontSize: 8,
  lineHeight: 11,
},

whyChooseUsDivider: {
  width: 3,
  height: 88,
  backgroundColor: ORANGE,
  marginHorizontal: 5,
  transform: [{ rotate: "-2deg" }],
},

whyChooseUsBenefits: {
  flex: 1,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
},

whyChooseUsBenefit: {
  width: "25%",
  alignItems: "center",
  paddingHorizontal: 2,
},

whyChooseUsIcon: {
  width: 24,
  height: 24,
  marginBottom: 3,
  tintColor: GREEN,
},

whyChooseUsHeart: {
  height: 24,
  color: GREEN,
  fontSize: 24,
  lineHeight: 26,
  marginBottom: 3,
},

whyChooseUsCardTitle: {
  color: GREEN,
  fontSize: 7,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 2,
},

whyChooseUsCardText: {
  color: CHARCOAL,
  fontSize: 7,
  lineHeight: 9,
  textAlign: "center",
},

  /* Footer */
  footer: {
    width: "100%",
    backgroundColor: GREEN,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 8,
  },

  footerBrandColumn: {
    width: "24%",
    paddingRight: 5,
  },

  footerBrandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  footerLogo: {
    width: 38,
    height: 38,
    backgroundColor: WHITE,
    marginRight: 4,
  },

  footerBrandTextBlock: {
    flex: 1,
    alignItems: "center",
  },

  footerBrandName: {
    color: WHITE,
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 15,
  },

  footerBrandSubtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  footerBrandSubtitle: {
    color: BLUE,
    fontSize: 9,
    fontWeight: "800",
  },

  footerOrangeLine: {
    width: 12,
    height: 3,
    backgroundColor: ORANGE,
  },

  footerTagline: {
    color: WHITE,
    fontSize: 10,
    lineHeight: 14,
  },

  footerVerticalDivider: {
    width: 1,
    height: 105,
    backgroundColor: WHITE,
    opacity: 0.65,
    marginHorizontal: 4,
  },

  footerLinksColumn: {
    width: "13%",
  },

  footerContactColumn: {
    width: "27%",
  },

  footerNewsletterColumn: {
    width: "29%",
    alignItems: "center",
  },

  footerHeading: {
    color: WHITE,
    fontSize: 11,
    fontWeight: "800",
    marginBottom: 6,
  },

  footerLinkButton: {
    marginBottom: 1,
  },

  footerLink: {
    color: WHITE,
    fontSize: 9,
    lineHeight: 11,
  },

  footerContactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
    gap: 5,
  },

  footerContactIcon: {
    width: 14,
    height: 14,
    tintColor: WHITE,
  },

  footerText: {
    color: WHITE,
    fontSize: 8,
    lineHeight: 11,
    flexShrink: 1,
  },

  footerNewsletterText: {
    color: WHITE,
    fontSize: 9,
    textAlign: "center",
    marginBottom: 9,
  },

  footerNewsletterRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  footerNewsletterInput: {
    flex: 1,
    minHeight: 36,
    backgroundColor: WHITE,
    justifyContent: "center",
    paddingHorizontal: 6,
  },

  footerNewsletterPlaceholder: {
    color: CHARCOAL,
    fontSize: 10,
  },

  footerNewsletterButton: {
    minHeight: 36,
    backgroundColor: "#D97706",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  footerNewsletterButtonText: {
    color: WHITE,
    fontSize: 9,
    fontWeight: "800",
  },

  footerBottom: {
    width: "100%",
    marginTop: 8,
  },

  footerDivider: {
    width: "100%",
    height: 1,
    backgroundColor: WHITE,
    opacity: 0.7,
    marginBottom: 6,
  },

  footerCopyright: {
    color: WHITE,
    fontSize: 8,
    textAlign: "center",
  },
});
