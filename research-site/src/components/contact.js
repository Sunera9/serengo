import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
  Fade,
  Card,
  CardContent
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const contactInfoStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    }
  };

  const iconStyle = {
    background: '#1976d2',
    color: 'white',
    width: 50,
    height: 50,
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    transition: 'transform 0.3s ease'
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0ecf8 0%, #f5f7fa 100%)',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={800}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#1976d2',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.2rem' },
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#555',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Have questions about our research or want to collaborate? We'd love to hear from you.
            </Typography>
          </Box>
        </Fade>

<Grid container spacing={4} mb={6} justifyContent="center" alignItems="stretch">
  <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
    <Card
      sx={{
        ...contactInfoStyle,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      onMouseEnter={() => setHoveredCard('location')}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={iconStyle}>
          <LocationOnIcon
            sx={{
              fontSize: 28,
              transform: hoveredCard === 'location' ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </Box>
        <Typography variant="h6" fontWeight="600" mb={1}>
          Our Location
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SLIIT Malabe Campus<br />
          New Kandy Rd, Malabe<br />
          Sri Lanka
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
    <Card
      sx={{
        ...contactInfoStyle,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      onMouseEnter={() => setHoveredCard('email')}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={iconStyle}>
          <EmailIcon
            sx={{
              fontSize: 28,
              transform: hoveredCard === 'email' ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </Box>
        <Typography variant="h6" fontWeight="600" mb={1}>
          Email Us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          serengo.research@gmail.com
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>



        {/* Contact Form (Vertical Fields) */}
        <Fade in timeout={1000}>
          <Paper
            elevation={0}
            sx={{
              background: '#ffffffcc',
              backdropFilter: 'blur(10px)',
              p: 4,
              borderRadius: 4,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#1976d2',
              }}
            >
              Send us a message
            </Typography>

            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: '#1976d2',
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    }
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactUs;
