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
function Orders() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Orders</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Orders
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
      <OrdersTable />
    </DashboardContainer>
  );
}

export default Orders;
///////////////////////////////
import React, { useState } from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
  Chip,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
interface Order {
  id: string;
  product: string;
  date: string;
  total: number;
  status: "Shipped" | "Cancelled" | "Processing";
  paymentMethod: "Visa" | "PayPal" | "Mastercard";
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme?.shape?.borderRadius,
}));

const StyledTableCell = styled(TableCell)`
  text-decoration: none;
`;

const StatusChip = styled(Chip)<{ status: string }>`
  color: #fff;
  border-radius: "16px";

  background-color: ${(props) => {
    switch (props.status) {
      case "Shipped":
        return "#48bb78";
      case "Processing":
        return "#f6ad55";
      case "Cancelled":
        return "#f56565";
      default:
        return "#a0aec0";
    }
  }}!important;
`;

const PaymentMethodCell = styled(TableCell)(({ theme }) => ({
  color: theme?.palette?.primary?.main,
  fontWeight: 500,
}));

const OrdersTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);

  const orders: Order[] = [
    {
      id: "#000253",
      product: "Salt & Pepper Grinder",
      date: "2023-01-02",
      total: 32.0,
      status: "Shipped",
      paymentMethod: "Visa",
    },
    {
      id: "#000254",
      product: "Backpack",
      date: "2023-01-04",
      total: 130.0,
      status: "Shipped",
      paymentMethod: "PayPal",
    },
    {
      id: "#000255",
      product: "Pocket Speaker",
      date: "2023-01-04",
      total: 80.0,
      status: "Cancelled",
      paymentMethod: "Mastercard",
    },
    {
      id: "#000256",
      product: "Glass Teapot",
      date: "2023-01-08",
      total: 45.0,
      status: "Shipped",
      paymentMethod: "Visa",
    },
    {
      id: "#000257",
      product: "Unbreakable Water Bottle",
      date: "2023-01-09",
      total: 40.0,
      status: "Shipped",
      paymentMethod: "PayPal",
    },
    {
      id: "#000258",
      product: "Spoon Saver",
      date: "2023-01-14",
      total: 15.0,
      status: "Shipped",
      paymentMethod: "Mastercard",
    },
    {
      id: "#000259",
      product: "Hip Flash",
      date: "2023-01-16",
      total: 25.0,
      status: "Processing",
      paymentMethod: "Visa",
    },
    {
      id: "#000260",
      product: "Woven Slippers",
      date: "2023-01-22",
      total: 20.0,
      status: "Shipped",
      paymentMethod: "PayPal",
    },
    {
      id: "#000261",
      product: "Womens Watch",
      date: "2023-01-22",
      total: 65.0,
      status: "Cancelled",
      paymentMethod: "Visa",
    },
    {
      id: "#000262",
      product: "Over-Ear Headphones",
      date: "2023-01-23",
      total: 210.0,
      status: "Shipped",
      paymentMethod: "Mastercard",
    },
    {
      id: "#000253",
      product: "Salt & Pepper Grinder",
      date: "2023-01-02",
      total: 32.0,
      status: "Shipped",
      paymentMethod: "Visa",
    },
    {
      id: "#000254",
      product: "Backpack",
      date: "2023-01-04",
      total: 130.0,
      status: "Shipped",
      paymentMethod: "PayPal",
    },
    {
      id: "#000255",
      product: "Pocket Speaker",
      date: "2023-01-04",
      total: 80.0,
      status: "Cancelled",
      paymentMethod: "Mastercard",
    },
    {
      id: "#000256",
      product: "Glass Teapot",
      date: "2023-01-08",
      total: 45.0,
      status: "Shipped",
      paymentMethod: "Visa",
    },
    {
      id: "#000257",
      product: "Unbreakable Water Bottle",
      date: "2023-01-09",
      total: 40.0,
      status: "Shipped",
      paymentMethod: "PayPal",
    },
    {
      id: "#000258",
      product: "Spoon Saver",
      date: "2023-01-14",
      total: 15.0,
      status: "Shipped",
      paymentMethod: "Mastercard",
    },
    {
      id: "#000259",
      product: "Hip Flash",
      date: "2023-01-16",
      total: 25.0,
      status: "Processing",
      paymentMethod: "Visa",
    },
    {
      id: "#000260",
      product: "Woven Slippers",
      date: "2023-01-22",
      total: 20.0,
      status: "Shipped",
      paymentMethod: "PayPal",
    },
    {
      id: "#000261",
      product: "Womens Watch",
      date: "2023-01-22",
      total: 65.0,
      status: "Cancelled",
      paymentMethod: "Visa",
    },
    {
      id: "#000262",
      product: "Over-Ear Headphones",
      date: "2023-01-23",
      total: 210.0,
      status: "Shipped",
      paymentMethod: "Mastercard",
    },
  ];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(orders.map((order) => order.id));
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  return (
    <Box>
      <Typography variant="h6" sx={{ m: 2 }}>
        Orders
      </Typography>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < orders.length
                  }
                  checked={
                    orders.length > 0 && selected.length === orders.length
                  }
                  onChange={handleSelectAllClick}
                />
              </StyledTableCell>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Payment Method</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => {
                const isItemSelected = isSelected(order.id);

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={order.id}
                    selected={isItemSelected}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleClick(order.id)}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{order.id}</StyledTableCell>
                    <StyledTableCell>{order.product}</StyledTableCell>
                    <StyledTableCell>{order.date}</StyledTableCell>
                    <StyledTableCell>${order.total.toFixed(2)}</StyledTableCell>
                    <StyledTableCell>
                      <StatusChip
                        label={order.status}
                        status={order.status}
                        size="small"
                      />
                    </StyledTableCell>
                    <PaymentMethodCell>{order.paymentMethod}</PaymentMethodCell>
                    <StyledTableCell>
                      <IconButton size="small">
                        <DownloadIcon />
                      </IconButton>
                      <IconButton size="small">
                        <VisibilityIcon />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledTableContainer>
    </Box>
  );
};
