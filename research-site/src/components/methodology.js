// MethodologySection.jsx
import React from "react";
import methodologyImage from "../images/systemcomponents.jpg"; 

const MethodologySection = () => {
  const styles = {
    methodologySection: {
      background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
      minHeight: "100vh",
      padding: "6rem 1.5rem",
      "@media (min-width: 768px)": {
        padding: "6rem 5rem",
      },
    },
    methodologyContainer: {
      maxWidth: "80rem",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "3.5rem",
      alignItems: "center",
      "@media (min-width: 768px)": {
        gridTemplateColumns: "1fr 1fr",
      },
    },
    methodologyContent: {
      width: "100%",
    },
    methodologyTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#111827",
      marginBottom: "2rem",
      letterSpacing: "-0.025em",
      lineHeight: "1.1",
      "@media (min-width: 768px)": {
        fontSize: "3.75rem",
      },
    },
    methodologyCard: {
      background: "#ffffff",
      borderRadius: "0.75rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      padding: "2rem",
      border: "1px solid #f3f4f6",
      "@media (max-width: 767px)": {
        padding: "1.5rem",
      },
    },
    methodologyText: {
      fontSize: "1.125rem",
      color: "#374151",
      lineHeight: "1.75",
      margin: "0",
      "@media (max-width: 767px)": {
        fontSize: "1rem",
      },
    },
    methodologyImageContainer: {
      display: "flex",
      justifyContent: "center",
    },
    methodologyImageWrapper: {
      position: "relative",
    },
    methodologyImage: {
      borderRadius: "0.75rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      width: "100%",
      maxWidth: "28rem",
      transition: "box-shadow 0.3s ease",
      cursor: "pointer",
    },
  };

  // Handle image hover effect
  const handleImageHover = (e) => {
    e.target.style.boxShadow =
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
  };

  const handleImageLeave = (e) => {
    e.target.style.boxShadow =
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3ESystem Components Diagram%3C/text%3E%3C/svg%3E";
  };

  return (
    <section style={styles.methodologySection}>
      <div style={styles.methodologyContainer}>
        {/* Text Content */}
        <div style={styles.methodologyContent}>
          <h2 style={styles.methodologyTitle}>🧠 Methodology</h2>
          <div style={styles.methodologyCard}>
            <p style={styles.methodologyText}>
              The research follows a systematic methodology combining data
              collection, preprocessing, and advanced machine learning
              techniques to solve critical issues in Sri Lanka's tourism
              industry. Diverse datasets were gathered, including annotated
              images of traditional Sri Lankan foods, extensive historical
              weather data from multiple locations, pricing information for
              adventure activities, and Sinhala speech samples from various
              sources. Each dataset underwent rigorous cleaning and
              preprocessing steps, such as missing value imputation, outlier
              removal, text normalization, and class balancing using techniques
              like SMOTE and back-translation to improve data quality and
              diversity. Feature engineering methods, including FastText
              embeddings for textual data and cyclical encoding for time-series
              weather data, were applied to enhance model inputs. For modeling,
              state-of-the-art deep learning architectures such as YOLOv5 were
              fine-tuned for efficient real-time food recognition, while stacked
              LSTM networks with attention mechanisms were employed for accurate
              coastal weather forecasting. Random Forest regression was selected
              to optimize dynamic pricing for adventure tourism due to its high
              predictive performance, and an ensemble voting classifier
              combining XGBoost, Gradient Boosting, SVM, and Random Forest
              models was developed for robust Sinhala speech classification. The
              models were trained with appropriate hyperparameter tuning, early
              stopping, and validated using metrics like precision, recall, and
              R² scores. Finally, the system was deployed through a Python Flask
              backend integrated with AWS cloud services—including EC2 for
              hosting, S3 for storage, and Transcribe for speech-to-text
              functionality—enabling scalable, real-time processing to enhance
              the tourist experience across multiple domains.
            </p>
          </div>
        </div>

        {/* Image */}
        <div style={styles.methodologyImageContainer}>
          <div style={styles.methodologyImageWrapper}>
            <img
              src={methodologyImage}
              alt="System Components Diagram"
              style={styles.methodologyImage}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
