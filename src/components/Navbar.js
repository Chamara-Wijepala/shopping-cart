import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs'
import '../styles/navbar.css';

const number = 12;

const Navbar = () => {
  return (
    <nav>
      <h1>PokéMart</h1>
      <div id="NavItems">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <p>{number}<BsFillCartFill/></p>
      </div>
    </nav>
  );
}

export default Navbar;
