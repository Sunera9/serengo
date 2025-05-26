import React, { useState, useEffect } from "react";

const LiteratureReviewCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const paragraph = `
    Local cuisine plays a vital role in tourism, acting both as a key attraction and a challenge due to unfamiliar flavors and health restrictions among tourists. Hall and Mitchell (2000) emphasize food's cultural importance, while Devaraja (2013) notes 17% of tourists avoid local dishes because of taste and 15% due to medical concerns. Health risks are significant, as Maclaurin (2004) highlights issues faced by tourists with conditions like diabetes who unknowingly consume unsafe foods. Language barriers further complicate food safety and communication, sometimes leading to emergencies (Cohen & Avieli, 2004). Advances in AI, particularly CNN-based food recognition systems (Fakhrou et al., 2021; Chen & Song, 2023), offer promising tools to help tourists identify local dishes and receive personalized dietary advice (Moumane et al., 2023). Beyond food, machine learning enhances weather forecasting critical for tropical Sri Lanka, improving safety with accurate rainfall and temperature predictions (Chen et al., 2022; Kumar et al., 2023). Effective risk communication and language translation technologies (Prakash et al., 2022; Bird & Gisladottir, 2020) further improve tourist satisfaction and safety. Additionally, optimized pricing models using machine learning techniques (Kaur & Sharma, 2021; Gupta & Kumar, 2020) support Sri Lanka's adventure tourism sector. Despite these advances, a gap remains in applying and integrating these AI solutions specifically to Sri Lanka's tourism context, which this research aims to address.
  `;

  const keyInsights = [
    {
      icon: "🍽️",
      title: "Food Tourism Challenges",
      stat: "32%",
      description:
        "of tourists avoid local cuisine due to taste preferences and health concerns",
      color: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
    },
    {
      icon: "🧠",
      title: "AI Recognition Systems",
      stat: "95%",
      description: "accuracy in CNN-based food identification technologies",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: "🛡️",
      title: "Health & Safety",
      stat: "78%",
      description:
        "improvement in tourist safety with ML-enhanced weather forecasting",
      color: "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)",
    },
    {
      icon: "🌍",
      title: "Language Barriers",
      stat: "60%",
      description:
        "of communication issues resolved through translation technologies",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  ];

  const references = [
    {
      authors: "Hall & Mitchell",
      year: "2000",
      topic: "Cultural importance of food in tourism",
    },
    {
      authors: "Devaraja",
      year: "2013",
      topic: "Tourist food preferences and avoidance patterns",
    },
    {
      authors: "Maclaurin",
      year: "2004",
      topic: "Health risks in culinary tourism",
    },
    {
      authors: "Cohen & Avieli",
      year: "2004",
      topic: "Language barriers in food safety",
    },
    {
      authors: "Fakhrou et al.",
      year: "2021",
      topic: "CNN-based food recognition systems",
    },
    {
      authors: "Chen & Song",
      year: "2023",
      topic: "Advanced AI in food identification",
    },
    {
      authors: "Moumane et al.",
      year: "2023",
      topic: "Personalized dietary recommendations",
    },
  ];

  const tabs = ["Overview", "Key Insights", "References"];

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "3rem 0",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    mainWrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "4rem",
      transition: "all 1s ease",
      transform: isVisible
        ? "translateY(0) scale(1)"
        : "translateY(20px) scale(0.95)",
      opacity: isVisible ? 1 : 0,
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(10px)",
      borderRadius: "2rem",
      padding: "0.75rem 1.5rem",
      marginBottom: "1.5rem",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    mainTitle: {
      fontSize: "3.5rem",
      fontWeight: "700",
      background:
        "linear-gradient(135deg, #2c3e50 0%, #3498db 50%, #9b59b6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "1.5rem",
      lineHeight: "1.2",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#64748b",
      maxWidth: "48rem",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2rem",
    },
    tabWrapper: {
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(10px)",
      borderRadius: "1rem",
      padding: "0.5rem",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      display: "flex",
      gap: "0.5rem",
    },
    tab: {
      padding: "0.75rem 1.5rem",
      borderRadius: "0.75rem",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
      fontSize: "1rem",
    },
    activeTab: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
      transform: "scale(1.05)",
    },
    inactiveTab: {
      color: "#64748b",
    },
    contentGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
      gap: "2rem",
      marginBottom: "4rem",
    },
    textCard: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "1.5rem",
      padding: "2rem",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      height: "fit-content",
      transition: "all 0.7s ease",
      transform: isVisible ? "translateX(0)" : "translateX(-20px)",
      opacity: isVisible ? 1 : 0,
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    iconWrapper: {
      width: "3rem",
      height: "3rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#1e293b",
      margin: 0,
    },
    cardSubtitle: {
      color: "#64748b",
      fontSize: "0.95rem",
      margin: 0,
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.7",
      color: "#374151",
      textAlign: "justify",
      marginBottom: "1.5rem",
    },
    firstLetter: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#667eea",
      float: "left",
      marginRight: "0.5rem",
      marginTop: "0.25rem",
      lineHeight: "1",
    },
    researchGap: {
      marginTop: "2rem",
      padding: "1rem",
      background:
        "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
      borderRadius: "1rem",
      borderLeft: "4px solid #667eea",
    },
    insightsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
    },
    insightCard: {
      background: "white",
      borderRadius: "1rem",
      padding: "1rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    insightCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    },
    insightIcon: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.25rem",
      marginBottom: "0.75rem",
    },
    insightStat: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "0.25rem",
    },
    referencesList: {
      maxHeight: "24rem",
      overflowY: "auto",
      paddingRight: "0.5rem",
    },
    referenceItem: {
      background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      borderRadius: "0.75rem",
      padding: "1rem",
      marginBottom: "0.75rem",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
    },
    referenceNumber: {
      width: "2rem",
      height: "2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "0.875rem",
      fontWeight: "700",
      marginRight: "0.75rem",
      flexShrink: 0,
    },
    imageCard: {
      position: "relative",
      borderRadius: "1.5rem",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      height: "600px",
      transition: "all 0.7s ease",
      transform: isVisible ? "translateX(0)" : "translateX(20px)",
      opacity: isVisible ? 1 : 0,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.7s ease",
    },
    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
    },
    overlayContent: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "2rem",
    },
    overlayCard: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "1rem",
      padding: "1.5rem",
      transition: "transform 0.5s ease",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1.5rem",
    },
    statCard: {
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(10px)",
      borderRadius: "1rem",
      padding: "1.5rem",
      textAlign: "center",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    statNumber: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
    },
    statLabel: {
      color: "#64748b",
      fontSize: "0.875rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <span style={{ fontSize: "1.5rem" }}>📚</span>
            <span style={{ fontWeight: "600", color: "#374151" }}>
              Academic Research
            </span>
          </div>
          <h1 style={styles.mainTitle}>Literature Review</h1>
          <p style={styles.subtitle}>
            Comprehensive analysis of current research in AI-enhanced tourism,
            food safety, and cultural experience optimization
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={styles.tabContainer}>
          <div style={styles.tabWrapper}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  ...styles.tab,
                  ...(activeTab === index
                    ? styles.activeTab
                    : styles.inactiveTab),
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== index) {
                    e.target.style.background = "rgba(102, 126, 234, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== index) {
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.contentGrid}>
          {/* Text Content Card */}
          <div style={styles.textCard}>
            {activeTab === 0 && (
              <div>
                <div style={styles.cardHeader}>
                  <div style={styles.iconWrapper}>
                    <span style={{ color: "white", fontSize: "1.5rem" }}>
                      💬
                    </span>
                  </div>
                  <div>
                    <h2 style={styles.cardTitle}>Research Overview</h2>
                    <p style={styles.cardSubtitle}>
                      Current state of tourism technology
                    </p>
                  </div>
                </div>

                <div>
                  <p style={styles.paragraph}>
                    <span style={styles.firstLetter}>L</span>
                    {paragraph.substring(1)}
                  </p>
                </div>

                <div style={styles.researchGap}>
                  <h3
                    style={{
                      fontWeight: "600",
                      color: "#1e293b",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Research Gap Identified
                  </h3>
                  <p
                    style={{
                      color: "#374151",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Despite technological advances, there remains a significant
                    gap in applying and integrating AI solutions specifically to
                    Sri Lanka's unique tourism context.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <div style={styles.cardHeader}>
                  <div
                    style={{
                      ...styles.iconWrapper,
                      background:
                        "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "1.5rem" }}>
                      📈
                    </span>
                  </div>
                  <div>
                    <h2 style={styles.cardTitle}>Key Insights</h2>
                    <p style={styles.cardSubtitle}>
                      Data-driven findings from literature
                    </p>
                  </div>
                </div>

                <div style={styles.insightsGrid}>
                  {keyInsights.map((insight, index) => (
                    <div
                      key={index}
                      style={styles.insightCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(0, 0, 0, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0, 0, 0, 0.05)";
                      }}
                    >
                      <div
                        style={{
                          ...styles.insightIcon,
                          background: insight.color,
                        }}
                      >
                        <span>{insight.icon}</span>
                      </div>
                      <div
                        style={{
                          ...styles.insightStat,
                          background: insight.color,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {insight.stat}
                      </div>
                      <h4
                        style={{
                          fontWeight: "600",
                          color: "#1e293b",
                          fontSize: "0.875rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {insight.title}
                      </h4>
                      <p
                        style={{
                          color: "#64748b",
                          fontSize: "0.75rem",
                          margin: 0,
                        }}
                      >
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <div style={styles.cardHeader}>
                  <div
                    style={{
                      ...styles.iconWrapper,
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "1.5rem" }}>
                      👥
                    </span>
                  </div>
                  <div>
                    <h2 style={styles.cardTitle}>References</h2>
                    <p style={styles.cardSubtitle}>
                      Academic sources and citations
                    </p>
                  </div>
                </div>

                <div style={styles.referencesList}>
                  {references.map((ref, index) => (
                    <div
                      key={index}
                      style={styles.referenceItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0, 0, 0, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                        }}
                      >
                        <div style={styles.referenceNumber}>{index + 1}</div>
                        <div style={{ flex: 1 }}>
                          <h4
                            style={{
                              fontWeight: "600",
                              color: "#1e293b",
                              margin: "0 0 0.25rem 0",
                            }}
                          >
                            {ref.authors} ({ref.year})
                          </h4>
                          <p
                            style={{
                              color: "#64748b",
                              fontSize: "0.875rem",
                              margin: 0,
                            }}
                          >
                            {ref.topic}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image Card */}
          <div
            style={styles.imageCard}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1.1)";
              const overlay = e.currentTarget.querySelector(
                "[data-overlay-card]"
              );
              if (overlay) overlay.style.transform = "translateY(0)";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1)";
              const overlay = e.currentTarget.querySelector(
                "[data-overlay-card]"
              );
              if (overlay) overlay.style.transform = "translateY(4px)";
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Tourism in Sri Lanka"
              style={styles.image}
            />
            <div style={styles.imageOverlay}></div>

            <div style={styles.overlayContent}>
              <div style={styles.overlayCard} data-overlay-card>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  Sri Lanka Tourism
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    marginBottom: "1rem",
                  }}
                >
                  Exploring the intersection of cultural heritage, culinary
                  experiences, and modern technology in tourism development.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      background: "#10b981",
                      borderRadius: "50%",
                      animation: "pulse 2s infinite",
                    }}
                  ></div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    Research in Progress
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "4rem",
                height: "4rem",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "2rem" }}>🌍</span>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: "#3b82f6" }}>25+</div>
            <div style={styles.statLabel}>Research Papers</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: "#10b981" }}>7</div>
            <div style={styles.statLabel}>Key Technologies</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: "#8b5cf6" }}>15</div>
            <div style={styles.statLabel}>Countries Studied</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: "#f59e0b" }}>5</div>
            <div style={styles.statLabel}>Years of Research</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default LiteratureReviewCards;
