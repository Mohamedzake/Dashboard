import styled from "styled-components";
import { Card, Typography, IconButton, Button } from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";

import Box from "@mui/material/Box";

import { BarChart } from "@mui/x-charts/BarChart";
import PieAnimation from "./PieAnimation";
import Tables from "./Tables";
import LanguageTable from "./LanguageTable";

function Chart() {
  const seriesNb = 1;
  const itemNb = 13;

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart
        height={300}
        width={690}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
      />
    </Box>
  );
}

const highlightScope = {
  highlight: "series",
  fade: "global",
} as const;

const series = [
  {
    label: "series 2",
    data: [
      2362, 2254, 1962, 1336, 886, 1069, 2194, 1629, 2173, 2031, 1757, 862,
      2446, 910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
].map((s) => ({ ...s, highlightScope }));

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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
`;
const BottomGrid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;
const StyledCard = styled(Card)`
  padding: 0.7rem;
  /* width: 100%; */
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const StatChange = styled.span<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? "#48bb78" : "#f56565")};
  background-color: ${(props) => (props.isPositive ? "#e6f7ed" : "#ffd5d5")};
  font-size: 0.875rem;
  margin-right: 0.5rem;
  padding: 0.125rem 0.125rem;
`;

function Analytics() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Analytics Dashboard</Typography>
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
      <ChartsGrid>
        <StatsGrid>
          <StyledCard
            sx={{
              background: "#dfebff",
              color: "#6668b5",
            }}
          >
            <Typography variant="subtitle1">Visitors</Typography>
            <StatValue>2.532</StatValue>
            <StatChange isPositive={true}>+26%</StatChange>Since last month
          </StyledCard>
          <StyledCard>
            <Typography variant="subtitle1">Activity</Typography>
            <StatValue>2.532</StatValue>
            <StatChange isPositive={false}>-26% </StatChange>Since last month
          </StyledCard>
          <StyledCard>
            <Typography variant="subtitle1">Real-Time</Typography>
            <StatValue>2.532</StatValue>
            <StatChange isPositive={false}>-26% </StatChange>Since last month
          </StyledCard>
          <StyledCard>
            <Typography variant="subtitle1">Bounce</Typography>
            <StatValue>2.532</StatValue>
            <StatChange isPositive={true}>+26% </StatChange>Since last month
          </StyledCard>
        </StatsGrid>

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
          <Chart />
          {/* <PieAnimation /> */}
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
          <Map />
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
          <PieAnimation />
        </StyledCard>
      </BottomGrid>
      <BottomGrid2>
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
          <LanguageTable />
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
      </BottomGrid2>
    </DashboardContainer>
  );
}

export default Analytics;
///////////////////////////////////////////
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

function Map() {
  return <VectorMap map={worldMill} style={{ width: "100%", height: "88%" }} />;
}
