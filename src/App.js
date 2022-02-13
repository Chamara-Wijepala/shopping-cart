import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
};

export default App;
