import React, { useState } from "react";
import RenderProducts from "./RenderProducts";
import '../styles/products.css';

const Products = () => {
  const [ itemQuantity, setItemQuantity ] = useState({});

  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    if ( !(value < 1) ) {
      setItemQuantity(prevItems => (
        { ...prevItems, [id]: value }
      ));
    };
  };

  return (
    <div id="ProductList">
      <RenderProducts {...{handleChange, itemQuantity}} />
    </div>
  );
};

export default Products;
