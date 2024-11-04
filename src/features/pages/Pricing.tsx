import styled from "styled-components";
import { Typography, IconButton, Button, Stack } from "@mui/material";
import {
  Refresh as RefreshIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";

const DashboardContainer = styled.div`
  height: 70vh;
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

function Pricing() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Pricing</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Pricing
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
      <Div>
        <h1>We have a plan for everyone</h1>
        <p>
          Whether you're a business or an individual, 14-day trial no credit
          card required.
        </p>
      </Div>
      <PricingPlans />
    </DashboardContainer>
  );
}

export default Pricing;

import React from "react";

import { Paper, Grid } from "@mui/material";

const PricingPlanCard = styled(Paper)`
  margin-bottom: 2rem;
  padding: 1rem 0;
  text-align: center;
  border-radius: 12px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const PricingPlanTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const PricingPlanPrice = styled(Typography)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const PricingPlanFeature = styled(Typography)`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PricingPlans: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <PricingPlanCard>
          <PricingPlanTitle>Free</PricingPlanTitle>
          <PricingPlanPrice>$0/mo</PricingPlanPrice>
          <PricingPlanFeature>10 users included</PricingPlanFeature>
          <PricingPlanFeature>2 GB of storage</PricingPlanFeature>
          <PricingPlanFeature>Help center access</PricingPlanFeature>
          <PricingPlanFeature>Email support</PricingPlanFeature>
          <Buttons>
            <Stack spacing={2} direction="row">
              <Button variant="outlined"> Sign up for free</Button>
            </Stack>
          </Buttons>
        </PricingPlanCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PricingPlanCard>
          <PricingPlanTitle>Most popular</PricingPlanTitle>
          <PricingPlanPrice>$15/mo</PricingPlanPrice>
          <PricingPlanFeature>20 users included</PricingPlanFeature>
          <PricingPlanFeature>10 GB of storage</PricingPlanFeature>
          <PricingPlanFeature>Help center access</PricingPlanFeature>
          <PricingPlanFeature>Priority email support</PricingPlanFeature>
          <Buttons>
            <Stack spacing={2} direction="row">
              <Button variant="contained"> Get started</Button>
            </Stack>
          </Buttons>
        </PricingPlanCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PricingPlanCard>
          <PricingPlanTitle>Enterprise</PricingPlanTitle>
          <PricingPlanPrice>$30/mo</PricingPlanPrice>
          <PricingPlanFeature>50 users included</PricingPlanFeature>
          <PricingPlanFeature>30 GB of storage</PricingPlanFeature>
          <PricingPlanFeature>Help center access</PricingPlanFeature>
          <PricingPlanFeature>Phone & email support</PricingPlanFeature>{" "}
          <Buttons>
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Contact us</Button>
            </Stack>
          </Buttons>
        </PricingPlanCard>
      </Grid>
    </Grid>
  );
};
