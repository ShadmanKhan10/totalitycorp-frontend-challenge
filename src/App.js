import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList1 from "./components/ProductList1";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ProductList1 cart={cart} setCart={setCart} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
