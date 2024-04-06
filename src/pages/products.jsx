import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Product from "./product";

export default function Products({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
        setFilteredProducts(data.products)
    })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
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
      {filteredProducts.map((product) => (
        <Product data={product} />
      ))}
    </Box>
  );
}
