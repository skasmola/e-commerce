import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/product-context";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(ProductContext);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Box>
        <Typography textAlign="center" variant="h6" fontWeight="bold">
          Your Cart Items
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "75px",
          marginRight: "75px",
          gap: "15px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridTemplateRows: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </Box>
      <Box display="grid" justifyContent="center" alignItems="center">
        <Button size="small" variant="contained" onClick={() => navigate("/")}>Continue Shopping</Button>
      </Box>
    </>
  );
}
