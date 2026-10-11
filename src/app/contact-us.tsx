import React from "react";

const palette = {
  forestGreen: "#14532D",
  oceanBlue: "#0077B6",
  darkOrange: "#D97706",
  white: "#FFFFFF",
  charcoal: "#1F2933",
  lightBg: "#F3F3F3",
  softGray: "#E7E7E7",
  border: "#D8D8D8",
  inputBg: "#F5F5F5",
};

export default function ContactUsPage() {
  const styles: Record<string, React.CSSProperties> = {
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
      border: `1px solid ${palette.border}`,
      boxShadow: "0 0 0 1px rgba(0,0,0,0.02)",
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
    heroTextWrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      textAlign: "left",
      gap: 10,
    },
    heroTitle: {
      fontSize: 46,
      lineHeight: 1.1,
      fontWeight: 800,
      color: palette.white,
      margin: 0,
    },
    heroSubtitle: {
      fontSize: 13,
      color: palette.white,
      marginTop: 8,
      marginBottom: 8,
      lineHeight: 1.2,
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
      padding: "24px 20px 0 20px",
    },
    splitRow: {
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      background: palette.white,
      padding: 0,
    },
    sidePanel: {
      width: 320,
      padding: "14px 18px 0 18px",
      background: palette.white,
    },
    sideTitle: {
      fontSize: 20,
      fontWeight: 800,
      margin: "0 0 16px 0",
      color: palette.charcoal,
      textTransform: "uppercase",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 12,
    },
    infoRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    infoCircle: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: palette.forestGreen,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: palette.white,
      fontSize: 15,
      fontWeight: 700,
      flexShrink: 0,
    },
    infoText: {
      fontSize: 12,
      color: palette.charcoal,
      lineHeight: 1.5,
    },
    infoLabel: {
      fontWeight: 700,
      color: palette.charcoal,
      marginRight: 4,
    },
    mapPreview: {
      position: "relative",
      width: "100%",
      height: 180,
      marginTop: 18,
      borderRadius: 10,
      overflow: "hidden",
      border: `1px solid ${palette.border}`,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    mapPin: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#D14532",
      border: "3px solid rgba(255,255,255,0.8)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    },
    formPanel: {
      flex: 1,
      background: "#f4f4f4",
      padding: "18px 18px 10px 18px",
      minHeight: 600,
    },
    formTitle: {
      fontSize: 26,
      fontWeight: 800,
      color: palette.charcoal,
      margin: "0 0 18px 0",
    },
    formGrid: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    field: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    label: {
      fontSize: 10,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: palette.charcoal,
      fontWeight: 700,
    },
    input: {
      width: "100%",
      border: "1px solid #dfe3e8",
      borderRadius: 4,
      background: palette.inputBg,
      padding: "10px 12px",
      fontSize: 14,
      color: palette.charcoal,
      outline: "none",
    },
    textarea: {
      resize: "vertical",
      minHeight: 110,
      width: "100%",
      border: "1px solid #dfe3e8",
      borderRadius: 4,
      background: palette.inputBg,
      padding: "10px 12px",
      fontSize: 14,
      color: palette.charcoal,
      outline: "none",
    },
    select: {
      width: "100%",
      border: "1px solid #dfe3e8",
      borderRadius: 4,
      background: palette.inputBg,
      padding: "10px 12px",
      fontSize: 14,
      color: palette.charcoal,
      outline: "none",
    },
    submitWrap: {
      display: "flex",
      justifyContent: "center",
      marginTop: 18,
    },
    submitBtn: {
      background: palette.forestGreen,
      color: palette.white,
      border: "none",
      borderRadius: 4,
      padding: "12px 24px",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    mapLarge: {
      position: "relative",
      width: "100%",
      height: 170,
      marginTop: 18,
      overflow: "hidden",
      borderRadius: 0,
      border: `1px solid ${palette.border}`,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    mapPinLarge: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "#D14532",
      border: "3px solid rgba(255,255,255,0.8)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
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
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(180deg, #ffffff 0%, #dfeeea 100%)",
      border: "2px solid #d7e4df",
      position: "relative",
      overflow: "hidden",
    },
    footerLogoMountain: {
      width: 16,
      height: 16,
      position: "absolute",
      bottom: 3,
      left: "50%",
      transform: "translateX(-50%)",
      background: palette.forestGreen,
      clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    },
    footerLogoDot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: palette.darkOrange,
      position: "absolute",
      left: "50%",
      top: 8,
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
                <span style={styles.logoMountain}></span>
                <span style={styles.logoDot}></span>
              </div>

              <div style={styles.brandText}>
                Adventure
                <span style={styles.brandTextSmall}>Escape SA</span>
              </div>
            </div>
          </div>

          <nav style={styles.navBar} aria-label="Main navigation">
            <ul style={styles.navList}>
              <li>
                <a href="#" style={styles.navItem}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>
                  About
                </a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>
                  Overview
                </a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>
                  Packages
                </a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>
                  Fees
                </a>
              </li>
              <li>
                <a href="#" style={styles.navItem}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <div style={styles.heroTextWrap}>
              <h1 style={styles.heroTitle}>Contact Us</h1>
              <div style={styles.heroSubtitle}>
                Plan your next adventure with us. We&apos;re here to help!
              </div>
            </div>

            <div style={styles.heroBadge}>
              Explore. Discover. Experience.
            </div>
          </div>
        </section>

        <main style={styles.content}>
          <div style={styles.splitRow}>
            <aside style={styles.sidePanel}>
              <h3 style={styles.sideTitle}>Get in touch</h3>

              <div style={styles.contactInfo}>
                <div style={styles.infoRow}>
                  <div style={styles.infoCircle}>☎</div>
                  <div style={styles.infoText}>
                    <div style={styles.infoLabel}>Phone</div>
                    +27 21 345 6789
                  </div>
                </div>

                <div style={styles.infoRow}>
                  <div style={styles.infoCircle}>✉</div>
                  <div style={styles.infoText}>
                    <div style={styles.infoLabel}>Email</div>
                    info@adventureescape.co.za
                  </div>
                </div>

                <div style={styles.infoRow}>
                  <div style={styles.infoCircle}>⌖</div>
                  <div style={styles.infoText}>
                    <div style={styles.infoLabel}>Location</div>
                    Western Cape, South Africa
                  </div>
                </div>
              </div>

              <div style={styles.mapPreview}>
                <div style={styles.mapPin}></div>
              </div>
            </aside>

            <section style={styles.formPanel}>
              <h3 style={styles.formTitle}>Request A Quote</h3>

              <div style={styles.formGrid}>
                <div style={styles.field}>
                  <label style={styles.label}>Name</label>
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="[NAME]"
                    aria-label="Name"
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Email</label>
                  <input
                    style={styles.input}
                    type="email"
                    placeholder="[EMAIL]"
                    aria-label="Email"
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Phone</label>
                  <input
                    style={styles.input}
                    type="tel"
                    placeholder="[PHONE]"
                    aria-label="Phone"
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Package / Activity</label>
                  <select style={styles.select} aria-label="Package / Activity">
                    <option>[PACKAGE / ACTIVITY]</option>
                    <option>Hiking</option>
                    <option>Safari</option>
                    <option>Adventure Tours</option>
                    <option>Corporate Events</option>
                  </select>
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Date</label>
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="[DATE]"
                    aria-label="Date"
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Message</label>
                  <textarea
                    style={styles.textarea}
                    placeholder="[MESSAGE]"
                    aria-label="Message"
                  />
                </div>
              </div>

              <div style={styles.submitWrap}>
                <button type="button" style={styles.submitBtn}>
                  Submit Quote Request
                </button>
              </div>

              <div style={{ marginTop: 18 }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
                  Our Location
                </div>
                <div style={styles.mapLarge}>
                  <div style={styles.mapPinLarge}></div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <div style={styles.footerBrand}>
              <div style={styles.footerLogoCircle}>
                <span style={styles.footerLogoMountain}></span>
                <span style={styles.footerLogoDot}></span>
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
              <p style={styles.footerLink}>Contact</p>
            </div>

            <div style={styles.footerColumn}>
              <div style={styles.footerTitle}>Contact us</div>
              <p style={styles.contactText}>info@adventureescape.co.za</p>
              <p style={styles.contactText}>www.adventureescape.co.za</p>
              <p style={styles.contactText}>+27 21 345 6789</p>
            </div>
          </div>

          <div style={styles.copyRight}>
            © 2024 Adventure Escape SA. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}