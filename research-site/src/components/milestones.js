import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Container,
} from "@mui/material";
import {
  Assignment,
  People,
  MenuBook,
  EmojiEvents,
  CalendarToday,
  School,
  CheckCircle,
  Star,
} from "@mui/icons-material";

const milestones = [
  {
    title: "Project Proposal",
    date: "March 2023",
    desc: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: 6,
    icon: <Assignment />,
    color: "#9c27b0",
    bgColor: "#f3e5f5",
  },
  {
    title: "Progress Presentation I",
    date: "May 2023",
    desc: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: 6,
    icon: <People />,
    color: "#2196f3",
    bgColor: "#e3f2fd",
  },
  {
    title: "Research Paper",
    date: "June 2023",
    desc: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    marks: 6,
    icon: <MenuBook />,
    color: "#4caf50",
    bgColor: "#e8f5e8",
  },
  {
    title: "Progress Presentation II",
    date: "Sept 2023",
    desc: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
    marks: 8,
    icon: <People />,
    color: "#ff5722",
    bgColor: "#fbe9e7",
  },
  {
    title: "Research Logbook",
    date: "Nov 2023",
    desc: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
    marks: 4,
    icon: <CalendarToday />,
    color: "#673ab7",
    bgColor: "#ede7f6",
  },
  {
    title: "Final Presentation & Viva",
    date: "Dec 2023",
    desc: "Viva is held individually to assess each member's contribution to the project.",
    marks: 10,
    icon: <EmojiEvents />,
    color: "#ff9800",
    bgColor: "#fff3e0",
  },
];

const styles = {
  container: {
    background: "linear-gradient(135deg, rgb(181, 216, 250) 0%, rgb(181, 216, 250) 100%)",
    minHeight: "100vh",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  headerIcon: {
    width: "80px",
    height: "80px",
    background: "linear-gradient(135deg, #1976d2 0%, #1976d2 100%)",
    margin: "0 auto 2rem auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    color: "white",
    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
  },
  mainTitle: {
    background: "linear-gradient(135deg, #1976d2 0%, #1976d2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
    marginBottom: "1rem",
    fontSize: "3.5rem",
  },
  subtitle: {
    color: "#6c757d",
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  decorativeLine: {
    height: "4px",
    background: "linear-gradient(135deg, #1976d2 0%, #1976d2 100%)",
    borderRadius: "2px",
    width: "100px",
    margin: "2rem auto",
  },
  timelineContainer: {
    "& .MuiTimelineItem-root": {
      "&:before": {
        display: "none",
      },
    },
    "& .MuiTimelineConnector-root": {
      background: "linear-gradient(180deg, #1976d2 0%, #1976d2 100%)",
      width: "3px",
    },
  },
  milestoneCard: {
    borderRadius: "16px",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "2px solid transparent",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    gap: "1rem",
  },
  iconAvatar: {
    width: "50px",
    height: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  cardDescription: {
    color: "#546e7a",
    lineHeight: 1.6,
    marginBottom: "1.5rem",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateChip: {
    fontWeight: "600",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #1976d2 0%, #1976d2 100%)",
    color: "white",
  },
  marksChip: {
    fontWeight: "bold",
    borderRadius: "20px",
  },
  timelineDot: {
    width: "20px",
    height: "20px",
    border: "4px solid white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.3)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    },
  },
  statsContainer: {
    marginTop: "4rem",
  },
  statsCard: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "2rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  },
  statItem: {
    textAlign: "center",
  },
  statIcon: {
    width: "60px",
    height: "60px",
    margin: "0 auto 1rem auto",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    fontSize: "1.8rem",
  },
  statNumber: {
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "0.5rem",
  },
  statLabel: {
    color: "#6c757d",
    fontSize: "0.9rem",
  },
};

const Milestones = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const totalMarks = milestones.reduce((sum, m) => sum + m.marks, 0);

  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={styles.headerSection}>
          <Avatar sx={styles.headerIcon}>
            <School />
          </Avatar>
          <Typography variant="h2" sx={styles.mainTitle}>
            Project Milestones
          </Typography>
          <Typography sx={styles.subtitle}>
            Track your academic journey through each milestone with detailed timelines,
            comprehensive descriptions, and mark allocations for successful project completion.
          </Typography>
          <Box sx={styles.decorativeLine} />
        </Box>

        {/* Timeline */}
        <Box sx={{ maxWidth: 1200, mx: "auto" }}>
          <Timeline position="alternate" sx={styles.timelineContainer}>
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ py: 2, px: 2 }}>
                  <Chip
                    label={milestone.date}
                    sx={styles.dateChip}
                    size="medium"
                  />
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      ...styles.timelineDot,
                      bgcolor: milestone.color,
                    }}
                  />
                  {index < milestones.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent sx={{ py: 2, px: 2 }}>
                  <Paper
                    elevation={hoveredIndex === index ? 12 : 4}
                    sx={{
                      ...styles.milestoneCard,
                      backgroundColor: milestone.bgColor,
                      borderColor: hoveredIndex === index ? milestone.color : "transparent",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={styles.cardHeader}>
                        <Avatar
                          sx={{
                            ...styles.iconAvatar,
                            bgcolor: milestone.color,
                          }}
                        >
                          {milestone.icon}
                        </Avatar>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2c3e50" }}>
                          {milestone.title}
                        </Typography>
                      </Box>

                      <Typography sx={styles.cardDescription}>
                        {milestone.desc}
                      </Typography>

                      <Box sx={styles.cardFooter}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        </Box>
                        <Chip
                          label={`${milestone.marks} marks`}
                          sx={{
                            ...styles.marksChip,
                            bgcolor: milestone.color,
                            color: "white",
                          }}
                          size="medium"
                        />
                      </Box>
                    </CardContent>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Summary Stats */}
        <Box sx={{
          maxWidth: 500,
          margin: '2rem auto',   // centers horizontally with vertical margin
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #d9e7ff 0%, #f0f5ff 100%)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        }}>
          <Grid container spacing={4} justifyContent="center" alignItems="center" textAlign="center">
            <Grid item xs={4} sm={4} md={4}>
              <Box>
                <Avatar sx={{
                  bgcolor: 'primary.main',
                  margin: '0 auto 8px',
                  width: 48,
                  height: 48,
                }}>
                  <CheckCircle />
                </Avatar>
                <Typography variant="h4" fontWeight="bold">
                  {milestones.length}
                </Typography>
                <Typography color="text.secondary" fontSize="0.9rem">
                  Total Milestones
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <Box>
                <Avatar sx={{
                  bgcolor: 'primary.main',
                  margin: '0 auto 8px',
                  width: 48,
                  height: 48,
                }}>
                  <Star />
                </Avatar>
                <Typography variant="h4" fontWeight="bold">
                  {totalMarks}
                </Typography>
                <Typography color="text.secondary" fontSize="0.9rem">
                  Total Marks Available
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <Box>
                <Avatar sx={{
                  bgcolor: 'primary.main',
                  margin: '0 auto 8px',
                  width: 48,
                  height: 48,
                }}>
                  <CalendarToday />
                </Avatar>
                <Typography variant="h4" fontWeight="bold">
                  9
                </Typography>
                <Typography color="text.secondary" fontSize="0.9rem">
                  Months Duration
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default Milestones;