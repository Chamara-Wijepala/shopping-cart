import React, { useState } from "react";
import RenderProducts from "./RenderProducts";
import '../styles/products.css';

const Products = () => {
  const [ itemQuantity, setItemQuantity ] = useState({});

  function handleChange(id, value) {
    if ( !(value < 1) ) {
      setItemQuantity(prevItems => (
        { ...prevItems, [id]: value }
      ));
    };
  };

  function handleClick(input, operator) {
    const id = input.id;
    const value = Number(input.value);

    if ( !(value < 1) ) {
      operator === "+"
        ? setItemQuantity({ ...itemQuantity, [id]: value + 1 })
        : setItemQuantity({ ...itemQuantity, [id]: value - 1 });
    };
  };

  return (
    <div id="ProductList">
      <RenderProducts {...{handleClick, handleChange, itemQuantity}} />
    </div>
  );
};

export default Products;
