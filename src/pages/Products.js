import React, { useState } from "react";
import RenderProducts from "./RenderProducts";
import productList from "../services/productList";
import '../styles/products.css';

const Products = ({ cart, setCart }) => {
  const [ products, setProducts ] = useState(productList);

  function handleChange(id, value, delta) {
    if ( value < 1 ) {
      value = 1;
    }
    else if ( value <= 1 && delta < 1 ) {
      delta = 0;
    };

    setProducts(products.map(product => (
      product.id === id
        ? { ...product, quantity: value + delta }
        : product
    )));
  };

  function addToCart(id) {
    const itemToAdd = products.find(product => (
      product.id === id
    ));
      
    setCart([ ...cart, itemToAdd ]);
  };

  return (
    <div id="ProductList">
      <RenderProducts {...{handleChange, products, addToCart}} />
    </div>
  );
};

export default Products;
