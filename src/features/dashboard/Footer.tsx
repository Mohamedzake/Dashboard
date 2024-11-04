import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "#ffffff",
        py: 2,
        px: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        bottom: 0,
        // width: "100%",
        mt: "auto",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left-aligned links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="/support" color="inherit" underline="hover">
            Support
          </Link>
          <Link href="/help-center" color="inherit" underline="hover">
            Help Center
          </Link>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy
          </Link>
          <Link href="/terms" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Box>

        {/* Right-aligned copyright */}
        <Typography variant="body2" color="inherit" sx={{ textAlign: "right" }}>
          © 2024 - Mohamed Zaki
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
