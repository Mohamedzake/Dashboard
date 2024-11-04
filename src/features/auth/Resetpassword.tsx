import React, { useState } from "react";
import { Box, TextField, Button, Link, Typography } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  width: 400px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// const StyledAvatar = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 100%;
//   margin-bottom: 1.5rem;
// `;
const Div = styled.div`
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  margin: 1.5rem 0;
`;

const Resetpassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
  };

  return (
    <Div>
      <Img src="/logo-light.png" alt="Logo" />
      <StyledBox>
        <Div1>
          <Typography variant="h5" component="h1" gutterBottom>
            Reset Password
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter your email to reset your password
          </Typography>
        </Div1>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{
                backgroundColor: "white",
                "& input": {
                  backgroundColor: "white",
                },
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px white inset",
                  WebkitTextFillColor: "#000",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mt: 2,
            }}
          ></Box>
          <Box sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Reset Password
            </Button>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Don't have an account yet?
              <Link href="#" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      </StyledBox>
    </Div>
  );
};

export default Resetpassword;
