import React from "react";
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';

const RenderProducts = ({ handleChange, products }) => {

  return (
    products.map((product, index) => (
      <div className="Product" key={index}>
        <img src={product.sprite} alt={product.name}></img>
        <p className="Name">{product.name}</p>
        <p className="Price">$ {product.cost}</p>
        <div className="AmountToAdd">
          <GrFormSubtract onClick={(e) => {handleChange(
              product.id, Number(e.target.nextSibling.value), -1
            )
          }} />
          <input
            value={product.quantity}
            onChange={(e) => {
              handleChange(product.id, Number(e.target.value), 0)
            }}
          ></input>
          <GrFormAdd onClick={(e) => {handleChange(
              product.id, Number(e.target.previousSibling.value), +1
            )
          }} />
        </div>
        <button className="AddToCart">Add To Cart</button>
      </div>
    ))
  );
};

export default RenderProducts;
