import styled from "styled-components";
import { Card, Typography, IconButton, Button } from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";

import PieAnimation from "../features/dashboard/PieAnimation";

import Chart from "../features/dashboard/Chart";
import Tables from "../features/dashboard/Tables";
import Linechart from "../features/dashboard/Linechart";

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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

const StyledCard = styled(Card)`
  padding: 0.7rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const StatChange = styled.span<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? "#48bb78" : "#f56565")};
  font-size: 0.875rem;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Default Dashboard</Typography>
          <WelcomeText>Welcome back, Lucy! We've missed you. 👋</WelcomeText>
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

      <StatsGrid>
        <StyledCard>
          <Typography variant="subtitle1">Sales Today</Typography>
          <StatValue>2.532</StatValue>
          <StatChange isPositive={true}>+26% Since last month</StatChange>
        </StyledCard>
        <StyledCard>
          <Typography variant="subtitle1">Sales Today</Typography>
          <StatValue>2.532</StatValue>
          <StatChange isPositive={true}>+26% Since last month</StatChange>
        </StyledCard>
        <StyledCard>
          <Typography variant="subtitle1">Sales Today</Typography>
          <StatValue>2.532</StatValue>
          <StatChange isPositive={true}>+26% Since last month</StatChange>
        </StyledCard>
        <StyledCard>
          <Typography variant="subtitle1">Sales Today</Typography>
          <StatValue>2.532</StatValue>
          <StatChange isPositive={true}>+26% Since last month</StatChange>
        </StyledCard>
      </StatsGrid>

      <ChartsGrid>
        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h6">Total revenue</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <Linechart />
        </StyledCard>

        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h6">Weekly sales</Typography>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <PieAnimation />
        </StyledCard>
      </ChartsGrid>

      <BottomGrid>
        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h6">Mobile / Desktop</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <Chart />
        </StyledCard>

        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h6">Latest projects</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <Tables />
        </StyledCard>
      </BottomGrid>
    </DashboardContainer>
  );
}

export default Dashboard;
