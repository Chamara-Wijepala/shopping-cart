import React from "react";
import productList from '../services/productList';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import '../styles/products.css';

const Products = () => {
  const products = productList.map((product, index) => (
    <div className="Product" key={index}>
      <img src={product.sprite} alt={product.name}></img>
      <p className="Name">{product.name}</p>
      <p className="Price">$ {product.cost}</p>
      <div className="AmountToAdd">
        <button><GrFormSubtract/></button>
        <input min="1" max="100" defaultValue={1}></input>
        <button><GrFormAdd/></button>
      </div>
      <button className="AddToCart">Add To Cart</button>
    </div>
  ))

  return (
    <div id="ProductList">
      { products }
    </div>
  );
};

export default Products;
