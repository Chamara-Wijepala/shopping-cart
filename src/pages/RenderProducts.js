import React from "react";
import productList from '../services/productList';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';

const RenderProducts = ({ handleChange, itemQuantity }) => {
  return (
    productList.map((product, index) => (
      <div className="Product" key={index}>
        <img src={product.sprite} alt={product.name}></img>
        <p className="Name">{product.name}</p>
        <p className="Price">$ {product.cost}</p>
        <div className="AmountToAdd">
          <GrFormSubtract />
          <input
            id={index}
            value={itemQuantity.index}
            defaultValue="1"
            onChange={handleChange}
          ></input>
          <GrFormAdd />
        </div>
        <button className="AddToCart">Add To Cart</button>
      </div>
    ))
  );
};

export default RenderProducts;
