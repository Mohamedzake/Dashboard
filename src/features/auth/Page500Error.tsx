import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  /* background-color: #ffffff; */
  padding: 20px;
  /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); */
`;

// const StyledAvatar = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 100%;
//   margin-bottom: 1.5rem;
// `;
const Div = styled.div`
  height: 100vh;
  /* background-color: #f9fafb; */
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

const Page500Error: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Div>
      <StyledBox>
        <Div1>
          <Typography variant="h4" component="h1" gutterBottom>
            500
          </Typography>
          <Typography variant="h6" gutterBottom>
            Internal server error.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            variant="body2"
            component="h1"
            gutterBottom
          >
            The server encountered something unexpected that didn't allow it to
            complete the request.
          </Typography>
        </Div1>
        <form onSubmit={handleSubmit}>
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
              Return to website
            </Button>
          </Box>
        </form>
      </StyledBox>
    </Div>
  );
};

export default Page500Error;
