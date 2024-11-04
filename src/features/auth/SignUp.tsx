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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.01);
`;

const Div = styled.div`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 97vh;
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
  margin: 1rem 0;
`;

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fname = "mohamed";
  const lname = "zaki";
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Div>
      <Img src="../../../public/logo-light.png" alt="Logo" />
      <StyledBox>
        <Div1>
          {/* <StyledAvatar src="../../../public/avatar.jpg" alt="Logo" /> */}

          <Typography variant="h5" component="h1" gutterBottom>
            Get started
          </Typography>
          <Typography variant="body1" gutterBottom>
            Start creating the best possible user experience
          </Typography>
        </Div1>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 3 }}>
            <TextField
              label="First name"
              variant="outlined"
              value={fname}
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
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Last name"
              variant="outlined"
              value={lname}
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
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              value={email}
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
          <Box sx={{ mt: 2 }}>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Box sx={{ mt: 2 }}>
            <TextField
              type="Confirm"
              label="Confirm Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
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
              Sign up
            </Button>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Already have an account?
              <Link href="#" underline="hover">
                Log in
              </Link>
            </Typography>
          </Box>
        </form>
      </StyledBox>
    </Div>
  );
};

export default SignUp;
