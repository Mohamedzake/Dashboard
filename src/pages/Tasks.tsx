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

function Tasks() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Tasks</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Tasks
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
      <Task />
    </DashboardContainer>
  );
}

export default Tasks;
//////////////////////////////
import { useEffect } from "react";
import { Box, Stack, Avatar } from "@mui/material";

import person1 from "../../public/avatar.jpg";
import person2 from "../../public/avatar.jpg";
// import person3 from "../../public/avatar.jpg";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AddIcon from "@mui/icons-material/Add";

const StyledP = styled.p`
  margin: 1px;
  font-size: 13px;
`;
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #3e3d3d5f;
  width: 90%;
  padding: 20px 20px 30px 20px;
  margin: 10px auto;
  position: relative;
`;
const Bar = styled.div`
  height: 10px;
  width: 50px;
  border-radius: 5px;
`;
const Task: React.FC = () => {
  useEffect(() => {
    document.title = "Tasks | Mira";
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "75vw",
          margin: "0 20px",
          padding: "10px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "30%",
              bgcolor: "#ffff",
              padding: "20px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <StyledP style={{ fontSize: "18px" }}>Backlog</StyledP>
              <StyledP>Nam pretium turpis et arcu. Duis arcu.</StyledP>
            </div>
            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#41a045" }} />

                <Bar style={{ backgroundColor: "#fd8b00" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Redesign the whole homepage
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
                <Avatar
                  alt="Abdo Nawwar"
                  src={person2}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
                <Avatar alt="+2" src="" sx={{ width: 44, height: 44 }} />
              </Stack>
              <Stack
                direction="row"
                sx={{ position: "absolute", right: "10px" }}
              >
                <StyledP>2</StyledP>
                <ChatBubbleIcon />
              </Stack>
            </Card>
            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#41a045" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Upgrade dependencies to latest versions
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
              </Stack>
              <Stack
                direction="row"
                sx={{ position: "absolute", right: "10px" }}
              >
                <StyledP>1</StyledP>
                <ChatBubbleIcon />
              </Stack>
            </Card>
            <Card>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Google Adowrds best practices
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
                <Avatar
                  alt="Abdo Nawwar"
                  src={person2}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
              </Stack>
            </Card>
            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#41a045" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Improve site speed
              </StyledP>
              <Stack
                direction="row"
                sx={{ position: "absolute", right: "10px" }}
              >
                <StyledP>1</StyledP>
                <ChatBubbleIcon />
              </Stack>
            </Card>
            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#2088e1" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Stripe payment integration
              </StyledP>
            </Card>
            <Button variant="contained" sx={{ width: "100%" }}>
              <AddIcon />
              Add new task
            </Button>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "30%",
              bgcolor: "#ffff",
              padding: "20px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <StyledP style={{ fontSize: "18px" }}>In Progress</StyledP>
              <StyledP>Curabitur ligula sapien, tincidunt non.</StyledP>
            </div>
            <Card>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Google Adowrds best practices
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
                <Avatar
                  alt="Abdo Nawwar"
                  src={person2}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
              </Stack>
            </Card>
            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#2088e1" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Stripe payment integration
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
              </Stack>
            </Card>
            <Button variant="contained" sx={{ width: "100%" }}>
              <AddIcon />
              Add new task
            </Button>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "30%",
              bgcolor: "#ffff",
              padding: "20px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <StyledP style={{ fontSize: "18px" }}>Completed</StyledP>
              <StyledP>Aenean posuere, tortor sed cursus feugiat. </StyledP>
            </div>
            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#41a045" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Improve site speed
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
                <Avatar
                  alt="Abdo Nawwar"
                  src={person2}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
              </Stack>
              <Stack
                direction="row"
                sx={{ position: "absolute", right: "10px" }}
              >
                <StyledP>3</StyledP>
                <ChatBubbleIcon />
              </Stack>
            </Card>
            <Card>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Google Adowrds best practices
              </StyledP>
              <Stack direction="row" sx={{ marginTop: "10px" }}>
                <Avatar
                  alt="Abdo Nawwar"
                  src={person1}
                  sx={{ width: 44, height: 44, mr: "-10px" }}
                />
              </Stack>
            </Card>

            <Card>
              <Stack direction="row" spacing={1}>
                <Bar style={{ backgroundColor: "#41a045" }} />
                <Bar style={{ backgroundColor: "#fd8b00" }} />
              </Stack>
              <StyledP style={{ marginTop: "5px", fontSize: "16px" }}>
                Redesign the homepage
              </StyledP>
              <Stack
                direction="row"
                sx={{ position: "absolute", right: "10px" }}
              >
                <StyledP>2</StyledP>
                <ChatBubbleIcon />
              </Stack>
            </Card>
            <Button variant="contained" sx={{ width: "100%" }}>
              <AddIcon />
              Add new task
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
