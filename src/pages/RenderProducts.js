import React from "react";
import productList from '../services/productList';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';

const RenderProducts = (props) => {
  const { handleClick, handleChange, itemQuantity } = props;

  return (
    productList.map((product, index) => (
      <div className="Product" key={index}>
        <img src={product.sprite} alt={product.name}></img>
        <p className="Name">{product.name}</p>
        <p className="Price">$ {product.cost}</p>
        <div className="AmountToAdd">
          <GrFormSubtract data-operator="-" onClick={(e) => {
            handleClick(e.target.nextSibling, e.target.dataset.operator)
          }} />
          <input
            id={index}
            value={itemQuantity[index] || 1}
            onChange={(e) => {
              handleChange(e.target.id, Number(e.target.value))
            }}
          ></input>
          <GrFormAdd data-operator="+" onClick={(e) => {
            handleClick(e.target.previousSibling, e.target.dataset.operator)
          }} />
        </div>
        <button className="AddToCart">Add To Cart</button>
      </div>
    ))
  );
};

export default RenderProducts;
