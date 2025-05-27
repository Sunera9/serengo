import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,182,193,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite reverse",
          transform: `translate(${mousePosition.x * -0.01}px, ${
            mousePosition.y * -0.01
          }px)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "20%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(173,216,230,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "pulse 4s ease-in-out infinite",
          transform: `translate(${mousePosition.x * 0.015}px, ${
            mousePosition.y * 0.015
          }px)`,
        }}
      />

      {/* Glassmorphism overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              padding: "8px 20px",
              borderRadius: "50px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "inline-block",
              marginBottom: "24px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
            }}
          >
            <span
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              🚀 Next-Gen Tourism AI Platform
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: "1.1",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
            }}
          >
            Welcome to
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Serengo
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: "1.7",
              marginBottom: "40px",
              maxWidth: "500px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
            }}
          >
            Your comprehensive AI-powered travel companion for Sri Lanka. From
            food recognition to safety, weather insights to adventure planning.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s",
            }}
          >
            <button
              onClick={() => scrollToSection("features")}
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                border: "none",
                padding: "16px 32px",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px) scale(1.05)";
                e.target.style.boxShadow =
                  "0 12px 35px rgba(102, 126, 234, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow =
                  "0 8px 25px rgba(102, 126, 234, 0.4)";
              }}
            >
              🔍 Explore Features
            </button>

            <button
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                padding: "14px 28px",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.25)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              📱 Try Demo
            </button>
          </div>

          {/* Four main features */}
          <div
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🍽️</div>
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Food Detection
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🛡️</div>
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Safety Monitor
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🏖️</div>
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Beach Activities
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🏔️</div>
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Adventure Pricing
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - App Showcase */}
        <div
          style={{
            position: "relative",
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateX(0) scale(1)"
              : "translateX(40px) scale(0.9)",
            transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
          }}
        >
          {/* Phone mockup */}
          <div
            style={{
              background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
              borderRadius: "40px",
              padding: "12px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
              transform: "rotate(-5deg)",
              margin: "0 auto",
              width: "300px",
              height: "600px",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                borderRadius: "32px",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* App interface mockup */}
              <div
                style={{
                  padding: "40px 20px 20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "20px",
                    padding: "20px",
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: "8px",
                    }}
                  >
                    Serengo
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    Your AI Travel Companion
                  </div>
                </div>

                {/* Feature grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                      padding: "16px",
                      backdropFilter: "blur(20px)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                      🍛
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Food ID
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                      padding: "16px",
                      backdropFilter: "blur(20px)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                      🛡️
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Safety
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                      padding: "16px",
                      backdropFilter: "blur(20px)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                      🌊
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Beach
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                      padding: "16px",
                      backdropFilter: "blur(20px)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                      💰
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Pricing
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    padding: "12px",
                    marginTop: "12px",
                    backdropFilter: "blur(20px)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#4ade80",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#4ade80",
                        borderRadius: "50%",
                        animation: "pulse 2s ease-in-out infinite",
                      }}
                    />
                    AI Active
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements representing different features */}
          <div
            style={{
              position: "absolute",
              top: "5%",
              right: "-20px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "12px",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🥥</span>
          </div>

          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "-40px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "12px",
              animation: "float 3s ease-in-out infinite 0.5s",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🌤️</span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "-30px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "12px",
              animation: "float 3s ease-in-out infinite 1s",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🏄‍♂️</span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "-25px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "12px",
              animation: "float 3s ease-in-out infinite 1.5s",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🎒</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "0.9rem",
            fontWeight: "500",
          }}
        >
          Discover all features
        </span>
        <div
          style={{
            width: "2px",
            height: "30px",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "2px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "8px",
              background: "white",
              borderRadius: "2px",
              animation: "scroll-indicator 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }

          .phone-mockup {
            width: 250px !important;
            height: 500px !important;
          }

          .features-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
