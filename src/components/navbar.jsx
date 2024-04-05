import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        E-commerce
      </Link>
      <TextField size="small" placeholder="Search Products" />
      <nav>
        <Link to={"/cart"}>Cart</Link>
        <ShoppingCartIcon />
      </nav>
    </header>
  );
};
