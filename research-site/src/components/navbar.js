// Navbar.jsx

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#3f51b5" }}>
          SERENGO
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" onClick={handleMobileMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
            >
              <MenuItem onClick={handleMobileMenuClose}>
                <a href="#home">Home</a>
              </MenuItem>
              <MenuItem onClick={handleDropdownOpen}>
                Project Scope <ExpandMoreIcon fontSize="small" />
              </MenuItem>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
              >
                <MenuItem onClick={handleDropdownClose}>
                  <a href="#literature">Literature Review</a>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <a href="#problem">Research Problem</a>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <a href="#solution">Research Solutions</a>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <a href="#methodology">Methodology</a>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <a href="#technologies">Technologies</a>
                </MenuItem>
              </Menu>
              <MenuItem onClick={handleMobileMenuClose}>
                <a href="#milestones">Milestones</a>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <a href="#docs">Documentation</a>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <a href="#about">About Us</a>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <a href="#contact">Contact Us</a>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Button href="#home">Home</Button>
            <Button onClick={handleDropdownOpen} endIcon={<ExpandMoreIcon />}>
              Project Scope
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleDropdownClose}
            >
              <MenuItem onClick={handleDropdownClose}>
                <a href="#literature">Literature Review</a>
              </MenuItem>
              <MenuItem onClick={handleDropdownClose}>
                <a href="#problem">Research Problem</a>
              </MenuItem>
              <MenuItem onClick={handleDropdownClose}>
                <a href="#solution">Research Solutions</a>
              </MenuItem>
              <MenuItem onClick={handleDropdownClose}>
                <a href="#methodology">Methodology</a>
              </MenuItem>
              <MenuItem onClick={handleDropdownClose}>
                <a href="#technologies">Technologies</a>
              </MenuItem>
            </Menu>
            <Button href="#milestones">Milestones</Button>
            <Button href="#docs">Documentation</Button>
            <Button href="#about">About Us</Button>
            <Button href="#contact">Contact Us</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
