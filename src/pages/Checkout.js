import React from "react";
import RenderCheckout from "./RenderCheckout";
import '../styles/checkout.css';

const Checkout = ({ cart, setCart }) => {
  let totalPrice = 0;

  cart.forEach(item => {
    totalPrice += item.cost * item.quantity;
  });

  function handleDelete(id) {
    const newCart = cart.filter(item => (
      item.id !== id
    ));

    setCart([ ...newCart ]);
  };

  return (
    <RenderCheckout {...{cart, totalPrice, handleDelete}} />
  );
};

export default Checkout;
