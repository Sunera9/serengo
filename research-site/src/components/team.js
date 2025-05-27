import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import dinukaImage from "../images/dinuka.png";
import manjithaImage from "../images/manjitha.jpg"; 
import erandaImage from "../images/eranda.jpg";
import mayanthaImange from '../images/mayantha.jpg'; 

const members = [
  {
    name: "Dr. Dinuka Wijendra",
    role: "Supervisor",
    image: dinukaImage,
  },
  {
    name: "Ms. Chathushki Chathumali",
    role: "Co-Supervisor",
    image: "",
  },
  {
    name: "Mayantha Bsnayaka​",
    role: "Group Leader",
    image: mayanthaImange,
  },
  {
    name: "Manjitha Kumarasinghe",
    role: "Member",
    image: manjithaImage,
  },
  {
    name: "Dunisha Sandeepani",
    role: "Member",
    image: "",
  },
  {
    name: "Eranda Liyanage",
    role: "Member",
    image: erandaImage,
  },
];

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom,rgb(181, 216, 250),rgb(181, 216, 250))",
        py: 8,
        px: 3,
        minHeight: "auto",
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Team
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Celebrating the People Behind Our Success
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 6,
          maxWidth: "1100px",
          mx: "auto",
        }}
      >
        {members.map((member, index) => (
          <Box key={index} textAlign="center">
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{
                width: 200,
                height: 200,
                mx: "auto",
                mb: 2,
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              {member.name}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic", color: "#666" }}>
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;
