import React from "react";

const ResearchObjectives = () => {
  // Custom SVG Icons to replace Lucide React icons
  const LightbulbIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );

  const WavesIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );

  const DollarSignIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );

  const MicIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
    </svg>
  );

  const objectives = [
    {
      title: "CNN-based Food Recognition App",
      icon: <LightbulbIcon color="#ea580c" />,
      text: "Develop a CNN-based mobile application for real-time recognition of Sri Lankan dishes, enabling personalized dietary recommendations to help tourists with health restrictions safely enjoy local cuisine.",
    },
    {
      title: "LSTM-powered Weather Predictor (SeaSense)",
      icon: <WavesIcon color="#2563eb" />,
      text: "Create an LSTM-based weather prediction system (SeaSense) that accurately forecasts coastal weather conditions and provides safe activity recommendations for tourists engaging in beach activities like swimming and surfing.",
    },
    {
      title: "Dynamic Pricing with ML",
      icon: <DollarSignIcon color="#16a34a" />,
      text: "Implement a machine learning-driven dynamic pricing model using Random Forest regression to optimize adventure tourism activity costs, improving pricing efficiency for both operators and tourists.",
    },
    {
      title: "Sinhala Speech Analysis",
      icon: <MicIcon color="#9333ea" />,
      text: "Design a real-time Sinhala speech analysis system using ensemble machine learning models to overcome language barriers by detecting and categorizing spoken content, enhancing communication and safety for tourists.",
    },
  ];

  const styles = {
    section: {
      background:
        "linear-gradient(45deg, #ffffff 0%, #eff6ff 50%, #e0e7ff 100%)",
      padding: "96px 24px",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#111827",
      marginBottom: "32px",
      letterSpacing: "-0.025em",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "1.25rem",
      color: "#6b7280",
      marginBottom: "56px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "40px",
    },
    objectiveCard: {
      backgroundColor: "#ffffff",
      borderLeft: "4px solid #4f46e5",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      borderRadius: "24px",
      padding: "24px",
      display: "flex",
      alignItems: "flex-start",
      gap: "16px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "8px",
    },
    cardText: {
      color: "#6b7280",
      fontSize: "1rem",
      lineHeight: "1.6",
    },
  };

  const handleCardHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.4)";
    } else {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>🎯 Research Objectives</h2>
        <p style={styles.subtitle}>
          Core technical goals driving the development of this research
        </p>
        <div style={styles.grid}>
          {objectives.map((objective, index) => (
            <div
              key={index}
              style={styles.objectiveCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {objective.icon}
              <div>
                <h3 style={styles.cardTitle}>{objective.title}</h3>
                <p style={styles.cardText}>{objective.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectives;
