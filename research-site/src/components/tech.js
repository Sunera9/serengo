import React from "react";

const TechnologiesSection = () => {
  // Technology data with individual icons and colors
  const technologies = [
    // Frontend
    {
      name: "React.js",
      category: "Frontend",
      color: "#61dafb",
      bgColor: "rgba(97, 218, 251, 0.1)",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      color: "#06b6d4",
      bgColor: "rgba(6, 182, 212, 0.1)",
    },
    {
      name: "HTML5",
      category: "Frontend",
      color: "#e34f26",
      bgColor: "rgba(227, 79, 38, 0.1)",
    },
    {
      name: "CSS3",
      category: "Frontend",
      color: "#1572b6",
      bgColor: "rgba(21, 114, 182, 0.1)",
    },

    // Backend
    {
      name: "Python Flask",
      category: "Backend",
      color: "#ff6b6b",
      bgColor: "rgba(255, 107, 107, 0.1)",
    },
    {
      name: "REST API",
      category: "Backend",
      color: "#4ecdc4",
      bgColor: "rgba(78, 205, 196, 0.1)",
    },
    {
      name: "JWT Auth",
      category: "Backend",
      color: "#ff9f43",
      bgColor: "rgba(255, 159, 67, 0.1)",
    },

    // ML/AI
    {
      name: "YOLOv5",
      category: "ML/AI",
      color: "#a55eea",
      bgColor: "rgba(165, 94, 234, 0.1)",
    },
    {
      name: "LSTM",
      category: "ML/AI",
      color: "#26de81",
      bgColor: "rgba(38, 222, 129, 0.1)",
    },
    {
      name: "Random Forest",
      category: "ML/AI",
      color: "#fd79a8",
      bgColor: "rgba(253, 121, 168, 0.1)",
    },
    {
      name: "Ensemble Voting",
      category: "ML/AI",
      color: "#6c5ce7",
      bgColor: "rgba(108, 92, 231, 0.1)",
    },

    // Database
    {
      name: "AWS S3",
      category: "Storage",
      color: "#ff7675",
      bgColor: "rgba(255, 118, 117, 0.1)",
    },
    {
      name: "CSV/JSON",
      category: "Storage",
      color: "#fdcb6e",
      bgColor: "rgba(253, 203, 110, 0.1)",
    },
    {
      name: "In-memory",
      category: "Storage",
      color: "#74b9ff",
      bgColor: "rgba(116, 185, 255, 0.1)",
    },

    // Cloud
    {
      name: "AWS EC2",
      category: "Cloud",
      color: "#fd79a8",
      bgColor: "rgba(253, 121, 168, 0.1)",
    },
    {
      name: "AWS Transcribe",
      category: "Cloud",
      color: "#00b894",
      bgColor: "rgba(0, 184, 148, 0.1)",
    },
    {
      name: "CI/CD",
      category: "Cloud",
      color: "#e17055",
      bgColor: "rgba(225, 112, 85, 0.1)",
    },

    // Tools
    {
      name: "FastText",
      category: "Tools",
      color: "#00cec9",
      bgColor: "rgba(0, 206, 201, 0.1)",
    },
    {
      name: "SMOTE",
      category: "Tools",
      color: "#a29bfe",
      bgColor: "rgba(162, 155, 254, 0.1)",
    },
    {
      name: "Scikit-learn",
      category: "Tools",
      color: "#55a3ff",
      bgColor: "rgba(85, 163, 255, 0.1)",
    },
    {
      name: "Pandas",
      category: "Tools",
      color: "#ff6b9d",
      bgColor: "rgba(255, 107, 157, 0.1)",
    },
    {
      name: "NumPy",
      category: "Tools",
      color: "#feca57",
      bgColor: "rgba(254, 202, 87, 0.1)",
    },
  ];

  // Generic tech icon (since we can't use specific brand icons)
  const TechIcon = ({ color }) => (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
      style={{ backgroundColor: color }}
    >
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );

  const CategoryIcon = ({ category, color }) => {
    const iconProps = {
      className: "w-5 h-5",
      stroke: "currentColor",
      fill: "none",
      viewBox: "0 0 24 24",
    };

    switch (category) {
      case "Frontend":
        return (
          <svg {...iconProps} style={{ color }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "Backend":
        return (
          <svg {...iconProps} style={{ color }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
            />
          </svg>
        );
      case "ML/AI":
        return (
          <svg {...iconProps} style={{ color }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      case "Storage":
        return (
          <svg {...iconProps} style={{ color }}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="m21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case "Cloud":
        return (
          <svg {...iconProps} style={{ color }}>
            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
          </svg>
        );
      case "Tools":
        return (
          <svg {...iconProps} style={{ color }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      default:
        return <TechIcon color={color} />;
    }
  };

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-6">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-400/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-slate-700 font-medium">Tech Stack</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Technologies Used
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge tools and platforms powering innovative research and
            seamless implementation
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter(
              (tech) => tech.category === category
            );
            const categoryColor = categoryTechs[0]?.color || "#6366f1";

            return (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20">
                    <CategoryIcon category={category} color={categoryColor} />
                    <h3 className="text-2xl font-bold text-slate-800">
                      {category}
                    </h3>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
                </div>

                {/* Technology Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categoryTechs.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                      style={{
                        animationDelay: `${
                          categoryIndex * 100 + techIndex * 50
                        }ms`,
                      }}
                    >
                      {/* Gradient border effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                          padding: "2px",
                        }}
                      >
                        <div className="w-full h-full bg-white rounded-2xl"></div>
                      </div>

                      <div className="relative z-10">
                        {/* Tech Icon */}
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: tech.bgColor }}
                        >
                          <TechIcon color={tech.color} />
                        </div>

                        {/* Tech Name */}
                        <h4 className="font-semibold text-slate-800 text-sm leading-tight group-hover:text-slate-900 transition-colors duration-300">
                          {tech.name}
                        </h4>

                        {/* Decorative dot */}
                        <div
                          className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: tech.color }}
                        ></div>
                      </div>

                      {/* Hover glow effect */}
                      <div
                        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <span>Continuously evolving tech stack</span>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
