import React, { type CSSProperties } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const palette = {
  forestGreen: "#14532D",
  oceanBlue: "#0077B6",
  darkOrange: "#D97706",
  white: "#FFFFFF",
  charcoal: "#1F2933",
  lightBg: "#F3F3F3",
};

export default function AdventureAboutPage() {
  const styles: Record<string, CSSProperties> = {
    page: {
      minHeight: "100vh",
      background: palette.lightBg,
      fontFamily: "Arial, Helvetica, sans-serif",
      color: palette.charcoal,
      display: "flex",
      justifyContent: "center",
      padding: "20px 0",
    },
    shell: {
      width: "1180px",
      maxWidth: "calc(100vw - 32px)",
      background: palette.white,
      border: "1px solid #d8d8d8",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.03)",
    },
    topBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: palette.white,
      padding: "14px 20px",
      borderBottom: "1px solid #eaeaea",
    },
    brandWrap: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      minWidth: 260,
    },
    logoCircle: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(180deg, #ffffff 0%, #dfeeea 100%)",
      border: "2px solid #d7e4df",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoMountain: {
      width: 18,
      height: 18,
      position: "absolute",
      bottom: 4,
      left: "50%",
      transform: "translateX(-50%)",
      background: palette.forestGreen,
      clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    },
    logoDot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: palette.darkOrange,
      position: "absolute",
      left: "50%",
      top: 9,
      transform: "translateX(-50%)",
      zIndex: 1,
    },
    brandText: {
      fontWeight: 800,
      fontSize: 13,
      lineHeight: 1.1,
      letterSpacing: 1.2,
      color: palette.forestGreen,
      textTransform: "uppercase",
    },
    brandTextSmall: {
      display: "block",
      fontWeight: 800,
      fontSize: 10,
      letterSpacing: 1.8,
      marginTop: 2,
    },
    navBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: palette.forestGreen,
      padding: "0 18px",
      height: 44,
    },
    navList: {
      display: "flex",
      listStyle: "none",
      gap: "28px",
      margin: 0,
      padding: 0,
      alignItems: "center",
    },
    navItem: {
      color: palette.white,
      fontSize: 13,
      fontWeight: 600,
      textDecoration: "none",
      opacity: 0.98,
    },
    hero: {
      position: "relative",
      height: 200,
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden",
    },
    heroInner: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
    },
    heroTitle: {
      fontSize: 38,
      lineHeight: 1.1,
      fontWeight: 800,
      color: palette.white,
      margin: 0,
    },
    heroTextWrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      textAlign: "left",
      gap: 10,
    },
    heroBadge: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "1.4px",
      textTransform: "uppercase",
      color: palette.white,
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.22)",
      borderRadius: 30,
      padding: "10px 16px",
      whiteSpace: "nowrap",
    },
    content: {
      background: "#f7f7f7",
      padding: "28px 36px 0 36px",
    },
    sectionBlock: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 26,
      marginBottom: 34,
      paddingTop: 8,
    },
    iconCircle: {
      width: 96,
      height: 96,
      minWidth: 96,
      borderRadius: "50%",
      background: palette.forestGreen,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 6,
      boxShadow: "0 8px 22px rgba(20,83,45,0.18)",
    },
    iconText: {
      fontSize: 34,
      color: palette.white,
      fontWeight: 700,
      lineHeight: 1,
    },
    copyWrap: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: 800,
      color: palette.charcoal,
      margin: "0 0 8px 0",
    },
    paragraph: {
      fontSize: 23,
      lineHeight: 1.38,
      color: palette.charcoal,
      fontWeight: 500,
      margin: 0,
      maxWidth: 920,
    },
    footer: {
      background: palette.forestGreen,
      color: palette.white,
      padding: "22px 26px 14px 26px",
    },
    footerInner: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 24,
      paddingBottom: 12,
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    },
    footerBrand: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 220,
    },
    footerLogoCircle: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "linear-gradient(180deg, #ffffff 0%, #dfeeea 100%)",
      border: "2px solid #d7e4df",
      position: "relative",
      overflow: "hidden",
    },
    footerLogoMountain: {
      width: 14,
      height: 14,
      position: "absolute",
      bottom: 3,
      left: "50%",
      transform: "translateX(-50%)",
      background: palette.forestGreen,
      clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    },
    footerLogoDot: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: palette.darkOrange,
      position: "absolute",
      left: "50%",
      top: 7,
      transform: "translateX(-50%)",
      zIndex: 1,
    },
    footerBrandText: {
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: 1.2,
      color: palette.white,
      lineHeight: 1.05,
      textTransform: "uppercase",
    },
    footerBrandTextSmall: {
      display: "block",
      fontWeight: 800,
      fontSize: 9,
      letterSpacing: 1.8,
      marginTop: 2,
      color: palette.white,
    },
    footerColumn: {
      display: "flex",
      flexDirection: "column",
      minWidth: 180,
    },
    footerTitle: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: palette.white,
      marginBottom: 8,
    },
    footerLink: {
      fontSize: 12,
      color: "rgba(255,255,255,0.9)",
      lineHeight: 1.9,
      margin: 0,
    },
    contactText: {
      fontSize: 12,
      color: "rgba(255,255,255,0.95)",
      lineHeight: 1.8,
      margin: 0,
    },
    copyRight: {
      textAlign: "center",
      fontSize: 11,
      color: "rgba(255,255,255,0.8)",
      paddingTop: 12,
      paddingBottom: 4,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <header>
          <div style={styles.topBar}>
            <div style={styles.brandWrap}>
              <div style={styles.logoCircle}>
                <span style={styles.logoMountain} />
                <span style={styles.logoDot} />
              </div>
              <div style={styles.brandText}>
                Adventure
                <span style={styles.brandTextSmall}>Escape SA</span>
              </div>
            </div>
          </div>

          <nav style={styles.navBar}>
            <ul style={styles.navList}>
              <li>
                <a href="#" style={styles.navItem}>Home</a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>About</a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>Overview</a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>Packages</a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>Fees</a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <div style={styles.heroTextWrap}>
              <h1 style={styles.heroTitle}>About Us</h1>
            </div>
            <div style={styles.heroBadge}>Explore. Discover. Experience.</div>
          </div>
        </section>

        <main style={styles.content}>
          <div style={styles.sectionBlock}>
            <div style={styles.iconCircle}>
              <span style={styles.iconText}>⛰</span>
            </div>
            <div style={styles.copyWrap}>
              <h2 style={styles.title}>Our Story</h2>
              <p style={styles.paragraph}>
                Adventure Escape SA was founded with a passion for the outdoors and a desire to share the natural beauty of the Western Cape. We offer unforgettable experiences for individuals, families, schools and corporate groups.
              </p>
            </div>
          </div>

          <div style={styles.sectionBlock}>
            <div style={styles.iconCircle}>
              <span style={styles.iconText}>◎</span>
            </div>
            <div style={styles.copyWrap}>
              <h2 style={styles.title}>Our Mission</h2>
              <p style={styles.paragraph}>
                To provide safe, exciting and sustainable outdoor adventures that create lasting memories and connect people with nature.
              </p>
            </div>
          </div>

          <div style={styles.sectionBlock}>
            <div style={styles.iconCircle}>
              <span style={styles.iconText}>◌</span>
            </div>
            <div style={styles.copyWrap}>
              <h2 style={styles.title}>Our Vision</h2>
              <p style={styles.paragraph}>
                To be the leading adventure provider in South Africa, known for exceptional service, diverse activities and a positive impact on the environment and communities.
              </p>
            </div>
          </div>
        </main>

        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <div style={styles.footerBrand}>
              <div style={styles.footerLogoCircle}>
                <span style={styles.footerLogoMountain} />
                <span style={styles.footerLogoDot} />
              </div>
              <div style={styles.footerBrandText}>
                Adventure
                <span style={styles.footerBrandTextSmall}>Escape SA</span>
              </div>
            </div>

            <div style={styles.footerColumn}>
              <div style={styles.footerTitle}>Quick Links</div>
              <p style={styles.footerLink}>Home</p>
              <p style={styles.footerLink}>Packages</p>
              <p style={styles.footerLink}>About Us</p>
              <p style={styles.footerLink}>Activities</p>
            </div>

            <div style={styles.footerColumn}>
              <div style={styles.footerTitle}>Contact us</div>
              <p style={styles.contactText}>info@adventureescape.co.za</p>
              <p style={styles.contactText}>www.adventureescape.co.za</p>
              <p style={styles.contactText}>+27 21 345 6789</p>
            </div>
          </div>

          <div style={styles.copyRight}>© 2024 Adventure Escape SA. All Rights Reserved.</div>
        </footer>
      </div>
    </div>
  );
}