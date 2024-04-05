import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Products from "./pages/products";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
