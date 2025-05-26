import React from "react";

const TechnologiesSection = () => {
  const technologies = [
    // Frontend
    { name: "React.js", category: "Frontend", color: "#61dafb", bgColor: "rgba(97, 218, 251, 0.1)" },
    { name: "Tailwind CSS", category: "Frontend", color: "#06b6d4", bgColor: "rgba(6, 182, 212, 0.1)" },
    { name: "HTML5", category: "Frontend", color: "#e34f26", bgColor: "rgba(227, 79, 38, 0.1)" },
    { name: "CSS3", category: "Frontend", color: "#1572b6", bgColor: "rgba(21, 114, 182, 0.1)" },
    // Backend
    { name: "Python Flask", category: "Backend", color: "#ff6b6b", bgColor: "rgba(255, 107, 107, 0.1)" },
    { name: "REST API", category: "Backend", color: "#4ecdc4", bgColor: "rgba(78, 205, 196, 0.1)" },
    { name: "JWT Auth", category: "Backend", color: "#ff9f43", bgColor: "rgba(255, 159, 67, 0.1)" },
    // ML/AI
    { name: "YOLOv5", category: "ML/AI", color: "#a55eea", bgColor: "rgba(165, 94, 234, 0.1)" },
    { name: "LSTM", category: "ML/AI", color: "#26de81", bgColor: "rgba(38, 222, 129, 0.1)" },
    { name: "Random Forest", category: "ML/AI", color: "#fd79a8", bgColor: "rgba(253, 121, 168, 0.1)" },
    { name: "Ensemble Voting", category: "ML/AI", color: "#6c5ce7", bgColor: "rgba(108, 92, 231, 0.1)" },
    // Storage
    { name: "AWS S3", category: "Storage", color: "#ff7675", bgColor: "rgba(255, 118, 117, 0.1)" },
    { name: "CSV/JSON", category: "Storage", color: "#fdcb6e", bgColor: "rgba(253, 203, 110, 0.1)" },
    { name: "In-memory", category: "Storage", color: "#74b9ff", bgColor: "rgba(116, 185, 255, 0.1)" },
    // Cloud
    { name: "AWS EC2", category: "Cloud", color: "#fd79a8", bgColor: "rgba(253, 121, 168, 0.1)" },
    { name: "AWS Transcribe", category: "Cloud", color: "#00b894", bgColor: "rgba(0, 184, 148, 0.1)" },
    { name: "CI/CD", category: "Cloud", color: "#e17055", bgColor: "rgba(225, 112, 85, 0.1)" },
    // Tools
    { name: "FastText", category: "Tools", color: "#00cec9", bgColor: "rgba(0, 206, 201, 0.1)" },
    { name: "SMOTE", category: "Tools", color: "#a29bfe", bgColor: "rgba(162, 155, 254, 0.1)" },
    { name: "Scikit-learn", category: "Tools", color: "#55a3ff", bgColor: "rgba(85, 163, 255, 0.1)" },
    { name: "Pandas", category: "Tools", color: "#ff6b9d", bgColor: "rgba(255, 107, 157, 0.1)" },
    { name: "NumPy", category: "Tools", color: "#feca57", bgColor: "rgba(254, 202, 87, 0.1)" },
  ];

  const TechIcon = ({ color }) => (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
      }}
    >
      <svg width="12" height="12" fill="white" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );

  const CategoryIcon = ({ category, color }) => {
    const iconProps = {
      stroke: color,
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      width: 20,
      height: 20,
    };

    switch (category) {
      case "Frontend":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "Backend":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
          </svg>
        );
      case "ML/AI":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "Storage":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="m21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case "Cloud":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
          </svg>
        );
      case "Tools":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return <TechIcon color={color} />;
    }
  };

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, #f8fafc, #dbeafe, #bfdbfe)",
        padding: "4rem 1rem",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(96, 165, 250, 0.3), transparent)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(129, 140, 248, 0.3), transparent)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(6px)",
              padding: "8px 16px",
              borderRadius: 40,
              marginBottom: 16,
              boxShadow: "0 8px 16px rgb(203 213 225 / 0.4)",
              fontWeight: "600",
              color: "#2563eb",
              fontSize: 16,
            }}
          >
            {/* Icon */}
            <svg
              style={{ width: 20, height: 20 }}
              fill="none"
              stroke="#2563eb"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Tech Stack
          </div>

          <h2
            style={{
              fontSize: 48,
              fontWeight: "700",
              background:
                "linear-gradient(to right, #1e40af, #2563eb, #4338ca)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 24,
            }}
          >
            Technologies Used
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "#475569",
              maxWidth: 700,
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            Cutting-edge tools and platforms powering innovative research and
            seamless implementation
          </p>
        </div>

        {/* Technologies by Category */}
        <div style={{ display: "grid", gap: 32 }}>
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter(
              (tech) => tech.category === category
            );
            const categoryColor = categoryTechs[0]?.color || "#6366f1";

            return (
              <div key={category} style={{ marginBottom: 40 }}>
                {/* Category Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <CategoryIcon category={category} color={categoryColor} />
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#1e293b",
                    }}
                  >
                    {category}
                  </h3>
                  <div
                    style={{
                      flexGrow: 1,
                      height: 1,
                      background:
                        "linear-gradient(to right, #e2e8f0, transparent)",
                    }}
                  />
                </div>

                {/* Technology Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                    gap: 20,
                  }}
                >
                  {categoryTechs.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      style={{
                        position: "relative",
                        background: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(6px)",
                        borderRadius: 16,
                        padding: 16,
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        overflow: "hidden",
                      }}
                    >
                      {/* Gradient border effect */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 16,
                          opacity: 0,
                          background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                          padding: 2,
                          transition: "opacity 0.3s ease",
                          pointerEvents: "none",
                        }}
                      ></div>

                      {/* Content */}
                      <div
                        style={{
                          position: "relative",
                          zIndex: 10,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            backgroundColor: tech.bgColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          <TechIcon color={tech.color} />
                        </div>

                        <h4
                          style={{
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#334155",
                            textAlign: "center",
                          }}
                        >
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div
          style={{
            marginTop: 64,
            textAlign: "center",
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          Continuously evolving tech stack
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
