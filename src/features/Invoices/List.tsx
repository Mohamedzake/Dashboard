import styled from "styled-components";

import {
  Typography,
  IconButton,
  Button,
  tableCellClasses,
  Chip,
} from "@mui/material";
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
const products: Product[] = [
  {
    itemName: "Apple iPad Pro",
    itemColor: "Silver",
    price: 1399.0,
    date: "2023-01-02",
    id: 1,
    reviews: 55,
    status: "Sent",
  },
  {
    itemName: "Samsung Galaxy Tab S8",
    itemColor: "Black",
    price: 899.0,
    date: "2023-02-10",
    id: 2,
    reviews: 72,
    status: "Paid",
  },
  {
    itemName: "Sony WH-1000XM5",
    itemColor: "Silver",
    price: 399.0,
    date: "2023-03-05",
    id: 3,
    reviews: 103,
    status: "Void",
  },
  {
    itemName: "Dell XPS 13",
    itemColor: "Platinum",
    price: 1199.0,
    date: "2023-03-20",
    id: 4,
    reviews: 150,
    status: "Paid",
  },
  {
    itemName: "Apple Watch Series 8",
    itemColor: "Gold",
    price: 429.0,
    date: "2023-04-18",
    id: 5,
    reviews: 47,
    status: "Sent",
  },
  {
    itemName: "Google Pixel 7",
    itemColor: "Sorta Seafoam",
    price: 649.0,
    date: "2023-05-30",
    id: 6,
    reviews: 110,
    status: "Void",
  },
  {
    itemName: "Microsoft Surface Laptop 4",
    itemColor: "Ice Blue",
    price: 1299.0,
    date: "2023-06-15",
    id: 7,
    reviews: 80,
    status: "Sent",
  },
  {
    itemName: "Nintendo Switch OLED",
    itemColor: "White",
    price: 349.99,
    date: "2023-07-04",
    id: 8,
    reviews: 400,
    status: "Paid",
  },
  {
    itemName: "Bose QuietComfort Earbuds",
    itemColor: "Triple Black",
    price: 279.0,
    date: "2023-08-22",
    id: 9,
    reviews: 90,
    status: "Void",
  },
  {
    itemName: "Canon EOS R5",
    itemColor: "Black",
    price: 3899.0,
    date: "2023-09-01",
    id: 10,
    reviews: 220,
    status: "Sent",
  },
  {
    itemName: "HP Spectre x360",
    itemColor: "Nightfall Black",
    price: 1599.0,
    date: "2023-10-08",
    id: 11,
    reviews: 125,
    status: "Paid",
  },
  {
    itemName: "Apple iPhone 14 Pro",
    itemColor: "Deep Purple",
    price: 999.0,
    date: "2023-11-12",
    id: 12,
    reviews: 300,
    status: "Void",
  },
  {
    itemName: "Fitbit Versa 3",
    itemColor: "Midnight",
    price: 229.0,
    date: "2023-12-18",
    id: 13,
    reviews: 270,
    status: "Sent",
  },
  {
    itemName: "Lenovo ThinkPad X1 Carbon",
    itemColor: "Black",
    price: 1399.0,
    date: "2024-01-22",
    id: 14,
    reviews: 88,
    status: "Paid",
  },
  {
    itemName: "Samsung Galaxy S22 Ultra",
    itemColor: "Phantom Black",
    price: 1199.0,
    date: "2024-02-13",
    id: 15,
    reviews: 92,
    status: "Void",
  },
  {
    itemName: "Apple AirPods Pro",
    itemColor: "White",
    price: 249.0,
    date: "2024-03-01",
    id: 16,
    reviews: 210,
    status: "Sent",
  },
  {
    itemName: "Sony PlayStation 5",
    itemColor: "White",
    price: 499.0,
    date: "2024-03-27",
    id: 17,
    reviews: 355,
    status: "Paid",
  },
  {
    itemName: "GoPro HERO10",
    itemColor: "Black",
    price: 499.0,
    date: "2024-04-10",
    id: 18,
    reviews: 170,
    status: "Void",
  },
  {
    itemName: 'MacBook Pro 14" M1',
    itemColor: "Space Gray",
    price: 1999.0,
    date: "2024-05-08",
    id: 19,
    reviews: 300,
    status: "Sent",
  },
  {
    itemName: "Samsung Galaxy Watch4",
    itemColor: "Silver",
    price: 349.0,
    date: "2024-06-15",
    id: 20,
    reviews: 55,
    status: "Paid",
  },
];

function List() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">List</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / List
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
      <ProductTable products={products} />
    </DashboardContainer>
  );
}

export default List;
/////////////////////////////////

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
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Product {
  id: number;
  status: string;
  itemColor: string;

  itemName: string;
  price: number;

  date: string;

  reviews: number;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses?.head}`]: {
    backgroundColor: theme?.palette?.common?.black,
    color: theme?.palette?.common?.white,
  },
  [`&.${tableCellClasses?.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme?.palette?.action?.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-right: 0;
`;
const Div3 = styled.div`
  margin-left: 4rem;
`;

const StatusChip = styled(Chip)<{ status: string }>`
  color: #fff;
  border-radius: "16px";

  background-color: ${(props) => {
    switch (props.status) {
      case "Paid":
        return "#48bb78";
      case "Sent":
        return "#f6ad55";

      default:
        return "#a0aec0";
    }
  }}!important;
`;
const ProductTable: React.FC<{ products: Product[] }> = ({ products }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(products.map((product) => product.itemName));
      return;
    }
    setSelected([]);
  };

  const handleClick = (itemName: string) => {
    const selectedIndex = selected.indexOf(itemName);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, itemName);
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

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < products.length
                  }
                  checked={
                    products.length > 0 && selected.length === products.length
                  }
                  onChange={handleSelectAllClick}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Div2>Customer</Div2>
              </StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">ID</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Issue Date</StyledTableCell>

              <StyledTableCell align="right">
                <Div3>Actions</Div3>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => {
                const isItemSelected =
                  selected.indexOf(product.itemName) !== -1;

                return (
                  <StyledTableRow
                    key={product.itemName}
                    selected={isItemSelected}
                    onClick={() => handleClick(product.itemName)}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Div>
                        <Box display="flex" alignItems="center">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              backgroundColor: "blue",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "20px",
                              marginRight: "10px",
                            }}
                          >
                            {product.itemName.charAt(0)}
                          </div>
                        </Box>
                        <Div1>
                          {product.itemName}
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#6e6d6d",
                              marginTop: "0",
                            }}
                          >
                            {product.itemColor}
                          </p>
                        </Div1>
                      </Div>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <StatusChip
                        label={product.status}
                        status={product.status}
                        size="small"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ${product.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Div3> {product.date}</Div3>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "2rem",
                        }}
                      >
                        <DownloadIcon />
                        <VisibilityIcon />
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[6, 12, 18]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};
