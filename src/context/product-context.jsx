import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

export default function ProductContextProvider(props) {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const productsLength = data.products.length;
        const cart = {};
        for (let i = 1; i <= productsLength; i++) {
          cart[i] = 0;
        }
        setCartItems(cart);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
}
