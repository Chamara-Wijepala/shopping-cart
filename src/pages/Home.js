import React from "react";
import { Link } from "react-router-dom";
import '../styles/home.css';

const Home = () => {
  return (
    <div id="HomePage">
      <h1 id="Slogan">Where Smiling Faces Gather</h1>
      <Link to="/products">
        <button>Products</button>
      </Link>
    </div>
  );
};

export default Home;
