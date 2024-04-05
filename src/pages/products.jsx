import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Product from "./product";

export default function Products() {
  
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box
      sx={{
        marginLeft: "75px",
        marginRight: "75px",
        display: "flex",
        gap: "15px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gridTemplateRows: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
       {products.map(product => (
        <Product data={product} />
      ))}
    </Box>
  );
}
