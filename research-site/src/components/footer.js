import React, { useState } from 'react';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
     footer: {
    background: 'linear-gradient(135deg, #d3e6ff 0%, #a9cfff 100%)',
    position: 'relative',
    overflow: 'hidden',
    padding: '4rem 4rem 2rem', 
  },
  container: {
    maxWidth: '100%', 
    margin: '0 auto',
    padding: '0 2rem', 
    position: 'relative',
    zIndex: 1,
  },
  mainContent: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3rem',
    justifyContent: 'space-between', 
    marginBottom: '3rem',
  },
  section: {
    flex: '1 1 320px',  
    minWidth: '280px',
  },
    logo: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      letterSpacing: '-0.02em',
      color: '#000000',
    },
    logoHighlight: {
      color: '#1976d2',
    },
    description: {
      color: '#000000',
      lineHeight: 1.7,
      marginBottom: '2rem',
      fontSize: '1rem',
    },
    socialContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    socialIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.5)',
      color: '#000000',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    socialIconHover: {
      background: '#1976d2',
      color: 'white',
      transform: 'scale(1.1)',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#000000',
      marginBottom: '1rem',
      borderBottom: '3px solid #1976d2',
      paddingBottom: '0.25rem',
      display: 'inline-block',
    },
    linksList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    link: {
      color: '#000000',
      textDecoration: 'none',
      fontSize: '0.95rem',
      padding: '0.3rem 0',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#1976d2',
    },
    contactLabel: {
      color: '#1976d2',
      fontWeight: '600',
      marginBottom: '0.25rem',
    },
    contactText: {
      color: '#000000',
      lineHeight: 1.6,
      fontSize: '0.95rem',
    },
    bottomBar: {
      borderTop: '1px solid rgba(0, 0, 0, 0.3)',
      paddingTop: '1.5rem',
      textAlign: 'center',
      color: '#000000',
      fontSize: '0.9rem',
    },
    copyrightBrand: {
      fontWeight: '700',
      color: '#000000',
    },
    copyrightLink: {
      color: '#1976d2',
      textDecoration: 'none',
      fontWeight: '600',
      cursor: 'pointer',
    },
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', url: 'https://twitter.com' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'M16 12A4 4 0 1112 8a4 4 0 014 4zm0-5.2a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2zm4.5 5.2a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 11-2 2 2 2 0 012-2z', url: 'https://linkedin.com' },
  ];

  const usefulLinks = ['Home', 'Project Scope', 'About Us', 'Contact Us', 'Downloads'];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.mainContent}>
          {/* About Section */}
          <div style={styles.section}>
            <div style={styles.logo}>
              SEREN<span style={styles.logoHighlight}>GO</span>
            </div>
            <p style={styles.description}>
              Step into the future with SmartRail, where our mission is to revolutionize rail operations,
              aligning them seamlessly with the demands of the new world.
            </p>
            <div style={styles.socialContainer}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialIcon,
                    ...(hoveredIcon === index ? styles.socialIconHover : {}),
                  }}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={social.name}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Useful Links</h3>
            <nav style={styles.linksList}>
              {usefulLinks.map((link, index) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    ...styles.link,
                    ...(hoveredLink === `link-${index}` ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => setHoveredLink(`link-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Contact Us</h3>
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={styles.contactLabel}>📍 Address</span>
                <p style={styles.contactText}>
                  SLIIT Malabe Campus<br />
                  New Kandy Rd, Malabe<br />
                  Sri Lanka
                </p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={styles.contactLabel}>✉️ Email</span>
                <br/>
                <br/>
                <a
                  href="mailto:serengo@gmail.com"
                  style={{
                    ...styles.link,
                    ...(hoveredLink === 'email' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => setHoveredLink('email')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  serengo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>
            © Copyright{' '}
            <span style={styles.copyrightBrand}>
              SEREN<span style={{ color: '#1976d2' }}>GO</span>
            </span>{' '}
            All Rights Reserved
          </p>
          <p>
            Designed with by{' '}
            <a
              href="#"
              style={{
                ...styles.copyrightLink,
                ...(hoveredLink === 'team' ? { textDecoration: 'underline' } : {}),
              }}
              onMouseEnter={() => setHoveredLink('team')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Team SERENGO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;