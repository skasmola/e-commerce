import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Products from "./pages/products";
import Cart from "./pages/cart";
import ProductContextProvider from "./context/product-context";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Navbar handleSearch={setSearchQuery} />
          <Routes>
            <Route path="/" element={<Products searchQuery={searchQuery} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
