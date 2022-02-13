import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="HomePage">
      <h1>Where Smiling Faces Gather</h1>
      <Link to="/products">
        <button>Products</button>
      </Link>
    </div>
  );
};

export default Home;
