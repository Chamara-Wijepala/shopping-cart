import React from "react";
import RenderCheckout from "./RenderCheckout";
import '../styles/checkout.css';

const Checkout = ({ cart }) => {
  let totalPrice = 0;

  cart.forEach(item => {
    totalPrice += item.cost * item.quantity;
  });

  return (
    <RenderCheckout {...{cart, totalPrice}} />
  );
};

export default Checkout;
