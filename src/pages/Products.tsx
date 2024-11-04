import styled from "styled-components";

import {
  Typography,
  IconButton,
  Button,
  tableCellClasses,
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
    src: "/public/avatar.jpg",
    itemName: "Apple iPad Pro",
    itemColor: "Silver",
    price: 1399.0,
    stock: 48,
    category: "Tablets",
    rating: 3,
    reviews: 55,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Samsung Galaxy",
    itemColor: "Mystic Black",
    price: 849.99,
    stock: 32,
    category: "Tablets",
    rating: 4,
    reviews: 87,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Microsoft Pro 8",
    itemColor: "Platinum",
    price: 1099.99,
    stock: 25,
    category: "Tablets",
    rating: 4.5,
    reviews: 72,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Amazon Tablet",
    itemColor: "Black",
    price: 149.99,
    stock: 65,
    category: "Tablets",
    rating: 4,
    reviews: 120,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Lenovo Yoga",
    itemColor: "Iron Grey",
    price: 799.99,
    stock: 18,
    category: "Tablets",
    rating: 4.2,
    reviews: 42,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "ASUS Flip",
    itemColor: "Midnight Blue",
    price: 569.99,
    stock: 22,
    category: "Laptops",
    rating: 4.3,
    reviews: 93,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "HP Spectre",
    itemColor: "Nightfall Black",
    price: 1499.99,
    stock: 15,
    category: "Laptops",
    rating: 4.7,
    reviews: 68,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Dell Ultrabook",
    itemColor: "Platinum Silver",
    price: 1249.99,
    stock: 28,
    category: "Laptops",
    rating: 4.6,
    reviews: 102,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Acer Aspire",
    itemColor: "Charcoal Black",
    price: 499.99,
    stock: 41,
    category: "Laptops",
    rating: 4.1,
    reviews: 135,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Bose Noise",
    itemColor: "Triple Black",
    price: 379.99,
    stock: 36,
    category: "Audio",
    rating: 4.6,
    reviews: 91,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Sony Wireless ",
    itemColor: "Black",
    price: 279.99,
    stock: 52,
    category: "Audio",
    rating: 4.8,
    reviews: 123,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Bluetooth Speaker",
    itemColor: "Teal",
    price: 179.95,
    stock: 29,
    category: "Audio",
    rating: 4.4,
    reviews: 67,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Beats Wireless ",
    itemColor: "Shadow Gray",
    price: 349.99,
    stock: 19,
    category: "Audio",
    rating: 4.3,
    reviews: 78,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Sennheiser HD",
    itemColor: "Matte Black",
    price: 199.99,
    stock: 23,
    category: "Audio",
    rating: 4.7,
    reviews: 112,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Razer Blade",
    itemColor: "Mercury White",
    price: 2599.99,
    stock: 9,
    category: "Laptops",
    rating: 4.8,
    reviews: 54,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Bose Noise",
    itemColor: "Triple Black",
    price: 379.99,
    stock: 36,
    category: "Audio",
    rating: 4.6,
    reviews: 91,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Sony Wireless ",
    itemColor: "Black",
    price: 279.99,
    stock: 52,
    category: "Audio",
    rating: 4.8,
    reviews: 123,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Bluetooth Speaker",
    itemColor: "Teal",
    price: 179.95,
    stock: 29,
    category: "Audio",
    rating: 4.4,
    reviews: 67,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Beats Wireless ",
    itemColor: "Shadow Gray",
    price: 349.99,
    stock: 19,
    category: "Audio",
    rating: 4.3,
    reviews: 78,
  },
  {
    src: "/public/avatar.jpg",
    itemName: "Sennheiser HD",
    itemColor: "Matte Black",
    price: 199.99,
    stock: 23,
    category: "Audio",
    rating: 4.7,
    reviews: 112,
  },
];
function Products() {
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Typography variant="h4">Products</Typography>
          <WelcomeText>
            <Span> Dashboard </Span> / <Span> Pages </Span> / Products
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

export default Products;
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
  Rating,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Product {
  itemColor: string;
  src: string;
  itemName: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
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
  margin-right: 4rem;
`;
const Div4 = styled.div`
  margin-right: 2rem;
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
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Stock</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">
                <Div3>Rating</Div3>
              </StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
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
                          <img
                            src={product.src}
                            alt={product.itemName}
                            style={{ maxWidth: "50px", marginRight: "10px" }}
                          />
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
                      ${product.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.stock}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.category}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Div4>
                        <Rating value={product.rating} readOnly />
                      </Div4>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Div2>
                        <Box display="flex" gap="10px">
                          <DownloadIcon />
                          <VisibilityIcon />
                        </Box>
                      </Div2>
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
