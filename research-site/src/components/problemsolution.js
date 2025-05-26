import React from "react";

const ResearchSection = () => {
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

  const WarningIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  const MapIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );

  const ShieldIcon = ({ color, size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  );

  const problems = [
    {
      title: "Food Safety & Quality",
      icon: <WarningIcon color="#ef4444" />,
      text: "What steps can be taken to ensure the safety and quality of food provided to tourists, mitigating health risks and enhancing their experience?",
    },
    {
      title: "Navigation Challenges",
      icon: <MapIcon color="#3b82f6" />,
      text: "How can tourists navigate to destinations not available on Google Maps or other standard navigation tools?",
    },
    {
      title: "Tourist Scams",
      icon: <ShieldIcon color="#eab308" />,
      text: "What measures can be implemented to protect tourists from scams and fraudulent activities?",
    },
    {
      title: "Hate Speech Impact",
      icon: <WarningIcon color="#a855f7" />,
      text: "How does hate speech impact tourists and the overall image of Sri Lanka, and what strategies can be developed to mitigate its effects?",
    },
  ];

  const solutions = [
    {
      title: "AI-based Food Recommendation",
      icon: <LightbulbIcon color="#16a34a" />,
      text: "Develop AI-powered food recognition apps that provide personalized dietary recommendations based on health conditions and local cuisine ingredients.",
    },
    {
      title: "AR and Community Maps",
      icon: <MapIcon color="#0d9488" />,
      text: "Use AR-based navigation and community-driven mapping to assist tourists in reaching locations not listed on mainstream platforms.",
    },
    {
      title: "Smart Fraud Detection",
      icon: <ShieldIcon color="#ea580c" />,
      text: "Deploy machine learning fraud detection systems to identify and alert users about scam patterns and unverified vendors.",
    },
    {
      title: "Hate Speech Moderation",
      icon: <WarningIcon color="#ec4899" />,
      text: "Implement real-time NLP-based hate speech detection and moderation tools on tourism forums and platforms to promote a safer digital environment.",
    },
  ];

  const styles = {
    section: {
      background:
        "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #e0e7ff 100%)",
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
      marginBottom: "96px",
    },
    problemCard: {
      backgroundColor: "#ffffff",
      borderLeft: "4px solid #2563eb",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      borderRadius: "24px",
      padding: "24px",
      display: "flex",
      alignItems: "flex-start",
      gap: "16px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    solutionCard: {
      backgroundColor: "#eef2ff",
      borderLeft: "4px solid #16a34a",
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
    problemText: {
      color: "#6b7280",
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    solutionText: {
      color: "#374151",
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    solutionGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "40px",
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
        {/* Research Problems Section */}
        <h2 style={styles.title}>🚧 Research Problems</h2>
        <p style={styles.subtitle}>
          Key challenges faced by tourists in Sri Lanka
        </p>

        <div style={styles.grid}>
          {problems.map((problem, index) => (
            <div
              key={index}
              style={styles.problemCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {problem.icon}
              <div>
                <h3 style={styles.cardTitle}>{problem.title}</h3>
                <p style={styles.problemText}>{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Proposed Solutions Section */}
        <h2 style={styles.title}>💡 Proposed Solutions</h2>
        <p style={styles.subtitle}>
          Innovative approaches to overcome these issues
        </p>

        <div style={styles.solutionGrid}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={styles.solutionCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {solution.icon}
              <div>
                <h3 style={styles.cardTitle}>{solution.title}</h3>
                <p style={styles.solutionText}>{solution.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
