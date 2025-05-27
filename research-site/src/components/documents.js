import React, { useState } from "react";

const documents = [
  { title: "Project Charter", type: "Document",file: "https://drive.google.com/drive/u/2/folders/1sntDi7R2_LcioHigrKU5yOp3f0ueq2IX"  },
  { title: "Project Proposal", type: "Document", file: "https://drive.google.com/drive/u/2/folders/1V6csEt7xKGWgYN9r3a9tn6zophvQBiz8"  },
  { title: "Project Proposal", type: "Presentation", file: "https://drive.google.com/drive/u/2/folders/15Hn2DWcyia1HyXq-8r1C3LWBC6u4FD94"  },
  { title: "Progress Presentation I", type: "Presentation", file: "https://drive.google.com/drive/u/2/folders/11oJMTFJ4v75EUxdflm7sx0SICTXjM4cX"  },
  { title: "Progress Presentation II", type: "Presentation", file: "https://drive.google.com/drive/u/2/folders/17x7rVqUMFFmxnnF6_5P56zRKgojIzYDK"  },
  { title: "Research Paper", type: "Document", file: "https://drive.google.com/drive/u/2/folders/1Cz-vnbA6-UtkRqZk5S8ZjCVEYBpM61r6"  },
  { title: "Final Report", type: "Document", file: "https://drive.google.com/drive/u/2/folders/1AXdFGI7Kk7jGhc5-q2jTZwffjWcXpyjK"  },
  { title: "Log Book", type: "Document", file: "https://drive.google.com/drive/u/2/folders/1yQ1UTCvKI6LI5gdlDgMlFaFu7AXoDm2m"  },
];

const Downloads = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const documentCount = documents.length;
  const presentationCount = documents.filter(doc => doc.type === "Presentation").length;
  const documentTypeCount = documents.filter(doc => doc.type === "Document").length;

  const styles = {
    container: {
      backgroundColor: "#fafafa",
      padding: "5rem 2rem",
      minHeight: "100vh",
    },
    headerSection: {
      textAlign: "center",
      marginBottom: "4rem",
      maxWidth: "800px",
      margin: "0 auto 4rem auto",
    },
    headerIcon: {
      width: "70px",
      height: "70px",
      backgroundColor: "#1976d2",
      borderRadius: "50%",
      margin: "0 auto 2rem auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      color: "white",
    },
    mainTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#1a1a1a",
      marginBottom: "1rem",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    subtitle: {
      color: "#666",
      fontSize: "1.1rem",
      lineHeight: "1.6",
      maxWidth: "500px",
      margin: "0 auto",
    },
    decorativeLine: {
      height: "3px",
      backgroundColor: "#1976d2",
      borderRadius: "2px",
      width: "80px",
      margin: "2rem auto 0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    documentCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      border: "1px solid #e0e0e0",
      padding: "2rem 1.5rem",
      textAlign: "center",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "220px",
      justifyContent: "space-between",
    },
    documentCardHover: {
      borderColor: "#1976d2",
      boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
      transform: "translateY(-4px)",
    },
    documentIcon: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      color: "white",
      marginBottom: "1rem",
    },
    documentTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#1a1a1a",
      marginBottom: "1rem",
      lineHeight: "1.3",
      minHeight: "48px",
      display: "flex",
      alignItems: "center",
    },
    typeChip: {
      padding: "4px 12px",
      borderRadius: "14px",
      fontSize: "0.75rem",
      fontWeight: "500",
      color: "white",
      marginBottom: "1.5rem",
      display: "inline-block",
    },
    downloadButton: {
      backgroundColor: "transparent",
      border: "2px solid #1976d2",
      color: "#1976d2",
      padding: "8px 20px",
      borderRadius: "8px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      minWidth: "120px",
      justifyContent: "center",
    },
    downloadButtonHover: {
      backgroundColor: "#1976d2",
      color: "white",
    },
    downloadButtonDisabled: {
      opacity: "0.5",
      cursor: "not-allowed",
    },
    statsSection: {
      marginTop: "3rem",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      border: "1px solid #e0e0e0",
      maxWidth: "1200px",
      margin: "3rem auto 0 auto",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
    },
    statItem: {
      textAlign: "center",
      padding: "1rem",
    },
    statNumber: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#1976d2",
      marginBottom: "0.5rem",
    },
    statLabel: {
      color: "#666",
      fontSize: "0.9rem",
      fontWeight: "500",
    },
  };

  const getDocumentColor = (type) => {
    return type === "Presentation" ? "#1976d2" : "#1976d2";
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.headerIcon}>
          📁
        </div>
        <h1 style={styles.mainTitle}>
          Research Documents
        </h1>
        <p style={styles.subtitle}>
          Access comprehensive research documents, presentations, and reports 
          for your academic and professional reference
        </p>
        <div style={styles.decorativeLine} />
      </div>

      {/* Documents Grid */}
      <div style={styles.grid}>
        {documents.map((doc, index) => (
          <div
            key={index}
            style={{
              ...styles.documentCard,
              ...(hoveredIndex === index ? styles.documentCardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <div
                style={{
                  ...styles.documentIcon,
                  backgroundColor: getDocumentColor(doc.type),
                }}
              >
                {doc.type === "Presentation" ? "📊" : "📄"}
              </div>

              <h3 style={styles.documentTitle}>
                {doc.title}
              </h3>

              <span
                style={{
                  ...styles.typeChip,
                  backgroundColor: getDocumentColor(doc.type),
                }}
              >
                {doc.type}
              </span>
            </div>

            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.downloadButton,
                ...(hoveredIndex === index ? styles.downloadButtonHover : {}),
                ...(doc.file ? {} : styles.downloadButtonDisabled),
                pointerEvents: doc.file ? "auto" : "none",
              }}
            >
              ⬇️ Download
            </a>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              {documentCount}
            </div>
            <div style={styles.statLabel}>
              Total Resources
            </div>
          </div>
          
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              {documentTypeCount}
            </div>
            <div style={styles.statLabel}>
              Documents
            </div>
          </div>
          
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              {presentationCount}
            </div>
            <div style={styles.statLabel}>
              Presentations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;