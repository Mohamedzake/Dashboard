import styled from "styled-components";
import { Card, Typography, IconButton, Button } from "@mui/material";
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
function Projects() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Projects</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Projects
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProjectDashboard />
      </ThemeProvider>
    </DashboardContainer>
  );
}

export default Projects;
/////////////////////////////////

import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CardContent,
  Box,
  Avatar,
  AvatarGroup,
  Stack,
  Chip,
  CssBaseline,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ff9800",
    },
    // error: {
    //   light: "#ef5350",
    // },
  },
});

interface ProjectCard {
  title: string;
  status: "in progress" | "on hold" | "finished";
  description: string;
  teamMembers: Array<{
    name: string;
    avatar: string;
  }>;
  image: string;
}

const ProjectCardWrapper = styled(Card)({
  height: "95%",
  display: "flex",
  flexDirection: "column",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
});

const CardImageWrapper = styled("div")<{ image?: string }>((props) => ({
  position: "relative",
  paddingTop: props.image ? "76.25%" : "0",
  overflow: "hidden",
}));

const CardImage = styled("img")({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const StatusChip = styled(Chip)<{ status: string }>`
  color: #fff;
  border-radius: "16px";
  text-transform: capitalize;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  background-color: ${(props) => {
    switch (props.status) {
      case "finished":
        return "#48bb78";
      case "in progress":
        return "#f6ad55";
      case "on hold":
        return "#f56565";
      default:
        return "#a0aec0";
    }
  }}!important;

  color: white;
`;
const ProjectCard: React.FC<ProjectCard> = ({
  title,
  status,
  description,
  teamMembers,
  image,
}) => {
  return (
    <ProjectCardWrapper elevation={1}>
      <CardImageWrapper image={image ? image : ""}>
        <CardImage src={image} alt={title} />
      </CardImageWrapper>

      <CardContent>
        <Stack spacing={2}>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="flex-start"
            gap={"0.5rem"}
          >
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
            <StatusChip
              label={status.replace("_", " ")}
              status={status}
              size="small"
            />
          </Box>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="flex-start"
            gap={"0.8rem"}
          >
            <AvatarGroup
              max={3}
              sx={{
                borderBottom: "1px solid #555",
                paddingBottom: "10px",
              }}
            >
              {teamMembers.map((member, index) => (
                <Avatar
                  key={index}
                  alt={member.name}
                  src={member.avatar}
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                />
              ))}
            </AvatarGroup>

            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="flex-start"
              gap={"0.2rem"}
            >
              <Button color="primary" size="small">
                Share
              </Button>
              <Button color="primary" size="small">
                Learn More
              </Button>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </ProjectCardWrapper>
  );
};

const ProjectDashboard: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      title: "Fix validation ",
      status: "in progress",
      description:
        "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "",
    },
    {
      title: "New company",
      status: "on hold",
      description:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "",
    },
    {
      title: "Upgrade to latest",
      status: "finished",
      description:
        "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "",
    },
    {
      title: "Refactor backend ",
      status: "on hold",
      description:
        "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "",
    },
    {
      title: "Fix validation ",
      status: "in progress",
      description:
        "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "/avatar.jpg",
    },
    {
      title: "New company",
      status: "on hold",
      description:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "/avatar.jpg",
    },
    {
      title: "Upgrade to latest",
      status: "finished",
      description:
        "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "/avatar.jpg",
    },
    {
      title: "Refactor backend ",
      status: "on hold",
      description:
        "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.",
      teamMembers: [
        { name: "Team Member 1", avatar: "/avatar.jpg" },
        { name: "Team Member 2", avatar: "/avatar.jpg" },
        { name: "Team Member 3", avatar: "/avatar.jpg" },
      ],
      image: "/avatar.jpg",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        p: 3,
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};
