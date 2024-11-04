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
const receiptData = {
  paymentNo: "741037024",
  paymentDate: "January 2, 2023 - 03:45 pm",
  client: {
    name: "Anna Walley",
    address: "4183 Forest Avenue",
    city: "New York City",
    zipCode: "10011",
    country: "USA",
    email: "anna@walley.com",
  },
  paymentTo: {
    name: "Mira LLC",
    address: "354 Roy Alley",
    city: "Denver",
    zipCode: "80202",
    country: "USA",
    email: "info@mira.com",
  },
  items: [
    { description: "Mira Theme Customization", quantity: 2, amount: 150.0 },
    { description: "Monthly Subscription", quantity: 3, amount: 25.0 },
    { description: "Additional Service", quantity: 2, amount: 100.0 },
  ],
  shipping: 8.0,
  discount: 5,
};

function Detail() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Detail</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Detail
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
      <Receipt {...receiptData} />
    </DashboardContainer>
  );
}

export default Detail;
/////////////////////////////////
import React from "react";
import { Box, Container, Paper } from "@mui/material";

interface Item {
  description: string;
  quantity: number;
  amount: number;
}

interface ReceiptProps {
  paymentNo: string;
  paymentDate: string;
  client: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    email: string;
  };
  paymentTo: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    email: string;
  };
  items: Item[];
  shipping: number;
  discount: number;
}

const StyledPaper = styled(Paper)({
  padding: "32px",
  borderRadius: "8px",
  margin: "32px auto",
  maxWidth: "800px",
  backgroundColor: "#fff",
});

const StyledHeader = styled(Box)({
  marginBottom: "32px",
});

const StyledAddressBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "32px",
}));

const StyledTable = styled(Box)(() => ({
  width: "100%",
  marginBottom: "32px",
}));

const StyledTableHeader = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 100px 150px",
  padding: "16px 0",
  borderBottom: "1px solid #e0e0e0",
  fontWeight: "bold",
}));

const StyledTableRow = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 100px 150px",
  padding: "16px 0",
  borderBottom: "1px solid #e0e0e0",
}));

const PrintButton = styled(Button)(() => ({
  display: "block",
  margin: "32px auto 0",
}));

const Receipt: React.FC<ReceiptProps> = ({
  paymentNo,
  paymentDate,
  client,
  paymentTo,
  items,
  shipping,
  discount,
}) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.amount * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + shipping - discountAmount;

  return (
    <Container>
      <StyledPaper elevation={2}>
        <StyledHeader>
          <Typography variant="h5" gutterBottom>
            Hello {client.name},
          </Typography>
          <Typography color="text.secondary">
            This is the receipt for a payment of ${total.toFixed(2)} (USD) you
            made to {paymentTo.name}.
          </Typography>
        </StyledHeader>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={4}
          sx={{ borderBottom: "1px solid #e0e0e0" }}
        >
          <Typography>Payment No: {paymentNo}</Typography>
          <Typography>Payment Date: {paymentDate}</Typography>
        </Box>

        <StyledAddressBox>
          <Box>
            <Typography variant="h6" gutterBottom>
              Client
            </Typography>
            <Typography>{client.name}</Typography>
            <Typography>{client.address}</Typography>
            <Typography>{client.city}</Typography>
            <Typography>{client.zipCode}</Typography>
            <Typography>{client.country}</Typography>
            <Typography color="primary">{client.email}</Typography>
          </Box>
          <Box textAlign="right">
            <Typography variant="h6" gutterBottom>
              Payment To
            </Typography>
            <Typography>{paymentTo.name}</Typography>
            <Typography>{paymentTo.address}</Typography>
            <Typography>{paymentTo.city}</Typography>
            <Typography>{paymentTo.zipCode}</Typography>
            <Typography>{paymentTo.country}</Typography>
            <Typography color="primary">{paymentTo.email}</Typography>
          </Box>
        </StyledAddressBox>

        <StyledTable>
          <StyledTableHeader>
            <Typography>Description</Typography>
            <Typography>Quantity</Typography>
            <Typography align="right">Amount</Typography>
          </StyledTableHeader>

          {items.map((item, index) => (
            <StyledTableRow key={index}>
              <Typography>{item.description}</Typography>
              <Typography>{item.quantity}</Typography>
              <Typography align="right">${item.amount.toFixed(2)}</Typography>
            </StyledTableRow>
          ))}

          <Box mt={4}>
            <StyledTableRow>
              <Typography>Subtotal</Typography>
              <Typography></Typography>
              <Typography align="right">${subtotal.toFixed(2)}</Typography>
            </StyledTableRow>
            <StyledTableRow>
              <Typography>Shipping</Typography>
              <Typography></Typography>
              <Typography align="right">${shipping.toFixed(2)}</Typography>
            </StyledTableRow>
            <StyledTableRow>
              <Typography>Discount</Typography>
              <Typography></Typography>
              <Typography align="right">{discount}%</Typography>
            </StyledTableRow>
            <StyledTableRow>
              <Typography fontWeight="bold">Total</Typography>
              <Typography></Typography>
              <Typography align="right" fontWeight="bold">
                ${total.toFixed(2)}
              </Typography>
            </StyledTableRow>
          </Box>
        </StyledTable>

        <Typography textAlign="center" color="text.secondary" sx={{ mt: 2 }}>
          Extra note: Please send all items at the same time to the shipping
          address. Thanks in advance.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <PrintButton
            variant="contained"
            color="primary"
            onClick={() => window.print()}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Print this receipt
          </PrintButton>
        </Box>
      </StyledPaper>
    </Container>
  );
};
