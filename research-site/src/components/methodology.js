import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Fade,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Psychology,
  DatasetOutlined,
  ModelTraining,
  CloudQueue,
} from "@mui/icons-material";
import methodologyImage from "../images/systemcomponents.jpg";

// Styled components
const StyledSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.grey[50]} 0%, 
    ${theme.palette.common.white} 50%, 
    ${theme.palette.primary.light}08 100%)`,
  minHeight: "100vh",
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 20% 20%, ${theme.palette.primary.light}15 0%, transparent 50%),
                 radial-gradient(circle at 80% 80%, ${theme.palette.secondary.light}15 0%, transparent 50%)`,
    pointerEvents: "none",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(145deg, 
    ${theme.palette.common.white} 0%, 
    ${theme.palette.grey[50]} 100%)`,
  borderRadius: theme.spacing(2),
  boxShadow: `0 10px 40px -10px ${theme.palette.primary.main}20,
              0 0 0 1px ${theme.palette.grey[200]}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 60px -10px ${theme.palette.primary.main}30,
                0 0 0 1px ${theme.palette.primary.light}50`,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main})`,
  },
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  cursor: "pointer",
  maxWidth: "100%",
}));

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "80%",
  height: "auto",
  borderRadius: theme.spacing(2),
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: `0 20px 40px -15px ${theme.palette.common.black}30`,
  display: "block",
  margin: "0 auto",
}));

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  color: theme.palette.common.white,
  fontWeight: 600,
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    transform: "translateY(-2px)",
  },
  transition: "all 0.2s ease",
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  marginRight: theme.spacing(2),
  color: theme.palette.common.white,
  boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
}));

const MethodologySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const technologies = [
    "YOLOv5",
    "LSTM Networks",
    "Random Forest",
    "XGBoost",
    "AWS EC2",
    "Flask",
    "FastText",
    "SMOTE",
  ];

  const handleImageError = (e) => {
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3ESystem Components Diagram%3C/text%3E%3C/svg%3E";
  };

  return (
    <StyledSection>
      <Container maxWidth="xl">
        <Fade in timeout={1000}>
          <Grid container spacing={6} alignItems="center">
            {/* Content Section */}
            <Grid item xs={12} md={7}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <IconWrapper>
                      <Psychology />
                    </IconWrapper>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Methodology
                    </Typography>
                  </Box>

                  {/* Technology Tags */}
                  <Box sx={{ mb: 3 }}>
                    {technologies.map((tech, index) => (
                      <TechChip
                        key={index}
                        label={tech}
                        size="small"
                        icon={
                          index < 2 ? <ModelTraining /> :
                          index < 4 ? <DatasetOutlined /> :
                          <CloudQueue />
                        }
                      />
                    ))}
                  </Box>
                </Box>

                {/* Main Content Card */}
                <StyledCard>
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                        textAlign: "justify",
                        "& strong": {
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        },
                      }}
                    >
                      The research follows a <strong>systematic methodology</strong> combining data
                      collection, preprocessing, and advanced machine learning
                      techniques to solve critical issues in Sri Lanka's tourism
                      industry. Diverse datasets were gathered, including annotated
                      images of traditional Sri Lankan foods, extensive historical
                      weather data from multiple locations, pricing information for
                      adventure activities, and Sinhala speech samples from various
                      sources.
                      <br /><br />
                      Each dataset underwent <strong>rigorous cleaning and preprocessing</strong> steps,
                      such as missing value imputation, outlier removal, text
                      normalization, and class balancing using techniques like SMOTE
                      and back-translation to improve data quality and diversity.
                      Feature engineering methods, including FastText embeddings for
                      textual data and cyclical encoding for time-series weather
                      data, were applied to enhance model inputs.
                      <br /><br />
                      For modeling, <strong>state-of-the-art deep learning architectures</strong> such
                      as YOLOv5 were fine-tuned for efficient real-time food
                      recognition, while stacked LSTM networks with attention
                      mechanisms were employed for accurate coastal weather
                      forecasting. Random Forest regression was selected to optimize
                      dynamic pricing for adventure tourism due to its high
                      predictive performance, and an ensemble voting classifier
                      combining XGBoost, Gradient Boosting, SVM, and Random Forest
                      models was developed for robust Sinhala speech classification.
                      <br /><br />
                      Finally, the system was deployed through a <strong>Python Flask backend</strong> integrated with AWS cloud services—including EC2 for
                      hosting, S3 for storage, and Transcribe for speech-to-text
                      functionality—enabling scalable, real-time processing to
                      enhance the tourist experience across multiple domains.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Fade in timeout={1500}>
                <StyledImageContainer>
                  <StyledImage
                    src={methodologyImage}
                    alt="System Components Diagram"
                    onError={handleImageError}
                  />
                </StyledImageContainer>
              </Fade>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </StyledSection>
  );
};

export default MethodologySection;
