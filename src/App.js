import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
  const [ cart, setCart ] = useState([]);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar {...{cart}} />
        <main>
          <Routes>
            <Route path="/shopping-cart" element={<Home/>} />
            <Route
              path="/products"
              element={<Products {...{cart, setCart}}/>}
            />
            <Route
              path="/checkout"
              element={<Checkout {...{cart, setCart}}/>}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
