import React from "react";
import '../styles/products.css';

const Products = () => {
  return (
    <div id="ProductList">
      <div className="Product">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt=""></img>
        <p className="Name">Product</p>
        <p className="Price">$ 200</p>
        <div className="AmountToAdd">
          <button>-</button>
          <input defaultValue={1}></input>
          <button>+</button>
        </div>
        <button className="AddToCart">Add To Cart</button>
      </div>
    </div>
  );
};

export default Products;
