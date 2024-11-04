import styled from "styled-components";
import { Typography, IconButton, Button } from "@mui/material";
import {
  Refresh as RefreshIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #555;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const WelcomeText = styled.div`
  margin: 1rem 0;
  color: #4a5568;
`;

const Span = styled.span`
  color: #1976d2;
`;
function Settings() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Settings</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Settings
          </WelcomeText>
        </div>
        <HeaderActions>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <ViewListIcon />
          </IconButton>
          <Button variant="contained">Today: April 29</Button>
        </HeaderActions>
      </Header>
      <Publicinfo />
      <Privateinfo />
    </DashboardContainer>
  );
}

export default Settings;
///////////////////////////////
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 2rem;

  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Publicinfo: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };
  const Username = "mohamed Zaki";
  const Biography =
    "Lucy is a Freelance Writer and Social Media Manager who helps finance professionals .";
  return (
    <StyledBox>
      <form onSubmit={handleSubmit}>
        <Typography>Public info</Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Username"
            variant="outlined"
            value={Username}
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
            label="Biography"
            variant="outlined"
            value={Biography}
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

        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Save changes
          </Button>
        </Box>
      </form>
      <Div1>
        <StyledAvatar src="../../../public/avatar.jpg" alt="Logo" />

        <Box sx={{ mb: 1, mt: 1 }}>
          <Button type="submit" variant="contained" color="primary">
            <DownloadIcon /> Upload
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          For best results, use an image at least 128px by 128px in .jpg format
        </Typography>
      </Div1>
    </StyledBox>
  );
};
/////////////////////////////////////////////////////////////////

const StyledBoxs = styled.div`
  display: grid;

  margin-top: 2rem;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;
const Div2 = styled.div`
  display: grid;
  grid-template-columns: 4fr 2.5fr 1.5fr;
  gap: 1.5rem;
`;
const Privateinfo: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
  };
  const Firstname = "mohamed ";
  const Lastname = " zaki";
  return (
    <StyledBoxs>
      <form onSubmit={handleSubmit}>
        <Typography>Private info</Typography>
        <Div>
          <Box sx={{ mt: 3 }}>
            <TextField
              label="First name"
              variant="outlined"
              value={Firstname}
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
              value={Lastname}
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
        </Div>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Email"
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
            label="Address"
            variant="outlined"
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
            label="Apartment, studio, or floor"
            variant="outlined"
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
        <Div2>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="City"
              variant="outlined"
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
              label="State"
              variant="outlined"
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
              label="Zip"
              variant="outlined"
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
        </Div2>

        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Save changes
          </Button>
        </Box>
      </form>
    </StyledBoxs>
  );
};
