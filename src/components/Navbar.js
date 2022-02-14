import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs'
import '../styles/navbar.css';

const number = 12;

const Navbar = () => {
  return (
    <nav>
      <Link to="/" id="StoreName">PokéMart</Link>
      <div id="NavItems">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div id="CartItems">
          <div id="ItemNumber">{number}</div>
          <BsFillCartFill/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
