import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs'
import '../styles/navbar.css';

const Navbar = ({ cart }) => {
  return (
    <nav>
      <Link to="/shopping-cart" id="StoreName">PokéMart</Link>
      <div id="NavItems">
        <Link to="/shopping-cart" className="NavItem">Home</Link>
        <Link to="/products" className="NavItem">Products</Link>
        <Link to="/checkout" id="CartItems" className="NavItem">
          <div id="ItemNumber">{cart.length}</div>
          <BsFillCartFill/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
